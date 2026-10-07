import type { Metadata } from "next";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  PRIMARY_ADDRESS,
  SITE_URL,
} from "../lib/site";
import { IDS, ref, SITE } from "../lib/schema";

const OFFER_URL = `${SITE_URL}/offer-lucknow-marketing-services`;
const CHALLENGE_WHATSAPP =
  "https://wa.me/917887222247?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20have%20an%20agency%20quote%20and%20want%20to%20take%20the%20Challenge%20Sudarshan%20offer.";

export const metadata: Metadata = {
  title: { absolute: "Beat Any Agency Quote | Sudarshan AI Labs" },
  description:
    "Got a digital marketing quote in Lucknow? Share the scope with Sudarshan AI Labs for a clear, sharper counterproposal. No obligation.",
  alternates: { canonical: OFFER_URL },
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
    title: "“Bring Any Agency Quote. We’ll Beat It.” — Challenge Sudarshan",
    description:
      "Same scope or better, at a sharper price. Bring any digital marketing agency quote in Lucknow to Sudarshan AI Labs.",
    url: OFFER_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Sudarshan AI Labs",
    images: [
      {
        url: "/offer-lucknow-marketing-services.webp",
        width: 1024,
        height: 576,
        alt: "Bring Any Agency Quote. We’ll Beat It. — Challenge Sudarshan Offer",
      },
    ],
  },
};

