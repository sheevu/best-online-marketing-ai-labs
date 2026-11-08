import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("deployment-check", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function request(path) {
  return worker.fetch(new Request(`https://sudarshan-ai.com${path}`, {
    headers: { accept: "text/html" },
  }), env, ctx);
}

test("homepage has self-canonical metadata, pricing and the Jotform widget", async () => {
  const response = await request("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html/i);
  const html = await response.text();
  assert.match(html, /<title>Sudarshan AI Labs \| AI Agents &amp; Digital Marketing Services in Lucknow, UP<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/sudarshan-ai\.com\/"\s*\/>/i);
  assert.match(html, /<meta name="robots" content="index, follow"/i);
  assert.match(html, /id="products"/i);
  assert.match(html, /Swaraj Tech Pack/i);
  assert.match(html, /id="JFWebsiteWidget-01a1b8324a50700087916735dd7644c43a53"/i);
  assert.match(html, /src="https:\/\/www\.jotform\.com\/website-widgets\/embed\/01a1b8324a50700087916735dd7644c43a53"/i);
  assert.match(html, /id="location"/i);
  assert.match(html, /title="Google Map centered on Gomti Nagar, Lucknow"/i);
  assert.match(html, /maps\.google\.com\/maps\?q=26\.8686946/i);
  assert.doesNotMatch(html, /www\.sudarshan-ai\.com|sheevumgoel\.chatgpt\.site|\/workspace\/sites\//i);
});

test("service landing pages return indexable self-canonical HTML", async () => {
  const response = await request("/seo-services-lucknow");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<h1[^>]*>SEO Services in Lucknow/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/sudarshan-ai\.com\/seo-services-lucknow"/i);
  assert.match(html, /"@type":"Service"/i);
});

test("robots and sitemap are public and use only canonical indexable URLs", async () => {
  const robots = await worker.fetch(new Request("https://sudarshan-ai.com/robots.txt"), env, ctx);
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  assert.ok(robotsText.includes("Allow: /"));
  assert.match(robotsText, /Sitemap: https:\/\/sudarshan-ai\.com\/sitemap\.xml/i);
  assert.doesNotMatch(robotsText, /^Host:/im);

  const sitemap = await worker.fetch(new Request("https://sudarshan-ai.com/sitemap.xml"), env, ctx);
  assert.equal(sitemap.status, 200);
  assert.equal(sitemap.headers.get("x-robots-tag"), "all");
  const xml = await sitemap.text();
  assert.match(xml, /https:\/\/sudarshan-ai\.com\/digital-marketing-services/);
  assert.doesNotMatch(xml, /https:\/\/www\.sudarshan-ai\.com|product-page|<lastmod>/i);
});

test("unknown routes return 404", async () => {
  const response = await request("/deployment-check-unknown-route");
  assert.equal(response.status, 404);
});
