import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("production HTML ships native interactions and no React hydration", async () => {
  const html = await readFile(new URL("../dist/client/__static/index.html", import.meta.url), "utf8");
  assert.doesNotMatch(html, /framework-.*\.js|__vite_rsc|rel="stylesheet"|\/_vinext\/image/);
  assert.match(html, /<style>/);
  assert.match(html, /<script src="\/assets\/site-[a-f0-9]+\.js" defer/);
  assert.match(html, /role="tabpanel"/);
  assert.match(html, /loading="eager"[^>]*fetchPriority="high"/i);
  const llms = await readFile(new URL("../public/llms.txt", import.meta.url), "utf8");
  assert.match(llms, /^# Sudarshan AI Labs/m);
  assert.ok([...llms.matchAll(/\[[^\]]+\]\(https:\/\/sudarshan-ai\.com[^)]*\)/g)].length >= 9);
});

test("worker serves a generated page and still returns 404 for unknown routes", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async request => {
    const pathname = new URL(request.url).pathname;
    try { return new Response(await readFile(new URL(`../dist/client${pathname}`, import.meta.url)), {headers:{"content-type":"text/html"}}); }
    catch { return new Response("Not found", {status:404}); }
  } } };
  const ctx = {waitUntil(){},passThroughOnException(){}};
  const response = await worker.fetch(new Request("https://sudarshan-ai.com/"),env,ctx);
  assert.equal(response.status,200);
  assert.doesNotMatch(await response.text(), /framework-.*\.js/);
  const missing = await worker.fetch(new Request("https://sudarshan-ai.com/nonexistent-audit-check"),env,ctx);
  assert.equal(missing.status,404);
});

