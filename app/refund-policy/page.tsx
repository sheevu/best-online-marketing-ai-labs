import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Refund Policy | Sudarshan AI Labs", description: "Refund and cancellation information for Sudarshan AI Labs engagements.", alternates: { canonical: "/refund-policy" } };

export default function RefundPolicy() {
  return (
    <main className="service-owner legal-page">
      <nav className="area-nav" aria-label="Legal navigation"><Link className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></Link><Link className="button button-small" href="/contact">Contact</Link></nav>
      <article className="legal-copy">
        <p className="eyebrow">LEGAL & TRUST</p><h1>Refund Policy</h1><p>Refund and cancellation terms are confirmed with the written scope before paid work begins. If a project has not started, contact us promptly so the agreed cancellation terms can be reviewed.</p>
        <h2>Started work</h2><p>Once research, strategy, design, development, content production or setup has started, fees for work completed and approved third-party costs are non-refundable unless the written engagement says otherwise.</p>
        <h2>Service concerns</h2><p>Tell us about a delivery concern as soon as possible. We will review the agreed scope, identify what remains and propose a reasonable correction or handover plan.</p>
        <h2>Contact</h2><p>For a refund or cancellation question, use the <Link href="/contact">Contact page</Link> and include the project name and invoice or proposal reference.</p>
      </article>
    </main>
  );
}
