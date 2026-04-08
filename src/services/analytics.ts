import { GA_MEASUREMENT_ID } from '../config/site';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __larissaGaInitialized__?: boolean;
  }
}

function canUseDOM() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function getGtag() {
  if (!canUseDOM() || !window.gtag) {
    return null;
  }

  return window.gtag;
}

export function initGA(measurementId = GA_MEASUREMENT_ID) {
  if (!canUseDOM() || !measurementId || window.__larissaGaInitialized__) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
  });

  window.__larissaGaInitialized__ = true;
}

export function trackEvent(name: string, params: Record<string, string>) {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag('event', name, params);
}

export function trackPageView(path: string) {
  const measurementId = GA_MEASUREMENT_ID;
  const gtag = getGtag();

  if (!measurementId || !gtag) {
    return;
  }

  gtag('config', measurementId, {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

export function trackWhatsAppClick(page: string, section: string) {
  trackEvent('whatsapp_click', {
    page,
    section,
  });
}

export function trackArticleRead(articleId: string, title: string, category: string) {
  trackEvent('article_read', {
    article_id: articleId,
    title,
    category,
  });
}

export function trackLPView(lpName: string, utmParams: Record<string, string>) {
  trackEvent('lp_view', {
    lp_name: lpName,
    utm_source: utmParams.utm_source ?? '',
    utm_medium: utmParams.utm_medium ?? '',
    utm_campaign: utmParams.utm_campaign ?? '',
    utm_content: utmParams.utm_content ?? '',
    utm_term: utmParams.utm_term ?? '',
  });
}
