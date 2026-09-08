import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#171527",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sudarshan-ai.com"),
  title: {
    default: "AI Digital Marketing Agency in Lucknow | Local SEO & Google Maps Experts | Sudarshan AI Labs",
    template: "%s | Sudarshan AI Labs",
  },
  description:
    "Sudarshan AI Labs helps Lucknow businesses improve Local SEO, Google Business Profile visibility, websites, paid campaigns and practical AI follow-up. Start with a clear digital growth audit.",
  keywords: [
    "Sudarshan AI Labs",
    "best digital marketing agency in Lucknow",
    "digital marketing services in Lucknow",
    "best digital marketing company in Lucknow",
    "SEO company in Lucknow",
    "local SEO services Lucknow",
    "Google Maps ranking Lucknow",
    "Google Ads agency Lucknow",
    "website design company Lucknow",
    "AI-powered business growth Lucknow",
    "social media marketing Lucknow",
    "Lucknow MSME marketing",
    "lead generation services Lucknow",
    "WhatsApp automation for business Lucknow",
    "Sheevum Goel",
    "digital marketing Uttar Pradesh",
    "AI for Bharat",
  ],
  authors: [{ name: "Sheevum Goel", url: "https://sudarshan-ai.com/about-sheevum-goel/" }],
  creator: "Sheevum Goel",
  publisher: "Sudarshan AI Labs",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sudarshan AI Labs | Best Digital Marketing Agency in Lucknow | AI Growth",
    description:
      "A connected growth system for local visibility, high-converting websites, Google Maps ranking, performance ads and practical AI automation for Lucknow MSMEs.",
    url: "https://sudarshan-ai.com/",
    siteName: "Sudarshan AI Labs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://sudarshan-ai.com/sudarshan-lucknow-hero.webp",
        width: 1672,
        height: 941,
        alt: "Sudarshan AI Labs - Best Digital Marketing and AI Growth Agency in Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudarshan AI Labs | Best Digital Marketing Agency in Lucknow",
    description:
      "Local visibility, high-converting websites, performance campaigns and practical AI follow-up for Lucknow businesses.",
    images: ["https://sudarshan-ai.com/sudarshan-lucknow-hero.webp"],
    creator: "@sheevum",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "oSAjR3J_DzMqUrBv9GhazGlY7IASi0wHLEmNk79vs0E",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Lucknow",
    "geo.position": "26.8467;80.9462",
    "ICBM": "26.8467, 80.9462",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

