import type { Metadata } from "next";
import Analytics from "./_components/Analytics";
import SiteChrome from "./_components/SiteChrome";
import CtaTracking from "./_components/CtaTracking";
import GlobalStructuredData from "./_components/GlobalStructuredData";
import LeadCapturePopup from "./_components/LeadCapturePopup";
import LeeilaAssistant from "./_components/LeeilaAssistant";
import { SITE_URL } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Development & Digital Marketing in Lucknow | Sudarshan AI Labs",
    template: "%s",
  },
  description: "AI development, practical automation and digital marketing for Lucknow businesses. Explore local SEO, websites, lead generation, Hindi CRM and WhatsApp systems. Request a free growth audit.",
  keywords: ["digital marketing agency in Lucknow", "AI consulting in Lucknow", "SEO services in Uttar Pradesh", "Hindi CRM", "AI agents development", "Sudarshan AI Labs"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Development & Digital Marketing in Lucknow | Sudarshan AI Labs",
    description: "AI development, practical automation and digital growth services for businesses in Lucknow and Uttar Pradesh.",
    url: "/",
    siteName: "Sudarshan AI Labs",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/sudarshan-lucknow-hero.webp", width: 1672, height: 941, alt: "Sudarshan AI Labs AI agents and digital marketing services in Lucknow" }],
  },
  twitter: { card: "summary_large_image", title: "Sudarshan AI Labs | AI Agents & Digital Marketing Services in Lucknow", description: "AI development, Hindi CRM and digital marketing services for Lucknow and Uttar Pradesh businesses.", images: ["/sudarshan-lucknow-hero.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: "oSAjR3J_DzMqUrBv9GhazGlY7IASi0wHLEmNk79vs0E" },
  other: { "geo.region": "IN-UP", "geo.placename": "Lucknow", monetag: "546c0ee0ef6eacd8f2ec917fd880b4b2" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/sudarshan-site-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteChrome position="header" /><GlobalStructuredData />{children}<SiteChrome position="footer" /><LeeilaAssistant /><LeadCapturePopup /><Analytics /><CtaTracking /></body></html>;
}
