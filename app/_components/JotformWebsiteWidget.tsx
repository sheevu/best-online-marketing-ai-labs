import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BLOG_PLAYBOOK_URL } from "../lib/site";

// The static Pages deployment does not hydrate next/script widgets.
// A direct content link avoids an empty 600px third-party embed on mobile.
export default function JotformWebsiteWidget() {
  return (
    <section className="v-section v-jotform-widget" aria-labelledby="jotform-widget-title">
      <div className="jotform-widget-copy">
        <span className="v-kicker">FRESH IDEAS FROM SUDARSHAN AI LABS</span>
        <h2 id="jotform-widget-title">Insights to <em>grow smarter.</em></h2>
        <p>Explore practical ideas on AI, digital marketing and technology for growing businesses.</p>
        <a className="v-pill" href={BLOG_PLAYBOOK_URL} target="_blank" rel="noopener noreferrer">Explore our blog and guides <ArrowUpRight /></a>
      </div>
    </section>
  );
}
