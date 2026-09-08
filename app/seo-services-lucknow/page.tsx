import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { seoService } from "../lib/services";
export const metadata = serviceMetadata(seoService);
export default function Page() { return <ServiceLandingPage data={seoService} />; }
