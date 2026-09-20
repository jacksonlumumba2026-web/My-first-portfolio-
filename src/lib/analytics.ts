import {
  GA4_ID,
  GOOGLE_ADS_CONTACT_LABEL,
  GOOGLE_ADS_ID,
  GOOGLE_ADS_LEAD_LABEL,
  META_PIXEL_ID,
} from '../config/tracking';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

function injectScript(src: string, attrs: Record<string, string> = {}) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v));
  document.head.appendChild(script);
}

/** Loads Google tag (gtag.js) and Meta Pixel, but only for IDs that are actually set. */
export function initTracking() {
  if (typeof window === 'undefined') return;

  if (GOOGLE_ADS_ID || GA4_ID) {
    const primaryId = GOOGLE_ADS_ID || GA4_ID;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    if (GOOGLE_ADS_ID) window.gtag('config', GOOGLE_ADS_ID);
    if (GA4_ID && GA4_ID !== GOOGLE_ADS_ID) window.gtag('config', GA4_ID);
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${primaryId}`);
  }

  if (META_PIXEL_ID) {
    /* eslint-disable */
    (function (f: any, b: Document, e: string, v: string) {
      if (f.fbq) return;
      const n: any = (f.fbq = function (...args: unknown[]) {
        n.callMethod ? n.callMethod(...args) : n.queue.push(args);
      });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      const t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq?.('init', META_PIXEL_ID);
    window.fbq?.('track', 'PageView');
  }
}

/** Fire when a visitor clicks a WhatsApp link (contact intent). */
export function trackWhatsAppClick(source: string) {
  window.gtag?.('event', 'contact_whatsapp', { event_category: 'engagement', event_label: source });
  if (GOOGLE_ADS_ID && GOOGLE_ADS_CONTACT_LABEL) {
    window.gtag?.('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONTACT_LABEL}` });
  }
  window.fbq?.('track', 'Contact', { content_name: source });
}

/** Fire when the project brief form is submitted (lead intent). */
export function trackLeadSubmit(source: string) {
  window.gtag?.('event', 'generate_lead', { event_category: 'engagement', event_label: source });
  if (GOOGLE_ADS_ID && GOOGLE_ADS_LEAD_LABEL) {
    window.gtag?.('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}` });
  }
  window.fbq?.('track', 'Lead', { content_name: source });
}
