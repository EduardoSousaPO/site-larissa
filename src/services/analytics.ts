import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_CONVERSION_LABEL,
  GOOGLE_ADS_ID,
  META_PIXEL_ID,
} from '../config/site';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __larissaGtagLoaded__?: boolean;
    __larissaGaInitialized__?: boolean;
    __larissaGoogleAdsInitialized__?: boolean;
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __larissaMetaPixelInitialized__?: boolean;
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

/**
 * Injeta o gtag.js uma única vez e prepara o dataLayer.
 *
 * GA4 e Google Ads compartilham o mesmo script; o `id` da URL serve apenas para
 * inicializar a biblioteca. Cada produto é ativado depois pelo seu próprio
 * `gtag('config', ...)`. Sem isto, o Ads não funcionaria quando o GA4 estivesse
 * ausente (e vice-versa), porque quem carregava o script era só o initGA.
 */
function ensureGtagLoaded(bootstrapId: string) {
  if (!canUseDOM() || window.__larissaGtagLoaded__) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${bootstrapId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());

  window.__larissaGtagLoaded__ = true;
}

export function initGA(measurementId = GA_MEASUREMENT_ID) {
  if (!canUseDOM() || !measurementId || window.__larissaGaInitialized__) {
    return;
  }

  ensureGtagLoaded(measurementId);

  window.gtag?.('config', measurementId, {
    send_page_view: false,
  });

  window.__larissaGaInitialized__ = true;
}

/** Ativa o Google Ads. No-op silencioso quando VITE_GOOGLE_ADS_ID está vazio. */
export function initGoogleAds(adsId = GOOGLE_ADS_ID) {
  if (!canUseDOM() || !adsId || window.__larissaGoogleAdsInitialized__) {
    return;
  }

  ensureGtagLoaded(adsId);

  window.gtag?.('config', adsId);

  window.__larissaGoogleAdsInitialized__ = true;
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

export function initMetaPixel(pixelId = META_PIXEL_ID) {
  if (!canUseDOM() || !pixelId || window.__larissaMetaPixelInitialized__) {
    return;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  (function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod.apply(n, args);
      } else {
        n.queue.push(args);
      }
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable @typescript-eslint/no-explicit-any */

  window.fbq?.('init', pixelId);
  window.fbq?.('track', 'PageView');

  window.__larissaMetaPixelInitialized__ = true;
}

export function trackMetaPageView() {
  if (!canUseDOM() || !window.fbq) {
    return;
  }

  window.fbq('track', 'PageView');
}

export function trackMetaEvent(name: string, params?: Record<string, unknown>) {
  if (!canUseDOM() || !window.fbq) {
    return;
  }

  window.fbq('track', name, params);
}

/**
 * Dispara a conversão do Google Ads.
 *
 * No-op silencioso quando `VITE_GOOGLE_ADS_ID` ou o rótulo de conversão não
 * estão configurados — a Dra. Larissa pode publicar o site antes de criar a
 * conta de Ads sem que nada quebre.
 *
 * Não usa `trackEvent` porque aquela assinatura aceita apenas `Record<string,
 * string>` e a conversão precisa enviar `value` numérico.
 */
export function trackAdsConversion(
  label = GOOGLE_ADS_CONVERSION_LABEL,
  params?: { value?: number; currency?: string },
) {
  const gtag = getGtag();

  if (!gtag || !GOOGLE_ADS_ID || !label) {
    return;
  }

  gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    currency: 'BRL',
    ...params,
  });
}

export function trackWhatsAppClick(page: string, section: string) {
  trackEvent('whatsapp_click', {
    page,
    section,
  });

  trackMetaEvent('Contact', {
    content_name: 'whatsapp_click',
    page,
    section,
  });

  trackAdsConversion();
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
