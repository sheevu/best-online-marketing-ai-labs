import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/seo-services",
        destination: "/seo-services-lucknow",
        permanent: true,
      },
      {
        source: "/local-seo",
        destination: "/seo-services-lucknow",
        permanent: true,
      },
      {
        source: "/local-seo-services",
        destination: "/seo-services-lucknow",
        permanent: true,
      },
      {
        source: "/seo-services-search-optimization",
        destination: "/seo-services-lucknow",
        permanent: true,
      },
      {
        source: "/social-media-marketing",
        destination: "/social-media-marketing-lucknow",
        permanent: true,
      },
      {
        source: "/social-media-marketing-services",
        destination: "/social-media-marketing-lucknow",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/website-development-company",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/custom-web-development-company",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/build-ecommerce-website",
        destination: "/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/youtube-shorts-short-video-marketing",
        destination: "/youtube-marketing-seo-channel-growth",
        permanent: true,
      },
      {
        source: "/video-content-repurposing",
        destination: "/youtube-marketing-seo-channel-growth",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-lucknow",
        destination: "/digital-marketing-services",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-lucknow/lucknow",
        destination: "/digital-marketing-services",
        permanent: true,
      },
      {
        source: "/digital-marketing-services/lucknow",
        destination: "/digital-marketing-services",
        permanent: true,
      },
      {
        source: "/digital-marketing-services/uttar-pradesh/lucknow",
        destination: "/digital-marketing-services",
        permanent: true,
      },
      {
        source: "/digital-marketing-services/uttar-pradesh/:city",
        destination: "/digital-marketing-services/:city",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://cdn.jotfor.ms https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' https: data:; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://form.jotform.com https://www.google.com; connect-src 'self' https://www.clarity.ms https://*.clarity.ms https://api.whatsapp.com https://form.jotform.com; object-src 'none'; base-uri 'self';",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [{ key: "X-Robots-Tag", value: "all" }],
      },
      {
        source: "/sitemap.xml",
        headers: [{ key: "X-Robots-Tag", value: "all" }],
      },
    ];
  },
};

export default nextConfig;
