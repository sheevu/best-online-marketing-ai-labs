/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, cityBySlug } from "../../../lib/cities";
import { absoluteUrl, ORGANIZATION_ID, PRIMARY_ADDRESS } from "../../../lib/site";

const wa = "https://wa.me/message/GWOSMDL3UO6OH1";
const ecosystem = [
  ["Contact Sudarshan AI Labs", "/contact"],
  ["Read Growth Insights", "https://medium.com/@sheevumgoel"],
  [
    "Talk to Leeila AI",
    "https://agent.jotform.com/019aa7fd4aaa7cccb0ce1b2c0748666c3478",
  ],
  ["Follow on LinkedIn", "https://www.linkedin.com/company/sudarshan-ai-labs/"],
  ["Save Ideas on Pinterest", "https://pinterest.com/ailabslucknow"],
  [
    "Visit Our Google Site",
    "/digital-marketing-services",
  ],
  ["Follow on Instagram", "https://www.instagram.com/surdarshanlabs"],
  ["Join on Facebook", "https://www.facebook.com/sudarshanlabsinc"],
  ["Watch on YouTube", "https://www.youtube.com/@sheevumgoel"],
  ["View Pricing Styles", "https://widgets-pricing-plan-2026.pages.dev/"],
  ["Browse AI Templates", "https://gemini-hub-templates-lucknow.netlify.app/"],
];
const serviceHref: Record<string, string> = {
  SEO: "/seo-services-lucknow",
  "Google Ads": "/google-ads-services",
  "Meta Ads": "/social-media-marketing-lucknow",
  "Social Media Marketing": "/social-media-marketing-lucknow",
  "Website Design / Landing Pages": "/website-design",
  "Local SEO / Google Business Profile": "/seo-services-lucknow",
  "Lead Generation / WhatsApp Funnel": "/lead-generation-lucknow",
};

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}
const fittedTitle = (title: string, city: string) =>
  title.length <= 60
    ? title
    : `Digital Marketing Services in ${city} | Growth Agency`;
