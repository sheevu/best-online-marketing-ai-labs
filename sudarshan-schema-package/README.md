# Sudarshan AI Labs structured-data package

This package contains tested, page-specific JSON-LD examples and a reusable ES-module generator for sudarshan-ai.com. These files have **not** been published on the website and have **not** been tested with Google's live URL Rich Results Test. They were tested for JSON syntax, stable IDs, example date parsing, and graph structure locally.

## Contents
- `founder-profile.jsonld`: founder `ProfilePage`, `Person`, `Organization`, `WebSite`, and 2-level `BreadcrumbList`. `dateModified` is deliberately absent until the real edit time is known. This prevents the *invalid datetime* error without misrepresenting the page update history.
- `home-page.jsonld`: homepage `WebPage`, `Organization`, `WebSite`, and nine `Service` nodes with `PriceSpecification.minPrice` denominated in INR. The prices are *indicative starting amounts*, not a universal service price or a binding quote.
- `seo-service.jsonld` and `digital-marketing-services.jsonld`: two specific example page graphs using URLs observed online.
- `schema-builder.mjs`: central builder for profile, home, service, location, software, article, contact and generic pages; it can scale to additional real URLs and titles from the site's CMS or sitemap.
- `test-schema.mjs`: local integrity tests.

## Repair dateModified
Pass the **actual modification timestamp** recorded by the page CMS/build metadata. For example, only if that timestamp really is 20 August 2026 at 00:00 UTC:

```js
import {buildSchema, asScriptTag, SITE} from './schema-builder.mjs';
const graph = buildSchema({
  kind: 'profile', url: `${SITE}/about-sheevum-goel`,
  modifiedAt: '2026-08-20T00:00:00+00:00' // ILLUSTRATIVE: replace with actual edit timestamp.
});
const html = asScriptTag(graph);
```

If a correct last-edit timestamp is unavailable, omit `modifiedAt`. The builder **does not invent a date** and rejects malformed timestamps. A schema-only build is not necessarily a human edit of the profile content.

## Deployment
1. Confirm the live page canonical is exactly `https://sudarshan-ai.com/about-sheevum-goel` (and the homepage canonical is root). If another canonical is in use, update the generator consistently.
2. Remove or consolidate existing duplicate/invalid JSON-LD blocks on each page. Render one generated graph per canonical page (or deduplicate identical `@id` definitions).
3. Embed `JSON.stringify(graph)` into `<script type="application/ld+json">` in the HTML head or body; with the builder, use `asScriptTag(graph)`. Render it server-side where possible.
4. For every new service/location/product/article page, supply its **real canonical URL, on-page title, description, breadcrumbs, visible price, verified publication/edit date**, if applicable. Do not add offer pricing to the founder profile unless it is actually displayed there.
5. Treat the company's public brand as `name: Sudarshan AI Labs` and the footer's registered name as `legalName`. Verify spelling with incorporation documents before deployment if the footer differs from legal records.
6. Add `logo`, founder `image`, and `sameAs` links only after confirming their **actual public URLs**, ownership, crawlability, and (for the profile) visibility.
7. Test the published URLs at https://search.google.com/test/rich-results and the JSON itself at https://validator.schema.org/; then inspect Search Console URL Inspection and click **Validate Fix** on the original issue.

## Mapping all pages
Use `buildSchema({ kind:'service', url, title, description, parents, service:{name} })` for each service URL; `kind:'location'` for legitimate location pages; `kind:'software'` only for a page dedicated to an actual application; `kind:'article'` for a published article with its actual publication date. Policy pages can use `kind:'generic'` plus breadcrumbs. The script deliberately does **not** hallucinate undiscovered URL slugs or repeat nine homepage prices across unrelated service pages. A complete crawl and your actual CMS page inventory are needed to generate a validated graph for **every existing page**.
