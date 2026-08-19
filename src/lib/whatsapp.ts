import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_NUMBER } from '../config/site';
import { trackWhatsAppClick } from '../services/analytics';

type WhatsAppOptions = {
  message?: string;
  page: string;
  section: string;
};

export function getWhatsAppHref(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getCurrentPath() {
  if (typeof window === 'undefined') {
    return '/';
  }

  return `${window.location.pathname}${window.location.search}`;
}

/**
 * Props de um CTA de WhatsApp, com tracking já embutido.
 *
 * Este é o único ponto de saída de conversão do site — Navbar, Footer, hero,
 * seções e botão flutuante passam todos por aqui. Por isso o disparo do evento
 * de conversão do Google Ads vive dentro de `trackWhatsAppClick`, e não
 * espalhado por página.
 *
 * O handler é deliberadamente leve: `gtag`/`fbq` apenas empilham no dataLayer e
 * retornam. Nada aqui pode aguardar rede, sob pena de atrasar a abertura do
 * wa.me e piorar o INP justamente na interação mais importante da página.
 */
export function createWhatsAppProps({ message, page, section }: WhatsAppOptions) {
  return {
    href: getWhatsAppHref(message),
    onClick: () => trackWhatsAppClick(page, section),
  };
}
