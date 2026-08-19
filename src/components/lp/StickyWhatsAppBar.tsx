import { useEffect, useState } from 'react';
import { createWhatsAppProps } from '../../lib/whatsapp';

type StickyWhatsAppBarProps = {
  label: string;
  message: string;
  page: string;
};

/**
 * Barra fixa de CTA, apenas no mobile.
 *
 * Regras que a mantêm segura e sem custo de Core Web Vitals:
 *  - `position: fixed` e fora do fluxo do documento → não empurra nada, CLS = 0.
 *    O espaço no fim da página é reservado pelo `pb-24 md:pb-0` do container da
 *    LP, desde o primeiro paint, e não injetado depois da hidratação.
 *  - Entra por `translate-y`/`opacity`, nunca alterando `bottom` ou `height`.
 *  - Altura ~64px, muito abaixo dos 30% de viewport que a Coalition for Better
 *    Ads classifica como "large sticky ad". Não cobre o conteúdo principal e não
 *    exige dispensa, então não é interstitial pela definição do Google.
 *  - Só aparece depois de ~30% de rolagem, quando o CTA do hero sai de vista.
 *
 * O listener usa `passive: true` para não competir com a rolagem.
 */
export default function StickyWhatsAppBar({ label, message, page }: StickyWhatsAppBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappProps = createWhatsAppProps({ message, page, section: 'sticky-mobile' });

  // Marca o documento enquanto a barra existe, para que o botão flutuante do
  // MainLayout se esconda no mobile (regra em src/index.css). Os dois são
  // `fixed` no canto inferior e se sobreporiam.
  useEffect(() => {
    document.body.classList.add('lp-has-sticky-cta');

    return () => document.body.classList.remove('lp-has-sticky-cta');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollable <= 0) {
        setIsVisible(false);
        return;
      }

      setIsVisible(window.scrollY / scrollable > 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white px-4 pb-[env(safe-area-inset-bottom)] pt-3 shadow-lg transition-all duration-300 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
      aria-hidden={!isVisible}
    >
      <a
        {...whatsappProps}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isVisible ? undefined : -1}
        aria-label={`${label} — abre uma conversa no WhatsApp com a psicóloga Larissa Nunes`}
        className="mb-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      >
        <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {label}
      </a>
    </div>
  );
}
