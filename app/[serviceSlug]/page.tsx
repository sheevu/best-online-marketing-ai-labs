import { notFound } from "next/navigation";
import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import {
  activeServiceCatalog,
  serviceBySlug,
  servicePageFromCatalog,
} from "../lib/service-catalog";

export function generateStaticParams() {
  return activeServiceCatalog.map(({ slug }) => ({ serviceSlug: slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  return params.then(({ serviceSlug }) => {
    const entry = serviceBySlug(serviceSlug);
    return entry ? serviceMetadata(servicePageFromCatalog(entry, [])) : {};
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const entry = serviceBySlug(serviceSlug);
  if (!entry) notFound();

  const related = activeServiceCatalog
    .filter(
      (service) =>
        service.slug !== entry.slug && service.category === entry.category,
    )
    .slice(0, 4)
    .map((service) => [service.name, "/" + service.slug] as [string, string]);

  return (
    <ServiceLandingPage
      data={servicePageFromCatalog(entry, related)}
    />
  );
}
