import Link from "next/link";

export default function TrustLinks() {
  return (
    <nav className="trust-links" aria-label="Site and legal links">
      <Link href="/digital-marketing-services">Lucknow services</Link>
      <Link href="/digital-marketing-services/uttar-pradesh">UP city directory</Link>
      <Link href="/about-sheevum-goel">Founder</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/privacy-policy">Privacy</Link>
      <Link href="/terms-of-service">Terms</Link>
      <Link href="/refund-policy">Refunds</Link>
    </nav>
  );
}
