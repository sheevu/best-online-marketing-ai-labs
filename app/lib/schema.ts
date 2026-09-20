import {
  SITE_URL,
  LEGAL_NAME,
  CONTACT_PHONE,
  CONTACT_EMAIL,
} from "./site";

export const SITE = SITE_URL;

export const IDS = Object.freeze({
  organization: `${SITE}/#organization`,
  website: `${SITE}/#website`,
  founder: `${SITE}/about-sheevum-goel#person`,
});

export const ref = (id: string) => ({ "@id": id });

export const address = {
  "@type": "PostalAddress",
  streetAddress: "C-469/C, Indira Nagar, Near HAL",
  addressLocality: "Lucknow",
  addressRegion: "Uttar Pradesh",
  postalCode: "226016",
  addressCountry: "IN",
};

export const sharedOrganization = () => ({
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": IDS.organization,
  name: "Sudarshan AI Labs",
  legalName: LEGAL_NAME,
  url: `${SITE}/`,
  description:
    "Lucknow-based digital marketing, web development and practical AI automation for MSMEs.",
  address,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  founder: ref(IDS.founder),
  areaServed: [
    { "@type": "City", name: "Lucknow" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    "https://in.linkedin.com/company/sudarshan-ai-labs",
    "https://www.facebook.com/sudarshanlabsinc/",
    "https://www.startinup.up.gov.in/demo/Welcome/startup_user_details/NDkyMw==",
    "https://finanvo.in/company/U62099UP2025OPC223943/nava-netra-neural-sudarshan-labs-opc-private-limited",
    "https://www.falconebiz.com/company/NAVA-NETRA-NEURAL-SUDARSHAN-LABS-OPC-PRIVATE-LIMITED-U62099UP2025OPC223943",
    "https://www.zaubacorp.com/NAVA-NETRA-NEURAL-SUDARSHAN-LABS-OPC-PRIVATE-LIMITED-U62099UP2025OPC223943",
    "https://github.com/sheevu/NETRA-CRM-1",
    "https://github.com/sheevu",
    "https://www.instagram.com/surdarshanlabs",
    "https://www.youtube.com/@sheevumgoel",
    "https://pinterest.com/ailabslucknow",
    "https://medium.com/@sheevumgoel",
  ],
});

export const sharedWebsite = () => ({
  "@type": "WebSite",
  "@id": IDS.website,
  url: `${SITE}/`,
  name: "Sudarshan AI Labs",
  publisher: ref(IDS.organization),
  inLanguage: "en-IN",
});

export const sharedFounder = () => ({
  "@type": "Person",
  "@id": IDS.founder,
  name: "Sheevum Goel",
  url: `${SITE}/about-sheevum-goel`,
  jobTitle: "Founder and AI Consultant",
  worksFor: ref(IDS.organization),
  description:
    "Lucknow-based entrepreneur, AI consultant, and founder of Sudarshan AI Labs.",
  homeLocation: { "@type": "Place", name: "Lucknow, Uttar Pradesh, India" },
  knowsAbout: [
    "AI consulting",
    "Business automation",
    "Digital marketing",
    "Local SEO",
    "Web development",
    "MSME growth",
  ],
  sameAs: [
    "https://sheevum-goel-about.netlify.app/",
    "https://x.com/sheevum",
    "https://www.linkedin.com/in/sheevumgoel",
    "https://github.com/sheevu",
  ],
});

export const STARTER_OFFERS = Object.freeze([
  {
    key: "micro-growth-audit",
    name: "Micro Growth Audit",
    start: 89,
    description:
      "Digital visibility check and prioritized action plan for micro-businesses.",
  },
  {
    key: "swaraj-tech-pack",
    name: "Swaraj Tech Pack",
    start: 4900,
    description: "Digital launch pack for micro-businesses.",
  },
  {
    key: "prarambh-kick-start-pack",
    name: "Prarambh Kick-Start Pack",
    start: 9500,
    description:
      "WhatsApp Business, catalogue and digital onboarding essentials.",
  },
  {
    key: "udaan-vyapari-pack",
    name: "Udaan Vyapari Pack",
    start: 14500,
    description:
      "Digital marketing and lead organization for local merchants.",
  },
  {
    key: "raftaar-booster-pack",
    name: "Raftar Booster Pack",
    start: 18500,
    description: "Campaign support and lead generation workflows.",
  },
  {
    key: "ai-chatbot-assistant",
    name: "AI Chatbot & Assistant",
    start: 24000,
    description: "Customer-facing assistance and lead capture.",
  },
  {
    key: "seo-content-boost",
    name: "SEO & Content Boost",
    start: 12500,
    description: "SEO audit with content optimization.",
  },
  {
    key: "landing-page-lead-gen",
    name: "Landing Page Lead Gen",
    start: 15000,
    description: "Focused landing page for lead capture.",
  },
  {
    key: "website-launch-pack",
    name: "Website Launch Pack",
    start: 39000,
    description:
      "Five-page website foundation with local SEO and branding essentials.",
  },
]);

export function starterService(p: (typeof STARTER_OFFERS)[number]) {
  const id = `${SITE}/#service-${p.key}`;
  return {
    "@type": "Service",
    "@id": id,
    name: p.name,
    description: p.description,
    provider: ref(IDS.organization),
    areaServed: { "@type": "Country", name: "India" },
    offers: {
      "@type": "Offer",
      "@id": `${id}-offer`,
      url: `${SITE}/`,
      price: String(p.start),
      priceCurrency: "INR",
      description: `Indicative starting price of INR ${p.start}; final scope and payment terms agreed after review.`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: p.start,
        priceCurrency: "INR",
      },
      offeredBy: ref(IDS.organization),
      itemOffered: ref(id),
    },
  };
}

