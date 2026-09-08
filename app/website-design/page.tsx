import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { websiteDesignService } from "../lib/services";

export const metadata = serviceMetadata(websiteDesignService);

export default function Page() {
  return <ServiceLandingPage data={websiteDesignService} />;
}
