import type { Metadata } from "next";
import Script from "next/script";
import Analytics from "./_components/Analytics";
import CtaTracking from "./_components/CtaTracking";
import { SITE_URL } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sudarshan AI Labs | AI Agents & Digital Marketing Services in Lucknow, UP",
    template: "%s",
  },
  description: "Boost your business with top-tier AI agents, custom Hindi CRM, and results-driven digital marketing services in Lucknow and across Uttar Pradesh. Get a free audit today!",
  keywords: ["digital marketing agency in Lucknow", "AI consulting in Lucknow", "SEO services in Uttar Pradesh", "Hindi CRM", "AI agents development", "Sudarshan AI Labs"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sudarshan AI Labs | AI Agents & Digital Marketing Services in Lucknow",
    description: "Boost your business with top-tier AI agents, custom Hindi CRM, and results-driven digital marketing services in Lucknow and across Uttar Pradesh.",
    url: "/",
    siteName: "Sudarshan AI Labs",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/sudarshan-lucknow-hero.webp", width: 1672, height: 941, alt: "Sudarshan AI Labs AI agents and digital marketing services in Lucknow" }],
  },
  twitter: { card: "summary_large_image", title: "Sudarshan AI Labs | AI Agents & Digital Marketing Services in Lucknow", description: "AI agents, Hindi CRM and results-driven digital marketing services for businesses in Lucknow and Uttar Pradesh.", images: ["/sudarshan-lucknow-hero.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: "oSAjR3J_DzMqUrBv9GhazGlY7IASi0wHLEmNk79vs0E" },
  other: { "geo.region": "IN-UP", "geo.placename": "Lucknow", monetag: "546c0ee0ef6eacd8f2ec917fd880b4b2" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/sudarshan-site-icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/sudarshan-site-icon.png", type: "image/png", sizes: "2000x2000" },
    ],
    shortcut: "/sudarshan-site-icon-512.png",
    apple: [{ url: "/sudarshan-site-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Script src="https://news.google.com/swg/js/v1/publisher.js" strategy="afterInteractive" /><Analytics /><CtaTracking /></body></html>;
}
