import ServiceLandingPage, { serviceMetadata } from "../_components/ServiceLandingPage";
import { socialService } from "../lib/services";
export const metadata = serviceMetadata(socialService);
export default function Page() { return <ServiceLandingPage data={socialService} />; }
