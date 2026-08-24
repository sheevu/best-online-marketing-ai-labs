import type {Metadata} from "next";
import {areas} from "../lib/areas";

const base="https://sudarshan-ai-labs-lucknow.sheevumgoel.chatgpt.site";
const wa="https://wa.me/917080842220?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20a%20free%20Lucknow%20digital%20marketing%20audit.";

export const metadata:Metadata={
 title:"Best Digital Marketing Services in Lucknow | Sudarshan AI Labs",
 description:"Digital marketing services in Lucknow for MSMEs: local SEO, Google Maps, websites, social media, ads and WhatsApp automation. Request a free audit.",
 alternates:{canonical:"/digital-marketing-services/"},
 openGraph:{title:"Digital Marketing Services in Lucknow | Sudarshan AI Labs",description:"A connected local growth system for Lucknow businesses: SEO, Maps, websites, social media, ads and practical AI automation.",url:"/digital-marketing-services/",type:"website",locale:"en_IN"},
 keywords:["best digital marketing services in Lucknow","digital marketing services in Lucknow","Lucknow online marketing","digital marketing agency in Lucknow","local SEO services Lucknow"]
};

const services=[
 {id:"local-seo",title:"Local SEO and Google Maps",copy:"Improve the signals that help nearby customers discover and trust your business: accurate business information, service relevance, useful location content, review processes and a clear website connection."},
 {id:"seo-content",title:"SEO and useful content",copy:"Build pages around real customer questions and commercial intent, supported by sound titles, headings, internal links, structured data and technical foundations that search engines can understand."},
 {id:"website-development",title:"Websites and landing pages",copy:"Create fast, mobile-first pages that explain the offer clearly and make it easy to call, WhatsApp, request a quote, book or visit. Conversion quality matters as much as traffic."},
 {id:"social-media",title:"Social media marketing",copy:"Turn expertise, customer questions, products and local relevance into a consistent content system for Instagram, Facebook, LinkedIn and other channels that fit the audience."},
 {id:"paid-media",title:"Google and Meta advertising",copy:"Capture ready demand and test offers through focused campaigns, relevant landing pages, useful qualification and tracking aligned with the team’s ability to respond."},
 {id:"ai-automation",title:"AI and WhatsApp automation",copy:"Reduce repetitive follow-up with practical greetings, qualification questions, labels, reusable answers, reminders and simple reporting while retaining human handover."}
];

const faqs=[
 ["Which digital marketing services should a Lucknow business start with?","Start with the bottleneck. A business that is difficult to find may need Google Business Profile and local SEO work first. A business already receiving traffic may need a clearer website, stronger offer or better follow-up. The audit identifies that priority before recommending channels."],
 ["How much do digital marketing services in Lucknow cost?","Cost depends on the number of locations, services, content, advertising scope, website condition and reporting needs. Sudarshan AI Labs offers practical starting options, but a final scope is proposed only after reviewing the business and its growth goal."],
 ["Can you guarantee a first-page Google ranking?","No responsible agency can guarantee a fixed organic position. We improve the controllable foundations—technical access, relevance, helpful content, local signals, authority and user experience—and measure progress transparently."],
 ["Do you help with Google Business Profile and Maps?","Yes. We review categories, services, business details, photos, review processes, updates, landing-page relevance and consistency across important listings while following Google’s guidelines."],
 ["Do you work only in Lucknow?","Lucknow is our local focus, and we also support suitable businesses across Uttar Pradesh and India. Local campaigns are built around truthful service areas and customer intent, not invented offices."],
 ["What happens after the free audit?","You receive a prioritized view of the main gaps and the recommended starting point. If there is a fit, we define the work, ownership, measurement and handover clearly before execution."]
] as const;

const businessSchema={"@context":"https://schema.org","@type":"ProfessionalService",name:"Sudarshan AI Labs",legalName:"NAVA-NETRA NEURAL SUDARSHAN LABS PRIVATE LIMITED",url:`${base}/digital-marketing-services/`,telephone:"+91-7080842220",email:"sudarshanailabs@gmail.com",description:"Digital marketing services in Lucknow including local SEO, Google Maps optimisation, websites, social media marketing, paid advertising and practical AI automation.",address:{"@type":"PostalAddress",addressLocality:"Lucknow",addressRegion:"Uttar Pradesh",addressCountry:"IN"},areaServed:{"@type":"City",name:"Lucknow"},founder:{"@type":"Person",name:"Sheevum Goel",url:`${base}/about-sheevum-goel/`},knowsAbout:services.map(service=>service.title)};
const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))};
const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:base},{"@type":"ListItem",position:2,name:"Digital Marketing Services in Lucknow",item:`${base}/digital-marketing-services/`}]};

