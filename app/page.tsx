 
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
  X,
} from "@phosphor-icons/react/dist/ssr";
import {
  DUNS_NUMBER,
  MAP_URL,
  PRIMARY_ADDRESS,
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
import { serviceCatalog } from "./lib/service-catalog";
import { cities } from "./lib/cities";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const wa = WHATSAPP_URL;
const productIcons = [Target, Sparkle, WhatsappLogo, ChartLineUp, Lightning, Robot, Browsers, MapPin];
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
const products = [
  {
    name: "Micro Growth Audit",
    price: "₹89",
    tag: "Entry starter",
    text: "Instant digital visibility check, local search signal review and prioritized action plan for micro-businesses.",
    href: "/seo-services-lucknow",
  },
  {
    name: "Swaraj Tech Pack",
    price: "₹4,900",
    tag: "Starter bundle",
    text: "A lightweight digital launch pack for micro-businesses taking their first step online.",
    href: "/digital-marketing-services",
  },
  {
    name: "Prarambh Kick-Start Pack",
    price: "₹9,500",
    tag: "WhatsApp setup",
    text: "WhatsApp Business, catalogue and digital onboarding essentials for growing MSMEs.",
    href: "/lead-generation-lucknow",
  },
  {
    name: "Udaan Vyapari Pack",
    price: "₹14,500",
    tag: "Merchant growth",
    text: "Smart digital marketing and lead organisation designed for local merchants.",
    href: "/digital-marketing-services",
  },
  {
    name: "Raftar Booster Pack",
    price: "₹18,500",
    tag: "Lead generation",
    text: "Campaign support and lead-generation workflows to accelerate monthly outreach.",
    href: "/google-ads-services",
  },
  {
    name: "AI Chatbot & Assistant",
    price: "₹24,000",
    tag: "AI automation",
    text: "A customer-facing assistant for common questions, support and lead capture.",
    href: "/ai-automation-lucknow",
  },
  {
    name: "SEO & Content Boost",
    price: "₹12,500",
    tag: "Search visibility",
    text: "An SEO audit with content optimisation to strengthen your local online presence.",
    href: "/seo-services-lucknow",
  },
  {
    name: "Landing Page Lead Gen",
    price: "₹15,000",
    tag: "Conversion",
    text: "A focused campaign page built to turn visits and advertising clicks into enquiries.",
    href: "/website-design",
  },
  {
    name: "Website Launch Pack",
    price: "₹39,000",
    tag: "Web presence",
    text: "A modern five-page website foundation with local SEO and brand essentials.",
    href: "/website-design",
  },
];
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
  const productPage = 0;
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
            <span className="v-logo">
              <Sparkle weight="fill" />
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
              <div className="v-services-panel">
                <a
                  href="/digital-marketing-services"
                >
                  <ChartLineUp weight="duotone" />
                  <span>
                    <span className="menu-label">All services</span>
                    <small>Explore {serviceCatalog.length} core service pages</small>
                  </span>
                  <ArrowUpRight />
                </a>
                <a
                  href="/digital-marketing-services/uttar-pradesh"
                >
                  <GlobeHemisphereWest weight="duotone" />
                  <span>
                    <span className="menu-label">Services by city</span>
                    <small>Browse service-area guidance</small>
                  </span>
                  <ArrowUpRight />
                </a>
              </div>
            </div>
            <a href="#products">
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
                <div className="v-city-menu-grid" aria-label="Top 20 Uttar Pradesh city pages">
                  {cities.map((city, index) => (
                    <a href={city.slug === "lucknow" ? "/digital-marketing-services" : `/digital-marketing-services/${city.slug}`} key={city.slug}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {city.name}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
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
          </div>
          <div className="v-slider-controls">
            <button
              className="v-slider-arrow v-slider-arrow-prev"
              aria-label="View previous products"
            >
              <ArrowLeft weight="bold" />
              <span>Previous</span>
            </button>
            <button className="v-slider-arrow v-slider-arrow-next" aria-label="View next products">
              <span>Next</span>
              <ArrowRight weight="bold" />
            </button>
            <button
              className="v-slider-pause"
              aria-pressed={!autoPlay}
              aria-label={autoPlay ? "Pause product carousel" : "Play product carousel"}
            >
              {autoPlay ? "Pause" : "Play"}
            </button>
          </div>
        </div>
        <div
          className="v-product-track"
          tabIndex={0}
           aria-label="Sudarshan AI Labs product plans"
          aria-live="off"
        >
          {products.map((product, index) => {
            const ProductIcon = productIcons[index % productIcons.length];
            return (
            <article
              className={`v-product-card ${index === productPage ? "is-current" : ""}`}
              key={product.name}
              data-reveal
            >
              <div className="v-product-icon" aria-hidden="true">
                <ProductIcon weight="duotone" />
              </div>
              <span>{String(index + 1).padStart(2, "0")} · {product.tag}</span>
              <h3>{product.name}</h3>
              <p>{product.text}</p>
              <div className="v-product-price">
                <small>Starting at</small>
                <span className="price-value">{product.price}</span>
              </div>
              <a
                href={product.href}
              >
                Explore {product.name} <ArrowUpRight weight="bold" />
              </a>
            </article>
            );
          })}
        </div>
        <div className="v-product-dots" aria-label="Choose a product">
          {products.map((product, index) => (
            <button
              key={product.name}
              className={index === productPage ? "active" : ""}
              data-product-index={index} aria-label={`Show ${product.name}`}
              aria-current={index === productPage ? "true" : undefined}
            />
          ))}
        </div>
        <p className="v-price-note">
          Starting prices are planning-level guides. Final scope, inclusions
          and payment terms are confirmed in writing after a short review.
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
          <article data-reveal>
            <span className="glossy-icon" aria-hidden="true"><CheckCircle weight="duotone" /></span>
            <span className="card-number">01</span>
            <span>BUILD</span>
            <h3>Create the foundation</h3>
            <p>
              Clear positioning, searchable content, conversion pages and
              connected customer channels.
            </p>
          </article>
          <article data-reveal>
            <span className="glossy-icon" aria-hidden="true"><ChartLineUp weight="duotone" /></span>
            <span className="card-number">02</span>
            <span>AUTOMATE</span>
            <h3>Reduce repetitive work</h3>
            <p>
              Practical workflows for responses, lead organisation, reporting
              and recurring activity.
            </p>
          </article>
          <article data-reveal>
            <span className="glossy-icon" aria-hidden="true"><MagnifyingGlass weight="duotone" /></span>
            <span className="card-number">03</span>
            <span>TRANSFER</span>
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
          <article>
            <span className="card-number">01</span>
            <h3>Clear ownership</h3>
            <p>Websites, content and agreed systems are documented for handover.</p>
            <a href="/about-sheevum-goel">Meet the founder <ArrowUpRight /></a>
          </article>
          <article>
            <span className="card-number">02</span>
            <h3>Useful depth</h3>
            <p>Service and locality pages explain the customer problem, scope and limits.</p>
            <a href="/digital-marketing-services">Review the services <ArrowUpRight /></a>
          </article>
          <article>
            <span className="card-number">03</span>
            <h3>Honest proof</h3>
            <p>Client case studies are added only with permission and enough context to verify them.</p>
            <a href="/contact#contact-options">Request relevant examples <ArrowUpRight /></a>
          </article>
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
        <div className="v-final-orb">
          <Sparkle weight="fill" />
        </div>
        <span>FREE 20-MINUTE DIGITAL GROWTH AUDIT</span>
        <h2>Ready to become easier to find—and easier to choose?</h2>
        <p>
          Share your business name and website or Google listing. We will
          identify the three most useful actions to take next.
        </p>
        <a className="v-pill v-pill-light" href={wa}>
          Start on WhatsApp <WhatsappLogo weight="fill" />
        </a>
        <a className="v-final-secondary" href="/contact">
          Prefer phone or email? See contact options <ArrowUpRight />
        </a>
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
            <span className="v-logo">S</span>
            <span>
              SUDARSHAN <b>AI LABS</b>
            </span>
          </a>
          <p>
            AI-powered digital marketing, Local SEO, websites and automation for
            Lucknow and India.
          </p>
        </div>
        <nav>
          <b>Explore</b>
          <a href="#services">Services</a>
          <a href="#products">Products & plans</a>
          <a href="#approach">Approach</a>
          <a href="/about-sheevum-goel">About the Founder</a>
          <a href="/seo-services-lucknow">SEO Services</a>
          <a href="/social-media-marketing-lucknow">Social Media</a>
          <a href="/lead-generation-lucknow">Lead Generation</a>
          <a href="/ai-automation-lucknow">AI Automation</a>
          <a href="/digital-marketing-services">Lucknow Areas</a>
          <a href="/digital-marketing-services/uttar-pradesh">UP Cities</a>
        </nav>
        <nav>
          <b>Connect</b>
          <a href="tel:+919336299912">+91 93362 99912</a>
          <a href="mailto:sudarshanailabs@gmail.com">Email us</a>
          <a href="/contact">Contact page <ArrowUpRight /></a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href={MAP_URL} target="_blank" rel="noreferrer">
            {PRIMARY_ADDRESS} <ArrowUpRight />
          </a>
          <a href="https://www.linkedin.com/in/sheevumgoel">
            LinkedIn <ArrowUpRight />
          </a>
        </nav>
        <small>© 2026 Sudarshan AI Labs • {PRIMARY_ADDRESS}</small>
      </footer>
    </main>
  );
}
