import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import ProductIcon from "../_components/ProductIcon";
import { PRODUCTS } from "../lib/products-data";
import {
  CONTACT_EMAIL,
  PRIMARY_ADDRESS,
  SITE_URL,
  WHATSAPP_URL,
} from "../lib/site";
import { IDS, ref, SITE } from "../lib/schema";

export const metadata: Metadata = {
  title: "Products & Starter Plans for Business Growth",
  description:
    "Explore 22 verified digital marketing products, starter packs, website packages, and AI automations with transparent MRP and special offer prices for MSMEs.",
  alternates: { canonical: `${SITE_URL}/product-page` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Products & Starter Plans | Sudarshan AI Labs",
    description:
      "Explore 22 verified digital marketing products, starter packs, website packages, and AI automations with transparent MRP and special offer prices for MSMEs.",
    url: `${SITE_URL}/product-page`,
    type: "website",
    locale: "en_IN",
    siteName: "Sudarshan AI Labs",
    images: [
      {
        url: "/sudarshan-lucknow-hero.webp",
        width: 1672,
        height: 941,
        alt: "Sudarshan AI Labs Products and Starter Plans",
      },
    ],
  },
};

export default function ProductCatalogPage() {
  const catalogUrl = `${SITE_URL}/product-page`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${catalogUrl}#webpage`,
        url: catalogUrl,
        name: "Products & Starter Plans | Sudarshan AI Labs",
        description:
          "Complete catalogue of 22 verified digital marketing products, starter packs, and AI automations for MSMEs.",
        isPartOf: ref(IDS.website),
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Products & Starter Plans",
              item: catalogUrl,
            },
          ],
        },
      },
    ],
  };

  return (
    <main className="product-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Global Navigation Header */}
      <nav className="area-nav" aria-label="Product catalogue navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SUDARSHAN <b>AI LABS</b></span>
        </Link>
        <div>
          <Link href="/product-page">Products</Link>
          <Link href="/digital-marketing-services">Services</Link>
          <Link href="/about-sheevum-goel">Founder</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a
          className="button button-small"
          href={WHATSAPP_URL}
          title="Instant enquiry on WhatsApp"
          rel="noopener noreferrer"
        >
          Free Audit ↗
        </a>
      </nav>

      {/* Hero Header */}
      <header className="prod-cat-hero">
        <div className="prod-hero-container">
          <nav className="prod-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span aria-current="page">Products & Starter Plans</span>
          </nav>

          <span className="v-kicker">VERIFIED CATALOGUE & PRICING</span>
          <h1>Practical Growth Tools. <em>Transparent Starting Prices.</em></h1>
          <p className="prod-cat-lead">
            Every starter plan is built around real business outcomes—from instant Google Business Profile verification to complete ecommerce stores and AI chatbots. All 22 plans feature upfront MRP and subsidized offer pricing for MSMEs in Lucknow.
          </p>
        </div>
      </header>

      {/* Catalogue Grid */}
      <section className="prod-section prod-catalogue-section">
        <div className="prod-catalog-grid">
          {PRODUCTS.map((product, index) => (
            <article key={product.id} className="prod-catalog-card">
              <div className="prod-card-top">
                <div className="prod-card-icon-wrap">
                  <ProductIcon name={product.iconName} weight="duotone" />
                </div>
                <div className="prod-card-meta">
                  <span className="prod-index-badge">{String(index + 1).padStart(2, "0")} · {product.category}</span>
                  <span className="prod-discount-badge">{product.badge}</span>
                </div>
              </div>

              <h2 className="prod-card-title">{product.shortName}</h2>
              <p className="prod-card-subtitle">{product.newTitle}</p>
              <p className="prod-card-desc">{product.metaDescription}</p>

              <div className="prod-card-features">
                <ul>
                  {product.deliverables.slice(0, 3).map((item) => (
                    <li key={item}>
                      <CheckCircle weight="fill" className="prod-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prod-card-price-row">
                <div>
                  <small className="prod-card-mrp">MRP {product.mrp}</small>
                  <div className="prod-card-offer">
                    <span className="prod-card-price">{product.offerPrice}</span>
                    <span className="prod-savings-tag">{product.savings}</span>
                  </div>
                </div>
              </div>

              <div className="prod-card-actions">
                <Link href={product.href} className="button prod-details-btn">
                  View Plan & Scope <ArrowUpRight weight="bold" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="area-cta">
        <p>NEED GUIDANCE CHOOSING A STARTER PACK?</p>
        <h2>Connect with our strategy team in Lucknow.</h2>
        <span>Tell us about your business goals and current digital presence. We will suggest the exact pack to begin with.</span>
        <div>
          <a className="button" href={WHATSAPP_URL} rel="noopener noreferrer">
            Consult on WhatsApp ↗
          </a>
          <a className="cta-call" href={`mailto:${CONTACT_EMAIL}`}>
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="area-footer">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SUDARSHAN <b>AI LABS</b></span>
        </Link>
        <p>Digital visibility, conversion and practical growth tools for Lucknow MSMEs.</p>
        <nav aria-label="Legal">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
          <Link href="/refund-policy">Refunds</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <span>© 2026 Sudarshan AI Labs • {PRIMARY_ADDRESS}</span>
      </footer>
    </main>
  );
}