const fittedMeta = (meta: string) => {
  if (meta.length > 155) {
    const cut = meta.slice(0, 152);
    return cut.slice(0, cut.lastIndexOf(" ")) + ".";
  }
  if (meta.length < 128) return meta + " Request a free audit.";
  if (meta.length < 135) return meta + " Get a free audit.";
  if (meta.length < 140) return meta + " Free audit.";
  return meta;
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) return {};
  const title = fittedTitle(c.title, c.name),
    description = fittedMeta(c.meta),
    url = `/digital-marketing-services/${c.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "website", locale: "en_IN", url },
    twitter: { card: "summary_large_image", title, description },
    keywords: [
      c.primaryKeyword,
      `SEO services in ${c.name}`,
      `Google Ads agency in ${c.name}`,
      `local business marketing in ${c.name}`,
      `lead generation services in ${c.name}`,
    ],
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) notFound();
  const url = absoluteUrl(`/digital-marketing-services/${c.slug}`);
  const cityIndex = Math.max(
    0,
    cities.findIndex((x) => x.slug === c.slug),
  );
  const featured = Array.from(
    { length: 4 },
    (_, i) => ecosystem[(cityIndex * 3 + i) % ecosystem.length],
  );
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: c.h1,
    url,
    description: c.meta,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "City",
      name: c.name,
      containedInPlace: { "@type": "State", name: "Uttar Pradesh" },
    },
    serviceType: "Digital marketing services",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <main className="city-page area-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <nav className="area-nav">
        <a className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>
            SUDARSHAN <b>AI LABS</b>
          </span>
        </a>
        <div>
          <a href="/digital-marketing-services/uttar-pradesh/">UP Cities</a>
          <a href="/digital-marketing-services/">Lucknow Areas</a>
          <a href="/contact">Contact</a>
        </div>
        <a className="button button-small" href={wa}>
          Free Audit ↗
        </a>
      </nav>
      <header className="area-hero city-hero">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/digital-marketing-services/uttar-pradesh/">Uttar Pradesh</a>
          <span>›</span>
          {c.name}
        </div>
        <p className="eyebrow">
          LOCAL GROWTH • {c.name.toUpperCase()} • UTTAR PRADESH
        </p>
        <h1>{c.h1}</h1>
        <p className="area-lead">{c.intro}</p>
        <div className="hero-actions">
          <a className="button" href={wa}>
            Request a Free City Audit ↗
          </a>
          <a className="text-link" href="#services">
            Explore Services ↓
          </a>
        </div>
      </header>
      <section className="area-section area-context">
        <div>
          <p className="section-kicker">WHY DIGITAL NOW</p>
          <h2>Why businesses in {c.name} need digital marketing</h2>
        </div>
        <div>
          <p className="city-need">{c.need}</p>
          <p>
            A strong local presence connects search visibility, trust, campaign
            targeting and fast follow-up. It gives owners clearer performance
            signals than isolated promotions and helps customers move from
            discovery to a useful conversation.
          </p>
        </div>
      </section>
      <section className="industry-section">
        <div className="area-section-title">
          <p className="section-kicker">CITY BUSINESS LANDSCAPE</p>
          <h2>Key industries and business types in {c.name}</h2>
        </div>
        <div className="industry-grid">
          {c.industries.map((x, i) => {
            const [name, ...rest] = x.split(":");
            return (
              <article key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <p>{rest.join(":").trim()}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="pain-section">
        <div className="area-section-title">
          <p className="section-kicker">LOCALIZED PAIN POINTS</p>
          <h2>Challenges limiting growth in {c.name}</h2>
        </div>
        <div className="city-pain-list">
          {c.pains.map((x, i) => (
            <article key={x}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <p>{x}</p>
            </article>
          ))}
        </div>
        <p className="bridge-copy">
          These issues are addressed through accurate local information,
          relevant content, conversion-focused pages, careful targeting and an
          organised response process. Rankings, lead volume and sales vary by
          competition, budget, offer and execution, so we do not promise
          guaranteed positions or outcomes.
        </p>
      </section>
      <section className="area-services" id="services">
        <div className="area-section-title">
          <p className="section-kicker light">
            SERVICES OFFERED IN {c.name.toUpperCase()}
          </p>
          <h2>One connected customer-acquisition system</h2>
          <p>
            Each channel has a specific job. We select and connect the channels
            that match your audience, sales cycle and capacity instead of
            prescribing the same package to every business.
          </p>
        </div>
        <div className="area-service-grid">
          {c.services.map((s, i) => (
            <article key={s.name}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.name}</h3>
              <p>{s.copy}</p>
              <a href={serviceHref[s.name] || "/contact"}>
                Explore {s.name} ↗
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="area-section choose">
        <div>
          <p className="section-kicker">WHO WE HELP</p>
          <h2>Built for serious {c.name} businesses</h2>
          <p className="muted">{c.who}</p>
        </div>
        <div>
          <div className="choice-callout">
            <span>WHY CHOOSE US FOR {c.name.toUpperCase()}</span>
            <p>{c.why}</p>
          </div>
          <div className="method-row">
            <article>
              <b>01</b>
              <h3>Audit</h3>
              <p>Review visibility, competitors and enquiry flow.</p>
            </article>
            <article>
              <b>02</b>
              <h3>Prioritise</h3>
              <p>Choose actions tied to a measurable business need.</p>
            </article>
            <article>
              <b>03</b>
              <h3>Build & improve</h3>
              <p>Launch, measure and refine the connected system.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="area-faq">
        <div>
          <p className="section-kicker">CITY-SPECIFIC FAQS</p>
          <h2>Questions from {c.name} businesses</h2>
        </div>
        <div>
          {c.faqs.map(([q, a], i) => (
            <details key={q}>
              <summary>
                <span>
                  {i + 1}. {q}
                </span>
                <b>+</b>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="city-ecosystem">
        <div>
          <p className="section-kicker">MORE WAYS TO GROW</p>
          <h2>Explore the Sudarshan AI Labs ecosystem</h2>
          <p>
            Get practical insights, AI assistance, useful templates and brand
            updates through the channel that works best for you.
          </p>
        </div>
        <div>
          {featured.map(([label, href]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer">
              <span>{label}</span>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>
      <section className="area-cta">
        <p>FREE DIGITAL PERFORMANCE REVIEW</p>
        <h2>{c.ctaHeadline}</h2>
        <span>{c.ctaText}</span>
        <div>
          <a className="button" href={wa}>
            Start on WhatsApp ↗
          </a>
          <a className="cta-call" href="tel:+917080842220">
            Call +91 70808 42220
          </a>
        </div>
      </section>
      <section className="seo-notes">
        <div>
          <h2>Explore services</h2>
          <nav>
            <a href="/digital-marketing-services/">
              Digital Marketing Services
            </a>
            <a href="/seo-services-lucknow">SEO Services</a>
            <a href="/google-ads-services">Google Ads Services</a>
            <a href="/social-media-marketing-lucknow">Social Media Marketing</a>
            <a href="/lead-generation-lucknow">Lead Generation</a>
            <a href="/ai-automation-lucknow">AI Automation</a>
          </nav>
        </div>
        <div>
          <h2>Service-area clarity</h2>
          <p>Support is available remotely for suitable businesses in {c.name}. This page does not claim a physical office in the city.</p>
        </div>
        <div>
          <h2>Coverage</h2>
          <p>
            Serving businesses in {c.name}, wider Uttar Pradesh and across India
            through remote collaboration.
          </p>
        </div>
      </section>
      <footer className="area-footer">
        <a className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>
            SUDARSHAN <b>AI LABS</b>
          </span>
        </a>
        <p>
          Digital marketing, Local SEO, websites, paid campaigns and practical
          automation for Uttar Pradesh businesses.
        </p>
        <span>© 2026 Sudarshan AI Labs • {PRIMARY_ADDRESS}</span>
      </footer>
    </main>
  );
}
