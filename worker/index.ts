/** Cloudflare Worker entry point for the vinext-starter template. */
import {
  handleImageOptimization,
  DEFAULT_DEVICE_SIZES,
  DEFAULT_IMAGE_SIZES,
} from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES?: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: {
          format: string;
          quality: number;
        }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url);
    const preferredHost = "sudarshan-ai.com";
    const redirectHosts = new Set([
      "www.sudarshan-ai.com",
      "sudarshan-ai-labs.com",
      "www.sudarshan-ai-labs.com",
      "sudarshanailabs.com",
      "www.sudarshanailabs.com",
      "sudarshan-ai-labs-lucknow.sheevumgoel.chatgpt.site",
    ]);
    const needsPreferredHost = redirectHosts.has(url.hostname);
    const needsHttps = url.hostname === preferredHost && url.protocol !== "https:";
    const legacyRoutes: Record<string, string> = {
      "/seo-services": "/seo-services-lucknow",
      "/local-seo": "/seo-services-lucknow",
      "/local-seo-services": "/seo-services-lucknow",
      "/seo-services-search-optimization": "/seo-services-lucknow",
      "/social-media-marketing": "/social-media-marketing-lucknow",
      "/social-media-marketing-services": "/social-media-marketing-lucknow",
      "/website-development": "/website-design",
      "/website-development-company": "/website-design",
      "/custom-web-development-company": "/website-design",
      "/build-ecommerce-website": "/ecommerce-website-development",
      "/youtube-shorts-short-video-marketing": "/youtube-marketing-seo-channel-growth",
      "/video-content-repurposing": "/youtube-marketing-seo-channel-growth",
      "/best-digital-marketing-agency-lucknow": "/digital-marketing-services",
      "/best-digital-marketing-agency-lucknow/lucknow": "/digital-marketing-services",
      "/digital-marketing-services/lucknow": "/digital-marketing-services",
      "/digital-marketing-services/uttar-pradesh/lucknow": "/digital-marketing-services",
      "/digital-marketing-services/hazratganj": "/digital-marketing-services/hazratganj-lucknow",
      "/digital-marketing-services/indira-nagar": "/digital-marketing-services/indira-nagar-lucknow",
      "/digital-marketing-services/mahanagar": "/digital-marketing-services/mahanagar-lucknow",
      "/digital-marketing-services/gomti-nagar": "/digital-marketing-services/gomti-nagar-lucknow",
      "/digital-marketing-services/gomti-nagar-extension": "/digital-marketing-services/gomti-nagar-extension-lucknow",
      "/digital-marketing-services/aliganj": "/digital-marketing-services/aliganj-lucknow",
      "/digital-marketing-services/jankipuram": "/digital-marketing-services/jankipuram-lucknow",
      "/digital-marketing-services/vikas-nagar": "/digital-marketing-services/vikas-nagar-lucknow",
      "/digital-marketing-services/ashiyana": "/digital-marketing-services/ashiyana-lucknow",
      "/digital-marketing-services/alambagh": "/digital-marketing-services/alambagh-lucknow",
      "/digital-marketing-services/rajajipuram": "/digital-marketing-services/rajajipuram-lucknow",
      "/digital-marketing-services/aminabad": "/digital-marketing-services/aminabad-lucknow",
      "/digital-marketing-services/chowk": "/digital-marketing-services/chowk-lucknow",
      "/digital-marketing-services/kaiserbagh": "/digital-marketing-services/kaiserbagh-lucknow",
      "/digital-marketing-services/charbagh": "/digital-marketing-services/charbagh-lucknow",
      "/digital-marketing-services/nishatganj": "/digital-marketing-services/nishatganj-lucknow",
      "/digital-marketing-services/kapoorthala": "/digital-marketing-services/kapoorthala-lucknow",
      "/digital-marketing-services/faizabad-road": "/digital-marketing-services/faizabad-road-lucknow",
      "/digital-marketing-services/munshipulia": "/digital-marketing-services/munshipulia-lucknow",
      "/digital-marketing-services/sushant-golf-city": "/digital-marketing-services/sushant-golf-city-lucknow",
    };
    const normalizedPath =
      url.pathname.length > 1 && url.pathname.endsWith("/")
        ? url.pathname.slice(0, -1)
        : url.pathname;

    let redirectPath = legacyRoutes[normalizedPath] ?? normalizedPath;
    const nestedCityPrefix = "/digital-marketing-services/uttar-pradesh/";
    if (
      redirectPath === normalizedPath &&
      normalizedPath.startsWith(nestedCityPrefix)
    ) {
      const city = normalizedPath.slice(nestedCityPrefix.length);
      if (city) {
        redirectPath =
          city === "lucknow"
            ? "/digital-marketing-services"
            : `/digital-marketing-services/${city}`;
      }
    }

    const needsPathNormalization = redirectPath !== url.pathname;

    if (needsPreferredHost || needsHttps || needsPathNormalization) {
      if (needsPreferredHost || needsHttps) {
        url.protocol = "https:";
        url.hostname = preferredHost;
      }
      url.pathname = redirectPath;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/_vinext/image") {
      if (!env.ASSETS || !env.IMAGES) {
        return new Response("Image optimization unavailable", { status: 503 });
      }
      const imageBinding = env.IMAGES;
      const assetBinding = env.ASSETS;
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(
        request,
        {
          fetchAsset: (path) =>
            assetBinding.fetch(new Request(new URL(path, request.url))),
          transformImage: async (body, { width, format, quality }) => {
            const result = await imageBinding.input(body)
              .transform(width > 0 ? { width } : {})
              .output({ format, quality });
            return result.response();
          },
        },
        allowedWidths,
      );
    }

    // Public marketing pages are pre-rendered at build time, with native browser
    // interactions and page-specific CSS. Keep the application handler for
    // metadata endpoints, unknown routes and future dynamic functionality.
    let response: Response | undefined;
    if ((request.method === "GET" || request.method === "HEAD") && !url.pathname.includes(".") && !url.searchParams.has("_rsc") && !request.headers.has("rsc")) {
      const assetPath = url.pathname === "/" ? "/__static/index.html" : `/__static${url.pathname}.html`;
      const asset = await env.ASSETS.fetch(new Request(new URL(assetPath, url), { method: request.method }));
      if (asset.status === 200) response = asset;
    }
    if (!response && (request.method === "GET" || request.method === "HEAD") && url.pathname.includes(".")) {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status === 200) response = asset;
    }
    response ??= await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    if (url.pathname === "/robots.txt" || url.pathname === "/sitemap.xml") {
      headers.set("X-Robots-Tag", "all");
      headers.set("Cache-Control", "public, max-age=300, s-maxage=3600");
    } else if (url.pathname.startsWith("/images/") || url.pathname.startsWith("/assets/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else {
      headers.set("X-Robots-Tag", "all, index, follow");
      if (response.status === 200 && (!url.pathname.includes(".") || url.pathname.endsWith(".html"))) {
        headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
      }
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
