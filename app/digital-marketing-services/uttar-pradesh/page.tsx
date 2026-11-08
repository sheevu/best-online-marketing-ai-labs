/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ArrowUpRight, Buildings, Factory, GraduationCap, Heartbeat, MapPin, Storefront } from "@phosphor-icons/react/dist/ssr";
import { cities } from "../../lib/cities";
import StructuredData from "../../_components/StructuredData";
import { absoluteUrl, ORGANIZATION_ID, WHATSAPP_URL } from "../../lib/site";
export const metadata: Metadata = {
  title: "Digital Marketing Across Uttar Pradesh | Sudarshan AI Labs",
  description:
    "Explore city-specific digital marketing, SEO, advertising, website and lead-generation services across 20 major Uttar Pradesh cities.",
  alternates: { canonical: "/digital-marketing-services/uttar-pradesh" },
};
export default function UttarPradeshCities() {
  const cityIcons = [Buildings, Factory, GraduationCap, Heartbeat, Storefront, MapPin];
  return (
    <main className="areas-index city-index">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${absoluteUrl("/digital-marketing-services/uttar-pradesh")}#page`, url: absoluteUrl("/digital-marketing-services/uttar-pradesh"), name: "Digital Marketing Services Across Uttar Pradesh", about: { "@id": ORGANIZATION_ID }, hasPart: cities.map((city) => ({ "@type": "WebPage", name: city.name, url: absoluteUrl(`/digital-marketing-services/uttar-pradesh/${city.slug}`) })) }} />
      <nav className="area-nav">
        <a className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>
            SUDARSHAN <b>AI LABS</b>
          </span>
        </a>
        <a
          className="button button-small"
          href={WHATSAPP_URL}
        >
          Free Audit ↗
        </a>
      </nav>
      <header>
        <p className="eyebrow">{cities.length} CITY-SPECIFIC GROWTH PAGES • UTTAR PRADESH</p>
        <h1>Digital Marketing Services Across Uttar Pradesh</h1>
        <p>
          Choose your city for locally relevant industries, marketing
          challenges, services, FAQs and a direct consultation with Sudarshan AI
          Labs.
        </p>
      </header>
      <section className="area-directory">
        {cities.map((c, i) => {
          const Icon = cityIcons[i % cityIcons.length];
          return <a href={`/digital-marketing-services/uttar-pradesh/${c.slug}`} key={c.slug}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <i className="city-card-icon" aria-hidden="true"><Icon weight="duotone" /></i>
            <h2>{c.name}</h2>
            <p>{c.meta}</p>
            <b>Digital marketing services in {c.name} <ArrowUpRight weight="bold" /></b>
          </a>;
        })}
      </section>
      <footer className="area-footer">
        <p>
          SEO • Google Ads • Social Media • Websites • Local SEO • WhatsApp
          Funnels
        </p>
        <nav aria-label="Legal"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/refund-policy">Refunds</a><a href="/contact">Contact</a></nav>
        <span>© 2026 Sudarshan AI Labs</span>
      </footer>
    </main>
  );
}
