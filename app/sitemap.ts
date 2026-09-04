import type { MetadataRoute } from "next";
import { areas } from "./lib/areas";
import { cities } from "./lib/cities";
import { serviceCatalog } from "./lib/service-catalog";
import { SITE_URL } from "./lib/site";

const updated = new Date("2026-08-28T00:00:00.000Z");
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
const catalogServicePaths = serviceCatalog.map((service) => "/" + service.slug);
const cityServicePaths = serviceCatalog.flatMap((service) =>
  cities.map((city) => `/${service.slug}/${city.slug}`),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    ...servicePaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...catalogServicePaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: updated, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...cityServicePaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.55 })),
    { url: `${SITE_URL}/about-sheevum-goel`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/digital-marketing-services/uttar-pradesh`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
    ...areas.map((area) => ({ url: `${SITE_URL}/digital-marketing-services/${area.slug}-lucknow`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.65 })),
    ...cities.map((city) => ({ url: `${SITE_URL}/digital-marketing-services/${city.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.45 })),
  ];
}
