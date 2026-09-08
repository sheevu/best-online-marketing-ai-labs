import assert from "node:assert/strict";
import test from "node:test";

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
  assert.match(html, /<title>Sudarshan AI Labs \| Digital Growth Lucknow<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/sudarshan-ai\.com\/"\s*\/>/i);
  assert.match(html, /https:\/\/sudarshan-ai\.com\/#organization/i);
  assert.doesNotMatch(html, /sheevumgoel\.chatgpt\.site/i);
  assert.doesNotMatch(html, /\/workspace\/sites\//i);
  assert.match(html, /id="products"/i);
  assert.match(html, /Swaraj Tech Pack/i);
  assert.match(html, /rel="apple-touch-icon"[^>]+apple-touch-icon\.png/i);
  assert.match(html, /utm_source=website(?:&amp;|&)utm_medium=planner(?:&amp;|&)utm_campaign=local_visibility/i);
  assert.match(html, /href="\/digital-marketing-services\/gomti-nagar-lucknow"/i);
  assert.match(html, /href="\/digital-marketing-services\/kanpur"/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(html, /"price":"4900"/i);
  assert.doesNotMatch(html, /"@type":"AggregateRating"/i);
  const emphasizedTags = html.match(/<(?:b|strong)\b/gi) ?? [];
  assert.ok(emphasizedTags.length <= 23, `expected at most 23 bold/strong tags, found ${emphasizedTags.length}`);
  const internalHrefs = [...html.matchAll(/href="([^"]+)"/gi)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("//"));
  assert.ok(internalHrefs.every((href) => !href.includes("?")), "internal links must not contain query parameters");
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
});

test("renders a dedicated SEO owner page with self-canonical metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("service-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/seo-services-lucknow", { headers: { accept: "text/html" } }),
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
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const robots = await worker.fetch(new Request("http://localhost/robots.txt"), env, ctx);
  assert.equal(robots.status, 200);
  assert.equal(robots.headers.get("x-robots-tag"), "all");
  assert.match(await robots.text(), /Allow: \//i);

  const legacy = await worker.fetch(new Request("https://sudarshan-ai.com/local-seo"), env, ctx);
  assert.equal(legacy.status, 301);
  assert.equal(legacy.headers.get("location"), "https://sudarshan-ai.com/local-seo-services");

  const oldHost = await worker.fetch(new Request("https://www.sudarshan-ai.com/website-development"), env, ctx);
  assert.equal(oldHost.status, 301);
  assert.equal(oldHost.headers.get("location"), "https://sudarshan-ai.com/website-design");
});
