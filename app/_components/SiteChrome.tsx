import { BLOG_PLAYBOOK_URL, WHATSAPP_URL } from "../lib/site";
const nav = [
  {href:"/digital-marketing-services", label:"Services"},
  {href:"/product-page", label:"Products"},
  {href:"/digital-marketing-services/uttar-pradesh", label:"Locations"},
  {href:BLOG_PLAYBOOK_URL, label:"Blog"},
  {href:"/about-sheevum-goel", label:"Founder"},
  {href:"/contact", label:"Contact"},
];
export default function SiteChrome({position}:{position:"header"|"footer"}) {
  if (position === "header") return <header className="global-site-header">
    <a className="global-site-brand" href="/" aria-label="Sudarshan AI Labs home"><img src="/favicon.svg" width="38" height="38" alt="" /><span>SUDARSHAN <b>AI LABS</b></span></a>
    <nav className="global-site-nav" aria-label="Primary navigation">{nav.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}<a className="global-site-cta" href={WHATSAPP_URL}>Free audit</a></nav>
    <details className="global-mobile-menu"><summary aria-label="Open site navigation">☰ Menu</summary><nav aria-label="Mobile navigation">{nav.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}<a href={WHATSAPP_URL}>Free audit</a></nav></details>
  </header>;
  return <footer className="global-site-footer"><div><a className="global-site-brand" href="/"><img src="/favicon.svg" width="38" height="38" alt="" /><span>SUDARSHAN <b>AI LABS</b></span></a><p>AI-powered digital marketing and automation for growing businesses in Lucknow and Uttar Pradesh.</p></div><nav aria-label="Footer navigation">{nav.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}<a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a></nav><div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"}}><small>© 2026 Sudarshan AI Labs · Lucknow, Uttar Pradesh</small><a href="https://www.google.com/preferences/source?q=sudarshan-ai.com" target="_blank" rel="noopener noreferrer" aria-label="Add Sudarshan AI Labs as a preferred source on Google" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 16px",border:"1px solid #a5a0d2",borderRadius:"999px",color:"#fff",background:"#30285c",fontSize:"13px",fontWeight:700,textDecoration:"none",maxWidth:"100%"}}>★ Add us as a preferred source on Google ↗</a></div></footer>;
}
