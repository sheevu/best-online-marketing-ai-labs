import React from "react";
import {
  ArrowUpRight,
  CheckCircle,
  Sparkle,
  Tag,
} from "@phosphor-icons/react/dist/ssr";
import type { ProductItem } from "../lib/products-data";
import ProductIcon from "./ProductIcon";

export interface ProductCardProps {
  product: ProductItem;
  index: number;
  isCurrent?: boolean;
  variant?: "slider" | "grid";
  className?: string;
}

export function getThemeKey(category: ProductItem["category"]): string {
  switch (category) {
    case "Starter Packs":
      return "starter";
    case "Web & Ecommerce":
      return "ecommerce";
    case "SEO & Visibility":
      return "seo";
    case "AI & Automation":
      return "ai";
    case "Social Media & PR":
      return "social";
    case "Career & Growth":
      return "growth";
    default:
      return "starter";
  }
}

export default function ProductCard({
  product,
  index,
  isCurrent = false,
  variant = "slider",
  className = "",
}: ProductCardProps) {
  const theme = getThemeKey(product.category);
  const cardId = `pcard-${product.id}`;

  return (
    <article
      className={`v-product-card ${isCurrent ? "is-current" : ""} ${variant === "grid" ? "v-card-grid-mode" : ""} ${className}`}
      key={product.id}
      data-reveal
      data-category={product.category}
      data-theme={theme}
      id={cardId}
    >
      {/* Vector Gradient Background Decor Header */}
      <div className="v-card-vector-header" aria-hidden="true">
        <svg
          className="v-card-vector-svg"
          viewBox="0 0 340 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id={`vg-${product.id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--card-grad-1)" stopOpacity="0.35" />
              <stop offset="50%" stopColor="var(--card-grad-2)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--card-grad-1)" stopOpacity="0.02" />
            </linearGradient>
            <radialGradient
              id={`rg-${product.id}`}
              cx="92%"
              cy="8%"
              r="85%"
            >
              <stop offset="0%" stopColor="var(--card-glow)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="295" cy="18" r="95" fill={`url(#rg-${product.id})`} />
          <path
            d="M130,-25 C215,10 245,105 350,60 L350,-25 Z"
            fill={`url(#vg-${product.id})`}
          />
          <path
            d="M205,-15 C265,22 285,80 350,50"
            stroke="var(--card-grad-1)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            opacity="0.45"
          />
          <circle cx="268" cy="42" r="3" fill="var(--card-grad-1)" opacity="0.55" />
          <circle cx="290" cy="54" r="2.2" fill="var(--card-grad-2)" opacity="0.45" />
          <circle cx="312" cy="38" r="2.5" fill="var(--card-grad-1)" opacity="0.6" />
        </svg>
      </div>

      {/* Top Bar: Modern Vector Icon + Badges */}
      <div className="v-product-card-top">
        <div className="v-product-icon-wrap" aria-hidden="true">
          <div className="v-product-icon">
            <ProductIcon name={product.iconName} weight="duotone" />
          </div>
          <span className="v-icon-ambient-halo" />
        </div>
        <div className="v-product-badge-group">
          <span className="v-product-discount-pill">
            <Sparkle weight="fill" className="v-pill-icon" />
            {product.badge}
          </span>
          <span className="v-product-cat-pill">{product.category}</span>
        </div>
      </div>

      {/* Meta & Heading */}
      <span className="v-product-meta">
        <span className="v-meta-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="v-meta-dot">•</span>
        <span className="v-meta-kw">{product.primaryKeyword}</span>
      </span>

      <h3 className="v-product-title">{product.shortName}</h3>
      <p className="v-product-brand-subtitle">{product.newTitle}</p>
      <p className="v-product-desc">{product.metaDescription}</p>

      {/* Inclusions Feature Box */}
      <div className="v-product-features">
        <div className="v-features-header">
          <span className="v-features-title">KEY INCLUSIONS</span>
        </div>
        <ul>
          {product.deliverables.slice(0, 3).map((item) => (
            <li key={item}>
              <CheckCircle weight="fill" className="v-prod-feat-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="v-product-price">
        <div className="v-product-price-info">
          <div className="v-price-mrp">
            <span className="mrp-label">MRP</span>
            <span className="mrp-value">{product.mrp}</span>
          </div>
          <div className="v-price-offer">
            <span className="offer-label">Offer Price</span>
            <span className="price-value">{product.offerPrice}</span>
          </div>
        </div>
        <div className="v-savings-badge">
          <Tag weight="bold" className="v-savings-icon" />
          <span>{product.savings}</span>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="v-product-card-bottom">
        <a href={product.href} className="v-product-action-btn">
          <span>Explore {product.shortName}</span>
          <span className="v-btn-arrow-wrap">
            <ArrowUpRight weight="bold" className="v-btn-arrow" />
          </span>
        </a>
      </div>
    </article>
  );
}
