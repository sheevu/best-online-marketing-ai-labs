import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sudarshan-ai.com";
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/digital-marketing-services/`, priority: 0.95 },
    { url: `${base}/seo-services-lucknow`, priority: 0.85 },
    { url: `${base}/google-ads-services`, priority: 0.85 },
    { url: `${base}/social-media-marketing-lucknow`, priority: 0.85 },
    { url: `${base}/website-design`, priority: 0.85 },
    { url: `${base}/lead-generation-lucknow`, priority: 0.85 },
    { url: `${base}/ai-automation-lucknow`, priority: 0.85 },
    { url: `${base}/about-sheevum-goel`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.75 },
  ];
}

