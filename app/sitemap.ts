import type {MetadataRoute} from "next";
import {areas} from "./lib/areas";
import {cities} from "./lib/cities";
export default function sitemap():MetadataRoute.Sitemap{const base="https://sudarshan-ai-labs-lucknow.sheevumgoel.chatgpt.site";return[{url:base,changeFrequency:"weekly",priority:1},{url:`${base}/digital-marketing-services/`,changeFrequency:"weekly",priority:1},{url:`${base}/about-sheevum-goel/`,changeFrequency:"monthly",priority:.7},{url:`${base}/digital-marketing-services/uttar-pradesh/`,changeFrequency:"monthly",priority:.6},...areas.map(a=>({url:`${base}/digital-marketing-services/${a.slug}-lucknow/`,changeFrequency:"monthly" as const,priority:.75})),...cities.map(c=>({url:`${base}/digital-marketing-services/${c.slug}/`,changeFrequency:"monthly" as const,priority:.55}))]}
