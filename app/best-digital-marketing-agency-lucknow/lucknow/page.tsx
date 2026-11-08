import ServiceLandingPage, {
  serviceMetadata,
  type ServicePageData,
} from "../../_components/ServiceLandingPage";
import { absoluteUrl } from "../../lib/site";

const page: ServicePageData = {
  slug: "best-digital-marketing-agency-lucknow/lucknow",
  title: "Best Digital Marketing Agency in Lucknow | Sudarshan AI Labs",
  description:
    "Digital marketing in Lucknow: compare agencies and plan practical SEO, websites, ads, lead generation and AI automation for your business.",
  eyebrow: "DIGITAL MARKETING IN LUCKNOW • MSME GROWTH",
  h1: "Digital Marketing in Lucknow for Growing Businesses",
  intro:
    "Our digital marketing in Lucknow connects local SEO, useful websites, campaigns and follow-up around the customer journey. Choosing the best digital marketing agency in Lucknow starts with a clear business goal, a realistic scope and a way to measure enquiries.",
  primaryKeyword: "digital marketing in Lucknow",
  relatedKeywords: [
    "digital marketing agency in Lucknow",
    "SEO services in Lucknow",
    "lead generation for Lucknow businesses",
  ],
  bestFor: "MSMEs, clinics, coaching institutes, retailers and startups",
  fit: [
    "Businesses that want more relevant calls, visits or qualified enquiries.",
    "Teams that need SEO, ads and website work to support the same offer.",
    "Owners who want clear reporting and a practical handover of agreed assets.",
  ],
  outcomes: [
    {
      title: "Local visibility that answers real searches",
      text: "We review service pages, Google Business Profile information, location relevance and technical basics before recommending the next SEO actions.",
    },
    {
      title: "A website journey built for action",
      text: "Landing pages explain the offer, provide useful trust signals and make it easy to call, request information or start a WhatsApp conversation.",
    },
    {
      title: "Campaigns with a clear measurement plan",
      text: "Google and Meta campaigns are scoped around audience, location, budget and lead quality, with tracking agreed before launch.",
    },
    {
      title: "Follow-up your team can operate",
      text: "Simple CRM and WhatsApp workflows help teams assign enquiries, respond consistently and keep the next action visible.",
    },
  ],
  process: [
    {
      title: "Understand the goal",
      text: "Review the offer, audience, current website or listings and the point where prospects stop moving forward.",
    },
    {
      title: "Agree on priorities",
      text: "Select a focused scope, budget and success measures. No fixed ranking or sales result is promised.",
    },
    {
      title: "Build and improve",
      text: "Deliver the agreed pages, campaigns or automation, then review performance and transfer documented assets.",
    },
  ],
  faqs: [
    [
      "Which digital marketing services should a Lucknow business start with?",
      "Start with the main bottleneck. A business that is hard to find may need local SEO; one with visits but few enquiries may need a clearer page or offer; a team missing follow-ups may need a simple lead process.",
    ],
    [
      "How do I compare digital marketing agencies in Lucknow?",
      "Ask each agency to explain the scope, deliverables, measurement method, ownership of assets and what depends on your team. Compare the same brief and avoid treating guaranteed rankings or sales as proof.",
    ],
    [
      "Can you support businesses outside Gomti Nagar?",
      "Yes. Sudarshan AI Labs works with Lucknow businesses across neighbourhoods and can support suitable projects remotely across Uttar Pradesh and India.",
    ],
    [
      "Do you guarantee Google rankings or a fixed number of leads?",
      "No. Search and campaign outcomes depend on competition, budget, offer, demand and execution. The work focuses on improving controllable factors and reporting on agreed measures.",
    ],
  ],
  related: [
    ["SEO services in Lucknow", "/seo-services-lucknow"],
    ["Lead generation in Lucknow", "/lead-generation-lucknow"],
    ["Website design and development", "/website-design-development-lucknow"],
    ["AI automation services", "/ai-automation-lucknow"],
  ],
};

export function generateMetadata() {
  return {
    ...serviceMetadata(page),
    alternates: { canonical: absoluteUrl(`/${page.slug}`) },
  };
}

export default function BestDigitalMarketingAgencyLucknowPage() {
  return <ServiceLandingPage data={page} />;
}
