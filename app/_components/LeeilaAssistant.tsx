import { ArrowUpRight, ChatCircle, Robot, X } from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP_URL } from "../lib/site";

const agentUrl = "https://agent.jotform.com/019aa7fd4aaa7cccb0ce1b2c0748666c3478";
const quickLinks = [
  ["Compare affordable plans", "/product-page"],
  ["Explore local SEO", "/seo-services-lucknow"],
  ["Get a free growth review", WHATSAPP_URL],
] as const;

export default function LeeilaAssistant() {
  return (
    <aside className="site-assistant" aria-label="Leeila AI assistant">
      <section className="site-assistant-panel" id="site-assistant-panel" data-assistant-panel hidden aria-labelledby="site-assistant-title">
        <header className="site-assistant-heading">
          <span className="site-assistant-avatar"><Robot weight="fill" /></span>
          <div><strong id="site-assistant-title">Leeila AI</strong><small>Services, plans and next steps</small></div>
          <button type="button" data-assistant-close aria-label="Close Leeila AI"><X weight="bold" /></button>
        </header>
        <div className="site-assistant-intro">
          <span className="assistant-status"><i /> Here to help</span>
          <p>Tell me your business type, city and goal. I can help you find a practical next step. For exact scope and current pricing, you can also chat with our team.</p>
          <nav className="assistant-prompts" aria-label="Popular questions">
            {quickLinks.map(([label, href]) => <a key={label} href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}>{label}</a>)}
          </nav>
        </div>
        <iframe title="Chat with Leeila AI about Sudarshan AI Labs services and plans" src="about:blank" data-assistant-frame={agentUrl} loading="lazy" />
        <a className="assistant-full-link" href={agentUrl} target="_blank" rel="noopener noreferrer">Open full chat <ArrowUpRight /></a>
      </section>
      <button className="site-assistant-trigger" type="button" data-assistant-toggle aria-expanded="false" aria-controls="site-assistant-panel">
        <ChatCircle weight="fill" /><span>Ask Leeila AI</span>
      </button>
    </aside>
  );
}
