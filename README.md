# Sudarshan AI Labs — AI & Digital Marketing Platform (Lucknow & UP)

High-performance, edge-rendered digital marketing and AI growth platform for MSMEs, startups, and enterprises across Lucknow and Uttar Pradesh. Built with Next.js App Router (SSG), [vinext](https://github.com/cloudflare/vinext), and deployed on Cloudflare Workers.

---

## 🚀 Key Features & Architectural Highlights

### 1. Complete Product Catalog & Dedicated Detail Pages
- **22 Verified Service Packages**: Fully synchronized with the commercial catalog (`app/lib/products-data.ts`).
- **Transparent Pricing Architecture**: Every product features explicit MRP (strikethrough), special offer price, deliverable checklists, and estimated turnaround.
- **Dedicated Product Pages** (`/product-page/[slug]`): Each product has a dedicated SEO-optimized landing page with structured deliverables, pricing tiers, and direct WhatsApp onboarding action.
- **Product Catalog Index** (`/product-page`): Interactive directory with category filtering and instant search discovery.
- **Phosphor Duotone Icons**: Top-tier visual design via `@phosphor-icons/react` (`ProductIcon.tsx`).

### 2. Enhanced Slider & Glassmorphic Controls
- **Modern Control Dock**: Frosted glassmorphism slider dock (`.v-slider-controls`) replacing clunky navigation pills.
- **Live Slide Counter**: Real-time counter showing active position (e.g. `01 / 22`).
- **Interactive Category Filtering**: Instant filtering by `Starter Packs`, `Web & Ecommerce`, `SEO & Visibility`, `AI & Automation`, and `Social Media & PR`.
- **Silky Smooth Gestures**: Native touch, drag, and keyboard navigation with zero hydration lag.

### 3. Comprehensive SEO & Ahrefs Audit Compliance
- **Zero Duplicate Brand Suffixes**: Clean title tags across all 96 pre-rendered static pages, preventing repetitive brand appending.
- **Self-Canonical Open Graph & Twitter Cards**: Every page, locality, and legal document publishes matching canonical Open Graph metadata.
- **Optimized Meta Descriptions**: Rich, search-intent-aligned 150-160 character descriptions across all service, policy, and product pages.
- **Zero 3xx Outlink Redirection**: Internal links directly reference canonical targets, eliminating 301 redirects; WhatsApp CTAs link directly to `api.whatsapp.com` (200 OK) rather than `wa.me` 302 redirects.
- **Low Inlink / Orphan Elimination**: Fully cross-linked 5-column responsive footer on homepage and regional hubs covering all 8 Lucknow localities and 15 Uttar Pradesh commercial cities.

### 4. Rich Structured Data (Schema.org)
- Comprehensive JSON-LD schemas embedded across pages:
  - `Organization` & `LocalBusiness`
  - `Product` & `Offer` (with real pricing and in-stock status)
  - `Service` & `ProfessionalService`
  - `BreadcrumbList`
  - `FAQPage`
  - `ProfilePage` & `Person` (Founder profile for Sheevum Goel)

---

## 🛠️ Development & Deployment Workflow

### Prerequisites
- Node.js `>=22.13.0`
- Cloudflare Wrangler CLI authenticated

### Commands

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Start local Vite / Vinext development server |
| `npm run build` | Pre-render static pages, generate responsive WebP assets, and validate output |
| `npm test` | Run complete end-to-end HTML test suite (7/7 test suites validating schemas, tags, canonicals) |
| `npm run lint` | Run ESLint across `app`, `worker`, and `tests` (zero errors / warnings) |
| `npm run deploy` | Build static production assets and deploy Cloudflare Worker via Wrangler |

---

## 🌐 Production Domains & Routing
- **Primary Origin**: `https://sudarshan-ai.com`
- **Secondary Route**: `https://www.sudarshan-ai.com` (permanently redirects to apex)
- **Deployment Platform**: Cloudflare Workers + Static Assets (`dist/client`)
