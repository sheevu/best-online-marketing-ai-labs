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
import { serializeJsonLd } from "../../_components/StructuredData";
import {
  PRODUCTS,
  getProductBySlug,
} from "../../lib/products-data";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
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

  const conciseTitle = product.shortName;
  const conciseDescription = `${product.newTitle}. Confirm the scope and any recurring charges before ordering.`.slice(0, 155);
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
          alt: `${product.shortName} by Sudarshan AI Labs`,
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
  const publicDescription = `${product.newTitle}. Confirm the scope and any recurring charges before ordering.`;
  const publicFaqs: [string, string][] = [
    [`What is included in ${product.shortName}?`, `${product.deliverables.slice(0, 4).join("; ")}. The final scope is confirmed before ordering.`],
    ["How long does delivery take?", "Timing depends on the agreed scope and when required content, access and approvals are available. We confirm timing before work begins."],
    ["What price applies?", `The current listed offer is ₹${product.offerNumeric.toLocaleString("en-IN")}. Any recurring charges, platform fees, ad spend or exclusions are confirmed before ordering.`],
    [`Who is ${product.shortName} for?`, `${product.bestFor}. Share your requirements to confirm whether the listed scope fits your business.`],
  ];
  const whatsappOrderUrl = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi Sudarshan AI Labs, I am interested in ${product.shortName} at the listed price of ${product.offerPrice}. Please confirm the scope and any additional charges.`
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
        name: product.shortName,
        description: publicDescription,
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
        mainEntity: publicFaqs.map(([question, answer]) => ({
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />

      {/* Global Navigation Header */}
      <nav className="area-nav" aria-label="Product navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SUDARSHAN <span className="v-brand-bold">AI LABS</span></span>
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

              <h1 className="prod-title">{product.shortName}</h1>
              <p className="prod-desc">{publicDescription}</p>

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
                  <span>Timing confirmed before work</span>
                </div>
                <div>
                  <ShieldCheck weight="duotone" />
                  <span>Clear scope and handover</span>
                </div>
                <div>
                  <Sparkle weight="duotone" />
                  <span>Hindi and English support</span>
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
                  <span className="prod-plan-kicker">CURRENT LISTED OFFER</span>
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
                Confirm what is included, the timeline, and any recurring or third-party charges before ordering.
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
                <small>Hindi & English support • Scope confirmed before work begins</small>
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
            <ul>{product.deliverables.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="prod-spec-card">
            <h3>Target Audience & Best For</h3>
            <p>{product.bestFor}.</p>
          </article>
          <article className="prod-spec-card">
            <h3>Before you order</h3>
            <p>Confirm the deliverables, timeline, access requirements, recurring costs and third-party fees in writing.</p>
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
            <h3>Clear ownership and terms</h3>
            <p>Confirm asset ownership, deliverables, recurring fees and cancellation terms before work begins.</p>
          </div>
          <div className="prod-why-card">
            <span className="prod-why-num">02</span>
            <h3>Agreed measurement</h3>
            <p>Choose relevant measures for the work, such as search visibility, site enquiries, calls or campaign activity.</p>
          </div>
          <div className="prod-why-card">
            <span className="prod-why-num">03</span>
            <h3>Delivery expectations</h3>
            <p>Timing depends on scope, required access and approvals. We confirm a delivery plan before work begins.</p>
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
          {publicFaqs.map(([q, a]) => (
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
                <p>{rel.newTitle}. For {rel.bestFor.toLowerCase()}.</p>
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
          <span>SUDARSHAN <span className="v-brand-bold">AI LABS</span></span>
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
