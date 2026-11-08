import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { googleAdsService } from "../lib/services";

export const metadata = serviceMetadata(googleAdsService);

export default function Page() {
  return <ServiceLandingPage data={googleAdsService} />;
}
