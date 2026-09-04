/* eslint-disable @next/next/no-html-link-for-pages, react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Briefcase,
  Buildings,
  Compass,
  GlobeHemisphereWest,
  Handshake,
  IdentificationCard,
  LightbulbFilament,
  LinkedinLogo,
  MediumLogo,
  Notebook,
  Robot,
  RocketLaunch,
  Sparkle,
  Target,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "./ScrollReveal";
import { ORGANIZATION_ID, SITE_URL } from "../lib/site";

const profileUrl = `${SITE_URL}/about-sheevum-goel`;
const links = {
  portfolio: "https://sheevum-goel-about.netlify.app/",
  x: "https://x.com/sheevum",
  linkedin: "https://www.linkedin.com/in/sheevumgoel",
  card: "https://app.wavecnct.com/sheevum.goel.v94x",
  medium: "https://sheevumgoel.medium.com/",
  command:
    "https://about-sheevum-goel.notion.site/Sudarshan-AI-Labs-Founder-Command-Center-37922c918f0f818babd4f91b7c941ee7?pvs=149",
};

export const metadata: Metadata = {
  title: "Sheevum Goel | Sudarshan AI Labs Founder",
  description:
    "Meet Sheevum Goel, a Lucknow entrepreneur, AI startup founder and growth strategist building AI, digital marketing and web development solutions for India.",
  keywords: [
    "Sheevum Goel",
    "Sheevum Goel entrepreneur",
    "founder of Sudarshan AI Labs",
    "AI entrepreneur in India",
    "AI startup founder in India",
    "AI consultant in Lucknow",
    "generative AI consultant India",
    "AI automation for MSMEs",
    "AI for Bharat",
    "responsible AI India",
    "startup founder Lucknow",
    "best AI startup in India",
    "best digital marketing services in Lucknow",
    "digital marketing agency in Lucknow",
    "web development agency in Lucknow",
    "AI-powered web development India",
    "local SEO services Lucknow",
  ],
  alternates: { canonical: "/about-sheevum-goel" },
  openGraph: {
    title: "Sheevum Goel | Entrepreneur Building AI for Bharat",
    description:
      "Founder of Sudarshan AI Labs. Building practical AI, digital growth and web solutions for MSMEs, startups and ambitious Indian businesses.",
    url: "/about-sheevum-goel",
    siteName: "Sudarshan AI Labs",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/sheevum-goel-og.png",
        width: 1200,
        height: 630,
        alt: "Sheevum Goel - Entrepreneur, AI for Bharat and Founder of Sudarshan AI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheevum Goel | AI Entrepreneur & Founder",
    description:
      "AI for Bharat, practical business automation and digital growth from Lucknow, India.",
    images: ["/sheevum-goel-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": profileUrl,
  url: profileUrl,
  name: "About Sheevum Goel - Entrepreneur and Founder of Sudarshan AI Labs",
  dateModified: "2026-08-20",
  mainEntity: {
    "@type": "Person",
    "@id": `${profileUrl}#sheevum-goel`,
    name: "Sheevum Goel",
    alternateName: "@sheevum",
    url: links.portfolio,
    jobTitle: "Entrepreneur, AI Consultant and Founder of Sudarshan AI Labs",
    description:
      "Lucknow-based entrepreneur building practical AI, digital marketing, web development and business automation solutions for Indian MSMEs and startups.",
    homeLocation: { "@type": "Place", name: "Lucknow, Uttar Pradesh, India" },
    knowsAbout: [
      "Artificial intelligence",
      "Generative AI",
      "AI automation",
      "Digital marketing",
      "Local SEO",
      "Web development",
      "No-code technology",
      "FMCG growth",
      "MSME digitisation",
    ],
    worksFor: { "@id": ORGANIZATION_ID },
    sameAs: Object.values(links),
  },
};

const expertise = [
  {
    Icon: Robot,
    label: "AI startup strategy",
    title: "Useful AI before AI theatre",
    text: "Agentic workflows, business automation and Hindi-first product thinking shaped around real operating constraints.",
  },
  {
    Icon: Target,
    label: "Digital growth",
    title: "Visibility connected to conversion",
    text: "Local SEO, content, performance marketing and customer journeys designed as one growth system.",
  },
  {
    Icon: Buildings,
    label: "Web development",
    title: "Fast, focused digital products",
    text: "Conversion websites, landing pages, portals and no-code systems that teams can understand and own.",
  },
  {
    Icon: GlobeHemisphereWest,
    label: "AI for Bharat",
    title: "Built for Indian reality",
    text: "Accessible tools for MSMEs, retailers, learners and communities across Tier 2 and Tier 3 India.",
  },
];

const connectCards = [
  {
    Icon: Compass,
    kicker: "Complete portfolio",
    title: "Explore the founder journey",
    text: "See Sheevum's ventures, ideas, experiments and evolving mission in one visual portfolio.",
    cta: "Enter the full portfolio",
    href: links.portfolio,
    theme: "pink",
  },
  {
    Icon: LinkedinLogo,
    kicker: "Partnerships",
    title: "Connect professionally",
    text: "Discuss AI strategy, digital growth, collaborations, training or founder-to-founder opportunities.",
    cta: "Start a LinkedIn conversation",
    href: links.linkedin,
    theme: "blue",
  },
  {
    Icon: XLogo,
    kicker: "Ideas in motion",
    title: "Follow the live thinking",
    text: "Track concise observations on AI, entrepreneurship, Bharat-first innovation and business growth.",
    cta: "Follow @sheevum on X",
    href: links.x,
    theme: "ink",
  },
  {
    Icon: IdentificationCard,
    kicker: "Direct connection",
    title: "Save the digital business card",
    text: "Keep Sheevum's professional profile and contact routes ready for the next conversation.",
    cta: "Open the smart contact card",
    href: links.card,
    theme: "mint",
  },
  {
    Icon: MediumLogo,
    kicker: "Thought leadership",
    title: "Read the long-form ideas",
    text: "Explore writing on cultural marketing, AI, MSME digitisation, retail and India's digital future.",
    cta: "Read articles on Medium",
    href: links.medium,
    theme: "yellow",
  },
  {
    Icon: Notebook,
    kicker: "Founder workspace",
    title: "Open the command centre",
    text: "Visit the wider knowledge hub for Sudarshan AI Labs, founder context and connected resources.",
    cta: "Explore the command centre",
    href: links.command,
    theme: "violet",
  },
];

const journey = [
  {
    period: "2014–2021",
    title: "Operations and delivery discipline",
    text: "Multi-project production and delivery work built the operating foundation: planning, team coordination, quality control and dependable execution.",
  },
  {
    period: "2017–2022",
    title: "Retail and e-commerce in the real world",
    text: "As co-founder of City Fresh Stores, Sheevum worked across customer acquisition, digital commerce and the everyday complexity of running a consumer business.",
  },
  {
    period: "2018–Present",
    title: "FMCG, brand building and entrepreneurship",
    text: "Through Amulyam Enterprises, he deepened his understanding of Indian retail, offline markets, business development and the practical pressures facing distributors and small merchants.",
  },
  {
    period: "2023–Present",
    title: "Sudarshan AI Labs and the AI-for-Bharat mission",
    text: "Sudarshan AI Labs and Mosh Inc bring together AI strategy, digital marketing, web development, no-code systems and founder-led consulting for Indian businesses.",
  },
];

const ventures = [
  {
    title: "Sudarshan AI Labs",
    tag: "AI startup • Digital growth",
    text: "Practical AI, digital marketing, Local SEO, web development and automation for MSMEs, startups and ambitious brands.",
  },
  {
    title: "Vyapai CRM & AI Agent",
    tag: "Hindi-first business software",
    text: "A Hinglish CRM direction connecting leads, customers, invoices, payments, expenses, tasks and business-aware AI assistance.",
  },
  {
    title: "Kisaan GPT & Kirana Kranti AI",
    tag: "AI for Bharat",
    text: "AI product concepts designed around the information, marketing and workflow needs of farmers, retailers and small Indian businesses.",
  },
  {
    title: "Nirbhaya GPT & AI Sathi",
    tag: "Responsible human-centred AI",
    text: "Explorations in safety, wellbeing, offline intelligence and human-in-the-loop design for sensitive real-world contexts.",
  },
];

const faqs = [
  [
    "Who is Sheevum Goel?",
    "Sheevum Goel is a Lucknow-based entrepreneur, AI consultant and founder of Sudarshan AI Labs. His work connects business operations, FMCG and retail experience with digital marketing, web development, no-code systems and practical artificial intelligence.",
  ],
  [
    "What does the founder of Sudarshan AI Labs build?",
    "Sheevum leads work across AI strategy, agentic workflows, business automation, Local SEO, performance marketing, conversion websites, Hindi-first tools and digital growth systems for MSMEs and startups.",
  ],
  [
    "Can Sheevum help with AI consulting in India?",
    "Yes. Relevant engagements include AI opportunity mapping, workflow design, prompt and knowledge-system strategy, no-code prototypes, responsible implementation, founder advisory and team training.",
  ],
  [
    "Does Sudarshan AI Labs provide digital marketing and web development in Lucknow?",
    "Yes. The company offers founder-led digital marketing, Local SEO, conversion-focused websites, landing pages, paid growth and practical automation. It is positioned for businesses comparing the best digital marketing services in Lucknow or a capable web development agency in Lucknow.",
  ],
  [
    "Is Sudarshan AI Labs the best AI startup in India?",
    "“Best” is subjective and should be earned through outcomes, trust and useful products. Sudarshan AI Labs aims to become one of India's most useful AI startups by building affordable, Bharat-ready systems that solve real business problems.",
  ],
];

export default function AboutSheevumGoel() {
  return (
    <main className="v-home sg-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <ScrollReveal />

      <header className="sg-header">
        <a className="v-brand" href="/" aria-label="Sudarshan AI Labs home">
          <span className="v-logo">
            <Sparkle weight="fill" />
          </span>
          <span>
            SUDARSHAN <b>AI LABS</b>
            <small>FOUNDER PROFILE</small>
          </span>
        </a>
        <nav aria-label="Founder profile navigation">
          <a href="#story">Story</a>
          <a href="#growth-system">Growth system</a>
          <a href="#expertise">Expertise</a>
          <a href="#connect">Connect</a>
        </nav>
        <a
          className="v-pill v-pill-dark"
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <span>Discuss a partnership</span>
          <ArrowUpRight weight="bold" />
        </a>
      </header>

      <section className="sg-hero">
        <div className="sg-grid" aria-hidden="true" />
        <div className="sg-orb sg-orb-one" />
        <div className="sg-orb sg-orb-two" />
        <div className="sg-hero-copy">
          <a className="sg-back" href="/">
            <ArrowLeft /> Sudarshan AI Labs
          </a>
          <div className="sg-proof">
            <span>
              <RocketLaunch weight="fill" /> Entrepreneur
            </span>
            <span>
              <Atom weight="fill" /> AI startup founder
            </span>
            <span>
              <GlobeHemisphereWest weight="fill" /> Lucknow, India
            </span>
          </div>
          <h1>
            Sheevum Goel.
            <br />
            <em>Building AI that works for Bharat.</em>
          </h1>
          <p>
            Entrepreneur, AI consultant and founder of Sudarshan AI Labs,
            connecting more than a decade of business operations, FMCG
            experience, digital marketing and practical technology into growth
            systems for Indian MSMEs and startups.
          </p>
          <div className="sg-actions">
            <a
              className="v-pill v-pill-dark"
              href={links.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              Explore Sheevum's work <ArrowRight />
            </a>
            <a
              className="sg-text-link"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo weight="fill" /> Connect on LinkedIn{" "}
              <ArrowUpRight />
            </a>
          </div>
          <div className="sg-principle">
            <span>BUILD</span>
            <i />
            <span>AUTOMATE</span>
            <i />
            <span>TRANSFER</span>
          </div>
        </div>
        <div className="sg-portrait">
          <Image
            src="/sheevum-founder-lucknow-hero.webp"
            width={1536}
            height={1536}
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            alt="Illustrated portrait of Sheevum Goel holding a tablet with Lucknow architecture in the background"
          />
          <div className="sg-float sg-float-one">
            <LightbulbFilament weight="duotone" />
            <span>
              <b>Think locally</b>Build for India
            </span>
          </div>
          <div className="sg-float sg-float-two">
            <Handshake weight="duotone" />
            <span>
              <b>Partner openly</b>Transfer ownership
            </span>
          </div>
          <div className="sg-founder-seal">
            <Sparkle weight="fill" />
            <span>
              FOUNDER
              <br />
              SUDARSHAN
              <br />
              AI LABS
            </span>
          </div>
        </div>
      </section>

      <div className="sg-marquee" aria-label="Profile themes">
        <div>
          <span>ENTREPRENEUR</span>
          <i>✦</i>
          <span>AI INDIA</span>
          <i>✦</i>
          <span>MSME GROWTH</span>
          <i>✦</i>
          <span>WEB DEVELOPMENT</span>
          <i>✦</i>
          <span>DIGITAL MARKETING</span>
          <i>✦</i>
          <span>AI FOR BHARAT</span>
          <i>✦</i>
          <span>ENTREPRENEUR</span>
          <i>✦</i>
          <span>AI INDIA</span>
        </div>
      </div>

      <section className="sg-story" id="story" data-reveal>
        <div className="sg-story-lead">
          <span className="v-kicker">FOUNDER STORY</span>
          <h2>
            Business experience first.
            <br />
            <em>Technology with purpose.</em>
          </h2>
        </div>
        <div className="sg-story-copy">
          <p className="sg-large">
            Sheevum's work sits at the intersection of entrepreneurship, market
            understanding and accessible artificial intelligence.
          </p>
          <p>
            His journey moved through operations, FMCG, retail, e-commerce and
            brand building before expanding into AI consulting, no-code
            innovation, web development and digital growth. That path shapes a
            grounded belief: technology matters only when it helps a business
            get found, work better, serve people and build independent
            capability.
          </p>
          <p>
            From Lucknow, he is building Sudarshan AI Labs as an India-first AI
            startup and digital growth company for organisations that need
            clarity, affordability and practical execution—not another layer of
            complicated software.
          </p>
          <div className="sg-quote">
            <Sparkle weight="fill" />
            <p>
              “The goal is not to make AI look advanced. The goal is to make
              growth feel possible.”
            </p>
          </div>
        </div>
      </section>

      <section className="sg-poster-showcase" id="growth-system" data-reveal>
        <div className="sg-poster-title">
          <span className="v-kicker">FOUNDER-LED GROWTH, VISUALISED</span>
          <h2>
            One founder.
            <br />
            <em>Four connected growth moves.</em>
          </h2>
          <p>
            The second supplied artwork becomes the visual anchor for a clearer
            operating system: discoverability, credibility, conversion and
            intelligent follow-up.
          </p>
        </div>
        <div className="sg-poster-layout">
          <figure data-reveal>
            <div className="sg-poster-frame">
              <Image
                src="/sheevum-sudarshan-founder-poster.webp"
                width={1152}
                height={1536}
                sizes="(max-width: 900px) 100vw, 45vw"
                alt="Sudarshan AI Labs illustrated founder poster featuring Sheevum Goel, digital marketing, Local SEO, websites and AI automation"
              />
            </div>
            <figcaption>
              Sheevum Goel • Founder and growth partner • Sudarshan AI Labs
            </figcaption>
          </figure>
          <div className="sg-growth-panels">
            <article className="sg-growth-panel royal" data-reveal>
              <div>
                <span>01</span>
                <Target weight="duotone" />
              </div>
              <small>GET VISIBLE</small>
              <h3>Own the searches that matter.</h3>
              <p>
                Local SEO, Google Business Profile optimisation and useful
                search-led content make the business easier to discover.
              </p>
            </article>
            <article className="sg-growth-panel coral" data-reveal>
              <div>
                <span>02</span>
                <Sparkle weight="duotone" />
              </div>
              <small>BUILD TRUST</small>
              <h3>Turn attention into confidence.</h3>
              <p>
                Clear positioning, proof, brand consistency and people-first
                content help buyers understand why the business deserves
                consideration.
              </p>
            </article>
            <article className="sg-growth-panel yellow" data-reveal>
              <div>
                <span>03</span>
                <Buildings weight="duotone" />
              </div>
              <small>CONVERT ATTENTION</small>
              <h3>Give every visit a useful next step.</h3>
              <p>
                Fast websites, focused landing pages and frictionless enquiry
                routes connect marketing effort with real conversations.
              </p>
            </article>
            <article className="sg-growth-panel mint" data-reveal>
              <div>
                <span>04</span>
                <Robot weight="duotone" />
              </div>
              <small>AUTOMATE FOLLOW-UP</small>
              <h3>Respond faster without losing the human touch.</h3>
              <p>
                Practical AI, WhatsApp workflows and simple CRM systems reduce
                repetitive work and keep promising leads moving.
              </p>
            </article>
            <a
              className="sg-growth-wide"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              <div>
                <small>THE OPERATING PROMISE</small>
                <h3>
                  Build the foundation. Automate the repetition. Transfer the
                  capability.
                </h3>
              </div>
              <span>
                Discuss your growth system <ArrowUpRight weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="sg-expertise" id="expertise" data-reveal>
        <div className="sg-section-head">
          <span className="v-kicker light">WHAT SHEEVUM BUILDS</span>
          <h2>
            Strategy, systems and stories
            <br />
            <em>designed to move business.</em>
          </h2>
          <p>
            One operating view connects brand, technology, visibility,
            conversion and automation.
          </p>
        </div>
        <div className="sg-expertise-grid">
          {expertise.map(({ Icon, label, title, text }, index) => (
            <article key={title} data-reveal>
              <div>
                <span>0{index + 1}</span>
                <Icon weight="duotone" />
              </div>
              <small>{label}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sg-journey" id="journey" data-reveal>
        <div className="sg-journey-intro">
          <span className="v-kicker">THE EXPERIENCE STACK</span>
          <h2>
            A founder shaped by
            <br />
            <em>markets, not theory.</em>
          </h2>
          <p>
            The profile sources consistently show a progression from delivery
            and retail operations to FMCG entrepreneurship, digital growth and
            applied AI.
          </p>
        </div>
        <div className="sg-timeline">
          {journey.map(({ period, title, text }, index) => (
            <article key={period} data-reveal>
              <div className="sg-time-dot">
                <span>{index + 1}</span>
              </div>
              <div>
                <small>{period}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sg-ventures" data-reveal>
        <div className="sg-ventures-head">
          <div>
            <span className="v-kicker light">
              VENTURES & PRODUCT DIRECTIONS
            </span>
            <h2>
              From an AI startup in India
              <br />
              <em>to tools for everyday Bharat.</em>
            </h2>
          </div>
          <p>
            The portfolio is intentionally broad, but the common thread is
            simple: make modern capability accessible to people and businesses
            usually ignored by expensive technology.
          </p>
        </div>
        <div className="sg-venture-grid">
          {ventures.map(({ title, tag, text }, index) => (
            <article key={title} data-reveal>
              <div>
                <span>0{index + 1}</span>
                <RocketLaunch weight="duotone" />
              </div>
              <small>{tag}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sg-founder-led" data-reveal>
        <div>
          <span className="v-kicker">A FOUNDER-LED GROWTH PARTNER</span>
          <h2>
            AI, digital marketing and web development—
            <em>connected around the customer.</em>
          </h2>
        </div>
        <div>
          <p className="sg-large">
            For businesses comparing AI consultants, the best digital marketing
            services in Lucknow or a web development agency in Lucknow, Sheevum
            offers one accountable strategic view.
          </p>
          <p>
            Instead of treating SEO, design, advertising, content and automation
            as separate purchases, the work begins with the business problem and
            connects the smallest useful system around it. That may be a Local
            SEO foundation, a conversion page, an AI-assisted follow-up workflow
            or a complete digital growth engine.
          </p>
          <ul>
            <li>
              <Target weight="fill" />
              <span>
                <b>Commercial clarity</b> Start with the outcome, buyer and
                operational constraint.
              </span>
            </li>
            <li>
              <Robot weight="fill" />
              <span>
                <b>Practical AI</b> Automate repetitive work while preserving
                human judgment.
              </span>
            </li>
            <li>
              <Handshake weight="fill" />
              <span>
                <b>Capability transfer</b> Build systems the client can
                understand, own and improve.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="sg-collaboration" data-reveal>
        <div className="sg-collab-grid">
          <article className="sg-collab-intro" data-reveal>
            <span className="v-kicker light">WORK WITH SHEEVUM</span>
            <h2>
              Choose the first problem.
              <br />
              <em>Build the right system.</em>
            </h2>
            <p>
              Begin with a bounded outcome instead of a long menu of services.
              Every engagement is shaped around the business stage, internal
              capacity and fastest useful win.
            </p>
            <a
              className="v-pill v-pill-light"
              href={links.card}
              target="_blank"
              rel="noreferrer"
            >
              Open Sheevum's contact card <ArrowUpRight />
            </a>
          </article>
          <article className="sg-collab-card white" data-reveal>
            <span>01 • FOUNDER & STARTUP STRATEGY</span>
            <h3>Sharpen the offer, market story and route to traction.</h3>
            <p>
              For founders who need a clearer proposition, launch path,
              go-to-market narrative or practical digital foundation.
            </p>
          </article>
          <article className="sg-collab-card pink" data-reveal>
            <span>02 • AI & AUTOMATION</span>
            <h3>Find the workflows worth automating first.</h3>
            <p>
              Map repetitive work, identify responsible AI opportunities and
              build a prototype the team can actually operate.
            </p>
          </article>
          <article className="sg-collab-card yellow" data-reveal>
            <span>03 • VISIBILITY & LEAD FLOW</span>
            <h3>Connect Local SEO, content, websites and follow-up.</h3>
            <p>
              For businesses that are capable offline but difficult to find,
              trust or contact online.
            </p>
          </article>
          <article className="sg-collab-card blue" data-reveal>
            <span>04 • TRAINING & CAPABILITY</span>
            <h3>Help teams use AI with clarity and confidence.</h3>
            <p>
              Applied sessions on prompt design, business automation,
              responsible adoption and no-code execution.
            </p>
          </article>
        </div>
      </section>

      <section className="sg-connect" id="connect" data-reveal>
        <div className="sg-connect-title">
          <span className="v-kicker">CHOOSE YOUR NEXT STEP</span>
          <h2>
            Six doors.
            <br />
            <em>One founder journey.</em>
          </h2>
          <p>
            Explore the work, follow the thinking or begin a useful
            conversation.
          </p>
        </div>
        <div className="sg-connect-grid">
          {connectCards.map(
            ({ Icon, kicker, title, text, cta, href, theme }) => (
              <a
                className={`sg-connect-card ${theme}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                key={title}
                data-reveal
              >
                <div>
                  <Icon weight="duotone" />
                  <ArrowUpRight weight="bold" />
                </div>
                <small>{kicker}</small>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>
                  {cta} <ArrowRight />
                </b>
              </a>
            ),
          )}
        </div>
      </section>

      <section className="sg-faq" id="faq" data-reveal>
        <div>
          <span className="v-kicker">SEARCH QUESTIONS, ANSWERED</span>
          <h2>
            About Sheevum Goel
            <br />
            <em>and Sudarshan AI Labs.</em>
          </h2>
          <p>
            Clear, people-first answers for partners, clients, collaborators and
            search engines.
          </p>
        </div>
        <div>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sg-cta" data-reveal>
        <div className="sg-cta-icon">
          <Briefcase weight="duotone" />
        </div>
        <span>FOUNDER • AI CONSULTANT • DIGITAL GROWTH STRATEGIST</span>
        <h2>Have a hard business problem that deserves a simpler answer?</h2>
        <p>
          Connect with Sheevum Goel to explore AI consulting, web development,
          digital marketing, training or a strategic partnership with Sudarshan
          AI Labs.
        </p>
        <div>
          <a
            className="v-pill v-pill-light"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Propose a collaboration <Handshake weight="fill" />
          </a>
          <a href={links.card} target="_blank" rel="noreferrer">
            Save contact details <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="sg-footer">
        <a className="v-brand" href="/">
          <span className="v-logo">
            <Sparkle weight="fill" />
          </span>
          <span>
            SUDARSHAN <b>AI LABS</b>
          </span>
        </a>
        <p>
          AI-powered digital growth, web development and practical automation
          from Lucknow for India.
        </p>
        <nav>
          <a href={links.portfolio} target="_blank" rel="noreferrer">
            Portfolio
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.medium} target="_blank" rel="noreferrer">
            Medium
          </a>
          <a href="/">Sudarshan AI Labs</a>
        </nav>
        <small>
          © 2026 Sudarshan AI Labs • Founder profile of Sheevum Goel
        </small>
      </footer>
    </main>
  );
}
