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
        source: "/social-media-marketing",
        destination: "/social-media-marketing-lucknow",
        permanent: true,
      },
      {
        source: "/local-seo",
        destination: "/local-seo-services",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/website-design",
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
