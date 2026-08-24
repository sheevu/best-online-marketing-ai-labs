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
  assert.match(html, /<title>Best Digital Marketing Agency in Lucknow \| Sudarshan AI Labs<\/title>/i);
  assert.match(html, /id="products"/i);
  assert.match(html, /Swaraj Tech Pack/i);
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
});
