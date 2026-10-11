import type { Metadata } from "next";
import {
  Buildings,
  Factory,
  GraduationCap,
  Heartbeat,
  MapPin,
  Storefront,
  MagnifyingGlass,
  Megaphone,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  WhatsappLogo,
  GlobeHemisphereWest,
  DeviceMobile,
  ChatsCircle,
} from "@phosphor-icons/react/dist/ssr";
import StructuredData from "../../_components/StructuredData";
import { cities } from "../../lib/cities";
import { absoluteUrl, ORGANIZATION_ID, WHATSAPP_URL, CONTACT_PHONE, PRIMARY_ADDRESS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services Across Uttar Pradesh | Sudarshan AI Labs",
  description:
    "Accelerate regional business growth across Uttar Pradesh with Sudarshan AI Labs. Scalable SEO, Google Maps dominance, vernacular marketing & AI-driven lead automation for 20 UP city hubs.",
  alternates: { canonical: "/digital-marketing-services/uttar-pradesh" },
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
    title: "Digital Marketing Services Across Uttar Pradesh | Sudarshan AI Labs",
    description:
      "Strategic digital marketing, local SEO, Google Ads, and AI WhatsApp automation tailored for MSMEs, healthcare, education, and ODOP manufacturers across Uttar Pradesh.",
    url: "/digital-marketing-services/uttar-pradesh",
    type: "website",
    locale: "en_IN",
    siteName: "Sudarshan AI Labs",
    images: [
      {
        url: "/sudarshan-lucknow-hero.webp",
        width: 1672,
        height: 941,
        alt: "Digital Marketing Services Across Uttar Pradesh - Sudarshan AI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services Across Uttar Pradesh | Sudarshan AI Labs",
    description:
      "Performance SEO, paid search, local Maps ranking, and AI growth funnels across 20 commercial hubs in Uttar Pradesh.",
    images: ["/sudarshan-lucknow-hero.webp"],
  },
  keywords: [
    "digital marketing services in Uttar Pradesh",
    "digital marketing agency UP",
    "SEO services Uttar Pradesh",
    "local SEO agency UP",
    "Uttar Pradesh business lead generation",
    "ODOP digital marketing",
    "Google Maps marketing Uttar Pradesh",
  ],
};

const cityIcons = [Buildings, Factory, GraduationCap, Heartbeat, Storefront, MapPin];

const coreServices = [
  {
    title: "Hyper-Local SEO & Google Maps (3-Pack) Optimization",
    desc: "Over 82% of regional buyers in Uttar Pradesh search on mobile devices with local intent (e.g., 'best clinic near me', 'wholesaler in Kanpur'). We optimize your Google Business Profile (GBP), manage geo-tagged reviews, build local citations, and engineer location signals so your business dominates the Google 3-Pack, driving consistent phone calls and walk-in footfall.",
    Icon: MapPin,
    features: [
      "Google Business Profile verification & ranking",
      "NAP consistency across regional directories",
      "Automated WhatsApp review generation flows",
      "Geo-targeted localized schema markup",
    ],
  },
  {
    title: "High-ROI Google Search & Performance Max Ads",
    desc: "Capture high-intent prospects at the exact moment they search for your solutions. We design tightly targeted Google Ads campaigns with strict negative keyword filtering, local radius bidding, and bilingual ad copy, ensuring your budget produces qualified business leads rather than hollow clicks.",
    Icon: MagnifyingGlass,
    features: [
      "Bilingual search ads (English & Hindi keywords)",
      "High-converting negative keyword hygiene",
      "Call-only and WhatsApp-click ad formats",
      "Direct conversion tracking with zero wasted spend",
    ],
  },
  {
    title: "Targeted Meta & Social Media Marketing (Instagram & Facebook)",
    desc: "Build strong brand affinity and generate high-volume consumer demand across Uttar Pradesh's active social media landscape. We produce localized visual creatives, direct-response video reels, and demographic-specific ad funnels tailored to regional consumer psychology and buying triggers.",
    Icon: Megaphone,
    features: [
      "Localized creative direction & reel scripts",
      "Audience retargeting & lookalike modeling",
      "In-feed lead generation forms with instant sync",
      "Full tracking across Meta Pixel & Conversion API",
    ],
  },
  {
    title: "AI-Powered WhatsApp Lead Automation & Funnels",
    desc: "In Uttar Pradesh, WhatsApp is the primary medium of commercial communication. Leads that wait hours for a reply quickly convert with competitors. Our AI WhatsApp funnels greet inbound prospects in under 60 seconds, qualify their requirements, provide service brochures, and schedule appointments instantly.",
    Icon: WhatsappLogo,
    features: [
      "Sub-60-second automated initial response",
      "Interactive qualification & FAQ handling",
      "Automated appointment & consultation booking",
      "Seamless live handover to your sales team",
    ],
  },
  {
    title: "High-Speed Website & Conversion Landing Page Architecture",
    desc: "A slow website costs you customers, especially on mobile 4G/5G connections in Tier-2 and Tier-3 cities. We engineer lightning-fast, mobile-first websites and conversion landing pages scoring 95+ on Google PageSpeed. Built for clarity, frictionless navigation, and clear call-to-action triggers.",
    Icon: DeviceMobile,
    features: [
      "PageSpeed 95+ mobile performance",
      "One-tap call and WhatsApp action buttons",
      "Mobile-first responsive design across all devices",
      "Structured schema markup for search engines & AI",
    ],
  },
  {
    title: "Bilingual & Vernacular Content Marketing (Hindi & English)",
    desc: "The fastest-expanding search segment in Uttar Pradesh is conversational voice search and text queries in Hindi. We develop dual-language content strategies that capture natural-language queries (e.g., 'उत्तर प्रदेश में सबसे अच्छा...'), unlocking massive search volume that standard agencies ignore.",
    Icon: GlobeHemisphereWest,
    features: [
      "Hindi voice search optimization",
      "Bilingual blog & FAQ content architecture",
      "Culturally resonant localized messaging",
      "Authoritative industry guides that build local trust",
    ],
  },
];

const upRegions = [
  {
    name: "Western UP Industrial & Export Corridor",
    hubs: "Noida, Ghaziabad, Meerut, Agra, Aligarh, Firozabad, Moradabad, Saharanpur, Muzaffarnagar",
    focus: "Manufacturing exports, ODOP brassware, glassware, leather footwear, lock hardware, auto engineering, and rapid B2B industrial expansion.",
    strategy: "National and international B2B SEO, verified Google Business Profile authority, digital product catalog landing pages, and automated WhatsApp lead qualification funnels.",
  },
  {
    name: "Central UP Administrative & Commercial Hub",
    hubs: "Lucknow, Kanpur, Ayodhya, Sitapur, Rae Bareli",
    focus: "Super-specialty healthcare, entrance coaching academies, real estate developments, retail fashion, leather processing, and surging spiritual tourism.",
    strategy: "Hyper-local 3-Pack Google Maps optimization, high-intent Google Search campaigns, WhatsApp CRM automation, and vernacular video content.",
  },
  {
    name: "Eastern UP & Purvanchal Consumer Belt",
    hubs: "Varanasi, Gorakhpur, Prayagraj, Jaunpur",
    focus: "Spiritual hospitality, handloom textiles, higher education institutes, medical diagnostic networks, and expanding regional consumer retail hubs.",
    strategy: "Bilingual search marketing (Hindi and English), regional review generation workflows, mobile-first booking systems, and Meta audience targeting.",
  },
  {
    name: "Bundelkhand & Southern UP Growth Centers",
    hubs: "Jhansi, Banda",
    focus: "Defense industrial corridor suppliers, agricultural logistics, heritage tourism, healthcare accessibility, and vocational institutes.",
    strategy: "Localized discovery SEO, multi-channel direct response lead capture, and community trust-building campaigns.",
  },
];

const keyIndustries = [
  {
    title: "ODOP & Manufacturing Exporters",
    desc: "From Moradabad brassware and Firozabad glassware to Kanpur leather goods and Bhadohi carpets, we engineer high-authority B2B digital assets that connect UP manufacturers with buyers and distributors nationwide and globally.",
    Icon: Factory,
  },
  {
    title: "Healthcare & Super-Specialty Clinics",
    desc: "Hospitals, diagnostic chains, IVF centers, and dental networks in Lucknow, Kanpur, and Varanasi need verified Google Maps visibility, positive patient review momentum, and frictionless instant appointment booking.",
    Icon: Heartbeat,
  },
  {
    title: "Education, IIT-JEE, NEET & UPSC Coaching",
    desc: "Coaching centers in Hazratganj, Kapoorthala, Prayagraj, and Gorakhpur require targeted seasonal Google Ads, high-converting admission landing pages, and automated WhatsApp inquiry management to maximize seat enrollment.",
    Icon: GraduationCap,
  },
  {
    title: "Real Estate Developers & Builders",
    desc: "Promoters along Shaheed Path, Ayodhya Highway, and Western Expressways need qualified property buyer inquiries, virtual video walkthroughs, and automated CRM lead scoring to close high-ticket sales.",
    Icon: Buildings,
  },
  {
    title: "Retail Showrooms, Jewelers & Lifestyle Brands",
    desc: "Traditional brick-and-mortar retailers in Hazratganj, Aminabad, and regional markets transition into omni-channel powerhouses with localized Meta ads, Google Maps footfall campaigns, and automated WhatsApp catalog browsing.",
    Icon: Storefront,
  },
  {
    title: "Professional Services & B2B Startups",
    desc: "Chartered accountants, legal consultants, IT services, and commercial vendors require high-trust digital positioning, verified local citations, and thought-leadership content that wins enterprise contracts.",
    Icon: ShieldCheck,
  },
];

const executionProcess = [
  {
    step: "01",
    title: "Regional Market & Competitor Audit",
    desc: "We analyze your target city's search volume, keyword difficulty, local 3-pack competition, and competitor ad strategies across Uttar Pradesh. We identify exactly where revenue is leaking and outline immediate opportunities for high-intent customer acquisition.",
  },
  {
    step: "02",
    title: "Digital Authority & Local Asset Setup",
    desc: "We claim, verify, and optimize your Google Business Profile, align NAP citations across Indian and local business directories, and deploy structured schema markup (LocalBusiness, GeoCoordinates, FAQPage) on your web properties.",
  },
  {
    step: "03",
    title: "Targeted Multi-Channel Traffic Acquisition",
    desc: "We deploy hyper-focused Google Search Ads, local SEO content, and localized Meta ad campaigns. Our bilingual copy targets motivated buyers across English and Hindi queries, ensuring your ad spend captures ready-to-buy regional demand.",
  },
  {
    step: "04",
    title: "Instant AI WhatsApp Lead Qualification",
    desc: "Every inbound inquiry is connected to an automated WhatsApp funnel that responds in under 60 seconds. The system asks pre-qualifying questions, shares relevant brochures or pricing ranges, and routes verified prospects directly to your sales team.",
  },
  {
    step: "05",
    title: "Continuous Optimization & Transparent Reporting",
    desc: "We provide transparent, weekly ROI dashboards tracking cost-per-lead (CPL), phone calls generated, Google Maps directions requested, and closed conversions. You retain 100% administrative ownership of all ad accounts, analytics, and creative assets.",
  },
];

const faqs = [
  {
    q: "How does Sudarshan AI Labs manage digital marketing across multiple Uttar Pradesh cities?",
    a: "We structure localized digital growth systems with dedicated city landing hubs, localized Google Business Profiles, city-specific keyword mapping, and vernacular customer touchpoints while maintaining unified analytics and centralized ROI tracking.",
  },
  {
    q: "Why is local SEO critical for businesses operating in tier-2 and tier-3 UP cities?",
    a: "Over 82% of regional buyers in Uttar Pradesh search on mobile devices using local commercial intent (e.g., 'best clinic near me', 'wholesaler in Kanpur'). Ranking in the top 3 Google Maps results directly generates high-trust phone calls, footfall, and immediate inquiries.",
  },
  {
    q: "Do you provide bilingual digital marketing in both Hindi and English?",
    a: "Yes. In Uttar Pradesh, voice queries and conversational searches in Hindi represent a massive, underserved segment. We craft bilingual metadata, ad copy, landing pages, and WhatsApp bots to ensure maximum customer engagement across linguistic preferences.",
  },
  {
    q: "How do AI automation and WhatsApp funnels improve marketing ROI for UP businesses?",
    a: "Traditional agencies deliver leads that sit unaddressed for hours. Our instant AI WhatsApp funnels greet prospects in seconds, answer common questions, qualify budget and requirements, and schedule calls—increasing lead-to-conversion rates by up to 300%.",
  },
  {
    q: "What is the timeline to see measurable organic growth across Uttar Pradesh hubs?",
    a: "Google Business Profile optimization and technical fixes typically produce measurable ranking improvements within 3 to 6 weeks. Broad organic SEO across high-competition regional terms compound significantly between months 3 and 6.",
  },
  {
    q: "Do I retain complete ownership of my Google Ads accounts and digital assets?",
    a: "Absolutely. At Sudarshan AI Labs, all Google Ads accounts, Meta Business Managers, Google Analytics properties, and website domains remain 100% owned by your company. We operate with complete transparency with no locked proprietary assets.",
  },
  {
    q: "How do you tailor strategies for One District One Product (ODOP) and manufacturing exporters?",
    a: "For UP's industrial clusters—such as Moradabad brassware, Firozabad glassware, and Agra leather—we build export-focused B2B landing pages, establish Google B2B authority, optimize digital product catalogs, and run targeted lead generation campaigns connecting manufacturers directly with national wholesale buyers.",
  },
];

export default function UttarPradeshCities() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl("/digital-marketing-services/uttar-pradesh")}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
      {
        "@type": "ListItem",
        position: 2,
        name: "Digital Marketing Services",
        item: absoluteUrl("/digital-marketing-services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Uttar Pradesh Regional Hub",
        item: absoluteUrl("/digital-marketing-services/uttar-pradesh"),
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/digital-marketing-services/uttar-pradesh")}#page`,
    url: absoluteUrl("/digital-marketing-services/uttar-pradesh"),
    name: "Digital Marketing Services Across Uttar Pradesh | Sudarshan AI Labs",
    description:
      "Regional digital marketing, local SEO, website design, and AI automation network covering 20 major city markets across Uttar Pradesh.",
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-IN",
    hasPart: cities.map((city) => ({
      "@type": "WebPage",
      name: city.h1,
      description: city.meta,
      url: absoluteUrl(
        city.slug === "lucknow"
          ? "/digital-marketing-services"
          : `/digital-marketing-services/${city.slug}`
      ),
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl("/digital-marketing-services/uttar-pradesh")}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="areas-index city-index">
      <StructuredData data={collectionSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />

      <nav className="area-nav">
        <a className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>
            SUDARSHAN <b>AI LABS</b>
          </span>
        </a>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a
            className="button button-small"
            style={{ textDecoration: "none" }}
            href="/digital-marketing-services"
          >
            All Services
          </a>
          <a className="button button-small" href={WHATSAPP_URL}>
            Free Audit ↗
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="area-hero" style={{ padding: "80px 8vw 60px" }}>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> <span>/</span>
          <a href="/digital-marketing-services">Services</a> <span>/</span>
          <span>Uttar Pradesh</span>
        </nav>
        <p className="eyebrow" style={{ color: "var(--blue)", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "12px" }}>
          STATEWIDE GROWTH FRAMEWORK • 20 COMMERCIAL HUBS
        </p>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15, fontWeight: 800, color: "#0f172a", marginBottom: "20px" }}>
          Digital Marketing Services Across Uttar Pradesh
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.6, color: "#475569", maxWidth: "880px", marginBottom: "28px" }}>
          Uttar Pradesh is experiencing a historic economic modernization. With rapid smartphone adoption, expanding 5G networks, and rising consumer spending across Tier-2 and Tier-3 hubs, modern businesses can no longer rely on unmeasurable hoardings or passive word-of-mouth. From industrial exporters in Western UP to healthcare providers and educational academies in Central and Eastern UP, Sudarshan AI Labs engineers high-impact digital marketing systems that convert regional search queries into qualified revenue.
        </p>

        {/* Quick Highlights Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "36px",
            maxWidth: "960px",
          }}
        >
          {[
            { title: "20 Dedicated City Hubs", sub: "Hyper-local market coverage statewide" },
            { title: "4 Economic Corridors", sub: "Tailored regional marketing playbooks" },
            { title: "Sub-60s WhatsApp Funnels", sub: "Instant AI lead qualification & booking" },
            { title: "100% Client Asset Ownership", sub: "Transparent ad accounts & direct ROI" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                padding: "16px 20px",
                borderRadius: "10px",
              }}
            >
              <b style={{ color: "#0f172a", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                {stat.title}
              </b>
              <span style={{ color: "#64748b", fontSize: "13px" }}>{stat.sub}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
          <a
            className="button"
            href={WHATSAPP_URL}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "#0f172a",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Claim Statewide Digital Audit <ArrowRight weight="bold" />
          </a>
          <a
            href="#city-directory"
            style={{
              padding: "14px 24px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              fontWeight: 600,
              color: "#334155",
              textDecoration: "none",
              background: "#fff",
            }}
          >
            Explore 20 City Hubs ↓
          </a>
        </div>
      </header>

      {/* Specific Digital Marketing Services in Uttar Pradesh */}
      <section style={{ padding: "70px 8vw", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ marginBottom: "44px" }}>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              FULL-STACK CAPABILITIES
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              Comprehensive Digital Marketing Services Engineered for UP Businesses
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "800px", marginTop: "8px", lineHeight: 1.6 }}>
              We do not sell generic agency retainers. We deploy proven, measurable acquisition channels customized to regional customer habits, mobile device speeds, and local commercial intent across Uttar Pradesh.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {coreServices.map((service) => {
              const Icon = service.Icon;
              return (
                <div
                  key={service.title}
                  style={{
                    background: "#f8fafc",
                    padding: "32px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: "#eff6ff",
                        color: "#2563eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        fontSize: "26px",
                      }}
                    >
                      <Icon weight="duotone" />
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: 750, color: "#0f172a", marginBottom: "12px", lineHeight: 1.3 }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65, marginBottom: "20px" }}>
                      {service.desc}
                    </p>
                  </div>
                  <div style={{ paddingTop: "18px", borderTop: "1px solid #e2e8f0" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {service.features.map((feat) => (
                        <li key={feat} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#334155" }}>
                          <CheckCircle weight="fill" style={{ color: "#16a34a", fontSize: "16px", flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Expertise & Ground-Level UP Market Insights */}
      <section style={{ padding: "70px 8vw", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              ON-GROUND MARKET INTELLIGENCE
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              Deep Local Expertise: Navigating Uttar Pradesh’s Consumer Dynamics
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "800px", marginTop: "8px", lineHeight: 1.6 }}>
              Marketing successfully in Uttar Pradesh demands an authentic understanding of local psychology, language nuances, and buying criteria that remote metro agencies frequently overlook.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "Bilingual & Vernacular Search Dynamics",
                desc: "While metro businesses rely on English, UP consumers conduct over 55% of their commercial queries in conversational Hindi or voice search. We structure bilingual metadata, local landing content, and Hindi ad creatives to capture this massive, low-competition search volume.",
                icon: GlobeHemisphereWest,
              },
              {
                title: "Trust-Driven Direct Communication",
                desc: "In UP, customers rarely buy from faceless checkouts. They want to speak directly, verify credibility, ask questions, and confirm availability. Our systems prioritize tap-to-call links and instant WhatsApp chats that build immediate trust.",
                icon: ChatsCircle,
              },
              {
                title: "ODOP & Industrial Cluster Specialization",
                desc: "From the Brass City of Moradabad to Kanpur’s leather hubs and Firozabad’s glassware, we understand the specific export documentation, product catalog presentation, and B2B trade inquiries required to scale UP manufacturing.",
                icon: Factory,
              },
              {
                title: "Mobile-First Bandwidth Optimization",
                desc: "Outside major Tier-1 pockets, regional customers browse on mobile data connections where heavy script-laden websites fail to load. We build ultra-lightweight, high-speed pages that load in under 1 second, preventing costly bounce rates.",
                icon: DeviceMobile,
              },
            ].map((insight) => {
              const Icon = insight.icon;
              return (
                <div
                  key={insight.title}
                  style={{
                    background: "#fff",
                    padding: "28px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "#eff6ff",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      fontSize: "22px",
                    }}
                  >
                    <Icon weight="duotone" />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 750, color: "#0f172a", marginBottom: "10px" }}>
                    {insight.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>
                    {insight.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Economic Corridors */}
      <section style={{ padding: "70px 8vw", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              STRATEGIC GEOGRAPHIC COVERAGE
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              Four Economic Corridors Tailored to Local Market Dynamics
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "780px", marginTop: "8px", lineHeight: 1.6 }}>
              Uttar Pradesh cannot be treated as a single monolithic market. We adapt our acquisition architecture to the unique economic realities of each distinct geographic zone.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {upRegions.map((region) => (
              <div
                key={region.name}
                style={{
                  background: "#f8fafc",
                  padding: "28px",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "19px", fontWeight: 750, color: "#0f172a", marginBottom: "10px" }}>
                    {region.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#2563eb", fontWeight: 650, marginBottom: "12px" }}>
                    {region.hubs}
                  </p>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.55, marginBottom: "14px" }}>
                    <b>Market Drivers:</b> {region.focus}
                  </p>
                </div>
                <div style={{ paddingTop: "14px", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ fontSize: "13px", color: "#334155", lineHeight: 1.5 }}>
                    <b>Growth Focus:</b> {region.strategy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Specific Playbooks */}
      <section style={{ padding: "70px 8vw", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              INDUSTRY-SPECIFIC EXPERTISE
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              Targeted Growth Playbooks for High-Growth Sectors in UP
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "750px", marginTop: "8px", lineHeight: 1.6 }}>
              Whether you serve local consumers or global export accounts, our structured playbooks ensure your digital presence is built on verified commercial intent.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {keyIndustries.map((ind) => {
              const Icon = ind.Icon;
              return (
                <div
                  key={ind.title}
                  style={{
                    background: "#fff",
                    padding: "28px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      background: "#eff6ff",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                      fontSize: "24px",
                    }}
                  >
                    <Icon weight="duotone" />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 750, color: "#0f172a", marginBottom: "10px" }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Proven 5-Stage Growth Process */}
      <section style={{ padding: "70px 8vw", background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ marginBottom: "44px" }}>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              STEP-BY-STEP METHODOLOGY
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              Our 5-Step Execution Framework: From Regional Audit to Scalable Growth
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "800px", marginTop: "8px", lineHeight: 1.6 }}>
              We eliminate guesswork with a disciplined, transparent execution model engineered specifically for Uttar Pradesh commercial markets.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {executionProcess.map((proc) => (
              <div
                key={proc.step}
                style={{
                  background: "#f8fafc",
                  padding: "26px",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "#cbd5e1",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {proc.step}
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: 750, color: "#0f172a", marginBottom: "10px" }}>
                  {proc.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technical & Strategic Pillars */}
      <section style={{ padding: "70px 8vw", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            <div>
              <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
                END-TO-END EXECUTION
              </p>
              <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#0f172a", marginTop: "8px", marginBottom: "18px" }}>
                Why Sudarshan AI Labs is the Trusted Partner for UP Enterprises
              </h2>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.65, marginBottom: "20px" }}>
                We bridge the gap between world-class technical execution and hyper-localized on-ground customer behavior in Uttar Pradesh. Our team ensures your assets are owned by you, fast, and primed for search engines and AI assistants alike.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "100% Client-Owned Ad Accounts, Analytics & Domain Assets",
                  "Bilingual SEO & Content: Capturing Hindi Voice & Regional Search Intent",
                  "Automated WhatsApp CRM Follow-Ups: Sub-60-second Response Times",
                  "Engineered for PageSpeed 95+ on Mobile Devices and Low Bandwidth",
                  "Clear Multi-Location Schema Markup (LocalBusiness, Geo, & OpenHours)",
                  "Headquartered in Lucknow with Direct On-Ground Market Experience",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#334155" }}>
                    <CheckCircle weight="fill" style={{ color: "#16a34a", fontSize: "18px", flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "#0f172a", color: "#fff", padding: "36px", borderRadius: "16px" }}>
              <span style={{ color: "#60a5fa", fontWeight: 700, fontSize: "13px", letterSpacing: "1px" }}>
                RAPID PERFORMANCE AUDIT
              </span>
              <h3 style={{ fontSize: "24px", fontWeight: 800, marginTop: "8px", marginBottom: "14px", color: "#fff" }}>
                Benchmark Your Uttar Pradesh Market Share Today
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>
                Receive a diagnostic audit analyzing your Google Maps pack ranking, keyword capture, website load speeds, and competitor gaps across your specific city target.
              </p>
              <a
                href={WHATSAPP_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "14px 20px",
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: "8px",
                  fontWeight: 700,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Request Free Regional Audit on WhatsApp ↗
              </a>
              <p style={{ textAlign: "center", fontSize: "12px", color: "#64748b", marginTop: "12px" }}>
                Direct support: {CONTACT_PHONE} • Lucknow Headquarters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 20 City Hub Directory */}
      <section className="up-city-directory" id="city-directory" aria-labelledby="up-city-title">
        <div className="area-section-title">
          <p className="section-kicker">20 DEDICATED CITY HUBS</p>
          <h2 id="up-city-title">Choose your Uttar Pradesh market</h2>
          <p>
            Explore dedicated regional centers containing city-specific industry profiles, customer context, competitor analysis, and local search strategies.
          </p>
        </div>
        <nav className="up-city-grid" aria-label="Top Uttar Pradesh cities">
          {cities.map((city, index) => {
            const Icon = cityIcons[index % cityIcons.length];
            return (
              <a
                href={
                  city.slug === "lucknow"
                    ? "/digital-marketing-services"
                    : `/digital-marketing-services/${city.slug}`
                }
                key={city.slug}
              >
                <span className="up-city-icon" aria-hidden="true">
                  <Icon weight="duotone" />
                </span>
                <small>{String(index + 1).padStart(2, "0")} · Uttar Pradesh</small>
                <h2>{city.name}</h2>
                <p>{city.primaryKeyword}</p>
                <b>Explore city hub ↗</b>
              </a>
            );
          })}
        </nav>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: "70px 8vw", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              QUESTIONS & ANSWERS
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginTop: "8px" }}>
              Frequently Asked Questions: UP Digital Marketing
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "24px 28px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3 style={{ fontSize: "17px", fontWeight: 750, color: "#0f172a", marginBottom: "8px" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.65 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="area-footer">
        <p>
          SEO • Google Ads • Social Media • Websites • Local SEO • WhatsApp Funnels • Uttar Pradesh Network
        </p>
        <nav aria-label="Legal">
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-of-service">Terms</a>
          <a href="/refund-policy">Refunds</a>
          <a href="/contact">Contact</a>
        </nav>
        <span>© 2026 Sudarshan AI Labs • Headquartered at {PRIMARY_ADDRESS}</span>
      </footer>
    </main>
  );
}
