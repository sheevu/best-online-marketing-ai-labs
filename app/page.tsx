 
import type { Metadata } from "next";
import Image from "./_components/ResponsiveImage";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Browsers,
  CaretDown,
  ChartLineUp,
  CheckCircle,
  GlobeHemisphereWest,
  InstagramLogo,
  Lightning,
  List,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  PhoneCall,
  Robot,
  Sparkle,
  Target,
  WhatsappLogo,
  YoutubeLogo,
  BookOpen,
  X,
} from "@phosphor-icons/react/dist/ssr";
import {
  DUNS_NUMBER,
  MAP_URL,
  SITE_URL,
  WHATSAPP_URL,
} from "./lib/site";
import {
  sharedWebsite,
  sharedOrganization,
  STARTER_OFFERS,
  starterService,
  IDS,
} from "./lib/schema";
import { cities } from "./lib/cities";
import { areas } from "./lib/areas";
import { PRODUCTS, PRODUCT_CATEGORIES } from "./lib/products-data";
import ProductCard from "./_components/ProductCard";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const wa = WHATSAPP_URL;
const primaryServiceLinks = [
  {
    href: "/digital-marketing-services",
    label: "Digital marketing hub",
    desc: "All core services, process and starter offers",
    Icon: ChartLineUp,
  },
  {
    href: "/seo-services-lucknow",
    label: "SEO services in Lucknow",
    desc: "Local SEO, technical SEO and useful content",
    Icon: MagnifyingGlass,
  },
  {
    href: "/google-ads-services",
    label: "Google Ads services",
    desc: "Search campaigns, landing pages and lead quality",
    Icon: Target,
  },
  {
    href: "/website-design",
    label: "Website design",
    desc: "Fast mobile pages built for enquiries",
    Icon: Browsers,
  },
  {
    href: "/social-media-marketing-lucknow",
    label: "Social media marketing",
    desc: "Recognisable creative and local campaigns",
    Icon: InstagramLogo,
  },
  {
    href: "/lead-generation-lucknow",
    label: "Lead generation",
    desc: "Forms, WhatsApp flows and follow-up systems",
    Icon: Lightning,
  },
  {
    href: "/ai-automation-lucknow",
    label: "AI automation",
    desc: "Practical agents for small business operations",
    Icon: Robot,
  },
  {
    href: "/digital-marketing-services/uttar-pradesh",
    label: "Services by city",
    desc: "Browse Uttar Pradesh service-area guidance",
    Icon: GlobeHemisphereWest,
  },
];
const popularLucknowAreas = areas.slice(0, 8);
const priorityCities = cities.filter((city) => city.slug !== "lucknow").slice(0, 12);
const services = [
  {
    title: "Own local search",
    text: "Local SEO and Google Maps systems that help nearby customers find and trust you.",
    tag: "Local visibility",
    href: "/seo-services-lucknow",
    Icon: MapPin,
    theme: "coral",
  },
  {
    title: "Rank with useful content",
    text: "Technical SEO, service pages and clear answers shaped for Google and AI search.",
    tag: "Organic growth",
    href: "/seo-services-lucknow",
    Icon: MagnifyingGlass,
    theme: "sky",
  },
  {
    title: "Build a memorable brand",
    text: "Social strategy, creative campaigns and content people recognise across channels.",
    tag: "Social presence",
    href: "/social-media-marketing-lucknow",
    Icon: InstagramLogo,
    theme: "lemon",
  },
  {
    title: "Turn visits into leads",
    text: "Website development and conversion pages with focused messages and frictionless actions.",
    tag: "Conversion design",
    href: "/website-design",
    Icon: Browsers,
    theme: "lavender",
  },
  {
    title: "Reach ready buyers",
    text: "Google and Meta campaigns aligned with your offer, audience and sales capacity.",
    tag: "Paid growth",
    href: "/google-ads-services",
    Icon: Megaphone,
    theme: "mint",
  },
  {
    title: "Follow up intelligently",
    text: "Practical AI and WhatsApp workflows that help your team respond and organise leads.",
    tag: "Automation",
    href: "/ai-automation-lucknow",
    Icon: Robot,
    theme: "peach",
  },
];
// Products are loaded from PRODUCTS in ./lib/products-data

