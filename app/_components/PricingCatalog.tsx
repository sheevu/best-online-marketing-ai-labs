"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, MagnifyingGlass, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { aLaCarteOffers, offerWhatsAppUrl, subscriptionPlans } from "../lib/pricing-catalog";

const planScopes = [
  {
    id: "1506001",
    audience: "For a business getting its basics in place",
    posts: "4 social posts",
    reels: "—",
    platforms: "1 social platform",
    visibility: "2 Google Business Profile updates",
    extra: "Monthly content calendar and activity summary",
  },
  {
    id: "1506002",
    audience: "For a business ready for regular promotion",
    posts: "8 social posts",
    reels: "2 short reels",
    platforms: "Up to 2 social platforms",
    visibility: "4 Google Business Profile updates",
    extra: "Monthly content calendar and performance summary",
  },
  {
    id: "1506003",
    audience: "For an established business building reach",
    posts: "12 social posts",
    reels: "4 short reels",
    platforms: "Up to 2 social platforms",
    visibility: "4 Google Business Profile updates",
    extra: "1 campaign creative and WhatsApp follow-up message",
  },
];

const categories = [
  "All services",
  ...Array.from(new Set(aLaCarteOffers.map((offer) => offer.category))),
];

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function savings(mrp: number, price: number) {
  return formatINR(Math.max(0, mrp - price));
}

