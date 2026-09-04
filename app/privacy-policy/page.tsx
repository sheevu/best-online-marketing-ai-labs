import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, PRIMARY_ADDRESS } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Sudarshan AI Labs",
  description: "Privacy information for Sudarshan AI Labs website visitors and enquiries.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="service-owner legal-page">
      <nav className="area-nav" aria-label="Legal navigation"><Link className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></Link><Link className="button button-small" href="/contact">Contact</Link></nav>
      <article className="legal-copy">
        <p className="eyebrow">LEGAL & TRUST</p><h1>Privacy Policy</h1><p>We collect only the information you choose to share when you contact Sudarshan AI Labs, such as your name, business details, website, Google listing or preferred contact method.</p>
        <h2>How we use information</h2><p>We use enquiry details to respond, prepare an agreed audit or proposal, provide services and communicate about the requested work. We do not sell enquiry data.</p>
        <h2>Third-party services</h2><p>Links to WhatsApp, email, Google Maps and other services open those providers under their own policies. Do not send passwords, payment details or sensitive customer data through an introductory enquiry.</p>
        <h2>Contact</h2><p>For privacy questions, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Primary business location: {PRIMARY_ADDRESS}.</p>
      </article>
    </main>
  );
}
