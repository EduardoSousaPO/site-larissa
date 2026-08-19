import { motion } from 'framer-motion';
import type { LandingContent } from '../../types/landing';

type ComoAjudaSectionProps = {
  comoAjuda: LandingContent['comoAjuda'];
};

/**
 * Explica o mecanismo do trabalho clínico — nunca o resultado.
 *
 * As três etapas eram cartões escuros dentro de um cartão escuro maior. Agora
 * são três colunas separadas por filete, sem moldura: a informação é a mesma e
 * o olho percorre em um terço do tempo.
 *
 * O parágrafo de enquadramento não pode sair. As duas afirmações que ele
 * carrega — o método não é técnica autônoma nem substitui a abordagem, e não
 * tem prazo fixo — são o que mantém a página dentro do art. 20 "c" do Código de
 * Ética e do art. 1º da Res. CFP 010/97.
 */
export default function ComoAjudaSection({ comoAjuda }: ComoAjudaSectionProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 md:grid-cols-[0.9fr,1.1fr] md:gap-16"
        >
          {/*
            Título e corpo em colunas separadas: com o texto reduzido a dois
            parágrafos, uma pilha centrada deixaria metade da largura vazia e a
            linha de leitura longa demais. Assim o título fica com peso próprio
            e o corpo mantém a medida confortável.
          */}
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-[2.5rem]">
            {comoAjuda.title}
          </h2>

          <div className="space-y-4 md:pt-2">
            {comoAjuda.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="max-w-[62ch] text-base leading-8 text-gray-700 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 border-t border-canvas-300 pt-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h3 className="text-xl font-semibold text-gray-900">{comoAjuda.etapasTitle}</h3>
            <p className="max-w-2xl text-sm leading-7 text-gray-500">
              Enquadre em três etapas, fundamentado na Logoterapia. Não é técnica autônoma,
              não substitui a abordagem e não tem prazo fixo: as etapas se sobrepõem e voltam
              quantas vezes o processo pedir.
            </p>
          </div>

          <ol className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {comoAjuda.etapas.map((etapa, index) => (
              <motion.li
                key={etapa.letra}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="border-t border-primary-600 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-5xl italic leading-none text-primary-200"
                >
                  {etapa.letra}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-gray-900">{etapa.nome}</h4>
                <p className="mt-2 text-base leading-7 text-gray-600">{etapa.texto}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
