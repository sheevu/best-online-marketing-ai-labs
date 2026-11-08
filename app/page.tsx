"use client";
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Browsers,
  CaretDown,
  ChartLineUp,
  ChatCircle,
  CheckCircle,
  GlobeHemisphereWest,
  InstagramLogo,
  Lightning,
  List,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  Moon,
  PhoneCall,
  Robot,
  Sparkle,
  Sun,
  Target,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react/dist/ssr";
import {
  BLOG_PLAYBOOK_URL,
  MAP_URL,
  ORGANIZATION_ID,
  PRIMARY_ADDRESS,
  SITE_URL,
  WHATSAPP_URL,
} from "./lib/site";
import { cities } from "./lib/cities";
import { serviceCatalog } from "./lib/service-catalog";
import { serializeJsonLd } from "./_components/StructuredData";
import PricingCatalog from "./_components/PricingCatalog";
import JotformWebsiteWidget from "./_components/JotformWebsiteWidget";

const wa = WHATSAPP_URL;
const services = [
  {
    title: "Own local search",
    text: "Local SEO and Google Maps systems that help nearby customers find and trust you.",
    tag: "Local visibility",
    href: "/local-seo-services",
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
    text: "Fast websites and landing pages with focused messages and frictionless actions.",
    tag: "Conversion design",
    href: "/website-design-development-lucknow",
    Icon: Browsers,
    theme: "lavender",
  },
  {
    title: "Reach ready buyers",
    text: "Google and Meta campaigns aligned with your offer, audience and sales capacity.",
    tag: "Paid growth",
    href: "/google-ads-management-lucknow",
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
    "What makes your Lucknow marketing approach different?",
    "We connect local search, content, websites, advertising and follow-up around one customer journey. The plan is shaped around your category, locality and ability to serve new enquiries.",
  ],
  [
    "Can you improve our Google Maps visibility?",
    "We improve the controllable signals: profile completeness, categories, services, location consistency, reviews, useful local content and website relevance. Fixed ranking positions cannot be guaranteed.",
  ],
  [
    "Do you work with small businesses and startups?",
    "Yes. We work with MSMEs, clinics, coaching institutes, retailers, real estate firms, professional services and growing startups in Lucknow and across India.",
  ],
  [
    "Will we own the work you create?",
    "Yes. Our Build, Automate, Transfer model is designed around ownership. Agreed websites, content, systems and knowledge are handed over to your team.",
  ],
  [
    "How do we begin?",
    "Start with a free growth audit. Share your website or Google listing and we will identify the most useful priorities before suggesting a scope.",
  ],
];
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Sudarshan AI Labs",
  alternateName: "NAVA-NETRA NEURAL SUDARSHAN LABS PRIVATE LIMITED",
  legalName: "NAVA-NETRA NEURAL SUDARSHAN LABS PRIVATE LIMITED",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/sudarshan-site-icon-512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/sudarshan-lucknow-hero.webp`,
  telephone: "+91-7080842220",
  email: "sudarshanailabs@gmail.com",
    description:
    "Lucknow-based AI and digital growth company helping MSMEs improve local visibility, conversion and customer follow-up.",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/about-sheevum-goel#sheevum-goel`,
    name: "Sheevum Goel",
    url: `${SITE_URL}/about-sheevum-goel`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7080842220",
    email: "sudarshanailabs@gmail.com",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://in.linkedin.com/company/sudarshan-ai-labs",
    "https://www.facebook.com/sudarshanlabsinc/",
  ],
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Sudarshan AI Labs",
  alternateName: "NAVA-NETRA NEURAL SUDARSHAN LABS PRIVATE LIMITED",
  url: SITE_URL,
  image: `${SITE_URL}/sudarshan-lucknow-hero.webp`,
  logo: `${SITE_URL}/sudarshan-site-icon-512.png`,
  telephone: "+91-7080842220",
  email: "sudarshanailabs@gmail.com",
  priceRange: "Offers from ₹89; monthly growth plans available",
  currenciesAccepted: "INR",
  parentOrganization: { "@id": ORGANIZATION_ID },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gomti Nagar",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226010",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.8467, longitude: 80.9462 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  }],
  areaServed: [
    { "@type": "City", name: "Lucknow" },
    { "@type": "State", name: "Uttar Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI and digital marketing services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${SITE_URL}${service.href}`,
      },
    })),
  },
  sameAs: organizationSchema.sameAs,
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};
const serviceSchemas = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.text,
  url: `${SITE_URL}${service.href}`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: { "@type": "City", name: "Lucknow" },
}));

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locations, setLocations] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [goal, setGoal] = useState<keyof typeof goals>("visibility");
  const [darkMode, setDarkMode] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [locationCount, setLocationCount] = useState(40);
  const locationStat = useRef<HTMLDivElement>(null);
  const serviceRail = useRef<HTMLDivElement>(null);
  const active = goals[goal];
  const scrollServices = (direction: -1 | 1) => {
    const rail = serviceRail.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".v-service");
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 18;
    rail.scrollBy({ left: direction * ((card?.getBoundingClientRect().width ?? rail.clientWidth) + gap), behavior: "smooth" });
  };
  const closeNavigation = () => {
    setMenu(false);
    setServicesOpen(false);
    setLocations(false);
    setResourcesOpen(false);
  };
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      ".v-home section:not(.v-hero-shell),.v-footer",
    );
    nodes.forEach((node, index) => {
      node.classList.add("v-reveal");
      node.style.setProperty("--reveal-order", String(index % 2));
    });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        setServicesOpen(false);
        setLocations(false);
        setResourcesOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth > 780) {
        setMenu(false);
        setServicesOpen(false);
        setLocations(false);
        setResourcesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.classList.toggle("nav-open", menu);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("nav-open");
    };
  }, [menu]);
  useEffect(() => {
    const saved = window.localStorage.getItem("sal-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const timer = window.setTimeout(
      () => setDarkMode(saved ? saved === "dark" : prefersDark),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("sal-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  useEffect(() => {
    const node = locationStat.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - started) / 900, 1);
        setLocationCount(Math.round(40 * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <main id="top" className="v-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd([organizationSchema, localBusinessSchema, faqSchema, ...serviceSchemas]) }}
      />
      <header className="v-site-header">
        <div className="v-topline">
          <span>
            <Lightning weight="fill" /> Lucknow businesses: request a
            complimentary digital visibility audit
          </span>
          <div>
            <a href="tel:+917080842220">
              <PhoneCall weight="bold" /> +91 70808 42220
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
            aria-label="Sudarshan AI Labs home"
          >
            <span className="v-logo">
              <Image src="/sudarshan-site-icon-512.png" alt="Sudarshan AI Labs" width={44} height={44} unoptimized />
            </span>
            <span>
              SUDARSHAN <b>AI LABS</b>
              <small>LUCKNOW DIGITAL GROWTH</small>
            </span>
          </a>
          <div className={`v-links ${menu ? "open" : ""}`} id="main-navigation-links">
            <div className={`v-services-menu ${servicesOpen ? "active" : ""}`}>
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setLocations(false);
                  setResourcesOpen(false);
                }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="services-navigation-panel"
              >
                Services <CaretDown weight="bold" />
              </button>
              <div className="v-services-panel" id="services-navigation-panel">
                <a
                  href="/digital-marketing-services"
                  onClick={() => {
                    setServicesOpen(false);
                    setMenu(false);
                  }}
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
                  onClick={() => {
                    setServicesOpen(false);
                    setMenu(false);
                  }}
                >
                  <GlobeHemisphereWest weight="duotone" />
                  <span>
                    <span className="menu-label">Services by city</span>
                    <small>Browse {serviceCatalog.length * cities.length} service-city pages</small>
                  </span>
                  <ArrowUpRight />
                </a>
              </div>
            </div>
            <a href="#products" onClick={closeNavigation}>
              Products
            </a>
            <a href="#build-automate-transfer" onClick={closeNavigation}>
              How we work
            </a>
            <div className={`v-location-menu ${locations ? "active" : ""}`}>
              <button
                type="button"
                onClick={() => {
                  setLocations(!locations);
                  setResourcesOpen(false);
                  setServicesOpen(false);
                }}
                aria-expanded={locations}
                aria-haspopup="true"
                aria-controls="locations-navigation-panel"
              >
                Locations <CaretDown weight="bold" />
              </button>
              <div className="v-location-panel" id="locations-navigation-panel">
                <a
                  href="/digital-marketing-services"
                  onClick={() => {
                    setLocations(false);
                    setResourcesOpen(false);
                    setMenu(false);
                  }}
                >
                  <MapPin weight="duotone" />
                  <span>
                    <span className="menu-label">Lucknow neighbourhoods</span>
                    <small>Explore 20 local service areas</small>
                  </span>
                  <ArrowUpRight />
                </a>
                <a
                  href="/digital-marketing-services/uttar-pradesh"
                  onClick={() => {
                    setLocations(false);
                    setResourcesOpen(false);
                    setMenu(false);
                  }}
                >
                  <GlobeHemisphereWest weight="duotone" />
                  <span>
                    <span className="menu-label">Uttar Pradesh cities</span>
                    <small>Explore 20 growing business markets</small>
                  </span>
                  <ArrowUpRight />
                </a>
              </div>
            </div>
            <a href="/about-sheevum-goel" onClick={closeNavigation}>
              Founder
            </a>
            <div className={`v-services-menu v-resources-menu ${resourcesOpen ? "active" : ""}`}>
              <button type="button" aria-expanded={resourcesOpen} aria-controls="resources-navigation-panel" onClick={() => { setResourcesOpen(!resourcesOpen); setServicesOpen(false); setLocations(false); }}>
                Resources <CaretDown weight="bold" />
              </button>
              <div className="v-services-panel" id="resources-navigation-panel">
                <a href={BLOG_PLAYBOOK_URL} onClick={closeNavigation}><Browsers weight="duotone" /><span><span className="menu-label">Blog Playbook</span><small>AI and digital marketing guides</small></span><ArrowUpRight /></a>
                <a href="#build-automate-transfer" onClick={closeNavigation}><CheckCircle weight="duotone" /><span><span className="menu-label">Build, Automate, Transfer</span><small>Our process and your ownership</small></span><ArrowRight /></a>
              </div>
            </div>
            <a href="#faq" onClick={closeNavigation}>
              FAQ
            </a>
            <a href="/contact" onClick={closeNavigation}>
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
            type="button"
            className="v-theme-toggle"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? "Use light theme" : "Use dark theme"}
            title={darkMode ? "Use light theme" : "Use dark theme"}
          >
            {darkMode ? <Sun weight="duotone" /> : <Moon weight="duotone" />}
          </button>
          <button
            type="button"
            className="v-menu"
            onClick={() => {
              setMenu(!menu);
              if (menu) {
                setServicesOpen(false);
                setLocations(false);
                setResourcesOpen(false);
              }
            }}
            aria-expanded={menu}
            aria-controls="main-navigation-links"
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <List />}
          </button>
        </nav>
      </header>

      <section className="v-hero-shell">
        <div className="v-aurora a-one" />
        <div className="v-aurora a-two" />
        <div
          className="v-hero-card"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
            event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
            event.currentTarget.style.setProperty("--parallax-x", `${((event.clientX - rect.left) / rect.width - 0.5) * 10}px`);
            event.currentTarget.style.setProperty("--parallax-y", `${((event.clientY - rect.top) / rect.height - 0.5) * 8}px`);
          }}
          onPointerLeave={(event) => {
            event.currentTarget.style.setProperty("--parallax-x", "0px");
            event.currentTarget.style.setProperty("--parallax-y", "0px");
          }}
        >
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
              AI-powered growth
              <br />
              <em>for Lucknow MSMEs.</em>
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
          <a className="vf-coral" href="/seo-services-lucknow">
            <MapPin weight="duotone" />
            <div>
              <h2>Local visibility</h2>
              <p>Own high-intent searches across Lucknow.</p>
            </div>
            <ArrowUpRight />
          </a>
          <a className="vf-sky" href="/website-design-development-lucknow">
            <Browsers weight="duotone" />
            <div>
              <h2>Conversion websites</h2>
              <p>Turn visits into useful conversations.</p>
            </div>
            <ArrowUpRight />
          </a>
          <a className="vf-lemon" href="/ai-automation-lucknow">
            <Robot weight="duotone" />
            <div>
              <h2>AI + WhatsApp</h2>
              <p>Automate repetitive work, keep the human touch.</p>
            </div>
            <ArrowUpRight />
          </a>
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
              A complete growth system.
              <br />
              <em>Not disconnected marketing.</em>
            </h2>
          </div>
          <p>
            Every service has a clear role—from being discovered to earning
            trust, capturing an enquiry and following up well.
          </p>
        </div>
        <div className="service-carousel-toolbar">
          <span>Explore all six services</span>
          <div aria-label="Service carousel controls">
            <button type="button" aria-label="Previous services" onClick={() => scrollServices(-1)}><ArrowRight className="service-arrow-back" weight="bold" /></button>
            <button type="button" aria-label="Next services" onClick={() => scrollServices(1)}><ArrowRight weight="bold" /></button>
          </div>
        </div>
        <div className="v-service-grid" ref={serviceRail} aria-label="Digital growth services">
          {services.map(({ title, text, tag, href, Icon, theme }, i) => (
            <article className={`v-service ${theme}`} key={title}>
              <div className="v-service-top">
                <span>0{i + 1}</span>
                <Icon weight="duotone" />
              </div>
              <div>
                <small>{tag}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <a href={href} aria-label={`Learn about ${title}`}>
                Explore {title} <ArrowUpRight weight="bold" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <PricingCatalog />

      <JotformWebsiteWidget />

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
          <div className="goal-tabs" role="tablist">
            {Object.entries(goals).map(([key, item]) => (
              <button
                key={key}
                className={goal === key ? "active" : ""}
                onClick={() => setGoal(key as keyof typeof goals)}
                role="tab"
                aria-selected={goal === key}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="goal-result" aria-live="polite">
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
        </div>
      </section>

      <section className="v-section v-method" id="build-automate-transfer" aria-labelledby="method-title">
        <div className="v-section-head">
          <div>
            <span className="v-kicker">OUR OPERATING MODEL</span>
            <h2 id="method-title">
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
          <article>
            <span className="glossy-icon" aria-hidden="true"><CheckCircle weight="duotone" /></span>
            <div className="method-label"><span className="card-number">01</span><span>BUILD</span></div>
            <h3>Create the foundation</h3>
            <p>
              Clear positioning, searchable content, conversion pages and
              connected customer channels.
            </p>
            <a href="/website-design-development-lucknow">Explore website design <ArrowUpRight /></a>
          </article>
          <article>
            <span className="glossy-icon" aria-hidden="true"><ChartLineUp weight="duotone" /></span>
            <div className="method-label"><span className="card-number">02</span><span>AUTOMATE</span></div>
            <h3>Reduce repetitive work</h3>
            <p>
              Practical workflows for responses, lead organisation, reporting
              and recurring activity.
            </p>
            <a href="/ai-automation-lucknow">Explore AI automation <ArrowUpRight /></a>
          </article>
          <article>
            <span className="glossy-icon" aria-hidden="true"><MagnifyingGlass weight="duotone" /></span>
            <div className="method-label"><span className="card-number">03</span><span>TRANSFER</span></div>
            <h3>Hand over with clarity</h3>
            <p>
              Your team receives the assets, documentation and confidence to
              operate independently.
            </p>
            <a href="/ai-business-consulting-lucknow#deliverables">Explore training and handover <ArrowUpRight /></a>
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
        <div className="v-proof-intro">
          <CheckCircle weight="duotone" />
          <p><strong>Evidence first.</strong> Review the business presence and founder, then ask for examples relevant to your category.</p>
          <a href={MAP_URL} target="_blank" rel="noreferrer">Google Maps presence <ArrowUpRight /></a>
        </div>
        <div className="v-proof-grid">
          <article>
            <div className="proof-icon"><CheckCircle weight="duotone" /><span>01 / OWNERSHIP</span></div>
            <h3>Clear ownership</h3>
            <p>Websites, content and agreed systems are documented for handover.</p>
            <a href="/about-sheevum-goel">Meet the founder <ArrowUpRight /></a>
          </article>
          <article>
            <div className="proof-icon"><Browsers weight="duotone" /><span>02 / DEPTH</span></div>
            <h3>Useful depth</h3>
            <p>Service and locality pages explain the customer problem, scope and limits.</p>
            <a href="/digital-marketing-services">Review the services <ArrowUpRight /></a>
          </article>
          <article>
            <div className="proof-icon"><MagnifyingGlass weight="duotone" /><span>03 / PROOF</span></div>
            <h3>Honest proof</h3>
            <p>Client case studies are added only with permission and enough context to verify them.</p>
            <a href="/contact#contact-options">Request relevant examples <ArrowUpRight /></a>
          </article>
        </div>
      </section>

      <section className="v-lucknow" id="lucknow-uttar-pradesh" aria-labelledby="location-title">
        <div className="lucknow-copy">
          <span className="v-kicker light">LOCAL INTELLIGENCE</span>
          <h2 id="location-title">
            Lucknow roots.
            <br />
            <em>Uttar Pradesh scale.</em>
          </h2>
          <p>
            Explore 20 locality pages for Lucknow and 20 city pages across
            Uttar Pradesh, each written around a distinct customer context.
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
            <a href="/best-digital-marketing-agency-lucknow/lucknow">
              Digital marketing in Lucknow <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="lucknow-stat" ref={locationStat}>
          <div className="location-stat-head"><MapPin weight="duotone" /><span>LOCAL SERVICE DIRECTORY</span></div>
          <div className="location-stat-count"><strong aria-label="40 location pages">{locationCount}</strong><span>LOCATION<br/>PAGES</span></div>
          <p>
            locally relevant service pages built around real business patterns,
            search intent and customer needs.
          </p>
          <details className="location-directory">
            <summary>Browse location directories <span>+</span></summary>
            <nav aria-label="Location directories">
              <a href="/digital-marketing-services">
                <MapPin weight="duotone" />
                <span><b>Lucknow neighbourhoods</b><small>View all 20 local service areas</small></span>
                <ArrowUpRight />
              </a>
              <a href="/digital-marketing-services/uttar-pradesh">
                <GlobeHemisphereWest weight="duotone" />
                <span><b>Uttar Pradesh cities</b><small>View all 20 city guides</small></span>
                <ArrowUpRight />
              </a>
            </nav>
          </details>
          <a className="v-map-link" href={MAP_URL} target="_blank" rel="noreferrer">
            View our primary Gomti Nagar location on Google Maps <ArrowUpRight />
          </a>
        </div>
      </section>

      <div className="v-trust-strip" aria-label="Business credentials and local presence">
        <div className="v-trust-track">
          {[0, 1].map((copy) => (
            <div className="v-trust-set" key={copy} aria-hidden={copy === 1}>
              <span><CheckCircle weight="duotone" /> DPIIT recognised startup</span>
              <span><GlobeHemisphereWest weight="duotone" /> D-U-N-S registered</span>
              <span><MapPin weight="duotone" /> Lucknow based</span>
              <a href="/about-sheevum-goel" tabIndex={copy === 1 ? -1 : undefined}>Meet the founder <ArrowUpRight /></a>
            </div>
          ))}
        </div>
      </div>
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
          <a className="orbit-node node-seo" href="/seo-services-lucknow">
            <MagnifyingGlass weight="bold" />
            <span>
              <span className="orbit-label">Search visibility</span>
              <small>Get discovered</small>
            </span>
          </a>
          <a className="orbit-node node-brand" href="/social-media-marketing-lucknow">
            <Sparkle weight="bold" />
            <span>
              <span className="orbit-label">Brand trust</span>
              <small>Stay memorable</small>
            </span>
          </a>
          <a className="orbit-node node-web" href="/website-design-development-lucknow">
            <Browsers weight="bold" />
            <span>
              <span className="orbit-label">Conversion pages</span>
              <small>Turn visits into leads</small>
            </span>
          </a>
          <a className="orbit-node node-ai" href="/ai-automation-lucknow">
            <Robot weight="bold" />
            <span>
              <span className="orbit-label">AI follow-up</span>
              <small>Respond intelligently</small>
            </span>
          </a>
          <a className="orbit-node node-ads" href="/google-ads-management-lucknow">
            <Target weight="bold" />
            <span>
              <span className="orbit-label">Performance ads</span>
              <small>Reach ready buyers</small>
            </span>
          </a>
        </div>
      </section>

      <nav className="v-quick-dock" aria-label="Quick contact actions">
        <a href={wa}><WhatsappLogo weight="fill" /> WhatsApp audit</a>
        <a href={MAP_URL} target="_blank" rel="noreferrer"><MapPin weight="fill" /> Directions</a>
        <a href="tel:+917080842220"><PhoneCall weight="fill" /> Call</a>
      </nav>
      <aside className={`site-assistant ${assistantOpen ? "is-open" : ""}`} aria-label="Leeila AI assistant">
        {assistantOpen && (
          <section className="site-assistant-panel" id="site-assistant-panel" aria-labelledby="site-assistant-title">
            <header className="site-assistant-heading">
              <span className="site-assistant-avatar"><Robot weight="fill" /></span>
              <div><strong id="site-assistant-title">Leeila AI</strong><small>Ask about services, plans or next steps</small></div>
              <button type="button" onClick={() => setAssistantOpen(false)} aria-label="Close AI assistant"><X weight="bold" /></button>
            </header>
            <div className="site-assistant-intro">
              <span className="assistant-status"><i /> AI assistant</span>
              <p>Hi, I can help you explore digital marketing, local SEO, websites, automation and our monthly plans.</p>
              <div className="assistant-prompts"><a href="#products" onClick={() => setAssistantOpen(false)}>Compare plans</a><a href="#services" onClick={() => setAssistantOpen(false)}>Explore services</a><a href={wa} target="_blank" rel="noreferrer">Request a free audit</a></div>
            </div>
            <iframe title="Chat with Leeila AI" src="https://agent.jotform.com/019aa7fd4aaa7cccb0ce1b2c0748666c3478" loading="lazy" />
            <a className="assistant-full-link" href="https://agent.jotform.com/019aa7fd4aaa7cccb0ce1b2c0748666c3478" target="_blank" rel="noreferrer">Open Leeila AI in a new tab <ArrowUpRight /></a>
          </section>
        )}
        <button className="site-assistant-trigger" type="button" aria-expanded={assistantOpen} aria-controls="site-assistant-panel" onClick={() => setAssistantOpen((open) => !open)}>
          {assistantOpen ? <X weight="bold" /> : <ChatCircle weight="fill" />}<span>{assistantOpen ? "Close assistant" : "Ask Leeila AI"}</span>
        </button>
      </aside>
      <section className="v-map-section" id="location" aria-labelledby="map-section-title">
        <div className="v-map-copy">
          <span className="v-kicker">OUR LUCKNOW SERVICE AREA</span>
          <h2 id="map-section-title">Local support, <em>rooted in Lucknow.</em></h2>
          <p>Explore the Gomti Nagar area and nearby neighbourhoods. We work with businesses across Lucknow and Uttar Pradesh.</p>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="v-map-directions">
            <MapPin weight="fill" /> Open directions in Google Maps <ArrowUpRight />
          </a>
        </div>
        <div className="v-map-frame">
          <iframe
            title="Google Map centered on Gomti Nagar, Lucknow"
            src="/lucknow-neighborhood-map.html"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
      <footer className="v-footer">
        <div>
          <a className="v-brand" href="#top">
            <span className="v-logo"><Image src="/sudarshan-site-icon-512.png" alt="Sudarshan AI Labs" width={44} height={44} unoptimized /></span>
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
          <a href="#build-automate-transfer">Build, Automate, Transfer</a>
          <a className="footer-playbook" href={BLOG_PLAYBOOK_URL}>Read the Blog Playbook <ArrowUpRight /></a>
          <a href="/about-sheevum-goel">About the Founder</a>
          <a href="/seo-services-lucknow">SEO services in Lucknow</a>
          <a href="/social-media-marketing-lucknow">Social media marketing in Lucknow</a>
          <a href="/lead-generation-lucknow">Lead generation in Lucknow</a>
          <a href="/ai-automation-lucknow">AI and WhatsApp automation in Lucknow</a>
          <a href="/digital-marketing-services">Lucknow Areas</a>
          <a href="/digital-marketing-services/uttar-pradesh">UP Cities</a>
        </nav>
        <nav>
          <b>Connect</b>
          <a href="tel:+917080842220">+91 70808 42220</a>
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
        <a
          href="https://www.goodfirms.co/company/nava-netra-neural-sudarshan-ai-labs"
          target="_blank"
          rel="noopener"
          aria-label="Available on GoodFirms"
          style={{ display: "inline-flex", alignItems: "center", marginTop: "1.25rem" }}
        >
          <img
            src="https://assets.goodfirms.co/badges/available-on-goodfirms.png"
            alt="Available on GoodFirms"
            width={200}
            height={80}
            loading="lazy"
            style={{ width: "min(200px, 100%)", height: "auto" }}
          />
        </a>
        <div className="v-preferred-source" aria-label="Follow Sudarshan AI Labs on Google">
          <div>
            <strong>Stay connected on Google</strong>
            <p>Make Sudarshan AI Labs a preferred source for our latest updates.</p>
          </div>
          <div google-add-preferred-source-btn="" data-theme="light" />
          <a href="https://www.google.com/preferences/source?q=sudarshan-ai.com" target="_blank" rel="noopener noreferrer">
            Add us as a preferred source on Google <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <small>© 2026 Sudarshan AI Labs • {PRIMARY_ADDRESS}</small>
      </footer>
    </main>
  );
}
