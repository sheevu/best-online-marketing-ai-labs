import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChartLineUp,
  Compass,
  GearSix,
  MagnifyingGlass,
  Sparkle,
  Target,
} from "@phosphor-icons/react/dist/ssr";
import {
  absoluteUrl,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  coreServiceLinks,
  ORGANIZATION_ID,
  PRIMARY_ADDRESS,
  STARTING_PRICE_INR,
  WHATSAPP_URL,
} from "../lib/site";

type Item = { title: string; text: string };
const outcomeIcons = [Target, MagnifyingGlass, ChartLineUp, Sparkle];
const processIcons = [Compass, GearSix, ChartLineUp, Sparkle];

export type ServicePageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  category?: string;
  primaryKeyword?: string;
  platforms?: string[];
  coreDeliverables?: string[];
  relatedKeywords?: string[];
  bestFor?: string;
  areaServed?: string;
  locationLabel?: string;
  locationHref?: string;
  fit: string[];
  outcomes: Item[];
  process: Item[];
  faqs: [string, string][];
  related?: [string, string][];
};

export function serviceMetadata(data: ServicePageData): Metadata {
  const url = `/${data.slug}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      type: "website",
      locale: "en_IN",
      siteName: "Sudarshan AI Labs",
      images: [
        {
          url: "/sudarshan-lucknow-hero.webp",
          width: 1672,
          height: 941,
          alt: `${data.h1} by Sudarshan AI Labs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/sudarshan-lucknow-hero.webp"],
    },
  };
}

