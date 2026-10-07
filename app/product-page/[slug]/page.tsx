import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
  Clock,
  ShieldCheck,
  Sparkle,
  Tag,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import ProductIcon from "../../_components/ProductIcon";
import {
  PRODUCTS,
  getProductBySlug,
} from "../../lib/products-data";
import {
  CONTACT_EMAIL,
  PRIMARY_ADDRESS,
  SITE_URL,
  WHATSAPP_URL,
} from "../../lib/site";
import { IDS, ref, SITE } from "../../lib/schema";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const cleanTitle = product.seoTitle.replace(/\s*\|\s*Sudarshan AI Labs.*$/i, "").trim();
  const brandedTitle = `${cleanTitle} | Sudarshan AI Labs`;
  const conciseTitle = brandedTitle.length > 60
    ? product.shortName
    : cleanTitle;
  const conciseDescription = product.metaDescription.length > 155
    ? `${product.metaDescription.slice(0, 152).replace(/[\s,;:.-]+$/, "")}...`
    : product.metaDescription;
  const canonicalUrl = `${SITE_URL}/${product.urlSlug}`;

  return {
    title: { absolute: `${conciseTitle} | Sudarshan AI Labs` },
    description: conciseDescription,
    alternates: { canonical: canonicalUrl },
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
      title: `${conciseTitle} | Sudarshan AI Labs`,
      description: conciseDescription,
      url: canonicalUrl,
      type: "website",
      locale: "en_IN",
      siteName: "Sudarshan AI Labs",
      images: [
        {
          url: "/sudarshan-lucknow-hero.webp",
          width: 1672,
          height: 941,
          alt: `${product.brandTitle} by Sudarshan AI Labs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${conciseTitle} | Sudarshan AI Labs`,
      description: conciseDescription,
      images: ["/sudarshan-lucknow-hero.webp"],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productUrl = `${SITE_URL}/${product.urlSlug}`;
  const whatsappOrderUrl = `https://api.whatsapp.com/send/?phone=918737086884&text=${encodeURIComponent(
    `Hi Sudarshan AI Labs, I am interested in ${product.brandTitle} at the special offer price of ${product.offerPrice}. Please share details and the onboarding checklist.`
  )}`;

  // Related products from the same or complementary categories
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.category === "Starter Packs")
  ).slice(0, 3);

  // Structured Data Schema
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        name: product.brandTitle,
        description: product.metaDescription,
        sku: `SAL-${product.id}`,
        category: product.category,
        image: `${SITE_URL}/sudarshan-lucknow-hero.webp`,
        brand: ref(IDS.organization),
        offers: {
          "@type": "Offer",
          "@id": `${productUrl}#offer`,
          url: productUrl,
          priceCurrency: "INR",
          price: product.offerNumeric,
          priceValidUntil: "2026-12-31",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          seller: ref(IDS.organization),
          priceSpecification: {
            "@type": "PriceSpecification",
            price: product.offerNumeric,
            priceCurrency: "INR",
            valueAddedTaxIncluded: true,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${productUrl}#breadcrumb`,
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
            item: `${SITE}/product-page`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.shortName,
            item: productUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${productUrl}#faq`,
        mainEntity: product.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
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
      <nav className="area-nav" aria-label="Product navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SUDARSHAN <b>AI LABS</b></span>
        </Link>
        <div>
          <Link href="/product-page">All Products</Link>
          <Link href="/digital-marketing-services">Services</Link>
          <Link href="/about-sheevum-goel">Founder</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a
          className="button button-small"
          href={whatsappOrderUrl}
          title="Instant enquiry on WhatsApp"
          rel="noopener noreferrer"
        >
          Instant Offer ↗
        </a>
      </nav>

      {/* Hero Section */}
      <header className="prod-hero">
        <div className="prod-hero-container">
          <nav className="prod-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/product-page">Products</Link>
            <span>›</span>
            <span aria-current="page">{product.shortName}</span>
          </nav>

          <div className="prod-hero-grid">
            <div className="prod-hero-info">
              <div className="prod-badges">
                <span className="prod-category-tag">{product.category}</span>
                <span className="prod-discount-tag">{product.badge}</span>
                <span className="prod-id-tag">ID: {product.id}</span>
              </div>

              <h1 className="prod-title">{product.brandTitle}</h1>
              <p className="prod-desc">{product.metaDescription}</p>

              <div className="prod-highlights-box">
                <h3>What You Get in This Pack:</h3>
                <ul>
                  {product.deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle weight="fill" className="prod-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prod-trust-signals">
                <div>
                  <Clock weight="duotone" />
                  <span>24–72h Fast Setup</span>
                </div>
                <div>
                  <ShieldCheck weight="duotone" />
                  <span>100% Asset Ownership</span>
                </div>
                <div>
                  <Sparkle weight="duotone" />
                  <span>No Recurring Lock-in</span>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <aside className="prod-pricing-card">
              <div className="prod-pricing-header">
                <div className="prod-pricing-icon">
                  <ProductIcon name={product.iconName} weight="duotone" />
                </div>
                <div>
                  <span className="prod-plan-kicker">VERIFIED BRAND OFFER</span>
                  <h2>{product.shortName}</h2>
                </div>
              </div>

              <div className="prod-price-box">
                <div className="prod-mrp-row">
                  <span className="prod-mrp-label">Original MRP:</span>
                  <span className="prod-mrp-value">{product.mrp}</span>
                </div>
                <div className="prod-offer-row">
                  <span className="prod-offer-label">Special Offer:</span>
                  <span className="prod-offer-price">{product.offerPrice}</span>
                </div>
                <div className="prod-savings-pill">
                  <Tag weight="bold" />
                  <span>{product.savings} ({product.discountPercent}% Instant Discount)</span>
                </div>
              </div>

              <p className="prod-pricing-subtext">
                One-time transparent pricing for Lucknow & Uttar Pradesh MSMEs. Full setup, verification & guidance included.
              </p>

              <div className="prod-cta-actions">
                <a
                  className="button prod-whatsapp-btn"
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo weight="fill" />
                  <span>Claim Offer on WhatsApp ↗</span>
                </a>
                <a
                  className="text-link prod-call-btn"
                  href={WHATSAPP_URL}
                >
                  Request Customized Scope ↓
                </a>
              </div>

              <div className="prod-card-footer">
                <small>Bilingual Support • Hindi & English • Direct Founder Guidance</small>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* In-depth details & specifications */}
      <section className="prod-section prod-details-section">
        <div className="prod-section-header">
          <span className="v-kicker">SPECIFICATIONS & SCOPE</span>
          <h2>Comprehensive Scope of {product.shortName}</h2>
          <p>
            Every product plan is engineered with transparent deliverables to solve real discoverability and conversion bottlenecks.
          </p>
        </div>

        <div className="prod-specs-grid">
          <article className="prod-spec-card">
            <h3>Primary Objective</h3>
            <p>{product.longDescription}</p>
          </article>
          <article className="prod-spec-card">
            <h3>Target Audience & Best For</h3>
            <p>{product.bestFor}. Designed for businesses seeking high-intent local customer discovery without wasteful retainers.</p>
          </article>
          <article className="prod-spec-card">
            <h3>Search & Discoverability Keywords</h3>
            <div className="prod-keywords-pills">
              <span className="prod-kw-main">{product.primaryKeyword}</span>
              {product.secondaryKeywords.map((kw) => (
                <span key={kw} className="prod-kw-secondary">{kw}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="prod-section prod-why-us">
        <div className="prod-section-header">
          <span className="v-kicker light">THE SUDARSHAN DIFFERENCE</span>
          <h2>Why Businesses in Lucknow Trust Sudarshan AI Labs</h2>
        </div>
        <div className="prod-why-grid">
          <div className="prod-why-card">
            <span className="prod-why-num">01</span>
            <h3>No Lock-in Retainers</h3>
            <p>You pay for tangible, working assets that belong exclusively to you. No hidden monthly hostage fees or proprietary lock-in.</p>
          </div>
          <div className="prod-why-card">
            <span className="prod-why-num">02</span>
            <h3>Real Commercial Signals</h3>
            <p>We build systems for real enquiries—phone calls, store visits, and WhatsApp conversations—not misleading vanity impressions.</p>
          </div>
          <div className="prod-why-card">
            <span className="prod-why-num">03</span>
            <h3>Speed & Agility</h3>
            <p>While traditional agencies take 4–6 weeks for simple onboarding, our streamlined starter packs are live in 24 to 72 hours.</p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="prod-section prod-faq-section">
        <div className="prod-section-header">
          <span className="v-kicker">CLARITY FIRST</span>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about scope, delivery timelines, and post-launch support.</p>
        </div>
        <div className="prod-faqs-container">
          {product.faqs.map(([q, a]) => (
            <details key={q} className="prod-faq-item">
              <summary>
                <span>{q}</span>
                <span className="prod-faq-icon">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <section className="prod-section prod-related-section">
          <div className="prod-section-header">
            <span className="v-kicker">EXPAND YOUR STACK</span>
            <h2>Complementary Starter Packs & Tools</h2>
          </div>
          <div className="prod-related-grid">
            {relatedProducts.map((rel) => (
              <article key={rel.id} className="prod-related-card">
                <div className="prod-rel-top">
                  <span className="prod-rel-category">{rel.category}</span>
                  <span className="prod-rel-badge">{rel.badge}</span>
                </div>
                <h3>{rel.shortName}</h3>
                <p>{rel.metaDescription}</p>
                <div className="prod-rel-price">
                  <small>Offer Price</small>
                  <span className="price-bold">{rel.offerPrice}</span>
                  <span className="prod-rel-mrp">{rel.mrp}</span>
                </div>
                <Link href={rel.href} className="button button-small prod-rel-link">
                  View Plan <ArrowUpRight weight="bold" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Conversion Banner */}
      <section className="area-cta">
        <p>FAST ONBOARDING • VERIFIED PRICING</p>
        <h2>Ready to activate {product.shortName}?</h2>
        <span>Connect directly with our team in Lucknow on WhatsApp or email to lock in this special offer price.</span>
        <div>
          <a
            className="button"
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start on WhatsApp ({product.offerPrice}) ↗
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
          <Link href="/product-page">All Products</Link>
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
