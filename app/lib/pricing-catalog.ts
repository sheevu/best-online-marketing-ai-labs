import offers from "./pricing-offers.json";

export type PricingOffer = {
  id: string;
  sourceName: string;
  offerName: string;
  category: string;
  description: string;
  mrp: number;
  price: number;
  billingLabel: string;
  productUrl: string;
  seoTitle: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  seoSlug: string;
  sourceMetaDescription: string;
};

export const pricingOffers = offers as PricingOffer[];
export const subscriptionPlanIds = ["1506001", "1506002", "1506003"] as const;
export const subscriptionPlans = subscriptionPlanIds.map((id) =>
  pricingOffers.find((offer) => offer.id === id)!,
);
export const aLaCarteOffers = pricingOffers.filter(
  (offer) => !subscriptionPlanIds.includes(offer.id as (typeof subscriptionPlanIds)[number]),
);

export function offerWhatsAppUrl(offer: PricingOffer) {
  const message = `Hi Sudarshan AI Labs, I’m interested in ${offer.offerName} at ₹${offer.price.toLocaleString("en-IN")}. Please share the exact inclusions, delivery timeline and billing terms.`;
  return `https://wa.me/917080842220?text=${encodeURIComponent(message)}`;
}
