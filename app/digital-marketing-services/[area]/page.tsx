/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { areas, areaBySlug } from "../../lib/areas";
import { cityBySlug, cities } from "../../lib/cities";
import { absoluteUrl, ORGANIZATION_ID, PRIMARY_ADDRESS } from "../../lib/site";
import CityPage, {
  generateMetadata as generateCityMetadata,
} from "../uttar-pradesh/[city]/page";

const wa =
  "https://wa.me/917080842220?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20a%20free%20local%20digital%20marketing%20audit.";
const serviceLinks = [
  [
    "SEO",
    "/seo-services-lucknow",
    "We improve technical foundations, service relevance and useful content around searches that real customers make. The goal is durable discovery, never artificial repetition or ranking promises.",
  ],
  [
    "Google Ads",
    "/google-ads-services",
    "We organise keywords, locations, schedules, negative terms and landing pages to reach active demand and reduce avoidable clicks.",
  ],
  [
    "Meta Ads",
    "/social-media-marketing-lucknow",
    "Facebook and Instagram campaigns introduce offers, retarget interest and create demand. We evaluate creative and audience choices against lead quality.",
  ],
  [
    "Social Media Marketing",
    "/social-media-marketing-lucknow",
    "Useful posts answer customer questions, show capability and make the next action clear. Relevant local reach matters more than vanity follower counts.",
  ],
  [
    "Website Design / Landing Pages",
    "/website-design",
    "Fast mobile pages explain the offer, remove hesitation and guide visitors toward a call, form or WhatsApp conversation.",
  ],
  [
    "Local SEO / Google Business Profile",
    "/seo-services-lucknow",
    "We review categories, services, photos, updates, reviews and website location signals while following Google’s policies.",
  ],
  [
    "Lead Generation / WhatsApp Funnel",
    "/lead-generation-lucknow",
    "Qualification questions, response templates, labels and follow-up steps help small teams handle enquiries faster and recognise useful prospects.",
  ],
];

const cleanAreaSlug = (routeSlug: string) =>
  routeSlug.endsWith("-lucknow") ? routeSlug.slice(0, -8) : routeSlug;
