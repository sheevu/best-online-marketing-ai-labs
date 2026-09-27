/**
 * Product Catalogue for Sudarshan AI Labs
 * Grounded in error/products-SEO-Optimized-V2-NoPriceInTitle.xlsx
 */

export interface ProductItem {
  id: string;
  slug: string;
  urlSlug: string;
  href: string;
  oldTitle: string;
  shortName: string;
  newTitle: string;
  brandTitle: string;
  seoTitle: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  category: 'Starter Packs' | 'Web & Ecommerce' | 'SEO & Visibility' | 'AI & Automation' | 'Social Media & PR' | 'Career & Growth';
  iconName: string;
  mrp: string;
  mrpNumeric: number;
  offerPrice: string;
  offerNumeric: number;
  discountPercent: number;
  savings: string;
  badge: string;
  metaDescription: string;
  longDescription: string;
  deliverables: string[];
  bestFor: string;
  faqs: [string, string][];
}

export const PRODUCTS: ProductItem[] = [
  {
    "id": "1505001",
    "slug": "build-ecommerce-website-google-business-profile-setup-lucknow",
    "urlSlug": "product-page/build-ecommerce-website-google-business-profile-setup-lucknow",
    "href": "/product-page/build-ecommerce-website-google-business-profile-setup-lucknow",
    "oldTitle": "Swaraj Tech Pack @ ₹89",
    "shortName": "Swaraj Tech Pack",
    "newTitle": "Build Ecommerce Website with Google Business Profile Setup",
    "brandTitle": "Swaraj Tech Pack - Ecommerce Store + GMB Setup in 24 Hours",
    "seoTitle": "Build Ecommerce Website + Google Business Profile Setup | Lucknow",
    "primaryKeyword": "build ecommerce website",
    "secondaryKeywords": [
      "google business profile",
      "creating an ecommerce website",
      "gmb profile"
    ],
    "category": "Starter Packs",
    "iconName": "Storefront",
    "mrp": "₹999.00",
    "mrpNumeric": 999.0,
    "offerPrice": "₹89.00",
    "offerNumeric": 89.0,
    "discountPercent": 91,
    "savings": "Save ₹910",
    "badge": "91% OFF",
    "metaDescription": "Launch your ecommerce website in 24 hours with verified Google Business Profile. WhatsApp catalog, product listings & Google listing included. For MSMEs in Lucknow. Limited offer.",
    "longDescription": "Swaraj Tech Pack is the fastest way to build ecommerce website for MSMEs. Get a complete online store in 24 hours with product listings, prices & offers, plus verified Google Business Profile (google my business profile, gmb profile, my google business profile, create a google business profile). Includes WhatsApp Business catalog integration, Google listing for my business optimization, mobile-responsive design. Perfect for Kirana shops, startups & service businesses searching building website for business, website development service, create a google my business account in Lucknow. No-code, Hindi-English WhatsApp support. Save 91% - MRP ₹999, Offer ₹89.",
    "deliverables": [
      "Complete online store launched in 24 hours",
      "Verified Google Business Profile setup & optimization",
      "WhatsApp Business product catalog integration",
      "Mobile-first responsive design ready for orders",
      "Hindi & English bilingual support during onboarding"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Swaraj Tech Pack?",
        "The Swaraj Tech Pack includes build ecommerce website with google business profile setup, along with complete online store launched in 24 hours and verified google business profile setup & optimization. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Swaraj Tech Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹89 instead of MRP ₹999?",
        "We offer this special subsidized price (Save 91% / ₹910) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1505002",
    "slug": "small-business-website-development-service-lucknow",
    "urlSlug": "product-page/small-business-website-development-service-lucknow",
    "href": "/product-page/small-business-website-development-service-lucknow",
    "oldTitle": "Prarambh Kick-Start Pack @ ₹499",
    "shortName": "Prarambh Kick-Start Pack",
    "newTitle": "Small Business Website Development Service",
    "brandTitle": "Prarambh Kick-Start Pack - Website Development for Small Business",
    "seoTitle": "Website Development Service for Small Business | Lucknow",
    "primaryKeyword": "website development service",
    "secondaryKeywords": [
      "building website for business",
      "website development near me"
    ],
    "category": "Starter Packs",
    "iconName": "Browsers",
    "mrp": "₹1,500.00",
    "mrpNumeric": 1500.0,
    "offerPrice": "₹499.00",
    "offerNumeric": 499.0,
    "discountPercent": 67,
    "savings": "Save ₹1,001",
    "badge": "67% OFF",
    "metaDescription": "Affordable website development service for small businesses & startups in Lucknow. Get professional business website + basic GMB setup. Kick-start your online presence today.",
    "longDescription": "Prarambh Kick-Start Pack is your affordable website development service bundle. Ideal for MSMEs searching website development near me, website development service, building website for business. Includes one-page professional website (responsive), basic Google Business Profile setup (google business account, my business profile), service/product listing structure. Designed for businesses in Lucknow wanting to start online without coding. Includes WhatsApp support, Hindi-English assistance. Perfect alternative to searching website developers near me or web development company near me.",
    "deliverables": [
      "One-page modern responsive business website",
      "Google Business Profile setup with local map pin",
      "Structured service and product showcase listing",
      "WhatsApp direct enquiry click-to-chat integration",
      "Fast turnaround with no coding required from your team"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Prarambh Kick-Start Pack?",
        "The Prarambh Kick-Start Pack includes small business website development service, along with one-page modern responsive business website and google business profile setup with local map pin. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Prarambh Kick-Start Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹499 instead of MRP ₹1,500?",
        "We offer this special subsidized price (Save 67% / ₹1,001) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1505003",
    "slug": "ecommerce-website-development-with-seo-marketing",
    "urlSlug": "product-page/ecommerce-website-development-with-seo-marketing",
    "href": "/product-page/ecommerce-website-development-with-seo-marketing",
    "oldTitle": "Udaan Vyapari Pack @ ₹889",
    "shortName": "Udaan Vyapari Pack",
    "newTitle": "Ecommerce Website Development with SEO & Marketing Assets",
    "brandTitle": "Udaan Vyapari Pack - Complete Ecommerce Store Setup",
    "seoTitle": "Ecommerce Website Development + SEO | Udaan Vyapari Pack",
    "primaryKeyword": "ecommerce website development",
    "secondaryKeywords": [
      "ecommerce web development",
      "website design and development",
      "seo services"
    ],
    "category": "Web & Ecommerce",
    "iconName": "ShoppingBag",
    "mrp": "₹2,399.00",
    "mrpNumeric": 2399.0,
    "offerPrice": "₹889.00",
    "offerNumeric": 889.0,
    "discountPercent": 63,
    "savings": "Save ₹1,510",
    "badge": "63% OFF",
    "metaDescription": "Full ecommerce website development with SEO tools & marketing assets. Get a functional online store to attract, convert & retain customers. Ideal for MSMEs in India.",
    "longDescription": "Udaan Vyapari Pack is a complete ecommerce website development solution. Get fully functional online store (ecommerce website development, ecommerce web development, ecommerce site development, build ecommerce website, ecommerce development company), professional marketing assets, SEO tools integration (seo services, website seo optimization, ecommerce seo). Perfect if you searched for ecommerce website developer, shopify website development, website design and development, building website for business. Includes support to attract, convert & retain customers. Best for MSMEs wanting to scale online.",
    "deliverables": [
      "Fully functional ecommerce website development",
      "Search engine optimization (SEO) tool integration",
      "Product catalog, pricing, and promotional banner setup",
      "Payment gateway and WhatsApp ordering flow setup",
      "Mobile-optimized checkout and customer enquiry funnel"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Udaan Vyapari Pack?",
        "The Udaan Vyapari Pack includes ecommerce website development with seo & marketing assets, along with fully functional ecommerce website development and search engine optimization (seo) tool integration. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Udaan Vyapari Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹889 instead of MRP ₹2,399?",
        "We offer this special subsidized price (Save 63% / ₹1,510) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1505004",
    "slug": "social-media-marketing-facebook-ads-management",
    "urlSlug": "product-page/social-media-marketing-facebook-ads-management",
    "href": "/product-page/social-media-marketing-facebook-ads-management",
    "oldTitle": "Prabhav Dominator Pack @ ₹1399/month",
    "shortName": "Prabhav Dominator Pack",
    "newTitle": "Social Media Marketing & Facebook Ads Management",
    "brandTitle": "Prabhav Dominator Pack - Social Media Growth for Local Business",
    "seoTitle": "Social Media Marketing Agency + Facebook Ads | Lucknow",
    "primaryKeyword": "social media marketing agency",
    "secondaryKeywords": [
      "facebook advertising management",
      "social media advertising",
      "social media ads"
    ],
    "category": "Social Media & PR",
    "iconName": "Megaphone",
    "mrp": "₹3,200.00",
    "mrpNumeric": 3200.0,
    "offerPrice": "₹1,399.00",
    "offerNumeric": 1399.0,
    "discountPercent": 56,
    "savings": "Save ₹1,801",
    "badge": "56% OFF",
    "metaDescription": "Grow locally with expert social media marketing & Facebook advertising management. Includes posts, reels, bio optimization & influencer promotions. Monthly pack for MSMEs.",
    "longDescription": "Prabhav Dominator Pack is your local social media marketing agency for MSMEs. Includes social media management - daily posts, reels (social media marketing, social media marketing services, social media marketing strategy, smm marketing), bio optimization, local ad campaigns (facebook advertising management, social media ads, social advertising, social media advertising, facebook social media marketing), influencer promotions. Ideal for businesses targeting social media marketing lucknow, social media marketing agency near me, social media agency. Monthly growth engine for local domination.",
    "deliverables": [
      "Daily social media content calendar, posts & reels",
      "Meta Business Suite & Instagram profile optimization",
      "Targeted local Facebook & Instagram ads setup",
      "Influencer campaign outline for local Lucknow reach",
      "Monthly performance reporting and lead tracking"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Prabhav Dominator Pack?",
        "The Prabhav Dominator Pack includes social media marketing & facebook ads management, along with daily social media content calendar, posts & reels and meta business suite & instagram profile optimization. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Prabhav Dominator Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹1,399 instead of MRP ₹3,200?",
        "We offer this special subsidized price (Save 56% / ₹1,801) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1505005",
    "slug": "advanced-seo-services-social-media-ai-content",
    "urlSlug": "product-page/advanced-seo-services-social-media-ai-content",
    "href": "/product-page/advanced-seo-services-social-media-ai-content",
    "oldTitle": "Vikas Growth Pro Pack @ ₹1599",
    "shortName": "Vikas Growth Pro Pack",
    "newTitle": "Advanced SEO Services with Social Media & AI Content",
    "brandTitle": "Vikas Growth Pro Pack - AI Powered SEO & Content Growth",
    "seoTitle": "Advanced SEO Services + Social Media Marketing | Pro",
    "primaryKeyword": "seo services",
    "secondaryKeywords": [
      "social media marketing",
      "seo content writing",
      "website seo optimization"
    ],
    "category": "SEO & Visibility",
    "iconName": "ChartLineUp",
    "mrp": "₹4,500.00",
    "mrpNumeric": 4500.0,
    "offerPrice": "₹1,599.00",
    "offerNumeric": 1599.0,
    "discountPercent": 64,
    "savings": "Save ₹2,901",
    "badge": "64% OFF",
    "metaDescription": "Advanced SEO services with AI features, weekly reels & posts, blog schema & deep analytics. Boost organic traffic & social presence for your MSME business.",
    "longDescription": "Vikas Growth Pro Pack is a comprehensive SEO services and social media marketing bundle with advanced AI. Includes weekly content creation - reels, posts (social media marketing, social media marketing services, smm marketing), blog schema & SEO content writing (seo content writing, seo and content writing, keywords for seo, seo keyword analysis), deep analytics & website seo optimization (website seo optimization, seo optimization service, seo audit, seo optimization agency). For MSMEs searching seo services, seo services near me, seo agency, seo company near me, seo optimization companies, best seo companies.",
    "deliverables": [
      "Comprehensive on-page and technical SEO implementation",
      "AI-assisted blog writing and content topic clusters",
      "Weekly reels and social media creative assets",
      "Rich schema markup (Service, FAQ, LocalBusiness)",
      "Keyword rank tracking and organic search analytics"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Vikas Growth Pro Pack?",
        "The Vikas Growth Pro Pack includes advanced seo services with social media & ai content, along with comprehensive on-page and technical seo implementation and ai-assisted blog writing and content topic clusters. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Vikas Growth Pro Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹1,599 instead of MRP ₹4,500?",
        "We offer this special subsidized price (Save 64% / ₹2,901) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1505006",
    "slug": "local-seo-services-google-business-profile-boost",
    "urlSlug": "product-page/local-seo-services-google-business-profile-boost",
    "href": "/product-page/local-seo-services-google-business-profile-boost",
    "oldTitle": "Raftar Booster Pack @ ₹1899/month",
    "shortName": "Raftar Booster Pack",
    "newTitle": "Local SEO Services with Google Business Profile Boost",
    "brandTitle": "Raftar Booster Pack - Local SEO & Near Me Ranking Booster",
    "seoTitle": "Local SEO Services + GMB Profile Boost | Near Me Ranking",
    "primaryKeyword": "local seo services",
    "secondaryKeywords": [
      "google business profile",
      "local seo optimization",
      "seo optimization"
    ],
    "category": "SEO & Visibility",
    "iconName": "RocketLaunch",
    "mrp": "₹6,500.00",
    "mrpNumeric": 6500.0,
    "offerPrice": "₹1,899.00",
    "offerNumeric": 1899.0,
    "discountPercent": 71,
    "savings": "Save ₹4,601",
    "badge": "71% OFF",
    "metaDescription": "Dominate Near Me searches with local SEO services & Google Business Profile boost. Includes WhatsApp catalog, Udyam registration support & premium growth guides.",
    "longDescription": "Raftar Booster Pack is the AI Turbo Growth Pack for local SEO domination. Features FREE MSME/Udyam Registration Support, tailored digital action steps, local SEO and Near Me ranking boost (local seo services, local seo, local seo optimization, local search engine optimization, google search optimization, search engine optimization services near me), WhatsApp catalog integration, Google Business Profile optimization (google business profile, google my business profile, gmb profile, google business listing, my google business profile, google listing for my business). Ideal for MSMEs, ecommerce stores, Kirana shops searching local seo services near me, seo services near me, google business profile in Lucknow.",
    "deliverables": [
      "Near Me search ranking optimization and local signals",
      "Google Business Profile category and citation boost",
      "Free MSME / Udyam registration assistance included",
      "WhatsApp catalog setup for quick customer conversions",
      "Local review collection and reputation management guide"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Raftar Booster Pack?",
        "The Raftar Booster Pack includes local seo services with google business profile boost, along with near me search ranking optimization and local signals and google business profile category and citation boost. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Raftar Booster Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹1,899 instead of MRP ₹6,500?",
        "We offer this special subsidized price (Save 71% / ₹4,601) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505000",
    "slug": "business-growth-digital-marketing-consultation-lucknow",
    "urlSlug": "product-page/business-growth-digital-marketing-consultation-lucknow",
    "href": "/product-page/business-growth-digital-marketing-consultation-lucknow",
    "oldTitle": "Business Growth Consultation",
    "shortName": "Business Growth Consultation",
    "newTitle": "Business Growth & Digital Marketing Strategy Consultation",
    "brandTitle": "Business Growth Consultation - Strategy by Digital Marketing Experts",
    "seoTitle": "Business Growth Consultation | Digital Marketing Company Lucknow",
    "primaryKeyword": "digital marketing company in lucknow",
    "secondaryKeywords": [
      "best digital marketing company in lucknow",
      "search engine marketing"
    ],
    "category": "Starter Packs",
    "iconName": "Compass",
    "mrp": "₹3,500.00",
    "mrpNumeric": 3500.0,
    "offerPrice": "₹499.00",
    "offerNumeric": 499.0,
    "discountPercent": 86,
    "savings": "Save ₹3,001",
    "badge": "86% OFF",
    "metaDescription": "Get expert business growth consultation from top digital marketing company in Lucknow. Includes search engine marketing analysis & social media strategy roadmap.",
    "longDescription": "Business Growth Consultation is a high-level strategy session from the best digital marketing company in Lucknow. We help leaders use resources efficiently and optimize workflows. Includes digital marketing audit, search engine marketing analysis (search engine marketing, search engine optimization specialist, search engine marketing analysis), social media marketing strategy roadmap (social media marketing strategy, marketing strategy using social media), process optimization. Perfect for businesses searching digital marketing company in lucknow, best digital marketing agency in lucknow, digital marketing agency in lucknow.",
    "deliverables": [
      "60-minute deep-dive business growth strategy session",
      "Comprehensive digital marketing and visibility audit",
      "Search engine marketing (SEM) & paid ads roadmap",
      "Customer journey bottleneck identification and fix plan",
      "Step-by-step 90-day action blueprint for your team"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Business Growth Consultation?",
        "The Business Growth Consultation includes business growth & digital marketing strategy consultation, along with 60-minute deep-dive business growth strategy session and comprehensive digital marketing and visibility audit. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Business Growth Consultation delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹499 instead of MRP ₹3,500?",
        "We offer this special subsidized price (Save 86% / ₹3,001) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505001",
    "slug": "whatsapp-business-automation-meta-suite-basic",
    "urlSlug": "product-page/whatsapp-business-automation-meta-suite-basic",
    "href": "/product-page/whatsapp-business-automation-meta-suite-basic",
    "oldTitle": "WhatsApp Business automations & Meta Suite Optimise (Basic)",
    "shortName": "WhatsApp Automation & Meta Suite",
    "newTitle": "WhatsApp Business Automation & Meta Suite Optimization",
    "brandTitle": "WhatsApp Business Automation - Basic Meta Suite Setup",
    "seoTitle": "WhatsApp Business Automation + Facebook Ads Management | Basic",
    "primaryKeyword": "facebook advertising management",
    "secondaryKeywords": [
      "social media marketing",
      "whatsapp business automation"
    ],
    "category": "AI & Automation",
    "iconName": "WhatsappLogo",
    "mrp": "₹899.00",
    "mrpNumeric": 899.0,
    "offerPrice": "₹129.00",
    "offerNumeric": 129.0,
    "discountPercent": 86,
    "savings": "Save ₹770",
    "badge": "86% OFF",
    "metaDescription": "Setup WhatsApp Business automation & optimize Meta Suite for Facebook ads. Automate replies, catalog & social media marketing. Basic pack for MSMEs.",
    "longDescription": "WhatsApp Business Automation & Meta Suite Optimise (Basic) implements WhatsApp Business automations and optimizes performance within Meta Suite. Includes WhatsApp Business automation setup, Meta Business Suite optimization (facebook advertising management, facebook social media marketing, social media advertising), social media marketing automation basics. For MSMEs searching facebook advertising management, social media marketing agency, social media agency services, whatsapp business automation.",
    "deliverables": [
      "WhatsApp Business quick replies and greeting automation",
      "Meta Business Suite page & account optimization",
      "Basic Facebook & Instagram advertising alignment",
      "Automated lead labeling and message sorting workflow",
      "Hands-on setup and staff training on mobile devices"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the WhatsApp Automation & Meta Suite?",
        "The WhatsApp Automation & Meta Suite includes whatsapp business automation & meta suite optimization, along with whatsapp business quick replies and greeting automation and meta business suite page & account optimization. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is WhatsApp Automation & Meta Suite delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹129 instead of MRP ₹899?",
        "We offer this special subsidized price (Save 86% / ₹770) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "25050011",
    "slug": "whatsapp-catalog-builder-ecommerce-integration-pro",
    "urlSlug": "product-page/whatsapp-catalog-builder-ecommerce-integration-pro",
    "href": "/product-page/whatsapp-catalog-builder-ecommerce-integration-pro",
    "oldTitle": "All above + Catalog builder (Pro)",
    "shortName": "Catalog Builder Pro",
    "newTitle": "WhatsApp Catalog Builder with Ecommerce Integration",
    "brandTitle": "Catalog Builder Pro - Visual Catalog + Ecommerce Setup",
    "seoTitle": "WhatsApp Catalog Builder + Ecommerce Web Development | Pro",
    "primaryKeyword": "ecommerce web development",
    "secondaryKeywords": [
      "build ecommerce website",
      "whatsapp catalog builder"
    ],
    "category": "Web & Ecommerce",
    "iconName": "FolderUser",
    "mrp": "₹1,499.00",
    "mrpNumeric": 1499.0,
    "offerPrice": "₹599.00",
    "offerNumeric": 599.0,
    "discountPercent": 60,
    "savings": "Save ₹900",
    "badge": "60% OFF",
    "metaDescription": "Pro visual catalog builder for WhatsApp & ecommerce. Create product catalogs without code, integrate with store & Meta Suite. For non-technical business owners.",
    "longDescription": "Catalog Builder Pro helps non-technical business owners create or edit catalog items visually without writing code. Includes everything in Basic (facebook advertising management, whatsapp business automation), plus visual catalog builder for ecommerce (ecommerce web development, build ecommerce website, ecommerce site development, creating an ecommerce website, ecommerce development company), no-code product listing, Meta catalog sync. Perfect for MSMEs searching build ecommerce website, website development service.",
    "deliverables": [
      "Visual no-code product catalog builder for WhatsApp",
      "Sync catalog directly with Facebook & Instagram shops",
      "Product variant, pricing, and description formatting",
      "One-click order links for rapid customer purchases",
      "Includes all features from WhatsApp Business Basic"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Catalog Builder Pro?",
        "The Catalog Builder Pro includes whatsapp catalog builder with ecommerce integration, along with visual no-code product catalog builder for whatsapp and sync catalog directly with facebook & instagram shops. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Catalog Builder Pro delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹599 instead of MRP ₹1,499?",
        "We offer this special subsidized price (Save 60% / ₹900) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505002",
    "slug": "seo-content-writing-blogs-articles-research",
    "urlSlug": "product-page/seo-content-writing-blogs-articles-research",
    "href": "/product-page/seo-content-writing-blogs-articles-research",
    "oldTitle": "Research , Blogs & Article Writing",
    "shortName": "SEO Content & Article Writing",
    "newTitle": "SEO Content Writing - Research, Blogs & Articles",
    "brandTitle": "SEO Content Writing Service - Blogs, Articles & Research",
    "seoTitle": "SEO Content Writing | Blogs, Articles & Research | Lucknow",
    "primaryKeyword": "seo content writing",
    "secondaryKeywords": [
      "seo and content writing",
      "keywords for seo",
      "seo optimization"
    ],
    "category": "SEO & Visibility",
    "iconName": "Article",
    "mrp": "₹999.00",
    "mrpNumeric": 999.0,
    "offerPrice": "₹499.00",
    "offerNumeric": 499.0,
    "discountPercent": 50,
    "savings": "Save ₹500",
    "badge": "50% OFF",
    "metaDescription": "Professional SEO content writing for blogs & articles. Includes keyword research, SEO optimization & search intent mapping to boost organic traffic.",
    "longDescription": "SEO Content Writing service encompassing research, blog posts, and articles. Includes keyword research (keywords for seo, seo keyword analysis, seo keyword search, search engine optimization keywords), SEO-optimized blog posts (seo content writing, seo and content writing, seo and backlinks, seo content writing), article writing with search engine optimization keywords, website seo optimization. Ideal for businesses searching seo content writing, search engine optimization service, seo optimization, seo services. Best for MSMEs needing content that ranks.",
    "deliverables": [
      "High-intent SEO keyword research and search intent mapping",
      "SEO-optimized long-form articles, blogs, and guides",
      "Header hierarchy (H1, H2, H3) and internal linking blueprint",
      "Meta titles, descriptions, and OpenGraph snippets",
      "Plagiarism-free, engaging content that builds authority"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the SEO Content & Article Writing?",
        "The SEO Content & Article Writing includes seo content writing - research, blogs & articles, along with high-intent seo keyword research and search intent mapping and seo-optimized long-form articles, blogs, and guides. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is SEO Content & Article Writing delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹499 instead of MRP ₹999?",
        "We offer this special subsidized price (Save 50% / ₹500) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505003",
    "slug": "saas-ai-tool-mvp-web-application-development",
    "urlSlug": "product-page/saas-ai-tool-mvp-web-application-development",
    "href": "/product-page/saas-ai-tool-mvp-web-application-development",
    "oldTitle": "SaaS & AI Tool Development (MVP)",
    "shortName": "SaaS & AI Tool MVP Development",
    "newTitle": "SaaS & AI Tool MVP Development",
    "brandTitle": "SaaS & AI Tool Development - Web Application MVP",
    "seoTitle": "SaaS & AI Tool MVP Development | Web App Development",
    "primaryKeyword": "web application development",
    "secondaryKeywords": [
      "web app development",
      "fullstack web development",
      "saas development"
    ],
    "category": "AI & Automation",
    "iconName": "Cpu",
    "mrp": "₹6,999.00",
    "mrpNumeric": 6999.0,
    "offerPrice": "₹2,999.00",
    "offerNumeric": 2999.0,
    "discountPercent": 57,
    "savings": "Save ₹4,000",
    "badge": "57% OFF",
    "metaDescription": "Build your SaaS & AI tool MVP fast with expert web application development. Fullstack development for startups to test demand & gather feedback quickly.",
    "longDescription": "SaaS & AI Tool Development (MVP) builds Minimum Viable Product for SaaS and AI tools. The simplest sellable version to test demand, gather feedback, begin traction using AI developer tools. Includes web application development (web application development, web app development, website and app development, web and app development), fullstack web development (fullstack web development, python web development, python web programming, python and web development), SaaS architecture, AI integration. For startups searching web application development, web development agency, ecommerce app development company.",
    "deliverables": [
      "Minimum Viable Product (MVP) web application development",
      "Full-stack architecture with Python, Node, or modern frameworks",
      "AI tool and LLM API integrations tailored to your use case",
      "User authentication, database setup, and responsive UI",
      "Rapid deployment to cloud so you can validate customer demand"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the SaaS & AI Tool MVP Development?",
        "The SaaS & AI Tool MVP Development includes saas & ai tool mvp development, along with minimum viable product (mvp) web application development and full-stack architecture with python, node, or modern frameworks. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is SaaS & AI Tool MVP Development delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹2,999 instead of MRP ₹6,999?",
        "We offer this special subsidized price (Save 57% / ₹4,000) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505004",
    "slug": "excel-google-sheets-business-automation",
    "urlSlug": "product-page/excel-google-sheets-business-automation",
    "href": "/product-page/excel-google-sheets-business-automation",
    "oldTitle": "Excel & Google Sheets Automation",
    "shortName": "Excel & Sheets Automation",
    "newTitle": "Excel & Google Sheets Business Automation",
    "brandTitle": "Business Automation - Excel & Google Sheets Workflow Automation",
    "seoTitle": "Excel & Google Sheets Automation | Business Workflow",
    "primaryKeyword": "business automation",
    "secondaryKeywords": [
      "python web development",
      "web based development"
    ],
    "category": "AI & Automation",
    "iconName": "Table",
    "mrp": "₹4,999.00",
    "mrpNumeric": 4999.0,
    "offerPrice": "₹1,999.00",
    "offerNumeric": 1999.0,
    "discountPercent": 60,
    "savings": "Save ₹3,000",
    "badge": "60% OFF",
    "metaDescription": "Automate Excel & Google Sheets workflows. Streamline data management, reporting & business processes with Python-powered automation for MSMEs.",
    "longDescription": "Excel & Google Sheets Automation sets up automated processes, workflows, or scripts to streamline tasks and manage data. Includes automated workflows, data management scripts, Python-powered automation (python web development, web based development, web development services, python web programming). Complements your website development and google business profile stack by automating backend operations. Ideal for MSMEs wanting to save time on repetitive sheets tasks.",
    "deliverables": [
      "Automated Python & Apps Script data processing pipelines",
      "Google Sheets & Excel sync with external tools and forms",
      "Automated daily/weekly summary reports and alerts",
      "Elimination of manual copy-paste errors and data entry",
      "Complete documentation and walkthrough for your team"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Excel & Sheets Automation?",
        "The Excel & Sheets Automation includes excel & google sheets business automation, along with automated python & apps script data processing pipelines and google sheets & excel sync with external tools and forms. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Excel & Sheets Automation delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹1,999 instead of MRP ₹4,999?",
        "We offer this special subsidized price (Save 60% / ₹3,000) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505005",
    "slug": "professional-ats-resume-writing-service",
    "urlSlug": "product-page/professional-ats-resume-writing-service",
    "href": "/product-page/professional-ats-resume-writing-service",
    "oldTitle": "Resume Writing",
    "shortName": "Professional ATS Resume Writing",
    "newTitle": "Professional ATS-Optimized Resume Writing Service",
    "brandTitle": "Resume Writing Service - ATS Optimized Professional Resume",
    "seoTitle": "Professional Resume Writing Service | ATS Optimized | Lucknow",
    "primaryKeyword": "resume writing service",
    "secondaryKeywords": [
      "professional resume writing"
    ],
    "category": "Career & Growth",
    "iconName": "FileText",
    "mrp": "₹299.00",
    "mrpNumeric": 299.0,
    "offerPrice": "₹99.00",
    "offerNumeric": 99.0,
    "discountPercent": 67,
    "savings": "Save ₹200",
    "badge": "67% OFF",
    "metaDescription": "Get ATS-optimized professional resume writing. Visually appealing resume highlighting skills, achievements & experience. For job seekers in Lucknow.",
    "longDescription": "Professional Resume Writing Service creates compelling, visually appealing, effective resume highlighting client's skills, achievements, and experiences. Includes client communication to gather information and provide feedback, ATS optimization, multiple revisions. While outside core digital marketing keywords, positioned as career service for Lucknow professionals. Save 66% - affordable professional service.",
    "deliverables": [
      "ATS (Applicant Tracking System) keyword-optimized formatting",
      "Visually polished layout highlighting skills and metrics",
      "Personalized consultation to uncover standout achievements",
      "Multiple revisions until you are completely confident",
      "Delivered in editable Word (.docx) and print-ready PDF formats"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Professional ATS Resume Writing?",
        "The Professional ATS Resume Writing includes professional ats-optimized resume writing service, along with ats (applicant tracking system) keyword-optimized formatting and visually polished layout highlighting skills and metrics. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Professional ATS Resume Writing delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹99 instead of MRP ₹299?",
        "We offer this special subsidized price (Save 67% / ₹200) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505006",
    "slug": "ai-chatbot-development-website-whatsapp",
    "urlSlug": "product-page/ai-chatbot-development-website-whatsapp",
    "href": "/product-page/ai-chatbot-development-website-whatsapp",
    "oldTitle": "AI Chatbot & Assistant",
    "shortName": "AI Chatbot & Virtual Assistant",
    "newTitle": "AI Chatbot Development for Website & WhatsApp",
    "brandTitle": "AI Chatbot & Assistant - Website and WhatsApp Bot",
    "seoTitle": "AI Chatbot Development | Website & WhatsApp Assistant",
    "primaryKeyword": "ai chatbot development",
    "secondaryKeywords": [
      "web application development",
      "whatsapp ai assistant"
    ],
    "category": "AI & Automation",
    "iconName": "Robot",
    "mrp": "₹1,499.00",
    "mrpNumeric": 1499.0,
    "offerPrice": "₹499.00",
    "offerNumeric": 499.0,
    "discountPercent": 67,
    "savings": "Save ₹1,000",
    "badge": "67% OFF",
    "metaDescription": "AI-powered chatbot & assistant for website, WhatsApp & Facebook Messenger. Natural language conversations to automate customer support & lead capture.",
    "longDescription": "AI Chatbot & Assistant are AI-powered virtual assistants designed to interact with users in natural language, simulating human-like conversations, integrated into various channels. Includes website chatbot (web application development, web app development, website and app development), WhatsApp AI assistant, Facebook Messenger bot (facebook advertising management, facebook social media marketing, social media marketing), natural language processing, lead capture automation. Perfect for businesses searching web application development, ai chatbot, whatsapp automation.",
    "deliverables": [
      "Custom AI chatbot trained on your business FAQs and offers",
      "Direct integration with Website widget and WhatsApp API",
      "24/7 instant enquiry capture, qualification, and routing",
      "Natural conversational responses in Hindi and English",
      "Notification alerts sent to your team for warm leads"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the AI Chatbot & Virtual Assistant?",
        "The AI Chatbot & Virtual Assistant includes ai chatbot development for website & whatsapp, along with custom ai chatbot trained on your business faqs and offers and direct integration with website widget and whatsapp api. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is AI Chatbot & Virtual Assistant delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹499 instead of MRP ₹1,499?",
        "We offer this special subsidized price (Save 67% / ₹1,000) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505007",
    "slug": "local-seo-services-content-optimization-lucknow",
    "urlSlug": "product-page/local-seo-services-content-optimization-lucknow",
    "href": "/product-page/local-seo-services-content-optimization-lucknow",
    "oldTitle": "SEO & Content Boost",
    "shortName": "SEO & Content Boost",
    "newTitle": "Local SEO Services & Content Optimization Package",
    "brandTitle": "SEO & Content Boost - Local SEO + On Page Off Page Optimization",
    "seoTitle": "SEO Services Near Me | Local SEO + Content Boost | Lucknow",
    "primaryKeyword": "seo services near me",
    "secondaryKeywords": [
      "local seo services",
      "seo optimization",
      "on page off page seo"
    ],
    "category": "SEO & Visibility",
    "iconName": "MagnifyingGlass",
    "mrp": "₹1,899.00",
    "mrpNumeric": 1899.0,
    "offerPrice": "₹599.00",
    "offerNumeric": 599.0,
    "discountPercent": 68,
    "savings": "Save ₹1,300",
    "badge": "68% OFF",
    "metaDescription": "Affordable SEO services near me in Lucknow. Includes local SEO, on-page & off-page SEO, link building & content optimization to boost Google rankings.",
    "longDescription": "SEO & Content Boost focuses on Search Engine Optimization and content creation to increase organic traffic and enhance online presence by developing high-quality, keyword-optimized content. Includes on page SEO & off page SEO (on page seo, off page seo, on page and off page seo, seo on page and off page), SEO optimization & audit (seo optimization, seo optimization service, seo audit, seo analysis, site audit, seo keyword analysis), local SEO (local seo, local seo services, local seo optimization, geo seo, local search engine optimization), link building & backlinks (link building, backlinks in seo, seo and backlinks, buying backlinks). Ideal for searches: seo services, seo services near me, seo services for small business, seo company near me, seo optimization companies, best seo companies, seo agency near me, local seo services.",
    "deliverables": [
      "Complete on-page, off-page, and technical SEO audit",
      "High-priority keyword mapping and page content overhaul",
      "Google Search Console indexing and crawl error fixes",
      "High-quality backlink and local citation audit",
      "Actionable roadmap to outrank local competitors"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the SEO & Content Boost?",
        "The SEO & Content Boost includes local seo services & content optimization package, along with complete on-page, off-page, and technical seo audit and high-priority keyword mapping and page content overhaul. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is SEO & Content Boost delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹599 instead of MRP ₹1,899?",
        "We offer this special subsidized price (Save 68% / ₹1,300) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505008",
    "slug": "high-converting-landing-page-design-lead-generation",
    "urlSlug": "product-page/high-converting-landing-page-design-lead-generation",
    "href": "/product-page/high-converting-landing-page-design-lead-generation",
    "oldTitle": "Landing Pages (Lead Generation)",
    "shortName": "High-Converting Landing Page",
    "newTitle": "High-Converting Landing Page Design for Lead Generation",
    "brandTitle": "Landing Page Design - Lead Generation Focused Pages",
    "seoTitle": "Landing Page Design for Lead Generation | Lucknow",
    "primaryKeyword": "landing page design",
    "secondaryKeywords": [
      "website design and development",
      "lead generation",
      "search engine marketing"
    ],
    "category": "Web & Ecommerce",
    "iconName": "Target",
    "mrp": "₹2,099.00",
    "mrpNumeric": 2099.0,
    "offerPrice": "₹699.00",
    "offerNumeric": 699.0,
    "discountPercent": 67,
    "savings": "Save ₹1,400",
    "badge": "67% OFF",
    "metaDescription": "High-converting landing pages designed for lead generation. Single-action focused design compatible with search & social ads to capture more leads.",
    "longDescription": "Landing Pages (Lead Generation) creates landing pages specifically designed to generate leads by prompting visitors to take a single action, such as filling out a form in return for an offer. Includes high-converting landing page design (website design and development, website design & development company, web design and development, website design and development agency, landing page design), lead generation optimization, search engine marketing ready (search engine marketing, search engine optimization specialist), social media ads compatible (social media marketing services, social media ads, social media ad campaign). Perfect for businesses searching website design and development, building website for business, landing pages.",
    "deliverables": [
      "High-converting landing page designed specifically for leads",
      "Single-focus call-to-action (CTA) with frictionless forms",
      "Optimized for Google Ads and Meta paid traffic campaigns",
      "Ultra-fast mobile loading speed (under 1.5 seconds)",
      "Conversion tracking and analytics integration"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the High-Converting Landing Page?",
        "The High-Converting Landing Page includes high-converting landing page design for lead generation, along with high-converting landing page designed specifically for leads and single-focus call-to-action (cta) with frictionless forms. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is High-Converting Landing Page delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹699 instead of MRP ₹2,099?",
        "We offer this special subsidized price (Save 67% / ₹1,400) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505009",
    "slug": "custom-5-page-business-website-development-lucknow",
    "urlSlug": "product-page/custom-5-page-business-website-development-lucknow",
    "href": "/product-page/custom-5-page-business-website-development-lucknow",
    "oldTitle": "Full Custom Website (5 pages)",
    "shortName": "Full Custom 5-Page Website",
    "newTitle": "Custom 5-Page Business Website Development",
    "brandTitle": "Full Custom Website - 5 Page Responsive Business Website",
    "seoTitle": "Custom Business Website Development | 5 Pages | Lucknow",
    "primaryKeyword": "website development company near me",
    "secondaryKeywords": [
      "web development company",
      "best website development company",
      "responsive web development"
    ],
    "category": "Web & Ecommerce",
    "iconName": "GlobeHemisphereWest",
    "mrp": "₹9,600.00",
    "mrpNumeric": 9600.0,
    "offerPrice": "₹3,500.00",
    "offerNumeric": 3500.0,
    "discountPercent": 64,
    "savings": "Save ₹6,100",
    "badge": "64% OFF",
    "metaDescription": "Get a full custom 5-page responsive business website from top website development company near me in Lucknow. SEO-ready, mobile-friendly & growth focused.",
    "longDescription": "Full Custom Website (5 pages) is custom web development built from ground up tailored to suit business needs, serve target audience, and help grow brand online. Includes 5-page custom website (website development, website development company, website development company near me, web development company, website development near me, web development near me, website design and development, best website development company, top website development companies, website development agencies, website development service, web development services, responsive web development, web design and development, website design and development company). SEO-ready structure (website seo optimization, seo of website), mobile-friendly. For businesses searching website development company near me, web development companies near me, website developers near me in Lucknow.",
    "deliverables": [
      "5-page custom responsive website (Home, About, Services, Work, Contact)",
      "Tailored brand aesthetic with mobile-first performance",
      "Complete on-page SEO setup with schema markup",
      "Contact form, WhatsApp button, and Google Maps integration",
      "Zero vendor lock-in with complete source code ownership"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Full Custom 5-Page Website?",
        "The Full Custom 5-Page Website includes custom 5-page business website development, along with 5-page custom responsive website (home, about, services, work, contact) and tailored brand aesthetic with mobile-first performance. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Full Custom 5-Page Website delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹3,500 instead of MRP ₹9,600?",
        "We offer this special subsidized price (Save 64% / ₹6,100) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505100",
    "slug": "verified-google-business-profile-bio-link-setup",
    "urlSlug": "product-page/verified-google-business-profile-bio-link-setup",
    "href": "/product-page/verified-google-business-profile-bio-link-setup",
    "oldTitle": "All Bio Link+GMB profile(verified) (5 Links)",
    "shortName": "Google Business Profile + Bio Link",
    "newTitle": "Verified Google Business Profile with All-in-One Bio Link",
    "brandTitle": "Google Business Profile Verification + Bio Link Page (5 Links)",
    "seoTitle": "Verified Google Business Profile + Bio Link Setup | Lucknow",
    "primaryKeyword": "google business profile",
    "secondaryKeywords": [
      "create a google business profile",
      "gmb profile",
      "google business listing"
    ],
    "category": "SEO & Visibility",
    "iconName": "MapPin",
    "mrp": "₹1,200.00",
    "mrpNumeric": 1200.0,
    "offerPrice": "₹229.00",
    "offerNumeric": 229.0,
    "discountPercent": 81,
    "savings": "Save ₹971",
    "badge": "81% OFF",
    "metaDescription": "Get verified Google Business Profile + all-in-one bio link page with 5 links. Improve online visibility, Google Maps ranking & business profile setup in Lucknow.",
    "longDescription": "All Bio Link + GMB profile (verified) provides Link in Bio setup aggregating multiple links on a single page, combined with verified Google Business Profile setup for improving online presence and visibility. Includes verified Google Business Profile (google business profile, google my business profile, gmb profile, google business listing, my google business profile, create a google business profile, create business profile on google, google business page, google my business account, businessprofile, google business account, google listing for my business, my google business page, my business google listing), all bio link page with 5 links, Google Maps ranking optimization. Perfect for searches: google business profile, gmb profile, create a google business profile, google business listing in Lucknow.",
    "deliverables": [
      "Verified Google Business Profile setup and compliance check",
      "All-in-one mobile-friendly Bio Link landing page with 5 links",
      "Google Maps ranking optimization with category selection",
      "Social media links, direct WhatsApp, and call buttons",
      "High-resolution QR code for storefront display"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Google Business Profile + Bio Link?",
        "The Google Business Profile + Bio Link includes verified google business profile with all-in-one bio link, along with verified google business profile setup and compliance check and all-in-one mobile-friendly bio link landing page with 5 links. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Google Business Profile + Bio Link delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹229 instead of MRP ₹1,200?",
        "We offer this special subsidized price (Save 81% / ₹971) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "2505101",
    "slug": "product-pr-launch-social-media-campaign",
    "urlSlug": "product-page/product-pr-launch-social-media-campaign",
    "href": "/product-page/product-pr-launch-social-media-campaign",
    "oldTitle": "PR LAUNCH",
    "shortName": "Product PR Launch Campaign",
    "newTitle": "Product PR Launch Campaign",
    "brandTitle": "PR Launch - Product Launch with Social Media Campaign",
    "seoTitle": "Product PR Launch Campaign | Social Media Marketing",
    "primaryKeyword": "pr launch service",
    "secondaryKeywords": [
      "social media marketing agency",
      "social media campaign"
    ],
    "category": "Social Media & PR",
    "iconName": "Sparkle",
    "mrp": "₹2,499.00",
    "mrpNumeric": 2499.0,
    "offerPrice": "₹899.00",
    "offerNumeric": 899.0,
    "discountPercent": 64,
    "savings": "Save ₹1,600",
    "badge": "64% OFF",
    "metaDescription": "Launch your new product with expert PR launch campaign. Includes social media campaign, advertising & media outreach for maximum visibility in Lucknow.",
    "longDescription": "PR LAUNCH is a public relations service designed to launch a new product or offering. Includes PR campaign strategy, social media campaign execution (social media campaign, social media marketing agency, social media advertising campaign, social media ad campaign, social media advertising, social media and advertising), media outreach, press release distribution. Ideal for startups searching social media marketing agency, social media campaign, pr launch, product launch in Lucknow.",
    "deliverables": [
      "Strategic product PR launch roadmap and messaging angle",
      "Press release drafting and distribution across digital channels",
      "Coordinated social media launch campaign across platforms",
      "Digital influencer and local media outreach strategy",
      "Post-launch visibility reporting and brand impression recap"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Product PR Launch Campaign?",
        "The Product PR Launch Campaign includes product pr launch campaign, along with strategic product pr launch roadmap and messaging angle and press release drafting and distribution across digital channels. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Product PR Launch Campaign delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹899 instead of MRP ₹2,499?",
        "We offer this special subsidized price (Save 64% / ₹1,600) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1506001",
    "slug": "social-media-marketing-foundation-package-lucknow",
    "urlSlug": "product-page/social-media-marketing-foundation-package-lucknow",
    "href": "/product-page/social-media-marketing-foundation-package-lucknow",
    "oldTitle": "🌱 Digital Foundation Pack",
    "shortName": "Digital Foundation Pack",
    "newTitle": "Social Media Marketing Foundation Package",
    "brandTitle": "Digital Foundation Pack - Social Media Starter for MSMEs",
    "seoTitle": "Social Media Marketing Services | Foundation Pack | Lucknow",
    "primaryKeyword": "social media marketing services",
    "secondaryKeywords": [
      "social media marketing",
      "digital marketing agency in lucknow"
    ],
    "category": "Social Media & PR",
    "iconName": "Lightning",
    "mrp": "₹3,500.00",
    "mrpNumeric": 3500.0,
    "offerPrice": "₹1,500.00",
    "offerNumeric": 1500.0,
    "discountPercent": 57,
    "savings": "Save ₹2,000",
    "badge": "57% OFF",
    "metaDescription": "Foundation social media marketing services for MSMEs in Lucknow. Content creation, platform management & strategy to build your digital presence from scratch.",
    "longDescription": "Digital Foundation Pack is a bundle focused on social media marketing including content creation, platform management, and advertising to establish brand's online presence. Includes social media marketing basics (social media marketing, social media marketing services, social media marketing strategy, smm marketing, social media marketing digital), content creation & platform management, digital marketing foundation (digital marketing agency in lucknow, best digital marketing company in lucknow, digital and social media marketing, digital marketing social media marketing). Perfect for businesses searching social media marketing, social media marketing agency near me, social media marketing services near me, social media marketing lucknow.",
    "deliverables": [
      "Social media foundation setup across Instagram, Facebook & LinkedIn",
      "Brand kit alignment: banners, profile graphics, and bios",
      "Content creation: scheduled monthly posts and reels",
      "Community management and initial follower engagement rhythm",
      "Digital marketing baseline establishing your brand presence"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Digital Foundation Pack?",
        "The Digital Foundation Pack includes social media marketing foundation package, along with social media foundation setup across instagram, facebook & linkedin and brand kit alignment: banners, profile graphics, and bios. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Digital Foundation Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹1,500 instead of MRP ₹3,500?",
        "We offer this special subsidized price (Save 57% / ₹2,000) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1506002",
    "slug": "social-media-growth-expansion-package-lucknow",
    "urlSlug": "product-page/social-media-growth-expansion-package-lucknow",
    "href": "/product-page/social-media-growth-expansion-package-lucknow",
    "oldTitle": "🚀 Digital Expansion Pack",
    "shortName": "Digital Expansion Pack",
    "newTitle": "Social Media Growth & Expansion Package",
    "brandTitle": "Digital Expansion Pack - Social Media Marketing + SEO Growth",
    "seoTitle": "Social Media Marketing + SEO | Expansion Pack | Lucknow",
    "primaryKeyword": "social media marketing agency near me",
    "secondaryKeywords": [
      "social media advertising",
      "seo services"
    ],
    "category": "Social Media & PR",
    "iconName": "TrendUp",
    "mrp": "₹5,500.00",
    "mrpNumeric": 5500.0,
    "offerPrice": "₹3,000.00",
    "offerNumeric": 3000.0,
    "discountPercent": 45,
    "savings": "Save ₹2,500",
    "badge": "45% OFF",
    "metaDescription": "Expand your reach with social media growth + SEO. Advanced content, paid advertising & SEO integration for growing businesses in Lucknow. Monthly growth pack.",
    "longDescription": "Digital Expansion Pack is a digital expansion bundle for social media marketing. Includes everything in Foundation Pack (social media marketing, social media marketing services), expanded content & paid advertising (social media marketing agency near me, social media marketing companies, social media marketing companies near me, social media advertising, social media ads, social advertising, social media ad campaign), SEO integration (search engine optimization, seo services, seo optimization, seo marketing). For MSMEs searching social media marketing agency near me, top digital marketing agency, digital marketing company in lucknow.",
    "deliverables": [
      "All features from Digital Foundation Pack included",
      "Expanded content calendar with high-engagement video reels",
      "Paid ad campaigns setup on Meta for targeted local reach",
      "SEO integration connecting social signals to website pages",
      "Dedicated monthly strategy review and performance scaling"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Digital Expansion Pack?",
        "The Digital Expansion Pack includes social media growth & expansion package, along with all features from digital foundation pack included and expanded content calendar with high-engagement video reels. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Digital Expansion Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹3,000 instead of MRP ₹5,500?",
        "We offer this special subsidized price (Save 45% / ₹2,500) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  },
  {
    "id": "1506003",
    "slug": "full-service-digital-marketing-dominance-lucknow",
    "urlSlug": "product-page/full-service-digital-marketing-dominance-lucknow",
    "href": "/product-page/full-service-digital-marketing-dominance-lucknow",
    "oldTitle": "👑 Digital Dominance Pack",
    "shortName": "Digital Dominance Pack",
    "newTitle": "Full-Service Digital Marketing Dominance Package",
    "brandTitle": "Digital Dominance Pack - Complete Digital Marketing Solution",
    "seoTitle": "Best Digital Marketing Agency in Lucknow | Dominance Pack",
    "primaryKeyword": "best digital marketing agency in lucknow",
    "secondaryKeywords": [
      "top digital marketing agency",
      "social media management"
    ],
    "category": "Social Media & PR",
    "iconName": "Crown",
    "mrp": "₹7,000.00",
    "mrpNumeric": 7000.0,
    "offerPrice": "₹4,500.00",
    "offerNumeric": 4500.0,
    "discountPercent": 36,
    "savings": "Save ₹2,500",
    "badge": "36% OFF",
    "metaDescription": "Full-service digital marketing from best agency in Lucknow. Complete social media management, paid ads, SEO optimization & growth strategy to dominate your market.",
    "longDescription": "Digital Dominance Pack is a Social Media Marketing Bundle including full-service social media management, paid advertising, and SEO optimization. Includes full-service social media management (social media marketing agency, social media management companies, social media management packages, social media agency services, social media consultant), paid advertising (facebook advertising management, social media advertising campaign, social media ad campaign, social media advertising), SEO optimization (seo services, seo optimization, top digital marketing agency, best digital marketing agency in lucknow, best digital marketing company in lucknow, top website development companies, best digital marketing services in lucknow, digital marketing company in lucknow, best digital marketing agency in lucknow). Ultimate pack for businesses searching best digital marketing agency in lucknow, top digital marketing agency.",
    "deliverables": [
      "Full-service digital marketing dominance package for leaders",
      "Complete social media management and dedicated creative team",
      "High-budget Google Ads and Meta campaign management",
      "Comprehensive SEO dominance strategy for Lucknow and beyond",
      "Weekly executive reporting, conversion CRO, and custom automations"
    ],
    "bestFor": "MSMEs, retail merchants, professionals & growing businesses in Lucknow",
    "faqs": [
      [
        "What is included in the Digital Dominance Pack?",
        "The Digital Dominance Pack includes full-service digital marketing dominance package, along with full-service digital marketing dominance package for leaders and complete social media management and dedicated creative team. You get full setup, testing, and dedicated onboarding."
      ],
      [
        "How fast is Digital Dominance Pack delivered?",
        "Most starter configurations are delivered within 24 to 72 hours of receiving your basic business details and assets. We ensure quick, frictionless delivery without long waiting periods."
      ],
      [
        "Why is the offer price ₹4,500 instead of MRP ₹7,000?",
        "We offer this special subsidized price (Save 36% / ₹2,500) to help Lucknow and Uttar Pradesh MSMEs, retailers, and startups establish a verified digital presence without prohibitive agency costs."
      ],
      [
        "Do I own all assets after delivery?",
        "Yes, 100%. Sudarshan AI Labs operates on a Build • Automate • Transfer philosophy. You own all logins, accounts, profiles, domains, and configurations with zero vendor lock-in."
      ]
    ]
  }
];

export const PRODUCT_CATEGORIES = [
  'All Plans',
  'Starter Packs',
  'Web & Ecommerce',
  'SEO & Visibility',
  'AI & Automation',
  'Social Media & PR',
] as const;

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug || p.urlSlug === slug || p.urlSlug === `product-page/${slug}`);
}

export function getProductById(id: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
