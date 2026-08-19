import { motion } from 'framer-motion';
import { CRP } from '../../config/site';
import type { LandingContent } from '../../types/landing';
import PortraitFrame from './PortraitFrame';

type ComoFuncionaSectionProps = {
  comoFunciona: LandingContent['comoFunciona'];
  credenciais: LandingContent['credenciais'];
};

/**
 * Como funciona o atendimento, e quem atende.
 *
 * Eram dois blocos de texto corrido em pontos distantes da página. Estão juntos
 * porque respondem à mesma hesitação — "como isso acontece na prática e quem
 * está do outro lado" — e porque a foto do atendimento online responde metade
 * da pergunta sem uma linha de texto.
 *
 * A foto é a do notebook de propósito: quem procura terapia online quer ver
 * como a sessão acontece, não uma composição de consultório.
 */
export default function ComoFuncionaSection({
  comoFunciona,
  credenciais,
}: ComoFuncionaSectionProps) {
  return (
    <section className="bg-primary-50 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-start md:gap-16">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-[2.5rem]">
              {comoFunciona.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-700">
              {comoFunciona.intro}
            </p>

            <dl className="mt-8 border-t border-primary-200">
              {comoFunciona.items.map((item, index) => (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: Math.min(index, 4) * 0.06 }}
                  className="grid gap-1 border-b border-primary-200 py-5 sm:grid-cols-[10rem,1fr] sm:gap-6"
                >
                  <dt className="text-base font-semibold text-primary-800">{item.titulo}</dt>
                  <dd className="text-base leading-7 text-gray-700">{item.texto}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="md:pt-2">
            <PortraitFrame
              src="/images/larissa2.webp"
              alt="Larissa Nunes diante do notebook, durante um atendimento online"
              shape="soft"
              className="mx-auto w-full max-w-xs md:max-w-none"
            />

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">{credenciais.title}</h3>
              <div className="mt-3 space-y-3">
                {credenciais.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-7 text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-4 font-serif text-lg italic text-primary-800">
                Larissa Nunes
              </p>
              <p className="text-sm text-gray-600">Psicóloga · {CRP}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
