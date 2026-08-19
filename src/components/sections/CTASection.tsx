import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

type CTASectionProps = {
  page: string;
  message?: string;
  /**
   * Sobrescritas opcionais de copy. Sem elas o componente renderiza exatamente
   * o que sempre renderizou — a home, o blog e as LPs antigas seguem intactas.
   * As landing pages de Google Ads passam fechamento próprio, porque a copy de
   * encerramento é específica de cada território.
   */
  title?: string;
  text?: string;
  ctaLabel?: string;
  section?: string;
};

const DEFAULT_TITLE = 'Você não precisa continuar carregando isso sozinha';
const DEFAULT_TEXT =
  'Me manda uma mensagem no WhatsApp, me conta como você está se sentindo — com suas palavras, sem precisar ensaiar. A primeira conversa é leve, sem pressão e sem compromisso de continuar.';
const DEFAULT_CTA_LABEL = 'Quero começar minha mudança';

export default function CTASection({
  page,
  message,
  title = DEFAULT_TITLE,
  text = DEFAULT_TEXT,
  ctaLabel = DEFAULT_CTA_LABEL,
  section = 'final-cta',
}: CTASectionProps) {
  const whatsappProps = createWhatsAppProps({
    message,
    page,
    section,
  });

  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          // `to-green-700` e não `to-emerald-700`: a paleta deste projeto
          // sobrescreve theme.colors e não tem a família emerald, então a
          // classe antiga não gerava CSS nenhum — o gradiente terminava
          // transparente e revelava o fundo quase preto da seção.
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary-800 via-primary-700 to-green-700 p-10 text-center shadow-2xl md:p-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Próximo passo
          </p>
          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/85">{text}</p>
          <a
            {...whatsappProps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ctaLabel} — abre uma conversa no WhatsApp com a psicóloga Larissa Nunes`}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-800 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {ctaLabel}
          </a>
          <div className="mt-6 space-y-1 text-sm text-white/75">
            <p>Atendimento online para todo o Brasil | Presencial em Goiânia-GO</p>
            <p>Seg a Sex: 8h às 18h | Sáb: 8h às 12h</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
