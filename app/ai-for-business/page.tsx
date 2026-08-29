import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { aiForBusinessService } from "../lib/services";
export const metadata = serviceMetadata(aiForBusinessService);
export default function Page() { return <ServiceLandingPage data={aiForBusinessService} />; }
