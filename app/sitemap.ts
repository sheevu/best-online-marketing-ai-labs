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

// URLs consolidated / redirected to primary pages to prevent keyword cannibalization and thin content
const redirectedCatalogSlugs = new Set([
  "best-digital-marketing-agency-lucknow",
  "local-seo-services",
  "seo-services-search-optimization",
  "website-development-company",
  "custom-web-development-company",
  "build-ecommerce-website",
  "social-media-marketing-services",
  "youtube-shorts-short-video-marketing",
  "video-content-repurposing",
]);

const catalogServicePaths = serviceCatalog
  .filter((service) => !redirectedCatalogSlugs.has(service.slug))
  .map((service) => "/" + service.slug);

// Only indexable canonical URLs belong in the XML sitemap.
// Locality and city hub templates currently opt out of indexing.
const localityPaths: string[] = [];
const cityPaths: string[] = [];

const trustPaths = [
  "/contact",
  "/about-sheevum-goel",
  "/privacy-policy",
  "/terms-of-service",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...catalogServicePaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...localityPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...cityPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...trustPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/about-sheevum-goel" ? 0.7 : 0.5,
    })),
  ];
}
