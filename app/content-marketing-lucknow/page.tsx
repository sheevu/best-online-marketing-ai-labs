import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { contentMarketingService } from "../lib/services";
export const metadata = serviceMetadata(contentMarketingService);
export default function Page() { return <ServiceLandingPage data={contentMarketingService} />; }