export default function OfferLucknowMarketingServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${OFFER_URL}#webpage`,
        url: OFFER_URL,
        name: "“Bring Any Agency Quote. We’ll Beat It.” | Lucknow Marketing Offer",
        description:
          "Exclusive price-match and scope-beat guarantee for digital marketing services in Lucknow, Uttar Pradesh.",
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
              name: "Marketing Services Offer Lucknow",
              item: OFFER_URL,
            },
          ],
        },
      },
      {
        "@type": "SpecialAnnouncement",
        "@id": `${OFFER_URL}#announcement`,
        name: "Challenge Sudarshan — Bring Any Agency Quote. We’ll Beat It.",
        text: "Same scope or better, at a sharper price for MSMEs and businesses in Lucknow and Uttar Pradesh.",
        url: OFFER_URL,
        category: "https://schema.org/SpecialAnnouncement",
      },
    ],
  };

  return (
    <main className="product-page-wrapper offer-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Global Navigation Header */}
      <nav className="area-nav" aria-label="Offer navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SUDARSHAN AI LABS</span>
        </Link>
        <div>
          <Link href="/product-page">Products</Link>
          <Link href="/digital-marketing-services">Services</Link>
          <Link href="/about-sheevum-goel">Founder</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a
          className="button button-small"
          href={CHALLENGE_WHATSAPP}
          title="Challenge Sudarshan with your agency quote"
          rel="noopener noreferrer"
        >
          Challenge Us ↗
        </a>
      </nav>

      {/* Offer Hero Header */}
      <header className="offer-hero-section">
        <div className="offer-hero-container">
          <nav className="prod-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span aria-current="page">Offer — Lucknow Marketing Services</span>
          </nav>

          <div className="offer-badge-pill">
            <span className="offer-badge-dot" />
            <span>EXCLUSIVE LUCKNOW PRICE-MATCH &amp; SCOPE GUARANTEE</span>
          </div>

          <h1 className="offer-headline">
            Bring Any Agency Quote. <em>We’ll Beat It.</em>
          </h1>

          <p className="offer-subheadline">
            Same scope or better, at a sharper price.
          </p>

          <p className="offer-lead-desc">
            Got an estimate or contract from any digital marketing agency in Lucknow, Noida, Delhi, or anywhere in India? Send us their itemized quote. Our AI-engineered operational stack eliminates legacy agency bloat—allowing us to match or upgrade your deliverables while cutting your costs.
          </p>

          {/* Offer Visual Banner */}
          <div className="offer-banner-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/offer-lucknow-marketing-services.webp"
              alt="Bring Any Agency Quote. We'll Beat It. Challenge Sudarshan."
              width={1024}
              height={576}
              className="offer-hero-img"
              loading="eager"
            />
          </div>

          {/* Primary Action Buttons */}
          <div className="offer-cta-group">
            <a
              className="button button-large offer-btn-primary"
              href={CHALLENGE_WHATSAPP}
              rel="noopener noreferrer"
              target="_blank"
            >
              Challenge Sudarshan ↗
            </a>
            <a
              className="button button-secondary offer-btn-secondary"
              href={`mailto:${CONTACT_EMAIL}?subject=Challenge%20Sudarshan%20-%20Agency%20Quote%20Beat&body=Hi%20Sheevum%20and%20Sudarshan%20AI%20Team%2C%0A%0AHere%20is%20the%20current%20agency%20quote%20I%20have%20received%3A%0A-%20Agency%20Name%3A%20%0A-%20Current%20Quoted%20Price%3A%20%0A-%20Services%20Included%3A%20%0A%0APlease%20review%20and%20provide%20a%20sharper%20counter-proposal.`}
            >
              Email Agency Quote
            </a>
          </div>
          <span className="offer-subnote">
            Confidential review • 24-hour response turnaround • Zero obligation
          </span>
        </div>
      </header>

      {/* 3-Step Process: How the Challenge Works */}
      <section className="offer-steps-section">
        <div className="offer-content-container">
          <div className="offer-section-head">
            <span className="v-kicker">SIMPLE &amp; TRANSPARENT PROCESS</span>
            <h2>How the “Challenge Sudarshan” Works</h2>
            <p>Three straightforward steps to upgrade your marketing while saving budget.</p>
          </div>

          <div className="offer-steps-grid">
            <div className="offer-step-card">
              <span className="offer-step-num">01</span>
              <h3>Share the Agency Quote</h3>
              <p>
                Send us a screenshot, PDF proposal, or itemized deliverable list from any marketing agency. Keep their branding or redact it—we only care about the scope and quoted price.
              </p>
            </div>

            <div className="offer-step-card">
              <span className="offer-step-num">02</span>
              <h3>24-Hour Scope Audit</h3>
              <p>
                Founder Sheevum Goel and our senior technical team dissect the deliverables. We identify vanity fluff, outdated tactics, and highlight areas where modern AI automations deliver 3x faster results.
              </p>
            </div>

            <div className="offer-step-card">
              <span className="offer-step-num">03</span>
              <h3>Receive Sharper Counter-Proposal</h3>
              <p>
                We return a side-by-side counter-proposal: identical or superior deliverables, verified timeline, and a sharper price that beats their quote directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Matrix: What Services Qualify */}
      <section className="offer-scope-section">
        <div className="offer-content-container">
          <div className="offer-section-head">
            <span className="v-kicker">QUALIFYING MARKETING SERVICES</span>
            <h2>Services Covered Under the Price-Beat Guarantee</h2>
            <p>We honor the challenge across every core digital marketing competency.</p>
          </div>

          <div className="offer-services-grid">
            <div className="offer-service-item">
              <div className="offer-service-icon">🔍</div>
              <div>
                <h3>Search Engine Optimization (SEO)</h3>
                <p>Local 3-Pack Maps optimization, organic ranking strategy, on-page schema, citation audits, and technical speed enhancement.</p>
              </div>
            </div>

            <div className="offer-service-item">
              <div className="offer-service-icon">🎯</div>
              <div>
                <h3>Google &amp; Meta Ads Management</h3>
                <p>High-intent search ads, hyper-local Instagram/Facebook reels campaigns, WhatsApp lead generation, and negative keyword engineering.</p>
              </div>
            </div>

            <div className="offer-service-item">
              <div className="offer-service-icon">⚡</div>
              <div>
                <h3>High-Converting Web Development</h3>
                <p>Sub-second lightweight landing pages, modern headless web design, custom mobile architectures, and ecommerce stores.</p>
              </div>
            </div>

            <div className="offer-service-item">
              <div className="offer-service-icon">🤖</div>
              <div>
                <h3>AI Automation &amp; CRM Workflows</h3>
                <p>Automated WhatsApp response engines, instant lead qualification, automated review acquisition, and follow-up pipelines.</p>
              </div>
            </div>

            <div className="offer-service-item">
              <div className="offer-service-icon">📱</div>
              <div>
                <h3>Social Media &amp; Short Video Content</h3>
                <p>Hyper-local short-form reels, high-converting scripts, brand positioning, and localized community building across Lucknow &amp; UP.</p>
              </div>
            </div>

            <div className="offer-service-item">
              <div className="offer-service-icon">📊</div>
              <div>
                <h3>Full Digital Growth Infrastructure</h3>
                <p>Complete multi-channel retainers, end-to-end attribution tracking, Google Analytics 4 configuration, and Clarity heatmaps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Can Beat Any Quote */}
      <section className="offer-why-section">
        <div className="offer-content-container">
          <div className="offer-section-head">
            <span className="v-kicker">THE SUDARSHAN ADVANTAGE</span>
            <h2>Why We Can Comfortably Beat Traditional Agencies</h2>
            <p>We are not cutting corners—we engineered out the waste.</p>
          </div>

          <div className="offer-reasons-grid">
            <div className="offer-reason-card">
              <h4>Zero Overhead Bloat</h4>
              <p>Traditional agencies bill you for account managers, layers of junior staff, and lavish office overheads. We run lean, AI-augmented engineering workflows.</p>
            </div>

            <div className="offer-reason-card">
              <h4>100% Asset Ownership</h4>
              <p>Many agencies hold your ad accounts, domain logins, and creative files hostage. With Sudarshan AI Labs, you own every single asset from Day 1.</p>
            </div>

            <div className="offer-reason-card">
              <h4>Transparent Metrics Only</h4>
              <p>No fake impressions or vanity reach reports. We measure cost per qualified enquiry, footfalls, phone calls, and revenue generated.</p>
            </div>

            <div className="offer-reason-card">
              <h4>Founder-Led Strategy</h4>
              <p>Your strategy is personally supervised by Sheevum Goel rather than handed off to an inexperienced intern.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="offer-faq-section">
        <div className="offer-content-container">
          <div className="offer-section-head">
            <span className="v-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Everything You Need to Know About This Offer</h2>
          </div>

          <div className="offer-faq-list">
            <div className="offer-faq-item">
              <h3>What types of agency quotes qualify?</h3>
              <p>Any written quote, email proposal, rate card, or formal estimate from an active marketing agency or freelance consultancy provided within the last 90 days.</p>
            </div>
            <div className="offer-faq-item">
              <h3>Will the quality of execution be lower at a sharper price?</h3>
              <p>Never. Our guarantee is “Same scope or better, at a sharper price.” We utilize proprietary AI pipelines to automate mundane operational tasks, allowing our senior strategists to spend more time perfecting your high-leverage growth levers.</p>
            </div>
            <div className="offer-faq-item">
              <h3>Will my current agency know I shared their quote?</h3>
              <p>No. Your submission is 100% confidential. You are welcome to blur out agency names or client IDs before sending it over.</p>
            </div>
            <div className="offer-faq-item">
              <h3>How fast do I get the counter-proposal?</h3>
              <p>Within 24 business hours. If you send your quote via WhatsApp, our team usually responds within a few hours with an initial review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="area-cta offer-bottom-cta">
        <p>HAVE A QUOTE IN HAND RIGHT NOW?</p>
        <h2>Challenge Sudarshan today.</h2>
        <span>Send us the numbers and deliverables. Let us show you what modern AI-driven digital marketing looks like.</span>
        <div>
          <a
            className="button"
            href={CHALLENGE_WHATSAPP}
            rel="noopener noreferrer"
            target="_blank"
          >
            Challenge Sudarshan on WhatsApp ↗
          </a>
          <a className="cta-call" href={`tel:${CONTACT_PHONE}`}>
            Call {CONTACT_PHONE}
          </a>
        </div>
      </section>

      {/* Global Branded Footer */}
      <footer className="area-footer">
        <Link className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SUDARSHAN AI LABS</span>
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