export default function PricingCatalog() {
  const [category, setCategory] = useState("All services");
  const [query, setQuery] = useState("");
  const filteredOffers = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return aLaCarteOffers.filter((offer) => {
      const matchesCategory = category === "All services" || offer.category === category;
      const text = [offer.offerName, offer.description, offer.primaryKeyword, offer.secondaryKeywords]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!needle || text.includes(needle));
    });
  }, [category, query]);

  return (
    <section className="v-section v-products pricing-catalog" id="products" aria-labelledby="products-title">
      <div className="v-product-head pricing-heading">
        <div>
          <span className="v-kicker">PRICING FOR INDIAN BUSINESSES</span>
          <h2 id="products-title">Start with the right offer.<br /><em>Grow at your pace.</em></h2>
        </div>
        <p>Clear monthly growth plans, plus individual services for websites, SEO, automation and more.</p>
      </div>

      <div className="subscription-intro">
        <div>
          <span className="pricing-section-label">MONTHLY GROWTH SUBSCRIPTIONS</span>
          <h3>Three simple levels. One clear price ratio.</h3>
          <p>₹1,500 : ₹3,000 : ₹4,500 keeps your original 1:2:3 ladder.</p>
        </div>
        <a className="pricing-compare-link" href="#plan-comparison">Compare plans <ArrowRight weight="bold" /></a>
      </div>

      <div className="subscription-grid">
        {subscriptionPlans.map((offer, index) => {
          const scope = planScopes[index];
          return (
            <article className={`subscription-card ${index === 1 ? "is-featured" : ""}`} key={offer.id}>
              <div className="subscription-card-top">
                <span className="subscription-audience">{scope.audience}</span>
                {index === 1 && <span className="plan-badge">GROWTH PLAN</span>}
              </div>
              <h4>{offer.offerName}</h4>
              <p className="subscription-copy">{offer.description}</p>
              <div className="subscription-price-line">
                <strong>{formatINR(offer.price)}<small>/month</small></strong>
                <span><s>MRP {formatINR(offer.mrp)}</s><b>Save {savings(offer.mrp, offer.price)}</b></span>
              </div>
              <ul className="subscription-highlights">
                {[scope.posts, scope.reels, scope.platforms, scope.visibility, scope.extra]
                  .filter((item) => item !== "—")
                  .map((item) => <li key={item}><Check weight="bold" />{item}</li>)}
              </ul>
              <p className="subscription-language">Captions in English, Hindi or Hinglish</p>
                <a className="pricing-cta" href={offerWhatsAppUrl(offer)} target="_blank" rel="noreferrer">
                <WhatsappLogo weight="fill" /> Discuss {offer.offerName} <ArrowRight weight="bold" />
              </a>
            </article>
          );
        })}
      </div>

      <div className="pricing-guardrails">
        <strong>What’s included in these plan counts?</strong>
        <span>One brand, one location, one revision per item, and reels edited from footage you provide. Ad spend, shoots, website work, hosting, WhatsApp/API fees and custom integrations are quoted separately.</span>
      </div>

      <div className="plan-comparison" id="plan-comparison">
        <div className="comparison-heading">
          <div>
            <span className="pricing-section-label">COMPARE THE MONTHLY PLANS</span>
            <h3>More support as your business grows</h3>
          </div>
          <span className="comparison-ratio">1 : 2 : 3 price ratio</span>
        </div>
        <div className="comparison-plans" aria-label="Monthly plan comparison">
          {subscriptionPlans.map((plan, index) => {
            const scope = planScopes[index];
            const features = [
              ["Social posts", scope.posts],
              ["Short reels", scope.reels === "—" ? "Not included at this level" : scope.reels],
              ["Platforms", scope.platforms],
              ["Google Business Profile", scope.visibility],
              ["Monthly support", scope.extra],
            ];
            return (
              <article className={`comparison-plan ${index === 1 ? "is-featured" : ""}`} key={plan.id} aria-label={`${plan.offerName} plan comparison`}>
                {index === 1 && <span className="comparison-plan-badge">MOST POPULAR</span>}
                <p>{scope.audience}</p>
                <h4>{plan.offerName}</h4>
                <strong className="comparison-plan-price">{formatINR(plan.price)}<small>/month</small></strong>
                <ul>{features.map(([label, value]) => (
                  <li key={label} className={value.startsWith("Not included") ? "is-muted" : ""}>
                    <span className="comparison-feature-label">{label}</span>
                    <span className="comparison-feature-value">
                      <span className="comparison-feature-mark" aria-hidden="true">{value.startsWith("Not included") ? "–" : "✓"}</span>
                      {value}
                    </span>
                  </li>
                ))}</ul>
                <a className="comparison-plan-cta" href={offerWhatsAppUrl(plan)} target="_blank" rel="noreferrer" aria-label={`Discuss the ${plan.offerName}`}>
                  <WhatsappLogo weight="fill" /> Discuss this plan <ArrowRight weight="bold" />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <div className="alacarte-heading" id="alacarte-services">
        <div>
          <span className="pricing-section-label">À-LA-CARTE & SPECIALIST OFFERS</span>
          <h3>Need one specific service?</h3>
          <p>Choose an individual service or a specialist package. We confirm the exact deliverables and billing basis before you order.</p>
        </div>
        <label className="offer-search">
          <MagnifyingGlass aria-hidden="true" />
          <span className="sr-only">Search individual services</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services" />
        </label>
      </div>

      <div className="offer-filter-row" role="group" aria-label="Filter individual services by category">
        {categories.map((item) => (
          <button key={item} type="button" className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>
            {item}<span>{item === "All services" ? aLaCarteOffers.length : aLaCarteOffers.filter((offer) => offer.category === item).length}</span>
          </button>
        ))}
      </div>

      <div className="offer-grid" aria-live="polite">
        {filteredOffers.map((offer) => (
          <article className="offer-card" key={offer.id}>
            <div className="offer-card-top"><span>{offer.category}</span><small>{offer.billingLabel}</small></div>
            <h4>{offer.offerName}</h4>
            <p>{offer.description}</p>
            <div className="offer-price-row">
              <strong>{formatINR(offer.price)}{offer.billingLabel === "per month" && <small>/month</small>}</strong>
              <span><s>MRP {formatINR(offer.mrp)}</s><b>Save {savings(offer.mrp, offer.price)}</b></span>
            </div>
            <details className="offer-seo-details">
              <summary>Original SEO listing details</summary>
              <p><b>{offer.seoTitle}</b></p>
              <p>{offer.sourceMetaDescription}</p>
              <p><b>Primary keyword:</b> {offer.primaryKeyword}{offer.secondaryKeywords ? ` · ${offer.secondaryKeywords}` : ""}</p>
            </details>
            <a className="offer-cta" href={offerWhatsAppUrl(offer)} target="_blank" rel="noreferrer">
              <WhatsappLogo weight="fill" /> Ask about {offer.offerName} <ArrowRight weight="bold" />
            </a>
          </article>
        ))}
        {filteredOffers.length === 0 && <p className="offer-empty">No offers match that search. Try another service name or category.</p>}
      </div>

      <p className="catalog-price-note">Workbook offer prices and MRPs are shown as supplied. Prices without “/month” are listed offer prices; billing basis, scope, taxes and third-party costs are confirmed in writing before work begins.</p>
    </section>
  );
}
