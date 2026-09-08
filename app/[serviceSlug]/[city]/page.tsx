import { notFound } from "next/navigation";
import ServiceLandingPage, {
  serviceMetadata,
} from "../../_components/ServiceLandingPage";
import { cities, cityBySlug } from "../../lib/cities";
import {
  cityServicePageFromCatalog,
  cityServicePath,
} from "../../lib/city-service-page";
import {
  serviceBySlug,
  serviceCatalog,
} from "../../lib/service-catalog";

export function generateStaticParams() {
  return serviceCatalog.flatMap((service) =>
    cities.map((city) => ({
      serviceSlug: service.slug,
      city: city.slug,
    })),
  );
}

function getPageData(serviceSlug: string, citySlug: string) {
  const entry = serviceBySlug(serviceSlug);
  const city = cityBySlug(citySlug);
  if (!entry || !city) return null;

  const related = serviceCatalog
    .filter(
      (service) =>
        service.slug !== entry.slug && service.category === entry.category,
    )
    .slice(0, 4)
    .map(
      (service) =>
        [
          service.name,
          cityServicePath(service.slug, city.slug),
        ] as [string, string],
    );

  return cityServicePageFromCatalog(city, entry, related);
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string; city: string }>;
}) {
  return params.then(({ serviceSlug, city }) => {
    const data = getPageData(serviceSlug, city);
    return data ? serviceMetadata(data) : {};
  });
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string; city: string }>;
}) {
  const { serviceSlug, city } = await params;
  const data = getPageData(serviceSlug, city);
  if (!data) notFound();
  return <ServiceLandingPage data={data} />;
}
