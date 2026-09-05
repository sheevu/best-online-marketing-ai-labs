"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CtaTracking() {
  useEffect(() => {
    const track = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.href;
      const method = href.includes("wa.me/") ? "whatsapp" : href.startsWith("tel:") ? "phone" : null;
      if (!method) return;
      window.gtag?.("event", "generate_lead", {
        method,
        campaign: "local_visibility",
        link_url: href,
      });
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, []);

  return null;
}
