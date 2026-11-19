import { ArrowUpRight, X } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_PHONE } from "../lib/site";

export default function LeadCapturePopup() {
  return (
    <div className="lead-popup-backdrop" data-lead-popup data-whatsapp={CONTACT_PHONE.replace(/\D/g, "")} hidden>
      <section className="lead-popup" role="dialog" aria-modal="true" aria-labelledby="lead-popup-title">
        <button className="lead-popup-close" data-lead-close type="button" aria-label="Close growth review offer"><X weight="bold" /></button>
        <span className="lead-popup-kicker">A useful first step, free</span>
        <h2 id="lead-popup-title">What would you like to grow?</h2>
        <p>Share your business name or website and choose a priority. We’ll open WhatsApp with a ready-to-send review request.</p>
        <form data-lead-form>
          <label htmlFor="lead-business">Business name or website <span>(optional)</span></label>
          <input id="lead-business" name="business" maxLength={120} placeholder="e.g. ABC Clinic or abc.in" autoComplete="organization" />
          <label htmlFor="lead-goal">Your priority</label>
          <select id="lead-goal" name="goal">
            <option>Get more local enquiries</option>
            <option>Improve Google visibility</option>
            <option>Build or improve my website</option>
            <option>Automate WhatsApp follow-up</option>
            <option>Find an affordable growth plan</option>
          </select>
          <button className="lead-popup-submit" type="submit">Continue in WhatsApp <ArrowUpRight weight="bold" /></button>
        </form>
        <small>No details are stored on this website. You choose whether to send the WhatsApp message.</small>
      </section>
    </div>
  );
}
