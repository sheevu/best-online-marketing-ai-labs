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
  IMAGES: {
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

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

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
    const needsPreferredHost =
      url.hostname === "sudarshan-ai.com" || legacyHost;
    const needsHttps =
      url.hostname === "www.sudarshan-ai.com" && url.protocol !== "https:";
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

    if (needsPreferredHost || needsHttps || needsPathNormalization) {
      if (needsPreferredHost || needsHttps) {
        url.protocol = "https:";
        url.hostname = "www.sudarshan-ai.com";
      }
      url.pathname = redirectPath;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(
        request,
        {
          fetchAsset: (path) =>
            env.ASSETS.fetch(new Request(new URL(path, request.url))),
          transformImage: async (body, { width, format, quality }) => {
            const result = await env.IMAGES.input(body)
              .transform(width > 0 ? { width } : {})
              .output({ format, quality });
            return result.response();
          },
        },
        allowedWidths,
      );
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
