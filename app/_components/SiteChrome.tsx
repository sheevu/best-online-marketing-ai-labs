import {
  BLOG_PLAYBOOK_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  coreServiceLinks,
  LEGAL_NAME,
  MAP_URL,
  PRIMARY_ADDRESS,
  WHATSAPP_URL,
} from "../lib/site";

const locationLinks = [
  ["Lucknow service areas", "/digital-marketing-services"],
  ["Uttar Pradesh cities", "/digital-marketing-services/uttar-pradesh"],
] as const;

function ServicesMenu() {
  return <details className="global-nav-group">
    <summary>Services</summary>
    <div className="global-nav-panel">
      {coreServiceLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      <a href="/product-page">Plans from ₹89</a>
    </div>
  </details>;
}

function LocationsMenu() {
  return <details className="global-nav-group">
    <summary>Locations</summary>
    <div className="global-nav-panel">
      {locationLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
    </div>
  </details>;
}

export default function SiteChrome({ position }: { position: "header" | "footer" }) {
  if (position === "header") return <header className="global-site-header">
    <a className="global-site-brand" href="/" aria-label="Sudarshan AI Labs home">
      <img src="/favicon.svg" width="42" height="42" alt="" />
      <span><span>SUDARSHAN <b>AI LABS</b></span><small>Practical AI & digital growth</small></span>
    </a>
    <nav className="global-site-nav" aria-label="Primary navigation">
      <ServicesMenu />
      <a href="/product-page">Plans</a>
      <LocationsMenu />
      <details className="global-nav-group">
        <summary>About</summary>
        <div className="global-nav-panel">
          <a href="/about-sheevum-goel">Founder</a>
          <a href={BLOG_PLAYBOOK_URL}>Guides & articles</a>
        </div>
      </details>
      <a href="/contact">Contact</a>
      <a className="global-site-cta" href={WHATSAPP_URL}>Free growth audit <span aria-hidden="true">↗</span></a>
    </nav>
    <details className="global-mobile-menu">
      <summary aria-label="Open site navigation"><span aria-hidden="true">☰</span> Menu</summary>
      <nav aria-label="Mobile navigation">
        <ServicesMenu />
        <a href="/product-page">Plans from ₹89</a>
        <LocationsMenu />
        <a href="/about-sheevum-goel">Founder</a>
        <a href={BLOG_PLAYBOOK_URL}>Guides & articles</a>
        <a href="/contact">Contact</a>
        <a className="mobile-menu-cta" href={WHATSAPP_URL}>Free growth audit ↗</a>
      </nav>
    </details>
  </header>;

  return <footer className="global-site-footer">
    <div className="global-footer-top">
      <div>
        <a className="global-site-brand" href="/">
          <img src="/favicon.svg" width="42" height="42" alt="" />
          <span><span>SUDARSHAN <b>AI LABS</b></span><small>Practical AI & digital growth</small></span>
        </a>
        <p>Local SEO, websites, lead generation and practical AI automation for businesses in Lucknow and across India.</p>
        <a className="global-footer-map" href={MAP_URL} target="_blank" rel="noopener noreferrer">{PRIMARY_ADDRESS} <span aria-hidden="true">↗</span></a>
      </div>
      <nav aria-label="Popular services">
        <b>Popular services</b>
        {coreServiceLinks.slice(0, 5).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a href="/product-page">Plans from ₹89</a>
      </nav>
      <nav aria-label="Company and contact">
        <b>Company</b>
        <a href="/about-sheevum-goel">Founder & experience</a>
        <a href={BLOG_PLAYBOOK_URL}>Guides & articles</a>
        <a href="/contact">Contact</a>
        <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <a href="/privacy-policy">Privacy</a>
        <a href="/terms-of-service">Terms</a>
        <a href="/refund-policy">Refunds</a>
      </nav>
    </div>
    <div className="global-footer-bottom">
      <small>© 2026 Sudarshan AI Labs · {LEGAL_NAME}</small>
      <a className="global-preferred-source" href="https://www.google.com/preferences/source?q=sudarshan-ai.com" target="_blank" rel="noopener noreferrer">★ Add us as a preferred source on Google ↗</a>
    </div>
  </footer>;
}
