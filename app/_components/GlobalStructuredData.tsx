import { sharedOrganization, sharedWebsite } from "../lib/schema";
import { serializeJsonLd } from "./StructuredData";

export default function GlobalStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd({
          "@context": "https://schema.org",
          "@graph": [sharedOrganization(), sharedWebsite()],
        }),
      }}
    />
  );
}
