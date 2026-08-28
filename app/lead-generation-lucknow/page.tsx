import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { leadGenerationService } from "../lib/services";
export const metadata = serviceMetadata(leadGenerationService);
export default function Page() { return <ServiceLandingPage data={leadGenerationService} />; }
