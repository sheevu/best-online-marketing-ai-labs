import type {Metadata} from "next";
import {cities} from "../../lib/cities";

export const metadata:Metadata={
  title:"Digital Marketing Services Across Uttar Pradesh | 20 Major Cities | Sudarshan AI Labs",
  description:"Explore city-specific digital marketing, Local SEO, advertising, conversion websites and lead-generation services across 20 major Uttar Pradesh cities.",
  alternates:{canonical:"/digital-marketing-services/uttar-pradesh/"},
  robots:{index:false,follow:true},
  openGraph:{
    title:"Digital Marketing Services Across Uttar Pradesh | Sudarshan AI Labs",
    description:"City-specific digital marketing, Local SEO, performance ads, and web solutions across 20 UP commercial hubs.",
    url:"https://sudarshan-ai.com/digital-marketing-services/uttar-pradesh/",
    type:"website",
    locale:"en_IN",
    images:[{url:"https://sudarshan-ai.com/sudarshan-lucknow-hero.webp",width:1672,height:941,alt:"Digital Marketing Services across Uttar Pradesh"}]
  },
  twitter:{
    card:"summary_large_image",
    title:"Digital Marketing Services Across Uttar Pradesh | Sudarshan AI Labs",
    description:"Explore city-specific digital growth, SEO and marketing strategies across 20 UP cities.",
    images:["https://sudarshan-ai.com/sudarshan-lucknow-hero.webp"],
    creator:"@sheevum"
  },
  keywords:[
    "digital marketing services in Uttar Pradesh",
    "SEO services Uttar Pradesh",
    "digital marketing agency UP",
    "online marketing company Uttar Pradesh",
    "local SEO UP cities"
  ]
};

const collectionSchema = {
  "@context":"https://schema.org",
  "@type":"CollectionPage",
  "name":"Digital Marketing Services Across Uttar Pradesh",
  "description":"City-specific digital marketing services across 20 major cities in Uttar Pradesh by Sudarshan AI Labs.",
  "url":"https://sudarshan-ai.com/digital-marketing-services/uttar-pradesh/",
  "breadcrumb":{
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://sudarshan-ai.com/"},
      {"@type":"ListItem","position":2,"name":"Uttar Pradesh Cities","item":"https://sudarshan-ai.com/digital-marketing-services/uttar-pradesh/"}
    ]
  },
  "mainEntity":{
    "@type":"ItemList",
    "itemListElement":cities.map((c, i)=>({
      "@type":"ListItem",
      "position":i+1,
      "name":`Digital Marketing Services in ${c.name}`,
      "url":`https://sudarshan-ai.com/digital-marketing-services/${c.slug}/`
    }))
  }
};

export default function UttarPradeshCities(){return <main className="areas-index city-index">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(collectionSchema)}}/>
  <nav className="area-nav"><a className="brand" href="/"><span className="brand-mark">S</span><span>SUDARSHAN <b>AI LABS</b></span></a><a className="button button-small" href="https://wa.me/message/GWOSMDL3UO6OH1">Free Audit ↗</a></nav><header><p className="eyebrow">20 CITY-SPECIFIC GROWTH PAGES • UTTAR PRADESH</p><h1>Digital Marketing Services Across Uttar Pradesh</h1><p>Choose your city for locally relevant industries, marketing challenges, services, FAQs and a direct consultation with Sudarshan AI Labs.</p></header><section className="area-directory">{cities.map((c,i)=><a href={`/digital-marketing-services/${c.slug}/`} key={c.slug}><span>{String(i+1).padStart(2,"0")}</span><h2>{c.name}</h2><p>{c.meta}</p><b>Explore {c.name} ↗</b></a>)}</section><footer className="area-footer"><p>SEO • Google Ads • Social Media • Websites • Local SEO • WhatsApp Funnels</p><span>© 2026 Sudarshan AI Labs</span></footer></main>}

