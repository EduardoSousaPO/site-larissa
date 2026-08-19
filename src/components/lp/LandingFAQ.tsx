import { useState } from 'react';
import { motion } from 'framer-motion';
import type { LandingContent } from '../../types/landing';

type LandingFAQProps = {
  faq: LandingContent['faq'];
};

/**
 * FAQ em acordeão acessível.
 *
 * As mesmas strings alimentam o `FAQPage` do JSON-LD (montado em
 * `lib/landingSchema.ts`) — schema e texto visível precisam ser idênticos, sob
 * pena de dado estruturado divergente do conteúdo.
 *
 * O acordeão resolve a tensão entre SEO e conversão: o texto inteiro está no
 * HTML (indexável e extraível), mas o comprimento percebido no mobile é só o
 * das perguntas.
 */
export default function LandingFAQ({ faq }: LandingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold leading-tight text-gray-900 md:text-[2.5rem]"
        >
          {faq.title}
        </motion.h2>

        <div className="mt-10 border-t border-canvas-300">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className="border-b border-canvas-300"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-gray-900 transition hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-700 md:text-lg"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-primary-700 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </h3>

                {/*
                  O painel é sempre renderizado no HTML (apenas escondido) para
                  que o conteúdo continue disponível a rastreadores e a leitores
                  que cheguem sem JavaScript.
                */}
                {/*
                  Sem `role="region"`: com 7 painéis por página, sete landmarks
                  extras poluem a lista de navegação do leitor de tela. A APG
                  desaconselha o role quando há muitos painéis; `aria-labelledby`
                  já dá o vínculo com o botão.
                */}
                <div
                  id={panelId}
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="max-w-[68ch] pb-6 pr-6 text-base leading-8 text-gray-700"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
