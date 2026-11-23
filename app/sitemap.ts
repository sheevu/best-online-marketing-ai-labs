import type { MetadataRoute } from "next";
import { pricingOffers } from "./lib/pricing-catalog";
import { areas } from "./lib/areas";
import { cities } from "./lib/cities";
import { serviceCatalog } from "./lib/service-catalog";
import { SITE_URL } from "./lib/site";

const servicePaths = [
  "/digital-marketing-services",
  "/seo-services-lucknow",
  "/social-media-marketing-lucknow",
  "/lead-generation-lucknow",
  "/ai-automation-lucknow",
  "/content-marketing-lucknow",
  "/ai-business-consulting-lucknow",
  "/google-ads-management-lucknow",
  "/website-design-development-lucknow",
];
const redirectedServiceSlugs = new Set(["local-seo-services","seo-services-search-optimization","social-media-marketing-services","website-development-company","custom-web-development-company","build-ecommerce-website","youtube-shorts-short-video-marketing","video-content-repurposing","best-digital-marketing-agency-lucknow"]);
const canonicalServices = serviceCatalog.filter((service) => !redirectedServiceSlugs.has(service.slug));
const catalogServicePaths = canonicalServices.map((service) => "/" + service.slug);
const trustPaths = [
  "/contact",
  "/about-sheevum-goel",
  "/product-page",
  "/privacy-policy",
  "/terms-of-service",
  "/refund-policy",
];
const cityServicePaths = canonicalServices.flatMap((service) =>
  cities.map((city) => `/${service.slug}/${city.slug}`),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    ...pricingOffers.map(offer => ({ url: `${SITE_URL}/${offer.seoSlug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    ...servicePaths.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...catalogServicePaths.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...cityServicePaths.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly" as const, priority: 0.55 })),
    ...trustPaths.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly" as const, priority: path === "/about-sheevum-goel" ? 0.7 : 0.5 })),
    { url: `${SITE_URL}/digital-marketing-services/uttar-pradesh`, changeFrequency: "monthly", priority: 0.6 },
    ...areas.map((area) => ({ url: `${SITE_URL}/digital-marketing-services/${area.slug}-lucknow`, changeFrequency: "monthly" as const, priority: 0.65 })),
    ...cities.map((city) => ({ url: `${SITE_URL}/digital-marketing-services/uttar-pradesh/${city.slug}`, changeFrequency: "monthly" as const, priority: 0.65 })),
  ];
  return Array.from(new Map(entries.map((entry) => [entry.url, entry])).values());
}
