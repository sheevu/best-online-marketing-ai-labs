export function serializeJsonLd(data: unknown) {
  return (JSON.stringify(data) ?? "null").replace(/</g, "\\u003c");
}

export default function StructuredData({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
