import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { aLaCarteOffers, offerWhatsAppUrl, type PricingOffer } from "../lib/pricing-catalog";

type Theme = "cobalt" | "saffron" | "ice" | "mint" | "violet" | "coral";

export type ServiceCardData = {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  mrp: number;
  savings: number;
  billingLabel: string;
  themeClass: Theme;
  ctaTheme: "light" | "dark";
  whatsappLink: string;
  seoTitle: string;
  sourceMetaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  icon: string;
};

const growthThemes: Theme[] = ["cobalt", "saffron", "coral", "violet", "cobalt", "mint"];

function themeForOffer(offer: PricingOffer): Theme {
  if (offer.category === "Growth Packs") {
    const index = aLaCarteOffers.filter((item) => item.category === "Growth Packs").findIndex((item) => item.id === offer.id);
    return growthThemes[index % growthThemes.length] ?? "cobalt";
  }
  switch (offer.category) {
    case "Web & Commerce": return "ice";
    case "Local Visibility": return "mint";
    case "AI & Automation": return "violet";
    case "SEO & Content": return "saffron";
    case "Business Advisory & PR": return "coral";
    case "Career Services": return "cobalt";
    default: return "ice";
  }
}

function iconForOffer(offer: PricingOffer): string {
  if (offer.id === "1505001") return "🚀";
  if (offer.id === "1505002") return "⚡";
  if (offer.id === "2505009") return "🌐";
  if (offer.category === "Local Visibility") return "📍";
  if (offer.category === "AI & Automation") return "🤖";
  if (offer.category === "Web & Commerce") return "🛍️";
  if (offer.category === "SEO & Content") return "🔎";
  if (offer.category === "Career Services") return "✍️";
  if (offer.category === "Business Advisory & PR") return "💡";
  return "✨";
}

/** Single source of truth: all 19 à-la-carte offers from pricing-offers.json. */
export const servicesData: ServiceCardData[] = aLaCarteOffers.map((offer) => {
  const themeClass = themeForOffer(offer);
  return {
    id: offer.id,
    category: offer.category,
    title: offer.offerName,
    description: offer.description,
    price: offer.price,
    mrp: offer.mrp,
    savings: Math.max(0, offer.mrp - offer.price),
    billingLabel: offer.billingLabel,
    themeClass,
    ctaTheme: themeClass === "ice" || themeClass === "saffron" || themeClass === "mint" ? "dark" : "light",
    whatsappLink: offerWhatsAppUrl(offer),
    seoTitle: offer.seoTitle,
    sourceMetaDescription: offer.sourceMetaDescription,
    primaryKeyword: offer.primaryKeyword,
    secondaryKeywords: offer.secondaryKeywords,
    icon: iconForOffer(offer),
  };
});

const themes: Record<Theme, { surface: string; tag: string; muted: string; accent: string; rule: string; details: string; action: string; savings: string }> = {
  cobalt: {
    surface: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white",
    tag: "bg-white/20 text-white",
    muted: "text-blue-50/90",
    accent: "bg-white/15",
    rule: "border-white/25",
    details: "border-white/25 bg-white/15 text-white",
    action: "bg-white text-slate-950 hover:bg-slate-100",
    savings: "bg-lime-200 text-emerald-950",
  },
  saffron: {
    surface: "bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-slate-950",
    tag: "bg-slate-950/10 text-slate-950",
    muted: "text-slate-900",
    accent: "bg-white/30",
    rule: "border-slate-950/20",
    details: "border-white/40 bg-white/30 text-slate-950",
    action: "bg-slate-950 text-white hover:bg-slate-800",
    savings: "bg-white/85 text-emerald-950",
  },
  ice: {
    surface: "border-slate-200/80 bg-white text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-white",
    tag: "bg-blue-50 text-blue-800 dark:bg-white/10 dark:text-white",
    muted: "text-slate-600 dark:text-slate-300",
    accent: "bg-blue-50 dark:bg-white/10",
    rule: "border-slate-200 dark:border-slate-700",
    details: "border-slate-200 bg-slate-50 text-blue-800 dark:border-slate-700 dark:bg-white/10 dark:text-white",
    action: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700",
    savings: "bg-emerald-100 text-emerald-900",
  },
  mint: {
    surface: "bg-gradient-to-br from-[#10B981] to-[#059669] text-slate-950",
    tag: "bg-slate-950/10 text-slate-950",
    muted: "text-slate-950/90",
    accent: "bg-white/30",
    rule: "border-slate-950/20",
    details: "border-white/40 bg-white/30 text-slate-950",
    action: "bg-slate-950 text-white hover:bg-slate-800",
    savings: "bg-white/85 text-emerald-950",
  },
  violet: {
    surface: "bg-gradient-to-br from-[#6366F1] to-[#4338CA] text-white",
    tag: "bg-white/20 text-white",
    muted: "text-indigo-50/95",
    accent: "bg-white/15",
    rule: "border-white/25",
    details: "border-white/25 bg-white/15 text-white",
    action: "bg-white text-slate-950 hover:bg-slate-100",
    savings: "bg-lime-200 text-emerald-950",
  },
  coral: {
    surface: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] text-white",
    tag: "bg-slate-950/25 text-white",
    muted: "text-rose-50",
    accent: "bg-white/15",
    rule: "border-white/25",
    details: "border-white/25 bg-white/15 text-white",
    action: "bg-white text-slate-950 hover:bg-slate-100",
    savings: "bg-lime-200 text-emerald-950",
  },
};

