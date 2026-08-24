import type {MetadataRoute} from "next";

export default function robots():MetadataRoute.Robots{
 const base="https://sudarshan-ai-labs-lucknow.sheevumgoel.chatgpt.site";
 return {rules:{userAgent:"*",allow:"/"},sitemap:`${base}/sitemap.xml`,host:base};
}
