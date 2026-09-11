import type { MetadataRoute } from "next";
import { serviceCatalog } from "./lib/service-catalog";
import { SITE_URL } from "./lib/site";

const servicePaths = [
  "/digital-marketing-services",
  "/seo-services-lucknow",
  "/social-media-marketing-lucknow",
  "/lead-generation-lucknow",
  "/ai-automation-lucknow",
  "/content-marketing-lucknow",
  "/ai-for-business",
  "/google-ads-services",
  "/website-design",
];

const redirectedCatalogSlugs = new Set([
  "best-digital-marketing-agency-lucknow",
]);

const catalogServicePaths = serviceCatalog
  .filter((service) => !redirectedCatalogSlugs.has(service.slug))
  .map((service) => "/" + service.slug);

const trustPaths = [
  "/contact",
  "/about-sheevum-goel",
  "/privacy-policy",
  "/terms-of-service",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    ...servicePaths.map((path) => ({ url: `${SITE_URL}${path}`, priority: 0.9 })),
    ...catalogServicePaths.map((path) => ({ url: `${SITE_URL}${path}`, priority: 0.8 })),
    ...trustPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      priority: path === "/about-sheevum-goel" ? 0.7 : 0.5,
    })),
  ];
}
