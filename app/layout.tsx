import type { Metadata } from "next";
import Analytics from "./_components/Analytics";
import CtaTracking from "./_components/CtaTracking";
import { SITE_URL } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sudarshan AI Labs | Digital Growth Lucknow",
    template: "%s",
  },
  description: "Digital marketing, SEO, social media, lead generation, websites and practical AI automation for Lucknow MSMEs.",
  keywords: ["digital marketing services in Lucknow", "SEO services Lucknow", "social media marketing in Lucknow", "lead generation Lucknow", "AI automation Lucknow", "AI for business"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sudarshan AI Labs | Digital Growth Lucknow",
    description: "Connected local visibility, conversion, campaigns and practical AI systems for Lucknow MSMEs.",
    url: "/",
    siteName: "Sudarshan AI Labs",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/sudarshan-lucknow-hero.webp", width: 1672, height: 941, alt: "Sudarshan AI Labs growth systems for Lucknow MSMEs" }],
  },
  twitter: { card: "summary_large_image", title: "Sudarshan AI Labs | Digital Growth & AI", description: "Digital visibility, conversion and practical AI systems for Lucknow businesses.", images: ["/sudarshan-lucknow-hero.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: "oSAjR3J_DzMqUrBv9GhazGlY7IASi0wHLEmNk79vs0E" },
  other: { "geo.region": "IN-UP", "geo.placename": "Lucknow" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /><CtaTracking /></body></html>;
}
