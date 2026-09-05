import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import StructuredData from "../_components/StructuredData";
import TrustLinks from "../_components/TrustLinks";
import { absoluteUrl, ORGANIZATION_ID } from "../lib/site";

export const metadata: Metadata = { title: "Terms of Service | Sudarshan AI Labs", description: "Terms for using Sudarshan AI Labs services and website.", alternates: { canonical: "/terms-of-service" } };

export default function TermsOfService() {
  return (
    <main className="service-owner legal-page">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": `${absoluteUrl("/terms-of-service")}#page`, url: absoluteUrl("/terms-of-service"), name: "Terms of Service", about: { "@id": ORGANIZATION_ID } }} />
      <nav className="area-nav" aria-label="Legal navigation"><Link className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></Link><Link className="button button-small" href="/contact">Contact</Link></nav>
      <article className="legal-copy">
        <span className="glossy-icon" aria-hidden="true"><FileText weight="duotone" /></span><p className="eyebrow">LEGAL & TRUST</p><h1>Terms of Service</h1><p>Website information is general guidance. A service engagement begins only after both parties agree the scope, deliverables, timeline, fees, ownership and responsibilities in writing.</p>
        <h2>Scope and outcomes</h2><p>Marketing results vary with competition, budget, offer, operations and customer demand. We do not guarantee rankings, review scores, lead volume, sales or a fixed return on ad spend.</p>
        <h2>Client responsibilities</h2><p>Clients provide accurate business information, approvals and lawful access to the systems needed for agreed work. Clients remain responsible for claims, offers, permissions and regulatory compliance relating to their business.</p>
        <h2>Ownership and handover</h2><p>Ownership of agreed, paid-for deliverables and the handover process will be described in the engagement terms. Third-party software remains subject to its own licence.</p>
      </article>
      <TrustLinks />
    </main>
  );
}