export default function LucknowServices(){return <main className="areas-index lucknow-pillar">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify([businessSchema,faqSchema,breadcrumbSchema])}}/>
 <nav className="area-nav" aria-label="Primary navigation"><a className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></a><div><a href="/about-sheevum-goel/">Founder</a><a className="button button-small" href={wa}>Free Audit ↗</a></div></nav>
 <header className="pillar-hero"><div><p className="eyebrow">LUCKNOW-FIRST • MSME-FOCUSED • BUILD, AUTOMATE, TRANSFER</p><h1>Digital Marketing Services in Lucknow Built for Useful Growth</h1><p>Help the right customers find, trust and contact your business through a connected system of local SEO, Google Maps, helpful content, fast websites, advertising, social media and practical follow-up automation.</p><div className="hero-actions"><a className="button" href={wa}>Request a Free Digital Audit ↗</a><a className="text-link" href="#services">Explore Services ↓</a></div></div><aside><b>START WITH THE BOTTLENECK</b><ol><li>Can customers find you?</li><li>Do they trust what they see?</li><li>Is it easy to enquire?</li><li>Does your team follow up?</li></ol><p>We prioritize the weakest step before adding more marketing activity.</p></aside></header>

 <section className="pillar-intro"><div><p className="eyebrow">WHY A CONNECTED APPROACH</p><h2>Online marketing should create enquiries—not a pile of disconnected posts.</h2></div><div><p>Lucknow customers move between Google Search, Maps, reviews, Instagram, websites and WhatsApp before making a decision. If those touchpoints tell different stories, hide essential information or make contact difficult, attention leaks away.</p><p>Sudarshan AI Labs brings the journey together. We begin with the business goal, customer intent and operating capacity; then connect the smallest useful combination of visibility, credibility, conversion and follow-up work. The result is a system your team can understand and eventually own.</p><p>Our local focus includes MSMEs, coaching institutes, clinics, retailers, restaurants, real estate businesses, professional services, manufacturers and growing startups across Lucknow.</p></div></section>

 <section className="pillar-services" id="services" aria-labelledby="services-title"><div className="pillar-section-head"><p className="eyebrow">CORE CAPABILITIES</p><h2 id="services-title">Digital marketing services for the full customer journey</h2><p>Each capability has a defined role and should earn its place in the plan.</p></div><div className="pillar-service-grid">{services.map((service,index)=><article id={service.id} key={service.id}><span>{String(index+1).padStart(2,"0")}</span><h3>{service.title}</h3><p>{service.copy}</p><a href={wa}>Discuss this service ↗</a></article>)}</div></section>

 <section className="pillar-proof"><div><p className="eyebrow">HOW WE WORK</p><h2>Clear decisions before more activity</h2><p>We do not promise a fixed Google position or publish unverified success claims. We improve controllable signals, document the work and connect measurement to enquiries and business outcomes.</p></div><ol><li><b>01 • Diagnose</b><span>Review visibility, competitors, website, listings, messages and enquiry flow.</span></li><li><b>02 • Prioritize</b><span>Choose the few changes most likely to remove the current growth bottleneck.</span></li><li><b>03 • Build and test</b><span>Implement the agreed pages, campaigns, content or automations and validate them.</span></li><li><b>04 • Measure and transfer</b><span>Review meaningful results, refine carefully and hand over knowledge and assets.</span></li></ol></section>

 <section className="pillar-local"><div><p className="eyebrow">LOCAL RELEVANCE</p><h2>Useful guidance for businesses across Lucknow</h2><p>Explore locality pages built around genuine customer patterns and business categories. These pages describe service areas; they do not claim offices where none exist.</p></div><div className="pillar-area-links">{areas.map(area=><a href={`/digital-marketing-services/${area.slug}-lucknow/`} key={area.slug}><span>{area.name}</span><b>View local guidance ↗</b></a>)}</div></section>

 <section className="pillar-faq" id="faq"><div><p className="eyebrow">COMMON QUESTIONS</p><h2>Choosing a digital marketing agency in Lucknow</h2><p>Direct answers to the questions business owners should ask before investing.</p></div><div>{faqs.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

 <section className="pillar-cta"><p className="eyebrow">START WITH EVIDENCE</p><h2>Find the most valuable next step for your Lucknow business.</h2><p>Share your website or Google listing. We will review the visible customer journey and identify practical priorities before suggesting a scope.</p><a className="button" href={wa}>Request Your Free Audit ↗</a></section>
 <footer className="area-footer"><p>Sudarshan AI Labs • Digital Marketing Services in Lucknow</p><span>© 2026 NAVA-NETRA NEURAL SUDARSHAN LABS PRIVATE LIMITED</span></footer>
 </main>}