export function generateStaticParams() {
  return [
    ...areas.map((a) => ({ area: `${a.slug}-lucknow` })),
    ...cities.map((c) => ({ area: c.slug })),
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  if (cityBySlug(area))
    return generateCityMetadata({ params: Promise.resolve({ city: area }) });
  const a = areaBySlug(cleanAreaSlug(area));
  if (!a) return {};
  return {
    title: a.title,
    description: a.meta,
    alternates: { canonical: `/digital-marketing-services/${a.slug}-lucknow` },
    openGraph: {
      title: a.title,
      description: a.meta,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  if (cityBySlug(area))
    return CityPage({ params: Promise.resolve({ city: area }) });
  const a = areaBySlug(cleanAreaSlug(area));
  if (!a) notFound();
  if (!area.endsWith("-lucknow"))
    permanentRedirect(`/digital-marketing-services/${a.slug}-lucknow`);
  const url = absoluteUrl(`/digital-marketing-services/${a.slug}-lucknow`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: a.title,
    url,
    description: a.meta,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Place", name: `${a.name}, Lucknow` },
    serviceType: "Digital marketing services",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faqs.map(([q, ans]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: ans },
    })),
  };
  return (
    <main className="area-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
          <a href="/digital-marketing-services/">Lucknow Areas</a>
          <a href="/seo-services-lucknow">SEO</a>
          <a href="/contact">Contact</a>
        </div>
        <a className="button button-small" href={wa}>
          Free Audit ↗
        </a>
      </nav>
      <header className="area-hero">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/digital-marketing-services/">Digital Marketing Services</a>
          <span>›</span>
          {a.name}
        </div>
        <p className="eyebrow">
          LOCAL GROWTH • {a.name.toUpperCase()} • LUCKNOW
        </p>
        <h1>{a.title}</h1>
        <p className="area-lead">{a.opening}</p>
        <div className="hero-actions">
          <a className="button" href={wa}>
            Request a Free Local Audit ↗
          </a>
          <a className="text-link" href="#services">
            See Services ↓
          </a>
        </div>
      </header>
      <section className="area-section area-context">
        <div>
          <p className="section-kicker">LOCAL CONTEXT</p>
          <h2>Why businesses in {a.name} need digital marketing</h2>
        </div>
        <div>
          <p>
            Customers now move between offline recommendations, Google results,
            Maps, websites, social profiles and WhatsApp before deciding. A
            useful local strategy makes each of those steps consistent and gives
            the customer a clear reason to choose your business.
          </p>
          <ul className="check-list">
            {a.context.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <div className="need-grid">
            {a.needs.map((x, i) => (
              <article key={x}>
                <span>0{i + 1}</span>
                <p>{x}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="area-services" id="services">
        <div className="area-section-title">
          <p className="section-kicker light">
            SERVICES OFFERED IN {a.name.toUpperCase()}
          </p>
          <h2>A connected system from discovery to follow-up</h2>
          <p>
            Choose one urgent service or connect several channels around a
            single business goal. The right mix depends on competition, sales
            cycle, current assets and the team’s capacity to respond.
          </p>
        </div>
        <div className="area-service-grid">
          {serviceLinks.map(([name, href, copy], i) => (
            <article key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
              <a href={href}>Explore {name} ↗</a>
            </article>
          ))}
        </div>
      </section>
      <section className="area-section">
        <div>
          <p className="section-kicker">WHO WE HELP</p>
          <h2>Businesses we support in {a.name}</h2>
          <p className="muted">
            Our work is designed for businesses that need clearer visibility,
            better-quality enquiries and marketing they can eventually
            understand and operate.
          </p>
        </div>
        <div className="audience-list">
          {a.audiences.map((x, i) => (
            <div key={x}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <span>{x}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="pain-section">
        <div className="area-section-title">
          <p className="section-kicker">LOCALIZED PAIN POINTS</p>
          <h2>Where local marketing commonly breaks down</h2>
        </div>
        <div className="pain-cards">
          {a.pains.map((x, i) => (
            <article key={x}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <p>{x}</p>
            </article>
          ))}
        </div>
        <p className="bridge-copy">
          We solve these problems by connecting accurate local information,
          useful content, conversion-focused pages, relevant campaigns and a
          disciplined response process. We do not promise fixed rankings,
          instant sales or guaranteed lead quality. We improve the controllable
          parts and make performance easier to evaluate.
        </p>
      </section>
      <section className="area-section choose">
        <div>
          <p className="section-kicker">WHY CHOOSE SUDARSHAN AI LABS</p>
          <h2>Local understanding with practical execution</h2>
          <p className="muted">
            We are a Lucknow-based team serving MSMEs, startups and growing
            organisations. Our Build, Automate, Transfer approach is designed to
            create useful assets and reduce long-term dependency.
          </p>
        </div>
        <div className="advantage-list">
          {a.advantages.map((x, i) => (
            <article key={x}>
              <span>0{i + 1}</span>
              <div>
                <h3>{x}</h3>
                <p>
                  Every recommendation is prioritised against business goals,
                  available budget and the ability to handle new enquiries. You
                  receive straightforward explanations and ownership of the
                  agreed deliverables.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="area-faq">
        <div>
          <p className="section-kicker">FAQS</p>
          <h2>Questions from {a.name} businesses</h2>
        </div>
        <div>
          {a.faqs.map(([q, ans], i) => (
            <details key={q}>
              <summary>
                <span>
                  {i + 1}. {q}
                </span>
                <b>+</b>
              </summary>
              <p>{ans}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="area-cta">
        <p>FREE LOCAL DIGITAL MARKETING CONSULTATION</p>
        <h2>{a.cta}</h2>
        <span>{a.ctaText}</span>
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
          <h2>Local relevance</h2>
          <p>Recommendations are shaped around the customers, categories and service patterns described for {a.name}. We do not claim an office where none exists.</p>
        </div>
        <div>
          <h2>Next step</h2>
          <p>Share a real listing, website or campaign for a focused review before choosing a channel.</p>
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
          automation for Lucknow businesses.
        </p>
        <span>© 2026 Sudarshan AI Labs • {PRIMARY_ADDRESS}</span>
      </footer>
    </main>
  );
}
