export const SITE_URL = "https://sudarshan-ai.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const CONTACT_EMAIL = "sudarshanailabs@gmail.com";
export const CONTACT_PHONE = "+91-7080842220";
export const PRIMARY_ADDRESS = "C-469/C, Indira Nagar, Near HAL, Lucknow, Uttar Pradesh 226016";
export const STREET_ADDRESS = "C-469/C, Indira Nagar, Near HAL";
export const POSTAL_CODE = "226016";
export const MAP_URL = "https://maps.app.goo.gl/g6zXUuBf8tGq5p2H7";
export const WHATSAPP_URL =
  "https://wa.me/917080842220?text=Hi%20Sudarshan%20AI%20Labs%2C%20I%20want%20a%20free%20digital%20growth%20audit.&utm_source=website&utm_medium=planner&utm_campaign=local_visibility";

export const STARTING_PRICE_INR = "89";

export function absoluteUrl(path = "/") {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const coreServiceLinks = [
  ["Digital Marketing", "/digital-marketing-services"],
  ["SEO Services", "/seo-services-lucknow"],
  ["Social Media Marketing", "/social-media-marketing-lucknow"],
  ["Lead Generation", "/lead-generation-lucknow"],
  ["AI Automation", "/ai-automation-lucknow"],
  ["Content Marketing", "/content-marketing-lucknow"],
  ["AI for Business", "/ai-business-consulting-lucknow"],
] as const;

export const BLOG_PLAYBOOK_URL = "https://www.blogs.vyapai.in/blogs#all-articles-title";

export const LEGAL_NAME = "NAVA-NETRA NEURAL SUDARSHAN LABS (OPC) PRIVATE LIMITED";
