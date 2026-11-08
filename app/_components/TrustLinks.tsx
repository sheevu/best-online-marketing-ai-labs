import Link from "next/link";
import { BLOG_PLAYBOOK_URL } from "../lib/site";

export default function TrustLinks() {
  return (
    <nav className="trust-links" aria-label="Site and legal links">
      <Link href="/digital-marketing-services">Lucknow services</Link>
      <Link href="/digital-marketing-services/uttar-pradesh">UP city directory</Link>
      <Link href="/about-sheevum-goel">Founder</Link>
      <Link href="/contact">Contact</Link>
      <a href={BLOG_PLAYBOOK_URL}>Blog Playbook</a>
      <Link href="/privacy-policy">Privacy</Link>
      <Link href="/terms-of-service">Terms</Link>
      <Link href="/refund-policy">Refunds</Link>
    </nav>
  );
}