const goals = {
  visibility: {
    label: "Get found locally",
    title: "Local visibility engine",
    copy: "Google Business Profile, local landing pages, reviews and search content working as one discoverability system.",
    items: [
      "Google Maps foundation",
      "Area-specific SEO pages",
      "Review and citation rhythm",
    ],
    Icon: MapPin,
  },
  leads: {
    label: "Generate better leads",
    title: "Lead conversion engine",
    copy: "Focused ads, landing pages and WhatsApp qualification built around useful enquiries instead of vanity clicks.",
    items: [
      "High-intent campaigns",
      "Conversion landing page",
      "WhatsApp qualification flow",
    ],
    Icon: Target,
  },
  automation: {
    label: "Save team time",
    title: "AI follow-up engine",
    copy: "Simple automations that keep enquiries organised, speed up first response and reduce repetitive work.",
    items: [
      "Smart response templates",
      "Lead labels and routing",
      "Follow-up reminders",
    ],
    Icon: Robot,
  },
};
const faqs = [
  [
    "Which is the best digital marketing agency in Lucknow for small businesses?",
    "The best digital marketing agency for small businesses in Lucknow is one that understands local search intent, offers transparent scope and pricing, focuses on qualified leads rather than vanity metrics, and ensures complete client ownership of websites, ad accounts, and data. Sudarshan AI Labs is built specifically for Lucknow MSMEs, combining Local SEO, Google Maps optimization, high-converting web design, and AI automation.",
  ],
  [
    "What should you look for before hiring a digital marketing agency in Lucknow?",
    "Before hiring an agency in Lucknow, verify their physical presence, legal entity registration (such as DPIIT Startup India recognition), portfolio of real local clients, pricing transparency without hidden retainers, and technical capability in local SEO, mobile speed, and lead tracking. Ask for specific case studies in your industry.",
  ],
  [
    "How is Sudarshan AI Labs different from other Lucknow digital marketing agencies?",
    "Unlike traditional agencies that lock clients into perpetual retainers for generic social posts, Sudarshan AI Labs follows a 'Build, Automate, Transfer' framework. We build high-performing digital assets, automate lead follow-up using AI and WhatsApp, and transfer full ownership and training to your internal team.",
  ],
  [
    "Is a local Lucknow agency better than a national digital marketing company?",
    "Yes. A local Lucknow agency understands neighborhood-specific buying habits (e.g., Gomti Nagar vs. Hazratganj vs. Alambagh), local vernacular and search terminology, seasonal commercial cycles, and regional competition nuances that distant national agencies typically overlook.",
  ],
  [
    "How much do digital marketing services cost in Lucknow?",
    "Digital marketing costs in Lucknow generally range from ₹4,900 to ₹39,000+ per month depending on scope, ad budget, content volume, and technical requirements. Sudarshan AI Labs offers starter audit packs from ₹89 and transparent growth packages without hidden fees.",
  ],
  [
    "What is included in an affordable digital marketing package for MSMEs?",
    "A comprehensive MSME package includes Google Business Profile optimization, local citation cleanup, on-page SEO for high-intent queries, conversion landing page setup, bilingual Meta/Google ad campaign management, and automated WhatsApp lead capture.",
  ],
  [
    "Why do digital marketing prices vary so much between Lucknow agencies?",
    "Pricing varies based on agency overhead, whether work is outsourced or performed in-house, depth of technical optimization (e.g., custom development vs. slow templates), and whether performance tracking and conversion rate optimization are included.",
  ],
  [
    "Are there hidden charges in digital marketing packages in Lucknow?",
    "Some agencies quote low initial management fees but add unexpected costs for ad spend management, creative revisions, landing page hosting, or reporting. Sudarshan AI Labs provides 100% upfront pricing with written scope of deliverables.",
  ],
  [
    "What is included in local SEO services in Lucknow?",
    "Local SEO in Lucknow includes Google Business Profile audit and verification, category and service attribute optimization, local keyword research, local citation building across Indian directories, customer review acquisition systems, and geo-targeted landing pages.",
  ],
  [
    "How to grow a small business on Instagram in Lucknow?",
    "To grow on Instagram in Lucknow, focus on localized short-form video (Reels) showcasing behind-the-scenes processes, customer testimonials, Lucknow landmarks, and clear calls-to-action that direct viewers to WhatsApp or local store visits.",
  ],
  [
    "What is the best social media marketing strategy for MSMEs in 2026?",
    "The most effective 2026 strategy combines educational video content, hyper-local community engagement, conversational AI response automation on DMs/WhatsApp, and targeted retargeting ads to re-engage past visitors.",
  ],
  [
    "How much does social media marketing cost per month in India?",
    "Social media marketing in India typically ranges from ₹8,000 to ₹35,000 per month for organic content creation, graphic design, and community management, with ad spend managed separately based on business goals.",
  ],
  [
    "How can businesses in Hazratganj rank higher on Google Maps?",
    "Hazratganj businesses can improve Google Maps rankings by ensuring exact NAP (Name, Address, Phone) consistency, adding geotagged photos, selecting relevant primary/secondary categories, collecting genuine reviews mentioning Hazratganj services, and linking to a fast, mobile-friendly landing page.",
  ],
  [
    "What is the best way to attract customers in Gomti Nagar through digital marketing?",
    "Gomti Nagar is a competitive commercial and residential hub. Businesses should combine Google Maps 3-Pack optimization, hyper-local Instagram ads targeted within a 5km radius, and conversion-optimized mobile pages with instant WhatsApp booking.",
  ],
  [
    "How does local SEO work for shops in Aliganj and Charbagh?",
    "For high-footfall areas like Aliganj and Charbagh, local SEO focuses on 'near me' search queries, clear transit/landmark directions, accurate store opening hours, product catalogs on Google Business Profile, and tap-to-call mobile buttons.",
  ],
  [
    "Why does hyperlocal targeting matter for Lucknow businesses?",
    "Lucknow consumers prefer buying from accessible, trusted providers within their neighborhood. Hyperlocal targeting prevents wasted ad spend on audiences across town who are unlikely to travel for everyday services.",
  ],
  [
    "How do Lucknow customers search differently than customers in metro cities?",
    "Lucknow searchers frequently use bilingual queries (mixing Hindi and English), rely heavily on Google Maps directions and reviews before calling, and prefer direct WhatsApp communication over filling out lengthy contact forms.",
  ],
  [
    "What digital marketing services work best for kirana stores in Lucknow?",
    "Kirana stores benefit most from Google Business Profile setup, local WhatsApp order catalogs, Google Pay/UPI merchant integration, and radius-targeted Meta promotions for home delivery.",
  ],
  [
    "How can doctors and clinics in Lucknow get more patients through digital marketing?",
    "Clinics and healthcare providers should focus on compliant Google Maps optimization, patient education blogs, verified Google reviews, and seamless appointment booking systems that answer common patient queries clearly.",
  ],
  [
    "What is the best digital marketing strategy for coaching institutes in Lucknow?",
    "Coaching centers in hubs like Hazratganj and Kapoorthala need seasonal Google Search Ads during admission cycles, student testimonial videos on YouTube/Instagram, localized SEO for competitive exams (NEET, JEE, UPSC), and fast WhatsApp inquiry handling.",
  ],
  [
    "How can restaurants and retail shops in Lucknow grow online?",
    "Restaurants and retail outlets should maintain mouth-watering visual content on Instagram, active Google Business Profiles with updated menus/offers, influencer collaborations, and local food blogger engagement.",
  ],
  [
    "What does DPIIT Startup India registration mean for a digital marketing partner?",
    "DPIIT Startup India registration confirms that the company is a government-recognized entity (under NAVA-NETRA NEURAL SUDARSHAN AI LABS PRIVATE LIMITED), providing higher accountability, compliance, and technological innovation.",
  ],
  [
    "Is Sudarshan AI Labs a verified digital marketing agency?",
    "Yes. Sudarshan AI Labs is registered under NAVA-NETRA NEURAL SUDARSHAN AI LABS PRIVATE LIMITED with corporate filings on MCA/ZaubaCorp, StartInUp UP Government portal, and D-U-N-S registration (77-160-6356).",
  ],
  [
    "How do you know if a digital marketing agency in Lucknow will actually deliver results?",
    "Look for transparent analytics dashboards, direct access to ad accounts, clear definitions of qualified leads vs. impressions, and a refusal to make unrealistic 'overnight ranking' guarantees.",
  ],
  [
    "How does AI automation improve digital marketing results for small businesses?",
    "AI automation enables instant 24/7 lead responses, automatic qualification and tagging, personalized WhatsApp follow-ups, and automated performance reporting, ensuring zero missed inquiries while saving hours of manual work.",
  ],
  [
    "Can AI-powered marketing replace a traditional digital marketing agency?",
    "AI enhances and accelerates marketing execution—content creation, campaign optimization, customer communication—but still requires human strategy, creative direction, local market context, and business alignment to achieve optimal results.",
  ],
];
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...sharedWebsite(),
      description:
        "AI agents, digital marketing, local SEO and business automation for Lucknow MSMEs.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      ...sharedOrganization(),
      alternateName: "NAVA NETRA NEURAL SUDARSHAN AI LABS PVT. LTD.",
      duns: DUNS_NUMBER,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/sudarshan-lucknow-hero.webp`,
      priceRange: "Services from ₹89",
      currenciesAccepted: "INR",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.8824,
        longitude: 80.9916,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9336299912",
        email: "sudarshanailabs@gmail.com",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Sudarshan AI Labs | AI & Digital Marketing Services in Lucknow",
      description:
        "Local SEO, websites, digital marketing, and AI automation for MSMEs in Lucknow.",
      inLanguage: "en-IN",
      isPartOf: { "@id": IDS.website },
      publisher: { "@id": IDS.organization },
      breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      mainEntity: { "@id": IDS.organization },
      mentions: STARTER_OFFERS.map((p) => ({
        "@id": `${SITE_URL}/#service-${p.key}`,
      })),
    },
    ...STARTER_OFFERS.map(starterService),
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  const autoPlay = true;
  return (
    <main id="top" className="v-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <header className="v-site-header">
        <div className="v-topline">
          <span>
            <Lightning weight="fill" /> Lucknow businesses: request a
            complimentary digital visibility audit
          </span>
          <div>
            <a href="tel:+919336299912">
              <PhoneCall weight="bold" /> +91 93362 99912
            </a>
            <a href={wa}>
              <WhatsappLogo weight="fill" /> WhatsApp
            </a>
          </div>
        </div>
        <nav className="v-nav" aria-label="Main navigation">
          <a
            className="v-brand"
            href="#top"
            aria-label="Sudarshan AI Labs Lucknow Digital Growth home"
          >
            <span className="v-logo" aria-label="Sudarshan AI Labs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand-icon.png"
                alt="Sudarshan AI Labs Logo"
                width={28}
                height={28}
                className="v-logo-img"
                loading="eager"
              />
            </span>
            <span>
              SUDARSHAN <b>AI LABS</b>
              <small>LUCKNOW DIGITAL GROWTH</small>
            </span>
          </a>
          <div className="v-links" id="main-menu">
            <div className="v-services-menu">
              <button
                aria-expanded="false"
                aria-haspopup="true"
              >
                Services <CaretDown weight="bold" />
              </button>
              <div className="v-services-panel" aria-label="Core service links">
                {primaryServiceLinks.map(({ href, label, desc, Icon }) => (
                  <a href={href} key={href}>
                    <Icon weight="duotone" />
                    <span>
                      <span className="menu-label">{label}</span>
                      <small>{desc}</small>
                    </span>
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
            <a href="/product-page">
              Products
            </a>
            <a href="#approach">
              How we work
            </a>
            <div className="v-location-menu">
              <button
                aria-expanded="false"
              >
                Locations <CaretDown weight="bold" />
              </button>
              <div className="v-location-panel">
                <a className="v-location-featured"
                  href="/digital-marketing-services"
                >
                  <MapPin weight="duotone" />
                  <span>
                    <span className="menu-label">Lucknow neighbourhoods</span>
                    <small>Explore Lucknow service areas</small>
                  </span>
                  <ArrowUpRight />
                </a>
                <a className="v-location-featured"
                  href="/digital-marketing-services/uttar-pradesh"
                >
                  <GlobeHemisphereWest weight="duotone" />
                  <span>
                    <span className="menu-label">Uttar Pradesh cities</span>
                    <small>Explore Uttar Pradesh markets</small>
                  </span>
                  <ArrowUpRight />
                </a>
                <div className="v-menu-section" aria-label="Popular Lucknow locality pages">
                  <span className="menu-group-label">Popular Lucknow localities</span>
                  <div className="v-locality-menu-grid">
                    {popularLucknowAreas.map((area, index) => (
                      <a href={`/digital-marketing-services/${area.slug}-lucknow`} key={area.slug}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {area.name}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="v-menu-section" aria-label="Priority Uttar Pradesh city pages">
                  <span className="menu-group-label">Uttar Pradesh city pages</span>
                  <div className="v-city-menu-grid">
                    {priorityCities.map((city, index) => (
                      <a href={`/digital-marketing-services/${city.slug}`} key={city.slug}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {city.name}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a href="/about-sheevum-goel">
              Founder
            </a>
            <a href="#faq">
              FAQ
            </a>
            <a href="/contact">
              Contact
            </a>
            <a className="v-mobile-audit" href={wa}>
              Get free audit <ArrowUpRight />
            </a>
          </div>
          <a className="v-pill v-pill-dark nav-cta" href={wa}>
            <span>Free growth audit</span>
            <ArrowUpRight weight="bold" />
          </a>
          <button
            className="v-menu"
            aria-expanded="false" aria-controls="main-menu"
            aria-label="Toggle navigation"
          >
            <List className="menu-open-icon" />
            <X className="menu-close-icon" />
          </button>
        </nav>
      </header>

      <section className="v-hero-shell">
        <div className="v-aurora a-one" />
        <div className="v-aurora a-two" />
        <div className="v-hero-card" data-reveal>
          <div className="v-hero-copy">
            <div className="v-proof">
              <span>
                <Sparkle weight="fill" /> AI-powered
              </span>
              <span>
                <MapPin weight="fill" /> Lucknow-first
              </span>
              <span>
                <GlobeHemisphereWest weight="fill" /> Built for Bharat
              </span>
            </div>
            <h1>
              AI Digital Marketing Agency in Lucknow
              <br />
              <em>for Local SEO, Google Maps &amp; MSME Growth</em>
            </h1>
            <p>
              Get found, build trust and turn attention into enquiries with
              local visibility, high-converting websites, performance campaigns
              and practical AI automation.
            </p>
            <div className="v-hero-actions">
              <a className="v-pill v-pill-dark" href={wa}>
                Start with a free audit <ArrowRight weight="bold" />
              </a>
              <a className="v-video-link" href="/digital-marketing-services">
                <span>
                  <ChartLineUp weight="bold" />
                </span>{" "}
                Explore digital marketing services
              </a>
            </div>
            <div className="v-hero-signals">
              <span>
                <span className="signal-number">01</span> Get found locally
              </span>
              <span>
                <span className="signal-number">02</span> Convert attention
              </span>
              <span>
                <span className="signal-number">03</span> Automate follow-up
              </span>
            </div>
            <div className="v-micro">
              <span className="pulse-dot" /> Clear priorities. Transparent
              scope. Assets you own.
            </div>
          </div>
          <div
            className="v-visual"
            aria-label="Illustrated founder of Sudarshan AI Labs with Lucknow skyline"
          >
            <Image
              src="/sudarshan-lucknow-hero.webp"
              width={1672}
              height={941}
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              alt="Sheevum Goel of Sudarshan AI Labs building growth systems for Lucknow MSMEs"
            />
            <div className="float-chip chip-search">
              <MagnifyingGlass weight="bold" />
              <span>
                <span className="chip-label">Local search</span>Get discovered
              </span>
            </div>
            <div className="float-chip chip-leads">
              <WhatsappLogo weight="fill" />
              <span>
                <span className="chip-label">Lead flow</span>Respond faster
              </span>
            </div>
            <div className="orbit-badge">
              <Sparkle weight="fill" />
              <span>
                BUILD
                <br />
                AUTOMATE
                <br />
                TRANSFER
              </span>
            </div>
          </div>
        </div>
        <div className="v-feature-row">
          <article className="vf-coral">
            <MapPin weight="duotone" />
            <div>
              <h2>Local SEO &amp; Google Maps</h2>
              <p>Own high-intent searches across Lucknow.</p>
            </div>
            <ArrowUpRight />
          </article>
          <article className="vf-sky">
            <Browsers weight="duotone" />
            <div>
              <h2>Conversion Websites</h2>
              <p>Turn visits into useful conversations.</p>
            </div>
            <ArrowUpRight />
          </article>
          <article className="vf-lemon">
            <Robot weight="duotone" />
            <div>
              <h2>AI &amp; WhatsApp Automation</h2>
              <p>Automate repetitive work, keep the human touch.</p>
            </div>
            <ArrowUpRight />
          </article>
        </div>
      </section>

      <section className="v-marquee" aria-label="Capabilities">
        <div>
          <span>LOCAL SEO</span>
          <span>GOOGLE MAPS</span>
          <span>WEB DESIGN</span>
          <span>PERFORMANCE ADS</span>
          <span>AI AUTOMATION</span>
          <span>WHATSAPP FUNNELS</span>
        </div>
      </section>

      <section className="v-section v-services" id="services">
        <div className="v-section-head">
          <div>
            <span className="v-kicker">WHAT WE BUILD</span>
            <h2>
              A complete growth system in Lucknow.
              <br />
              <em>Not disconnected marketing.</em>
            </h2>
          </div>
          <p>
            Every service has a clear role—from being discovered to earning
            trust, capturing an enquiry and following up well. As a digital
            marketing company in Lucknow, we combine SEO, website development
            and campaigns around the same customer journey.
          </p>
        </div>
        <div className="v-service-grid">
          {services.map(({ title, text, tag, href, Icon, theme }, i) => (
            <article className={`v-service ${theme}`} key={title} data-reveal>
              <div className="v-service-top">
                <span>0{i + 1}</span>
                <Icon weight="duotone" />
              </div>
              <div>
                <small>{tag}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <a href={href}>
                Explore {title} <ArrowUpRight weight="bold" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="v-section v-products"
        id="products"
        aria-labelledby="products-title"
      >
        <div className="v-product-head">
          <div>
            <span className="v-kicker">PRODUCTS & STARTER PLANS</span>
            <h2 id="products-title">
              Practical growth tools.
              <br />
              <em>Clear starting prices.</em>
            </h2>
            <p className="v-product-lead">
              22 transparent growth tools, starter packages, and AI automations. All starter bundles include a complimentary Micro Growth Audit & prioritized action plan.
            </p>
          </div>
          <div className="v-slider-controls">
            <div className="v-slider-counter" aria-live="polite">
              <span className="v-slider-current">01</span>
              <span className="v-slider-sep">/</span>
              <span className="v-slider-total">{String(PRODUCTS.length).padStart(2, "0")}</span>
            </div>
            <button
              className="v-slider-arrow v-slider-arrow-prev"
              aria-label="View previous products"
              title="Previous product"
            >
              <ArrowLeft weight="bold" />
            </button>
            <button
              className="v-slider-arrow v-slider-arrow-next"
              aria-label="View next products"
              title="Next product"
            >
              <ArrowRight weight="bold" />
            </button>
            <button
              className="v-slider-pause"
              aria-pressed={!autoPlay}
              aria-label={autoPlay ? "Pause product carousel" : "Play product carousel"}
            >
              <span className="v-pause-pulse" />
              <span className="v-pause-text">{autoPlay ? "Pause" : "Play"}</span>
            </button>
          </div>
        </div>

        <div className="v-product-cat-filters" role="tablist" aria-label="Filter products by category">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              type="button"
              className={`v-cat-filter-btn ${idx === 0 ? "active" : ""}`}
              data-category-filter={cat}
              role="tab"
              aria-selected={idx === 0}
            >
              {cat}
            </button>
          ))}
          <a href="/product-page" className="v-view-all-link">
            View All 22 Plans ↗
          </a>
        </div>

        <div
          className="v-product-track"
          tabIndex={0}
          aria-label="Sudarshan AI Labs product plans"
          aria-live="off"
        >
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isCurrent={index === 0}
              variant="slider"
            />
          ))}
        </div>

        <div className="v-product-dots" aria-label="Choose a product">
          {PRODUCTS.map((product, index) => (
            <button
              key={product.id}
              className={index === 0 ? "active" : ""}
              data-product-index={index}
              aria-label={`Show ${product.shortName}`}
              aria-current={index === 0 ? "true" : undefined}
            />
          ))}
        </div>

        <p className="v-price-note">
          Starting prices are planning-level guides grounded in our verified product catalog. Final scope, inclusions and payment terms are confirmed in writing after a short review.
        </p>
      </section>

      <section className="v-section v-selector" id="approach">
        <div className="selector-copy">
          <span className="v-kicker light">INTERACTIVE GROWTH PLANNER</span>
          <h2>
            What should your business <em>solve first?</em>
          </h2>
          <p>
            Choose your immediate goal to see the connected system we would
            prioritise.
          </p>
          <div className="goal-tabs" role="tablist" aria-label="Business growth goals">
            {Object.entries(goals).map(([key, item]) => (
              <button
                key={key}
                className={key === "visibility" ? "active" : ""} id={`goal-tab-${key}`} aria-controls={`goal-panel-${key}`} data-goal={key} tabIndex={key === "visibility" ? 0 : -1}
                role="tab"
                aria-selected={key === "visibility"}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {Object.entries(goals).map(([key, active]) => (
        <div key={key} className="goal-result" id={`goal-panel-${key}`} role="tabpanel" aria-labelledby={`goal-tab-${key}`} hidden={key !== "visibility"}>
          <div className="goal-icon">
            <active.Icon weight="duotone" />
          </div>
          <span>RECOMMENDED STARTING POINT</span>
          <h3>{active.title}</h3>
          <p>{active.copy}</p>
          <ul>
            {active.items.map((item) => (
              <li key={item}>
                <CheckCircle weight="fill" />
                {item}
              </li>
            ))}
          </ul>
          <a href={wa}>
            Plan this system <ArrowRight weight="bold" />
          </a>
        </div>))}
      </section>

      <section className="v-section v-method">
        <div className="v-section-head">
          <div>
            <span className="v-kicker">OUR OPERATING MODEL</span>
            <h2>
              We build businesses that
              <br />
              <em>need agencies less.</em>
            </h2>
          </div>
          <p>
            Your team should own the system, knowledge and assets. That is why
            our work moves through three deliberate stages.
          </p>
        </div>
        <div className="method-cards">
          <article data-reveal className="method-card-build">
            <div className="method-card-header">
              <span className="glossy-icon" aria-hidden="true"><CheckCircle weight="duotone" /></span>
              <span className="card-number">01</span>
            </div>
            <span className="method-tag">BUILD</span>
            <h3>Create the foundation</h3>
            <p>
              Clear positioning, searchable content, conversion pages and
              connected customer channels.
            </p>
          </article>
          <article data-reveal className="method-card-automate">
            <div className="method-card-header">
              <span className="glossy-icon" aria-hidden="true"><ChartLineUp weight="duotone" /></span>
              <span className="card-number">02</span>
            </div>
            <span className="method-tag">AUTOMATE</span>
            <h3>Reduce repetitive work</h3>
            <p>
              Practical workflows for responses, lead organisation, reporting
              and recurring activity.
            </p>
          </article>
          <article data-reveal className="method-card-transfer">
            <div className="method-card-header">
              <span className="glossy-icon" aria-hidden="true"><MagnifyingGlass weight="duotone" /></span>
              <span className="card-number">03</span>
            </div>
            <span className="method-tag">TRANSFER</span>
            <h3>Hand over with clarity</h3>
            <p>
              Your team receives the assets, documentation and confidence to
              operate independently.
            </p>
          </article>
        </div>
      </section>

      <section className="v-section v-proof-section" aria-labelledby="proof-title">
        <div className="v-section-head">
          <div>
            <span className="v-kicker">PROOF BEFORE PROMISES</span>
            <h2 id="proof-title">
              Review the work,
              <br />
              <em>then choose a scope.</em>
            </h2>
          </div>
          <p>
            We publish verifiable information and avoid invented client logos,
            rankings or revenue claims. Explore the founder profile and service
            pages, then ask for the evidence relevant to your category.
          </p>
        </div>
        <p className="v-proof-rating">
          <strong>Evidence first.</strong> Review the live business presence,
          founder profile and relevant work before choosing a scope. <a href={MAP_URL}>View the Google Maps presence.</a>
        </p>
        <div className="v-proof-grid">
          <article data-proof-card="0">
            <span className="card-number">01</span>
            <h3 data-proof-h3>Clear ownership</h3>
            <p data-proof-p>Websites, content and agreed systems are documented for handover.</p>
            <a data-proof-a href="/about-sheevum-goel">Meet the founder <ArrowUpRight /></a>
          </article>
          <article data-proof-card="1">
            <span className="card-number">02</span>
            <h3 data-proof-h3>Useful depth</h3>
            <p data-proof-p>Service and locality pages explain the customer problem, scope and limits.</p>
            <a data-proof-a href="/digital-marketing-services">Review the services <ArrowUpRight /></a>
          </article>
          <article data-proof-card="2">
            <span className="card-number">03</span>
            <h3 data-proof-h3>Honest proof</h3>
            <p data-proof-p>Client case studies are added only with permission and enough context to verify them.</p>
            <a data-proof-a href="/contact#contact-options">Request relevant examples <ArrowUpRight /></a>
          </article>
        </div>
        <div className="v-proof-controls">
          <div className="v-proof-dots">
            <button type="button" className="v-proof-dot is-active" data-proof-dot="0" aria-label="Perspective 1: Foundation and Handover"><span className="v-proof-bar" /></button>
            <button type="button" className="v-proof-dot" data-proof-dot="1" aria-label="Perspective 2: Operations and Systems"><span className="v-proof-bar" /></button>
            <button type="button" className="v-proof-dot" data-proof-dot="2" aria-label="Perspective 3: Engineering and Playbooks"><span className="v-proof-bar" /></button>
          </div>
          <span className="v-proof-timer">Auto-rotates every 10s • Click to cycle insights</span>
        </div>
      </section>

      <section className="v-lucknow">
        <div className="lucknow-copy">
          <span className="v-kicker light">LOCAL INTELLIGENCE</span>
          <h2>
            Lucknow roots.
            <br />
            <em>Uttar Pradesh scale.</em>
          </h2>
          <p>
            Explore practical service-area guidance for Lucknow and Uttar
            Pradesh, written around genuine customer contexts.
          </p>
          <div>
            <a
              className="v-pill v-pill-light"
              href="/digital-marketing-services"
            >
              Explore Lucknow areas <ArrowUpRight />
            </a>
            <a href="/digital-marketing-services/uttar-pradesh">
              Browse UP cities <ArrowRight />
            </a>
          </div>
        </div>
        <div className="lucknow-stat">
          <span>Core</span>
          <p>
            Service pages built around real business patterns, search intent
            and customer needs.
          </p>
          <nav className="location-directory location-directory-links" aria-label="Service areas">
            <a href="/digital-marketing-services">Explore Lucknow service areas <ArrowUpRight /></a>
            <a href="/digital-marketing-services/uttar-pradesh">Browse Uttar Pradesh markets <ArrowRight /></a>
          </nav>
          <a className="v-map-link" href={MAP_URL} target="_blank" rel="noreferrer">
            View our primary Indira Nagar location on Google Maps <ArrowUpRight />
          </a>
        </div>
      </section>

            <section className="v-section v-shorts-section" id="growth-shorts" aria-labelledby="shorts-heading">
        <div className="v-section-head">
          <div>
            <span className="v-kicker">FEATURED VIDEO SHORTS</span>
            <h2 id="shorts-heading">
              Practical growth insights.
              <br />
              <em>In 60 seconds.</em>
            </h2>
          </div>
          <p>
            Actionable strategies on Local SEO, Google Business Profiles, AI lead routing, and MSME systems. Watch directly below or open on YouTube.
          </p>
        </div>

        <div className="v-shorts-grid" role="region" aria-label="YouTube Shorts Growth Series">
          <article className="v-short-card">
            <div className="v-short-player">
              <iframe
                src="https://www.youtube-nocookie.com/embed/2o_oGkAj3IM?rel=0"
                title="Lucknow Businesses Digital Wake-Up Call - Sudarshan AI Labs"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v-short-meta">
              <span className="v-short-tag">LOCAL SEO</span>
              <h3>Lucknow Businesses: Digital Wake-Up Call</h3>
              <p>Why local visibility, Google Maps trust, and genuine proof beat outdated agency retainers in Lucknow.</p>
              <a
                href="https://youtube.com/shorts/2o_oGkAj3IM"
                target="_blank"
                rel="noreferrer"
                className="v-short-link"
              >
                <YoutubeLogo weight="fill" className="yt-icon" />
                <span>Watch on YouTube</span>
                <ArrowUpRight weight="bold" />
              </a>
            </div>
          </article>

          <article className="v-short-card">
            <div className="v-short-player">
              <iframe
                src="https://www.youtube-nocookie.com/embed/0EC1SWvNxnE?rel=0"
                title="Connected Presence: SEO, Websites & Growth Systems"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v-short-meta">
              <span className="v-short-tag">GROWTH STACK</span>
              <h3>How Sudarshan AI Labs Powers Business Online</h3>
              <p>Combining search visibility, high-converting websites, and structured follow-up for UP enterprises.</p>
              <a
                href="https://youtube.com/shorts/0EC1SWvNxnE"
                target="_blank"
                rel="noreferrer"
                className="v-short-link"
              >
                <YoutubeLogo weight="fill" className="yt-icon" />
                <span>Watch on YouTube</span>
                <ArrowUpRight weight="bold" />
              </a>
            </div>
          </article>

          <article className="v-short-card">
            <div className="v-short-player">
              <iframe
                src="https://www.youtube-nocookie.com/embed/IO3RLr5rNqo?rel=0"
                title="Your Google Business Profile: Your #1 Sales Asset"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v-short-meta">
              <span className="v-short-tag">GOOGLE MAPS</span>
              <h3>Your Most Valuable Local Sales Asset 📍</h3>
              <p>Transforming your Google Business Profile from a passive pin into an active local sales generator.</p>
              <a
                href="https://youtube.com/shorts/IO3RLr5rNqo"
                target="_blank"
                rel="noreferrer"
                className="v-short-link"
              >
                <YoutubeLogo weight="fill" className="yt-icon" />
                <span>Watch on YouTube</span>
                <ArrowUpRight weight="bold" />
              </a>
            </div>
          </article>

          <article className="v-short-card">
            <div className="v-short-player">
              <iframe
                src="https://www.youtube-nocookie.com/embed/iWNKPxbTXpY?rel=0"
                title="Stop Losing Customers: AI Automation for Small Business"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v-short-meta">
              <span className="v-short-tag">AI AUTOMATION</span>
              <h3>Stop Losing Customers to Slow Response</h3>
              <p>Practical WhatsApp automation and intelligent routing that responds to qualified buyers in seconds.</p>
              <a
                href="https://youtube.com/shorts/iWNKPxbTXpY"
                target="_blank"
                rel="noreferrer"
                className="v-short-link"
              >
                <YoutubeLogo weight="fill" className="yt-icon" />
                <span>Watch on YouTube</span>
                <ArrowUpRight weight="bold" />
              </a>
            </div>
          </article>

          <article className="v-short-card">
            <div className="v-short-player">
              <iframe
                src="https://www.youtube-nocookie.com/embed/L4Rcx3M9zSI?rel=0"
                title="Courses vs Real Portfolios: Building Practical Proof"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v-short-meta">
              <span className="v-short-tag">PRACTICAL SKILLS</span>
              <h3>Courses are Useful. Portfolios are Powerful.</h3>
              <p>Why real systems, working code, and verified case studies beat generic certifications every time.</p>
              <a
                href="https://youtube.com/shorts/L4Rcx3M9zSI"
                target="_blank"
                rel="noreferrer"
                className="v-short-link"
              >
                <YoutubeLogo weight="fill" className="yt-icon" />
                <span>Watch on YouTube</span>
                <ArrowUpRight weight="bold" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="v-section v-blogs-section" id="storybook-blogs" aria-labelledby="blogs-heading">
        <div className="v-section-head">
          <div>
            <span className="v-kicker">LUCKNOW AI STORYBOOK &amp; FIELD NOTES</span>
            <h2 id="blogs-heading">
              Evidence-based insights.
              <br />
              <em>From search signals to smarter MSMEs.</em>
            </h2>
          </div>
          <p>
            Authored by founder Sheevum Goel on <a href="https://www.blogs.vyapai.in/" target="_blank" rel="noreferrer" className="v-link-glow">blogs.vyapai.in</a>. Decoding real Google search intent, responsible AI automation, and local growth realities.
          </p>
        </div>

        <div className="v-blog-embed-container">
          <div className="v-blog-embed-header">
            <div className="v-blog-header-info">
              <span className="v-blog-status-dot" />
              <span className="v-blog-domain">blogs.vyapai.in</span>
              <span className="v-blog-subtitle">• Official AI Growth Field Guide</span>
            </div>
            <a
              href="https://www.blogs.vyapai.in/"
              target="_blank"
              rel="noreferrer"
              className="v-pill v-pill-dark v-blog-open-btn"
            >
              <BookOpen weight="bold" />
              <span>Open Full Storybook</span>
              <ArrowUpRight weight="bold" />
            </a>
          </div>

          <div className="v-blog-frame-wrap">
            <iframe
              src="https://www.blogs.vyapai.in/"
              title="Lucknow AI Growth Storybook by Sheevum Goel"
              loading="lazy"
              className="v-blog-iframe"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>

        <div className="v-blog-cards-grid">
          <article className="v-blog-card">
            <span className="v-blog-badge">CHAPTER 01 • CONTEXT</span>
            <h3>The City is Changing: Lucknow’s AI Ambition</h3>
            <p>Decoding the official UP AI City developments and distinguishing state proposals from practical business utility for local MSMEs.</p>
            <a href="https://www.blogs.vyapai.in/#city" target="_blank" rel="noreferrer">
              <span>Read Context Chapter</span> <ArrowUpRight />
            </a>
          </article>

          <article className="v-blog-card">
            <span className="v-blog-badge">CHAPTER 02 • SIGNALS</span>
            <h3>Specific Intent Beats Generic Traffic</h3>
            <p>Analyzing Google Trends patterns in Lucknow: Why explanatory content, comparison pages, and direct conversion funnels must be separated.</p>
            <a href="https://www.blogs.vyapai.in/#signals" target="_blank" rel="noreferrer">
              <span>Read Signals Analysis</span> <ArrowUpRight />
            </a>
          </article>

          <article className="v-blog-card">
            <span className="v-blog-badge">CHAPTER 03 • PLAYBOOK</span>
            <h3>From AI Hype to AI Utility: 90-Day Roadmap</h3>
            <p>The structured 3-phase journey: Foundation (Audit &amp; Mobile), Demand (Deep Guides &amp; Proof), and System (Lead Routing &amp; Triage).</p>
            <a href="https://www.blogs.vyapai.in/#playbook" target="_blank" rel="noreferrer">
              <span>Explore Playbook</span> <ArrowUpRight />
            </a>
          </article>

          <article className="v-blog-card">
            <span className="v-blog-badge">CHAPTER 04 • TRUST</span>
            <h3>E-E-A-T and Transparent Grounding</h3>
            <p>Why true digital authority requires verified sources, transparent boundaries, and clear human accountability rather than inflated claims.</p>
            <a href="https://www.blogs.vyapai.in/#trust" target="_blank" rel="noreferrer">
              <span>Verify Evidence</span> <ArrowUpRight />
            </a>
          </article>
        </div>
      </section>

      <section className="v-section v-faq" id="faq">
        <div>
          <span className="v-kicker">QUESTIONS, ANSWERED</span>
          <h2>
            Simple answers.
            <br />
            <em>No agency fog.</em>
          </h2>
          <p>
            Need something specific? Start a WhatsApp conversation and we will
            point you in the right direction.
          </p>
        </div>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="v-final">
        <div className="v-final-orb-wrapper">
          <div className="v-final-orb-halo" aria-hidden="true" />
          <div className="v-final-orb" aria-hidden="true">
            <Sparkle weight="fill" className="v-final-orb-icon" />
          </div>
        </div>
        <div className="v-final-audit-chip">
          <span className="v-final-chip-dot" aria-hidden="true" />
          <span>FREE 20-MINUTE DIGITAL GROWTH AUDIT</span>
        </div>
        <h2>Ready to become easier to find—and easier to choose?</h2>
        <p>
          Share your business name and website or Google listing. We will
          identify the three most useful actions to take next.
        </p>
        <div className="v-final-cta-group">
          <a className="v-pill v-pill-light" href={wa} target="_blank" rel="noreferrer">
            Start on WhatsApp <WhatsappLogo weight="fill" />
          </a>
          <a className="v-final-secondary" href="/contact">
            Prefer phone or email? See contact options <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="v-orbit-growth" aria-labelledby="orbit-title">
        <div className="v-orbit-copy">
          <span className="v-kicker light">THE CONNECTED GROWTH ORBIT</span>
          <h2 id="orbit-title">
            Every channel moving around <em>one business goal.</em>
          </h2>
          <p>
            Search, content, campaigns, conversion and follow-up should not work
            in isolation. Sudarshan AI Labs connects them into one measurable
            customer journey.
          </p>
          <div className="v-orbit-proof">
            <span>
              <span className="orbit-number">01</span> Discover
            </span>
            <span>
              <span className="orbit-number">02</span> Trust
            </span>
            <span>
              <span className="orbit-number">03</span> Convert
            </span>
          </div>
        </div>
        <div
          className="v-orbit-stage"
          aria-label="Animated connected digital growth system"
        >
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
          <i className="orbit-spark spark-one" />
          <i className="orbit-spark spark-two" />
          <i className="orbit-spark spark-three" />
          <div className="orbit-core">
            <Sparkle weight="fill" />
            <small>SUDARSHAN AI LABS</small>
            <strong>
              Build your
              <br />
              growth orbit.
            </strong>
            <a href={wa}>
              Get a free audit <ArrowUpRight weight="bold" />
            </a>
          </div>
          <div className="orbit-node node-seo">
            <MagnifyingGlass weight="bold" />
            <span>
              <span className="orbit-label">Search visibility</span>
              <small>Get discovered</small>
            </span>
          </div>
          <div className="orbit-node node-brand">
            <Sparkle weight="bold" />
            <span>
              <span className="orbit-label">Brand trust</span>
              <small>Stay memorable</small>
            </span>
          </div>
          <div className="orbit-node node-web">
            <Browsers weight="bold" />
            <span>
              <span className="orbit-label">Conversion pages</span>
              <small>Turn visits into leads</small>
            </span>
          </div>
          <div className="orbit-node node-ai">
            <Robot weight="bold" />
            <span>
              <span className="orbit-label">AI follow-up</span>
              <small>Respond intelligently</small>
            </span>
          </div>
          <div className="orbit-node node-ads">
            <Target weight="bold" />
            <span>
              <span className="orbit-label">Performance ads</span>
              <small>Reach ready buyers</small>
            </span>
          </div>
        </div>
      </section>

      <footer className="v-footer">
        <div>
          <a className="v-brand" href="#top">
            <span className="v-logo" aria-label="Sudarshan AI Labs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand-icon.png"
                alt="Sudarshan AI Labs Logo"
                width={28}
                height={28}
                className="v-logo-img"
                loading="lazy"
              />
            </span>
            <span>
              SUDARSHAN <b>AI LABS</b>
            </span>
          </a>
          <p>
            AI-powered digital marketing, Local SEO, high-conversion websites, and custom Hindi CRM automation for MSMEs across Lucknow and Uttar Pradesh.
          </p>
          <p style={{ marginTop: "14px" }}>
            <a href="tel:+919336299912" style={{ color: "#a99aff", fontWeight: 600 }}>+91 93362 99912</a> • <a href="mailto:sudarshanailabs@gmail.com" style={{ color: "#c5bfd6" }}>Email</a>
          </p>
        </div>
        <nav aria-label="Services and Solutions">
          <span className="v-footer-head">Solutions & Services</span>
          <a href="/seo-services-lucknow">Local SEO Services</a>
          <a href="/social-media-marketing-lucknow">Social Media Marketing</a>
          <a href="/lead-generation-lucknow">Lead Generation</a>
          <a href="/ai-automation-lucknow">AI Automation</a>
          <a href="/ecommerce-website-development">Ecommerce Development</a>
          <a href="/youtube-marketing-seo-channel-growth">YouTube & Video Growth</a>
          <a href="/whatsapp-business-meta-automation">WhatsApp Meta Automation</a>
          <a href="/linkedin-marketing-b2b-lead-generation">LinkedIn B2B Leads</a>
          <a href="/lead-generation-landing-page">Landing Page Design</a>
          <a href="/seo-content-writing-optimization">SEO Content Strategy</a>
          <a href="/facebook-instagram-shop-social-commerce">Social Commerce & Shops</a>
        </nav>
        <nav aria-label="Lucknow Localities">
          <span className="v-footer-head">Lucknow Localities</span>
          <a href="/digital-marketing-services/hazratganj-lucknow">Digital Marketing in Hazratganj</a>
          <a href="/digital-marketing-services/gomti-nagar-lucknow">Digital Marketing in Gomti Nagar</a>
          <a href="/digital-marketing-services/gomti-nagar-extension-lucknow">Digital Marketing in Gomti Nagar Ext.</a>
          <a href="/digital-marketing-services/aliganj-lucknow">Digital Marketing in Aliganj</a>
          <a href="/digital-marketing-services/indira-nagar-lucknow">Digital Marketing in Indira Nagar</a>
          <a href="/digital-marketing-services/mahanagar-lucknow">Digital Marketing in Mahanagar</a>
          <a href="/digital-marketing-services/jankipuram-lucknow">Digital Marketing in Jankipuram</a>
          <a href="/digital-marketing-services/vikas-nagar-lucknow">Digital Marketing in Vikas Nagar</a>
          <a href="/digital-marketing-services/ashiyana-lucknow">Digital Marketing in Ashiyana</a>
          <a href="/digital-marketing-services">All Lucknow Localities <ArrowUpRight /></a>
        </nav>
        <nav aria-label="Uttar Pradesh Regional Hubs">
          <span className="v-footer-head">UP Regional Hubs</span>
          <a href="/digital-marketing-services/kanpur">Digital Marketing in Kanpur</a>
          <a href="/digital-marketing-services/varanasi">Digital Marketing in Varanasi</a>
          <a href="/digital-marketing-services/prayagraj">Digital Marketing in Prayagraj</a>
          <a href="/digital-marketing-services/agra">Digital Marketing in Agra</a>
          <a href="/digital-marketing-services/meerut">Digital Marketing in Meerut</a>
          <a href="/digital-marketing-services/bareilly">Digital Marketing in Bareilly</a>
          <a href="/digital-marketing-services/gorakhpur">Digital Marketing in Gorakhpur</a>
          <a href="/digital-marketing-services/noida">Digital Marketing in Noida</a>
          <a href="/digital-marketing-services/jhansi">Digital Marketing in Jhansi</a>
          <a href="/digital-marketing-services/muzaffarnagar">Digital Marketing in Muzaffarnagar</a>
          <a href="/digital-marketing-services/mathura">Digital Marketing in Mathura</a>
          <a href="/digital-marketing-services/rampur">Digital Marketing in Rampur</a>
          <a href="/digital-marketing-services/shahjahanpur">Digital Marketing in Shahjahanpur</a>
          <a href="/digital-marketing-services/jaunpur">Digital Marketing in Jaunpur</a>
          <a href="/digital-marketing-services/firozabad">Digital Marketing in Firozabad</a>
          <a href="/digital-marketing-services/uttar-pradesh">All UP Regional Hubs <ArrowUpRight /></a>
        </nav>
        <nav aria-label="Products and Trust">
          <span className="v-footer-head">Products & Legal</span>
          <a href="/product-page">All 22 Product Packages <ArrowUpRight /></a>
          <a href="/about-sheevum-goel">About the Founder</a>
          <a href="/contact">Contact Page <ArrowUpRight /></a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href={MAP_URL} target="_blank" rel="noreferrer">
            Google Maps Office <ArrowUpRight />
          </a>
          <a href="https://www.linkedin.com/in/sheevumgoel" target="_blank" rel="noreferrer">
            Founder LinkedIn <ArrowUpRight />
          </a>
        </nav>
        <div className="v-footer-bottom-bar">
          <div className="v-footer-bottom-left">
            <div className="v-footer-motion-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/motion-graphics-sudarshan-ai-labs.gif"
                alt="Sudarshan AI Labs Motion Graphics"
                width={160}
                height={160}
                className="v-footer-motion-gif"
                loading="lazy"
              />
            </div>
            <div className="v-footer-motion-text">
              <span className="v-footer-motion-title">SUDARSHAN AI LABS</span>
              <p className="v-footer-motion-desc">
                AI-Driven Digital Marketing, Local SEO & Automated Growth Infrastructure
              </p>
            </div>
          </div>
          <div className="v-footer-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.732226993712!2d80.97939351103724!3d26.880247361387667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa85af66eb2a64e3d%3A0xa133613d3bd012a5!2sNava%20Netra%20Neural%20Sudarshan%20AI%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1790522435070!5m2!1sen!2sin"
              width="600"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sudarshan AI Labs Location Map"
            />
          </div>
        </div>
        <small>© 2026 Sudarshan AI Labs</small>
      </footer>
      <div className="v-mobile-dock" aria-label="Quick mobile contact actions">
        <div className="v-mobile-dock-inner">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="v-dock-wa"
            aria-label="Direct WhatsApp Consultation"
          >
            <WhatsappLogo weight="fill" />
            <span>WhatsApp</span>
          </a>
          <a
            href="/contact#contact-options"
            className="v-dock-cta"
          >
            <span>Book Strategic Audit</span>
            <ArrowRight weight="bold" />
          </a>
        </div>
      </div>
    </main>
  );
}
