import { motion } from 'framer-motion';
import type { LandingContent } from '../../types/landing';
import PortraitFrame from './PortraitFrame';
import WhatsAppCTA from './WhatsAppCTA';

type SinaisSectionProps = {
  sintomas: LandingContent['sintomas'];
  paraQuem: LandingContent['paraQuem'];
  page: string;
  message: string;
};

/**
 * "Talvez você reconheça alguns destes sinais" + "para quem é".
 *
 * Antes eram duas seções empilhadas, cada uma com sua grade de cartões. Viraram
 * uma só: quem chega do anúncio faz uma pergunta única — "isso é sobre mim?" —
 * e respondê-la duas vezes, em dois blocos, dilui a resposta.
 *
 * A moldura condicional do título é obrigatória: a política do Google proíbe
 * página que implique conhecimento de dado pessoal do visitante ("Você tem
 * ansiedade?"). Os itens descrevem sinais e devolvem a decisão a quem lê. Sem
 * checkbox, sem placar e sem quiz — autodiagnóstico em página de captação
 * também é vedado pelo art. 18 do Código de Ética.
 *
 * A lista de contraindicação fica num `<details>`: precisa estar na página por
 * dever ético, mas colocá-la aberta no meio do caminho de conversão faz o
 * visitante certo ler cinco parágrafos que não são sobre ele. A única parte que
 * não pode depender de clique é a de emergência, que está fora do disclosure.
 */
export default function SinaisSection({
  sintomas,
  paraQuem,
  page,
  message,
}: SinaisSectionProps) {
  // O primeiro item de `naoIndicado` é sempre a orientação de emergência (CVV,
  // SAMU, CAPS). Ela sai do disclosure e fica sempre visível.
  const [emergencia, ...contraindicacoes] = paraQuem.naoIndicado;

  return (
    <section className="bg-canvas-50 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[0.85fr,1.15fr] md:items-start md:gap-16">
          <div className="md:sticky md:top-28">
            <PortraitFrame
              src="/images/larissa1.webp"
              alt="Larissa Nunes à escrivaninha do consultório, mãos entrelaçadas"
              className="mx-auto w-full max-w-xs md:max-w-none"
            />
          </div>

          <div>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 md:text-[2.5rem]">
              {sintomas.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              {sintomas.intro}
            </p>

            <ul className="mt-8 border-t border-canvas-300">
              {sintomas.items.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: Math.min(index, 5) * 0.05 }}
                  className="flex gap-4 border-b border-canvas-300 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="w-6 shrink-0 pt-1 font-serif text-sm italic text-primary-400"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base leading-7 text-gray-800">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 bg-white p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900">{paraQuem.title}</h3>
              <ul className="mt-4 space-y-3">
                {paraQuem.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-gray-700">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <WhatsAppCTA
                  label={paraQuem.ctaLabel}
                  message={message}
                  page={page}
                  section="para-quem"
                />
              </div>
            </div>

            <p className="mt-8 border border-red-700/25 bg-red-50 p-5 text-sm leading-7 text-gray-800">
              {emergencia}
            </p>

            <details className="group mt-4 border border-canvas-300 bg-white">
              <summary className="cursor-pointer list-none p-5 text-sm font-semibold text-gray-900 transition hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                <span className="flex items-center justify-between gap-4">
                  {paraQuem.naoIndicadoTitle}
                  <span
                    aria-hidden="true"
                    className="text-primary-600 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <ul className="space-y-4 px-5 pb-5 text-sm leading-7 text-gray-700">
                {contraindicacoes.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
