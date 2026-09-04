/** Cloudflare Worker entry point for the vinext-starter template. */
import {
  handleImageOptimization,
  DEFAULT_DEVICE_SIZES,
  DEFAULT_IMAGE_SIZES,
} from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS?: Fetcher;
  DB?: D1Database;
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
    const legacyHost =
      url.hostname ===
      "sudarshan-ai-labs-lucknow.sheevumgoel.chatgpt.site";
    const wwwHost = url.hostname === "www.sudarshan-ai.com";
    const needsHttps = url.protocol !== "https:";

    const legacyRoutes: Record<string, string> = {
      "/seo-services": "/seo-services-lucknow",
      "/social-media-marketing": "/social-media-marketing-lucknow",
    };

    const normalizedPath =
      url.pathname.length > 1 && url.pathname.endsWith("/")
        ? url.pathname.slice(0, -1)
        : url.pathname;
    const redirectPath = legacyRoutes[normalizedPath] ?? normalizedPath;
    const needsPathNormalization = redirectPath !== url.pathname;

    // Keep all production signals aligned with SITE_URL=https://sudarshan-ai.com.
    if (legacyHost || wwwHost || needsHttps || needsPathNormalization) {
      url.protocol = "https:";
      if (legacyHost || wwwHost) {
        url.hostname = "sudarshan-ai.com";
      }
      url.pathname = redirectPath;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/_vinext/image") {
      if (!env.ASSETS) {
        return new Response("Image asset binding unavailable", { status: 503 });
      }

      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(
        request,
        {
          fetchAsset: (path) =>
            env.ASSETS!.fetch(new Request(new URL(path, request.url))),
          transformImage: env.IMAGES
            ? async (body, { width, format, quality }) => {
                const result = await env.IMAGES!.input(body)
                  .transform(width > 0 ? { width } : {})
                  .output({ format, quality });
                return result.response();
              }
            : undefined,
        },
        allowedWidths,
      );
    }

    const response = await handler.fetch(request, env, ctx);

    if (url.pathname === "/robots.txt" || url.pathname === "/sitemap.xml") {
      const headers = new Headers(response.headers);
      headers.set("X-Robots-Tag", "all");
      headers.set(
        "Cache-Control",
        "public, max-age=300, s-maxage=300, stale-while-revalidate=86400",
      );
      headers.set("X-Content-Type-Options", "nosniff");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};

export default worker;