export function buildBreadcrumbs(
  url: string,
  label: string,
  parents: Array<{ name: string; item: string }> = []
) {
  const elements = [
    { name: "Home", item: `${SITE}/` },
    ...parents,
    { name: label, item: url },
  ];
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: elements.map((x, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: x.name,
      item: x.item,
    })),
  };
}

export function buildPageNode(
  url: string,
  name: string,
  description: string,
  type: string = "WebPage"
) {
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: ref(IDS.website),
    publisher: ref(IDS.organization),
    breadcrumb: ref(`${url}#breadcrumb`),
  };
}

export function buildServicePageSchema({
  url,
  name,
  description,
  areaName = "Lucknow",
  parents = [{ name: "Digital Marketing Services", item: `${SITE}/digital-marketing-services` }],
  startingPrice = 89,
  faqs,
}: {
  url: string;
  name: string;
  description: string;
  areaName?: string;
  parents?: Array<{ name: string; item: string }>;
  startingPrice?: number;
  faqs?: ReadonlyArray<readonly [string, string]> | Array<[string, string]>;
}) {
  const page: Record<string, unknown> = buildPageNode(url, name, description);
  page.mainEntity = ref(`${url}#service`);

  const serviceNode: Record<string, unknown> = {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    provider: ref(IDS.organization),
    url,
    areaServed: {
      "@type": "City",
      name: areaName,
    },
  };

  if (startingPrice !== undefined) {
    serviceNode.offers = {
      "@type": "Offer",
      "@id": `${url}#offer`,
      url,
      price: String(startingPrice),
      priceCurrency: "INR",
      description: `Indicative starting price from INR ${startingPrice}; final scope depends on agreed requirements.`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: startingPrice,
        priceCurrency: "INR",
      },
      offeredBy: ref(IDS.organization),
      itemOffered: ref(`${url}#service`),
    };
  }

  const graph: unknown[] = [
    sharedWebsite(),
    sharedOrganization(),
    page,
    serviceNode,
    buildBreadcrumbs(url, name, parents),
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

