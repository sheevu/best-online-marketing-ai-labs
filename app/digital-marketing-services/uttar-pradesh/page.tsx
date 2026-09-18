 
import type { Metadata } from "next";
import { Buildings, Factory, GraduationCap, Heartbeat, MapPin, Storefront } from "@phosphor-icons/react/dist/ssr";
import StructuredData from "../../_components/StructuredData";
import { cities } from "../../lib/cities";
import { absoluteUrl, ORGANIZATION_ID, WHATSAPP_URL } from "../../lib/site";
export const metadata: Metadata = {
  title: "Digital Marketing Across Uttar Pradesh | Sudarshan AI Labs",
  description:
    "Explore regional digital marketing, SEO, website and lead-generation support across Uttar Pradesh, grounded in genuine service areas and customer demand.",
  alternates: { canonical: "/digital-marketing-services/uttar-pradesh" },
  robots: { index: true, follow: true },
};
const cityIcons = [Buildings, Factory, GraduationCap, Heartbeat, Storefront, MapPin];
export default function UttarPradeshCities() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
    { "@type": "ListItem", position: 2, name: "Uttar Pradesh cities", item: absoluteUrl("/digital-marketing-services/uttar-pradesh") },
  ] };
  return (
    <main className="areas-index city-index">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${absoluteUrl("/digital-marketing-services/uttar-pradesh")}#page`, url: absoluteUrl("/digital-marketing-services/uttar-pradesh"), name: "Digital Marketing Services Across Uttar Pradesh", about: { "@id": ORGANIZATION_ID }, hasPart: cities.map((city) => ({ "@type": "WebPage", name: city.h1, url: absoluteUrl(city.slug === "lucknow" ? "/digital-marketing-services" : `/digital-marketing-services/${city.slug}`) })) }} />
      <StructuredData data={breadcrumbSchema} />
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
        <p className="eyebrow">REGIONAL GROWTH SUPPORT • UTTAR PRADESH</p>
        <h1>Digital Marketing Services Across Uttar Pradesh</h1>
        <p>
          We support suitable businesses across Uttar Pradesh with service,
          search and conversion guidance based on their actual market and
          operating area.
        </p>
      </header>
      <section className="up-city-directory" aria-labelledby="up-city-title">
        <div className="area-section-title">
          <p className="section-kicker">20 DISTINCT CITY HUBS</p>
          <h2 id="up-city-title">Choose your Uttar Pradesh market</h2>
          <p>Every hub contains city-specific industries, customer context, pain points and FAQs. Service details remain on their canonical owner pages.</p>
        </div>
        <nav className="up-city-grid" aria-label="Top Uttar Pradesh cities">
          {cities.map((city, index) => {
            const Icon = cityIcons[index % cityIcons.length];
            return <a href={city.slug === "lucknow" ? "/digital-marketing-services" : `/digital-marketing-services/${city.slug}`} key={city.slug}>
              <span className="up-city-icon" aria-hidden="true"><Icon weight="duotone" /></span>
              <small>{String(index + 1).padStart(2, "0")} · Uttar Pradesh</small>
              <h2>{city.name}</h2>
              <p>{city.primaryKeyword}</p>
              <b>Explore city hub ↗</b>
            </a>;
          })}
        </nav>
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
