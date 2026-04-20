import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

type CTASectionProps = {
  page: string;
  message?: string;
};

export default function CTASection({ page, message }: CTASectionProps) {
  const whatsappProps = createWhatsAppProps({
    message,
    page,
    section: 'final-cta',
  });

  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary-800 via-primary-700 to-emerald-700 p-10 text-center shadow-2xl md:p-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Próximo passo
          </p>
          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Você não precisa continuar carregando isso sozinha
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/85">
            Me manda uma mensagem no WhatsApp, me conta como você está se sentindo — com
            suas palavras, sem precisar ensaiar. A primeira conversa é leve, sem pressão e
            sem compromisso de continuar.
          </p>
          <a
            {...whatsappProps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-800 transition hover:bg-stone-100"
          >
            Quero começar minha mudança
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
