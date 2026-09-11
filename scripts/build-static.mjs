import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {PurgeCSS} from 'purgecss';
import {transform} from 'esbuild';

// These are public, build-time marketing templates. Do not silently flatten a
// future client component: adding one requires an explicit delivery decision.
async function sourceFiles(dir) {
  const entries = await fs.readdir(dir, {withFileTypes:true});
  return (await Promise.all(entries.map(item => item.isDirectory() ? sourceFiles(path.join(dir,item.name)) : path.join(dir,item.name)))).flat();
}
for (const filename of await sourceFiles('app')) {
  if (!filename.endsWith('.tsx')) continue;
  const code = await fs.readFile(filename,'utf8');
  if (/^['"]use client['"]/m.test(code) && !/[/\\](CtaTracking|ScrollReveal)\.tsx$/.test(filename)) throw new Error(`Static delivery requires a review of client component ${filename}`);
}

const {default:worker} = await import('../dist/server/index.js');
const origin = 'https://sudarshan-ai.com';
const client = path.resolve('dist/client');
const env = {ASSETS:{fetch:async () => new Response('Not found',{status:404})}};
const ctx = {waitUntil(){},passThroughOnException(){}};
const render = pathname => worker.fetch(new Request(origin + pathname, {headers:{accept:'text/html'}}),env,ctx);
const sitemapResponse = await render('/sitemap.xml');
if(sitemapResponse.status !== 200) throw new Error('Sitemap failed to render');
const sitemap = await sitemapResponse.text();
await fs.writeFile(path.join(client, 'sitemap.xml'), sitemap);
await fs.writeFile('sitemap.xml', sitemap);
await fs.writeFile('public/sitemap.xml', sitemap);
const queue = [...new Set(['/', ...[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname)])];
const seen = new Set(), pages = new Map(), redirects = new Map();
const script = (await transform(await fs.readFile('public/site.js','utf8'), {minify:true,target:'es2022'})).code;
const scriptName = `site-${createHash('sha256').update(script).digest('hex').slice(0,12)}.js`;
await fs.writeFile(path.join(client,'assets',scriptName),script);
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ga = gaId && /^G-[A-Z0-9]+$/.test(gaId) ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');</script>` : '';
const report = {generatedAt:new Date().toISOString(),pages:[],redirects:[],scriptGzipBytes:gzipSync(script).length};
while(queue.length) {
  const pathname = queue.shift();
  if(seen.has(pathname)) continue;
  if(seen.size > 2500) throw new Error('Unexpected route explosion');
  seen.add(pathname);
  const response = await render(pathname);
  if(response.status >= 300 && response.status < 400) {
    const target = new URL(response.headers.get('location'),origin);
    if(target.origin !== origin) throw new Error(`Unexpected external redirect: ${pathname}`);
    redirects.set(pathname,target.pathname);queue.push(target.pathname);continue;
  }
  if(response.status !== 200) throw new Error(`Broken internal page ${pathname}: ${response.status}`);
  let html = await response.text();
  // Preserve structured data. Native enhancements own browser interactions;
  // React's transport and hydration scripts are not part of this delivery mode.
  html = html.replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, (all,attrs)=>/type="application\/ld\+json"/.test(attrs)?all:'');
  html = html.replace(/<link\b[^>]*>/gi, all => /rel="modulepreload"/.test(all) || (/rel="preload"/.test(all)&&/as="script"/.test(all)) ? '' : all);
  const cssLinks = [...html.matchAll(/<link\b(?=[^>]*rel="stylesheet")(?=[^>]*href="([^"]+)")[^>]*>/g)];
  const css = (await Promise.all(cssLinks.map(match => fs.readFile(path.join(client,new URL(match[1],origin).pathname),'utf8')))).join('\n');
  const result = await new PurgeCSS().purge({content:[{raw:html,extension:'html'}],css:[{raw:css}],safelist:['open','active','is-current','is-revealed','sg-js'],keyframes:true});
  for (const link of cssLinks) html = html.replace(link[0],'');
  const pageCss = result.map(item=>item.css).join('');
  html = html.replace('</head>',`<style>${pageCss}</style></head>`).replace('</body>',`<script src="/assets/${scriptName}" defer></script>${ga}</body>`);
  html = html.replace(/href="(\/[^"?#]+)\/"/g,'href="$1"');
  pages.set(pathname,html);
  for(const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;','&'),origin+pathname);
    if(url.origin === origin && !path.extname(url.pathname) && !seen.has(url.pathname)) queue.push(url.pathname);
  }
  const target = path.join(client,'__static',pathname === '/'?'index.html':`${pathname.slice(1)}.html`);
  await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,html);
  report.pages.push({path:pathname,htmlBytes:Buffer.byteLength(html),htmlGzipBytes:gzipSync(html).length,cssGzipBytes:gzipSync(pageCss).length});
  if(pages.size % 50 === 0) console.log(`Pre-rendered ${pages.size} pages...`);
}
// Validate fragments, images and scripts against the actual output, not just HTTP 200.
for (const [pathname,html] of pages) {
  for(const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;','&'),origin+pathname);
    if(url.origin !== origin) continue;
    const dest = redirects.get(url.pathname) ?? url.pathname;
    if(url.hash && pages.has(dest)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if(!pages.get(dest).includes(`id="${id}"`)) throw new Error(`Broken fragment ${pathname} -> ${url.pathname}${url.hash}`);
    }
  }
  for(const match of html.matchAll(/<(?:img|script)\b[^>]*src="(\/[^"?]+)"/g)) await fs.access(path.join(client,match[1]));
  if((html.match(/<h1\b/g)??[]).length !== 1) throw new Error(`Expected one h1: ${pathname}`);
}
report.redirects = [...redirects].map(([from,to])=>({from,to}));
await fs.mkdir('outputs',{recursive:true});
await fs.writeFile('outputs/static-audit.json',JSON.stringify(report,null,2));
console.log(`Validated ${pages.size} complete pages, internal destinations, fragments and assets. Browser script: ${report.scriptGzipBytes} bytes gzip.`);
