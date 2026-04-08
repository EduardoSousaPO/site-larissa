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

export function createWhatsAppProps({ message, page, section }: WhatsAppOptions) {
  return {
    href: getWhatsAppHref(message),
    onClick: () => trackWhatsAppClick(page, section),
  };
}
