import type { ServicePageData } from "../_components/ServiceLandingPage";
import {
  servicePageFromCatalog,
  type ServiceCatalogEntry,
} from "./service-catalog";
import type { CityPage } from "./cities";

export function cityServicePath(serviceSlug: string, citySlug: string) {
  return `/${serviceSlug}/${citySlug}`;
}

export function cityServicePageFromCatalog(
  city: CityPage,
  entry: ServiceCatalogEntry,
  relatedServices: [string, string][],
): ServicePageData {
  const base = servicePageFromCatalog(entry, relatedServices);
  const serviceName = entry.name.replace(/\s+in Lucknow$/i, "");
  const h1 = `${serviceName} in ${city.name}`;

  return {
    ...base,
    slug: cityServicePath(entry.slug, city.slug).slice(1),
    title: `${h1} | Sudarshan AI Labs`,
    description: `${entry.metaDescription.replace(/\.$/, "")} in ${city.name}.`,
    eyebrow: `${entry.category.toUpperCase()} • ${city.name.toUpperCase()} • SUDARSHAN AI LABS`,
    h1,
    intro: `${entry.longDescription} For businesses in ${city.name}, the work is aligned with local demand and the customer journey: ${city.need}`,
    areaServed: city.name,
    locationLabel: `${city.name} services`,
    locationHref: `/digital-marketing-services/${city.slug}`,
    fit: [
      ...city.industries.slice(0, 3).map((item) => item.split(":")[0].trim()),
      ...base.fit.slice(0, 2),
    ],
    outcomes: base.outcomes.map((item) => ({
      ...item,
      text: `${item.title} is scoped around the needs of ${city.name} businesses and the agreed ${entry.primaryKeyword} customer journey.`,
    })),
    process: base.process.map((item, index) => ({
      ...item,
      text:
        index === 0
          ? `We review ${city.name} demand, your current visibility and the role ${entry.primaryKeyword} should play.`
          : item.text,
    })),
    faqs: base.faqs.map(([question, answer]) => [
      question.replace("?", ` in ${city.name}?`),
      answer,
    ]),
  };
}
