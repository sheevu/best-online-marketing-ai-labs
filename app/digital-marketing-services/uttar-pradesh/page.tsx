 
import type { Metadata } from "next";
import StructuredData from "../../_components/StructuredData";
import { absoluteUrl, ORGANIZATION_ID, WHATSAPP_URL } from "../../lib/site";
export const metadata: Metadata = {
  title: "Digital Marketing Across Uttar Pradesh | Sudarshan AI Labs",
  description:
    "Explore regional digital marketing, SEO, website and lead-generation support across Uttar Pradesh, grounded in genuine service areas and customer demand.",
  alternates: { canonical: "/digital-marketing-services/uttar-pradesh" },
  robots: { index: false, follow: true },
};
export default function UttarPradeshCities() {
  return (
    <main className="areas-index city-index">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${absoluteUrl("/digital-marketing-services/uttar-pradesh")}#page`, url: absoluteUrl("/digital-marketing-services/uttar-pradesh"), name: "Digital Marketing Services Across Uttar Pradesh", about: { "@id": ORGANIZATION_ID } }} />
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
      <section className="area-directory">
        <a href="/digital-marketing-services">
          <span>01</span>
          <h2>Lucknow service hub</h2>
          <p>Review the complete service system and choose the most useful starting point.</p>
          <b>Explore services ↗</b>
        </a>
        <a href="/contact">
          <span>02</span>
          <h2>Discuss your market</h2>
          <p>Share the actual cities, customers and delivery areas your business can serve.</p>
          <b>Request a practical audit ↗</b>
        </a>
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
