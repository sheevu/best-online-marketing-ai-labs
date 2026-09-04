import type { Metadata } from "next";
import Analytics from "./_components/Analytics";
import { SITE_URL } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sudarshan AI Labs | Digital Growth & AI Automation in Lucknow",
    template: "%s | Sudarshan AI Labs",
  },
  description: "Digital marketing, SEO, social media, lead generation, websites and practical AI automation for Lucknow MSMEs.",
  keywords: ["digital marketing services in Lucknow", "SEO services Lucknow", "social media marketing in Lucknow", "lead generation Lucknow", "AI automation Lucknow", "AI for business"],
  openGraph: {
    title: "Sudarshan AI Labs | Digital Growth & AI Automation in Lucknow",
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
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}
