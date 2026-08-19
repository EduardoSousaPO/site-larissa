import { createWhatsAppProps } from '../../lib/whatsapp';

type WhatsAppCTAProps = {
  label: string;
  message: string;
  page: string;
  section: string;
  /** `light` = botão verde sólido; `onDark` = botão branco sobre fundo escuro. */
  variant?: 'light' | 'onDark';
  fullWidth?: boolean;
  className?: string;
};

const WhatsAppIcon = () => (
  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/**
 * CTA de WhatsApp das landing pages.
 *
 * Centraliza altura mínima (≥48px de alvo de toque), foco visível e o
 * `aria-label` descritivo, para que nenhum CTA das 4 páginas escape do padrão.
 */
export default function WhatsAppCTA({
  label,
  message,
  page,
  section,
  variant = 'light',
  fullWidth = false,
  className = '',
}: WhatsAppCTAProps) {
  const whatsappProps = createWhatsAppProps({ message, page, section });

  const base =
    'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  // `green-700` e não `green-500`: branco sobre #22c55e dá 2,28:1 de contraste
  // e reprova em WCAG AA para texto normal. Sobre #15803d (green-700) o
  // contraste é 5,02:1 e passa. `green-600` também reprovaria (3,30:1).
  const tone =
    variant === 'onDark'
      ? 'bg-white text-primary-800 hover:bg-primary-50 focus-visible:outline-white'
      : 'bg-green-700 text-white hover:bg-green-800 focus-visible:outline-green-800';
  const width = fullWidth ? 'w-full' : '';

  return (
    <a
      {...whatsappProps}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — abre uma conversa no WhatsApp com a psicóloga Larissa Nunes`}
      className={`${base} ${tone} ${width} ${className}`.trim()}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
