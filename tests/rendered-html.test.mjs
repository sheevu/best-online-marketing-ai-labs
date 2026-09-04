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
  assert.match(html, /<title>Sudarshan AI Labs \| Digital Growth &amp; AI Automation in Lucknow<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/sudarshan-ai\.com\/"\s*\/>/i);
  assert.match(html, /https:\/\/sudarshan-ai\.com\/#organization/i);
  assert.doesNotMatch(html, /sheevumgoel\.chatgpt\.site/i);
  assert.doesNotMatch(html, /\/workspace\/sites\//i);
  assert.match(html, /id="products"/i);
  assert.match(html, /Swaraj Tech Pack/i);
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
});
