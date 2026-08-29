import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { aiAutomationService } from "../lib/services";
export const metadata = serviceMetadata(aiAutomationService);
export default function Page() { return <ServiceLandingPage data={aiAutomationService} />; }
