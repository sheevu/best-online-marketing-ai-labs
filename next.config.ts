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
    ];
  },
};

export default nextConfig;
