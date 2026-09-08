import type { Metadata } from "next";
import Link from "next/link";
import { EnvelopeSimple, PhoneCall, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import StructuredData from "../_components/StructuredData";
import TrustLinks from "../_components/TrustLinks";
import { absoluteUrl, CONTACT_EMAIL, CONTACT_PHONE, ORGANIZATION_ID, PRIMARY_ADDRESS, WHATSAPP_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact Sudarshan AI Labs | Lucknow",
  description: "Contact Sudarshan AI Labs in Lucknow for a digital marketing, SEO, lead generation, website or AI automation audit.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact")}#page`,
    url: absoluteUrl("/contact"),
    name: "Contact Sudarshan AI Labs",
    about: { "@id": ORGANIZATION_ID },
  };
  return (
    <main className="service-owner contact-page">
      <StructuredData data={schema} />
      <nav className="area-nav" aria-label="Contact navigation">
        <Link className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></Link>
        <div><Link href="/digital-marketing-services">Services</Link><Link href="/about-sheevum-goel">Founder</Link></div>
        <a className="button button-small" href={WHATSAPP_URL}>WhatsApp ↗</a>
      </nav>
      <header className="service-hero">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span>Contact</div>
        <p className="eyebrow">LET’S IDENTIFY THE FIRST USEFUL STEP</p>
        <h1>Contact Sudarshan AI Labs</h1>
        <p>Share your website, Google Business Profile or current sales process. Tell us the business goal, location and main bottleneck so the first conversation stays practical.</p>
      </header>
      <section className="contact-options" id="contact-options">
        <a href={WHATSAPP_URL}><span className="glossy-icon" aria-hidden="true"><WhatsappLogo weight="duotone" /></span><span>FASTEST RESPONSE</span><h2>Start on WhatsApp</h2><p>Send your business name, website or Google listing and the service you are considering.</p><b>Open WhatsApp ↗</b></a>
        <a href={`tel:${CONTACT_PHONE}`}><span className="glossy-icon" aria-hidden="true"><PhoneCall weight="duotone" /></span><span>CALL</span><h2>{CONTACT_PHONE}</h2><p>Call for a brief introductory conversation during normal India business hours.</p><b>Call now ↗</b></a>
        <a href={`mailto:${CONTACT_EMAIL}`}><span className="glossy-icon" aria-hidden="true"><EnvelopeSimple weight="duotone" /></span><span>EMAIL</span><h2>{CONTACT_EMAIL}</h2><p>Email a detailed brief, existing audit or collaboration proposal.</p><b>Compose email ↗</b></a>
      </section>
      <section className="area-cta"><p>WHAT TO INCLUDE</p><h2>Business, goal, current challenge and preferred next action.</h2><span>We do not require passwords or sensitive customer data for an introductory audit. Never send credentials through a contact message.</span></section>
      <footer className="area-footer"><Link className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></Link><p>Digital visibility, conversion and practical AI systems for Lucknow MSMEs.</p><TrustLinks /><span>© 2026 Sudarshan AI Labs • {PRIMARY_ADDRESS}</span></footer>
    </main>
  );
}