const inr = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function AlaCarteServicesGrid({ offers }: { offers: PricingOffer[] }) {
  const offersById = new Set(offers.map((offer) => offer.id));
  const visibleServices = servicesData.filter((offer) => offersById.has(offer.id));

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4" aria-live="polite" aria-label="À-la-carte service cards">
      {visibleServices.map((service, index) => {
        const theme = themes[service.themeClass];
        return (
          <article
            key={service.id}
            className={`group relative mb-5 inline-flex w-full break-inside-avoid flex-col overflow-hidden rounded-3xl border border-white/40 p-5 align-top shadow-[0_12px_30px_rgba(15,23,42,0.10),0_3px_8px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(15,23,42,0.18)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6 ${theme.surface}`}
          >
            <div className="flex items-start justify-between gap-2">
              <span className={`inline-flex max-w-[58%] items-center rounded-full px-3 py-1.5 text-[11px] font-semibold leading-snug tracking-wide backdrop-blur-md ${theme.tag}`}>{service.category}</span>
              <span className={`max-w-[43%] pt-1 text-right text-[11px] font-medium leading-snug ${theme.muted}`}>{service.billingLabel}</span>
            </div>

            <div aria-hidden="true" className={`mt-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl shadow-sm ${theme.accent}`}>{service.icon}</div>
            <h4 className="mt-4 mb-2 text-xl leading-snug font-extrabold tracking-tight">{service.title}</h4>
            <p className={`mb-4 line-clamp-3 text-sm leading-relaxed ${theme.muted}`}>{service.description}</p>

            <div className={`mt-auto flex flex-wrap items-end justify-between gap-3 border-t pt-4 ${theme.rule}`}>
              <strong className="text-3xl leading-none font-extrabold tracking-tight">
                {inr(service.price)}
                {service.billingLabel === "per month" && <small className="ml-1 text-xs font-semibold tracking-normal">/month</small>}
              </strong>
              <div className="flex flex-col items-end gap-1.5">
                <s className={`text-xs font-medium ${theme.muted}`}>MRP {inr(service.mrp)}</s>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${theme.savings}`}>Save {inr(service.savings)}</span>
              </div>
            </div>

            <details className={`group/seo mt-4 rounded-2xl border px-3 py-2.5 text-xs ${theme.details}`}>
              <summary className="flex min-h-6 cursor-pointer list-none items-center justify-between gap-2 font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                Original SEO listing details
                <ArrowRight aria-hidden="true" className="shrink-0 transition-transform duration-200 group-open/seo:rotate-90" />
              </summary>
              <div className="mt-3 space-y-2 border-t border-current/15 pt-3 leading-relaxed">
                <p className="font-semibold">{service.seoTitle}</p>
                <p>{service.sourceMetaDescription}</p>
                <p><strong>Primary keyword:</strong> {service.primaryKeyword}{service.secondaryKeywords ? ` · ${service.secondaryKeywords}` : ""}</p>
              </div>
            </details>

            <a
              className={`mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-3 py-3 text-center text-sm leading-snug font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber-300 motion-reduce:transform-none ${theme.action}`}
              href={service.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask about ${service.title} on WhatsApp, opens a new tab`}
            >
              <WhatsappLogo className="h-5 w-5 shrink-0" weight="fill" aria-hidden="true" />
              <span className="min-w-0">Ask about {service.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" weight="bold" aria-hidden="true" />
            </a>
            <span className="sr-only">Service {index + 1} of {visibleServices.length}</span>
          </article>
        );
      })}
      {visibleServices.length === 0 && (
        <p className="py-6 text-sm text-slate-600 dark:text-slate-300">No offers match that search. Try another service name or category.</p>
      )}
    </div>
  );
}