test("renders production metadata and product catalogue", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(
    html,
    /<title>Sudarshan AI Labs \| AI &amp; Digital Growth for Lucknow MSMEs<\/title>/i,
  );
  assert.match(html, /<html lang="en-IN">/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/sudarshan-ai\.com\/"\s*\/>/i);
  assert.match(html, /https:\/\/sudarshan-ai\.com\/#organization/i);
  assert.doesNotMatch(html, /https:\/\/www\.sudarshan-ai\.com/i);
  assert.doesNotMatch(html, /sheevumgoel\.chatgpt\.site/i);
  assert.doesNotMatch(html, /\/workspace\/sites\//i);
  assert.match(html, /id="products"/i);
  assert.match(html, /Swaraj Tech Pack/i);
  assert.match(html, /rel="apple-touch-icon"[^>]+apple-touch-icon\.png/i);
  assert.match(html, /utm_source=website(?:&amp;|&)utm_medium=planner(?:&amp;|&)utm_campaign=local_visibility/i);
  assert.match(html, /href="\/digital-marketing-services"/i);
  assert.match(html, /href="\/digital-marketing-services\/uttar-pradesh"/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(html, /"price":"4900"/i);
  assert.doesNotMatch(html, /"@type":"AggregateRating"/i);
  const emphasizedTags = html.match(/<(?:b|strong)\b/gi) ?? [];
  assert.ok(
    emphasizedTags.length <= 23,
    `expected at most 23 bold/strong tags, found ${emphasizedTags.length}`,
  );
  const internalHrefs = [...html.matchAll(/href="([^"]+)"/gi)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("//"));
  assert.ok(
    internalHrefs.every((href) => !href.includes("?")),
    "internal links must not contain query parameters",
  );
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
});

test("renders a dedicated SEO owner page with self-canonical metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("service-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/seo-services-lucknow", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<h1>SEO Services in Lucknow<\/h1>/i);
  assert.match(html, /https:\/\/sudarshan-ai\.com\/seo-services-lucknow/i);
  assert.match(html, /"@type":"Service"/i);
  assert.match(html, /"price":"4900"/i);
});

test("keeps crawler endpoints public and canonicalizes legacy service routes", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("crawler-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const robots = await worker.fetch(
    new Request("http://localhost/robots.txt"),
    env,
    ctx,
  );
  assert.equal(robots.status, 200);
  assert.equal(robots.headers.get("x-robots-tag"), "all");
  assert.match(await robots.text(), /Allow: \//i);

  const sitemap = await worker.fetch(
    new Request("http://localhost/sitemap.xml"),
    env,
    ctx,
  );
  assert.equal(sitemap.status, 200);
  assert.equal(sitemap.headers.get("x-robots-tag"), "all");
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /https:\/\/sudarshan-ai\.com\/digital-marketing-services(?:<|&lt;)/i);
  assert.match(sitemapXml, /<lastmod>2026-09-11/i);
  const locCount = (sitemapXml.match(/<loc>/g) ?? []).length;
  const lastmodCount = (sitemapXml.match(/<lastmod>/g) ?? []).length;
  assert.ok(locCount > 0, "sitemap must contain URLs");
  assert.equal(locCount, lastmodCount, "every loc must have a corresponding lastmod tag");
  assert.doesNotMatch(sitemapXml, /best-digital-marketing-agency-lucknow/i);
  assert.doesNotMatch(sitemapXml, /local-seo-services/i);
  assert.doesNotMatch(sitemapXml, /seo-services-search-optimization/i);
  assert.doesNotMatch(sitemapXml, /website-development-company/i);
  assert.doesNotMatch(sitemapXml, /custom-web-development-company/i);
  assert.doesNotMatch(sitemapXml, /build-ecommerce-website/i);
  assert.doesNotMatch(sitemapXml, /social-media-marketing-services/i);
  assert.doesNotMatch(sitemapXml, /youtube-shorts-short-video-marketing/i);
  assert.doesNotMatch(sitemapXml, /video-content-repurposing/i);
  assert.doesNotMatch(sitemapXml, /digital-marketing-services\/lucknow/i);
  assert.doesNotMatch(sitemapXml, /https:\/\/www\.sudarshan-ai\.com/i);

  // Consolidated SEO redirects
  const legacyLocal = await worker.fetch(
    new Request("https://sudarshan-ai.com/local-seo"),
    env,
    ctx,
  );
  assert.equal(legacyLocal.status, 301);
  assert.equal(
    legacyLocal.headers.get("location"),
    "https://sudarshan-ai.com/seo-services-lucknow",
  );

  const localSeoServices = await worker.fetch(
    new Request("https://sudarshan-ai.com/local-seo-services"),
    env,
    ctx,
  );
  assert.equal(localSeoServices.status, 301);
  assert.equal(
    localSeoServices.headers.get("location"),
    "https://sudarshan-ai.com/seo-services-lucknow",
  );

  const searchOpt = await worker.fetch(
    new Request("https://sudarshan-ai.com/seo-services-search-optimization"),
    env,
    ctx,
  );
  assert.equal(searchOpt.status, 301);
  assert.equal(
    searchOpt.headers.get("location"),
    "https://sudarshan-ai.com/seo-services-lucknow",
  );

  // Consolidated Website Design & Development redirects
  const oldHost = await worker.fetch(
    new Request("https://www.sudarshan-ai.com/website-development"),
    env,
    ctx,
  );
  assert.equal(oldHost.status, 301);
  assert.equal(
    oldHost.headers.get("location"),
    "https://sudarshan-ai.com/website-design",
  );

  const webDevCompany = await worker.fetch(
    new Request("https://sudarshan-ai.com/website-development-company"),
    env,
    ctx,
  );
  assert.equal(webDevCompany.status, 301);
  assert.equal(
    webDevCompany.headers.get("location"),
    "https://sudarshan-ai.com/website-design",
  );

  const customWebCompany = await worker.fetch(
    new Request("https://sudarshan-ai.com/custom-web-development-company"),
    env,
    ctx,
  );
  assert.equal(customWebCompany.status, 301);
  assert.equal(
    customWebCompany.headers.get("location"),
    "https://sudarshan-ai.com/website-design",
  );

  const buildEcom = await worker.fetch(
    new Request("https://sudarshan-ai.com/build-ecommerce-website"),
    env,
    ctx,
  );
  assert.equal(buildEcom.status, 301);
  assert.equal(
    buildEcom.headers.get("location"),
    "https://sudarshan-ai.com/ecommerce-website-development",
  );

  // Consolidated Social Media & Video redirects
  const socialMediaServices = await worker.fetch(
    new Request("https://sudarshan-ai.com/social-media-marketing-services"),
    env,
    ctx,
  );
  assert.equal(socialMediaServices.status, 301);
  assert.equal(
    socialMediaServices.headers.get("location"),
    "https://sudarshan-ai.com/social-media-marketing-lucknow",
  );

  const ytShorts = await worker.fetch(
    new Request("https://sudarshan-ai.com/youtube-shorts-short-video-marketing"),
    env,
    ctx,
  );
  assert.equal(ytShorts.status, 301);
  assert.equal(
    ytShorts.headers.get("location"),
    "https://sudarshan-ai.com/youtube-marketing-seo-channel-growth",
  );

  const videoRepurpose = await worker.fetch(
    new Request("https://sudarshan-ai.com/video-content-repurposing"),
    env,
    ctx,
  );
  assert.equal(videoRepurpose.status, 301);
  assert.equal(
    videoRepurpose.headers.get("location"),
    "https://sudarshan-ai.com/youtube-marketing-seo-channel-growth",
  );

  const duplicateLucknow = await worker.fetch(
    new Request(
      "https://www.sudarshan-ai.com/best-digital-marketing-agency-lucknow/lucknow/",
    ),
    env,
    ctx,
  );
  assert.equal(duplicateLucknow.status, 301);
  assert.equal(
    duplicateLucknow.headers.get("location"),
    "https://sudarshan-ai.com/digital-marketing-services",
  );

  const flatLucknow = await worker.fetch(
    new Request("https://sudarshan-ai.com/digital-marketing-services/lucknow"),
    env,
    ctx,
  );
  assert.equal(flatLucknow.status, 301);
  assert.equal(
    flatLucknow.headers.get("location"),
    "https://sudarshan-ai.com/digital-marketing-services",
  );

  const nestedCity = await worker.fetch(
    new Request(
      "https://sudarshan-ai.com/digital-marketing-services/uttar-pradesh/kanpur",
    ),
    env,
    ctx,
  );
  assert.equal(nestedCity.status, 301);
  assert.equal(
    nestedCity.headers.get("location"),
    "https://sudarshan-ai.com/digital-marketing-services/kanpur",
  );
});