export default function ServiceLandingPage({ data }: { data: ServicePageData }) {
  const url = absoluteUrl(`/${data.slug}`);
  const areaServed = data.areaServed
    ? [
        { "@type": "City", name: data.areaServed },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "Country", name: "India" },
      ]
    : [
        { "@type": "City", name: "Lucknow" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "Country", name: "India" },
      ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: data.h1,
    url,
    description: data.description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: CONTACT_PHONE,
      serviceUrl: url,
    },
    offers: {
      "@type": "Offer",
      price: STARTING_PRICE_INR,
      priceCurrency: "INR",
      description: "Projects from ₹4,900; final pricing depends on agreed scope.",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
      { "@type": "ListItem", position: 2, name: data.h1, item: url },
    ],
  };

  return (
    <main className="service-owner">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <nav className="area-nav" aria-label="Service navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SUDARSHAN <b>AI LABS</b></span>
        </Link>
        <div>
          <Link href="/digital-marketing-services">Services</Link>
          <Link href="/about-sheevum-goel">Founder</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a className="button button-small" href={WHATSAPP_URL}>Free Audit ↗</a>
      </nav>

      <header className="service-hero">
        <div className="service-hero-copy">
        <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/digital-marketing-services">Services</Link>{data.locationLabel && <><span>›</span><Link href={data.locationHref || "/digital-marketing-services/uttar-pradesh"}>{data.locationLabel}</Link></>}<span>›</span>{data.h1}</div>
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.h1}</h1>
        <p>{data.intro}</p>
        <div className="hero-actions">
          <a className="button" href={WHATSAPP_URL}>Request a Free Audit ↗</a>
          <a className="text-link" href="#deliverables">See what is included ↓</a>
        </div>
        </div>
        <aside className="service-hero-visual" aria-label="Illustrated founder of Sudarshan AI Labs">
          <div className="service-avatar-orb">
            <span className="service-avatar-label">BUILD<br />AUTOMATE<br />TRANSFER</span>
            <Image
              src="/sheevum-goel-avatar-cutout.webp"
              alt="Illustrated Sheevum Goel avatar"
              width={1120}
              height={1400}
              priority
            />
          </div>
          <div className="service-hero-chip">
            <span className="service-chip-dot" />
            <span><b>Founder-led systems</b><small>Useful, measurable, ownable</small></span>
          </div>
        </aside>
      </header>

      {(data.primaryKeyword || data.platforms || data.bestFor) && (
        <section className="service-facts" aria-label="Service details">
          {data.primaryKeyword && (
            <article>
              <span>PRIMARY SEARCH INTENT</span>
              <strong>{data.primaryKeyword}</strong>
            </article>
          )}
          {data.platforms && (
            <article>
              <span>PLATFORMS / CHANNELS</span>
              <strong>{data.platforms.join(" • ")}</strong>
            </article>
          )}
          {data.bestFor && (
            <article>
              <span>BEST FOR</span>
              <strong>{data.bestFor}</strong>
            </article>
          )}
        </section>
      )}

      <section className="service-fit">
        <div><p className="section-kicker">WHO THIS IS FOR</p><h2>A focused service for businesses ready to improve the complete customer journey.</h2></div>
        <ul>{data.fit.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="service-deliverables" id="deliverables">
        <div className="area-section-title"><p className="section-kicker light">DELIVERABLES</p><h2>What we examine, build and improve</h2><p>Scope is agreed from the audit. No guaranteed rankings, lead volumes or invented local proof.</p></div>
        <div className="service-card-grid">{data.outcomes.map((item, index) => {
          const Icon = outcomeIcons[index % outcomeIcons.length];
          return <article key={item.title}><div className="service-card-thumb"><span>{String(index + 1).padStart(2, "0")}</span><Image src="/sheevum-goel-avatar-cutout.webp" alt="" width={300} height={380} sizes="(max-width: 820px) 75vw, 25vw" /></div><span className="glossy-icon" aria-hidden="true"><Icon weight="duotone" /></span><h3>{item.title}</h3><p>{item.text}</p></article>;
        })}</div>
        {data.relatedKeywords && (
          <div className="service-keywords">
            <span>RELATED SEARCHES</span>
            <p>{data.relatedKeywords.join(" • ")}</p>
          </div>
        )}
      </section>

      <section className="service-process">
        <div><p className="section-kicker">BUILD • AUTOMATE • TRANSFER</p><h2>A practical process your team can understand and own.</h2></div>
        <div>{data.process.map((item, index) => {
          const Icon = processIcons[index % processIcons.length];
          return <article key={item.title}><span className="glossy-icon" aria-hidden="true"><Icon weight="duotone" /></span><b>{String(index + 1).padStart(2, "0")}</b><h3>{item.title}</h3><p>{item.text}</p></article>;
        })}</div>
      </section>

      <section className="area-faq">
        <div><p className="section-kicker">SERVICE FAQ</p><h2>Questions before you begin</h2></div>
        <div>{data.faqs.map(([question, answer]) => <details key={question}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="service-links">
        <div><p className="section-kicker">CONNECTED SERVICES</p><h2>Choose one clear owner page for each need.</h2></div>
        <nav>{(data.related ?? coreServiceLinks).filter(([, href]) => href !== `/${data.slug}`).map(([label, href], index) => <Link key={href} href={href}><span className="service-related-thumb"><Image src="/sheevum-goel-avatar-cutout.webp" alt="" width={100} height={120} sizes="100px" /></span><strong>{label}</strong><span className="service-related-arrow">{String(index + 1).padStart(2, "0")} ↗</span></Link>)}</nav>
        <nav className="site-hub-links" aria-label="Explore Sudarshan AI Labs">
          <Link href="/digital-marketing-services">All Lucknow services</Link>
          <Link href="/digital-marketing-services/uttar-pradesh">Uttar Pradesh city directory</Link>
          <Link href="/about-sheevum-goel">Founder profile</Link>
          <Link href="/contact">Contact Sudarshan AI Labs</Link>
        </nav>
      </section>

      <section className="area-cta">
        <p>FREE 20-MINUTE DIGITAL GROWTH AUDIT</p>
        <h2>Start with the highest-impact gap, not the longest agency checklist.</h2>
        <span>Share your website, Google listing or current process. We will identify the first three priorities and explain the realistic next step.</span>
        <div><a className="button" href={WHATSAPP_URL}>Start on WhatsApp ↗</a><a className="cta-call" href={`mailto:${CONTACT_EMAIL}`}>Email {CONTACT_EMAIL}</a></div>
      </section>

      <footer className="area-footer"><Link className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></Link><p>Digital visibility, conversion and practical AI systems for Lucknow MSMEs.</p><nav aria-label="Legal"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/refund-policy">Refunds</Link><Link href="/contact">Contact</Link></nav><span>© 2026 Sudarshan AI Labs • {PRIMARY_ADDRESS}</span></footer>
    </main>
  );
}
