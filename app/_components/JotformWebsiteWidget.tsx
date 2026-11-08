"use client";

import Script from "next/script";

const widgetId = "JFWebsiteWidget-01a1b8324a50700087916735dd7644c43a53";
const widgetScript = "https://www.jotform.com/website-widgets/embed/01a1b8324a50700087916735dd7644c43a53";

export default function JotformWebsiteWidget() {
  return (
    <section className="v-section v-jotform-widget" aria-labelledby="jotform-widget-title">
      <div className="jotform-widget-copy">
        <span className="v-kicker">FRESH IDEAS FROM SUDARSHAN AI LABS</span>
        <h2 id="jotform-widget-title">Insights to <em>grow smarter.</em></h2>
        <p>Explore practical ideas on AI, digital marketing and technology for growing businesses.</p>
      </div>
      <div className="jotform-widget-frame">
        <div id={widgetId} aria-label="Sudarshan AI Labs blogs and articles" />
      </div>
      <Script src={widgetScript} strategy="beforeInteractive" defer />
    </section>
  );
}
