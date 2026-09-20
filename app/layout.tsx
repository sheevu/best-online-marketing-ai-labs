import type { Metadata } from "next";
import { SITE_URL } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sudarshan AI Labs | AI Agents & Digital Marketing Services in Lucknow, UP",
    template: "%s | Sudarshan AI Labs",
  },
  description:
    "Boost your business with top-tier AI agents, custom Hindi CRM, and results-driven digital marketing services in Lucknow and across Uttar Pradesh. Get a free audit today!",
  keywords: [
    "Sudarshan AI Labs",
    "digital marketing agency in lucknow",
    "AI consulting in lucknow",
    "SEO services Lucknow",
    "local SEO Lucknow",
    "Google Maps marketing Lucknow",
    "hindi crm",
    "AI agents development",
    "digital marketing services Uttar Pradesh",
    "web development Lucknow",
    "lead generation Lucknow",
  ],
  openGraph: {
    title: "Sudarshan AI Labs | AI Agents & Digital Marketing Services in Lucknow",
    description:
      "Boost your business with top-tier AI agents, custom Hindi CRM, and results-driven digital marketing services in Lucknow and across Uttar Pradesh.",
    url: "/",
    siteName: "Sudarshan AI Labs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/sudarshan-lucknow-hero.webp",
        width: 1672,
        height: 941,
        alt: "Sudarshan AI Labs growth systems for Lucknow MSMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudarshan AI Labs | AI Agents & Digital Marketing Services in Lucknow",
    description:
      "Boost your business with top-tier AI agents, custom Hindi CRM, and results-driven digital marketing services in Lucknow and across Uttar Pradesh.",
    images: ["/sudarshan-lucknow-hero.webp"],
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
    other: {
      "yandex-verification": "796e217f3b74c89f",
      "p:domain_verify": "2b2673b8fc2813fbe71cd06db26c491a",
    },
  },
  other: { "geo.region": "IN-UP", "geo.placename": "Lucknow" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="theme-color" content="#f8fbff" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.jotfor.ms" crossOrigin="" />
        <link rel="preload" as="image" type="image/webp" href="/images/sudarshan-lucknow-hero-v1-960.webp" fetchPriority="high" />
        <script
          type="text/javascript"
          data-clarity-script="true"
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=function(){(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yihvqld983")};
            if(typeof requestIdleCallback==="function"){requestIdleCallback(h)}else{setTimeout(h,2500)}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <script src="/site.js" defer data-site-script="true" />
      </body>
    </html>
  );
}
