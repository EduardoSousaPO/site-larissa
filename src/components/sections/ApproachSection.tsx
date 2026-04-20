import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

const audienceItems = [
  'Você sente que se esforça, se doa, e mesmo assim não é vista',
  'Você guarda mágoa em silêncio — e quando explode, se culpa depois',
  'Você está cansada de ser forte o tempo todo e não receber o mesmo',
  'Você quer entender suas emoções em vez de reagir por elas',
] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const LoopIcon = () => (
  <svg className="h-6 w-6 text-primary-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
    <path
      d="M8 8.5h4.5V4m7.5 7.75a8 8 0 0 0-13.63-5.66M16 15.5h-4.5V20m-7.5-7.75a8 8 0 0 0 13.63 5.66"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CompassIcon = () => (
  <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" opacity="0.45" />
    <path
      d="M14.9 9.1l-1.7 5.1-5.1 1.7 1.7-5.1 5.1-1.7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M12 3v2.5M21 12h-2.5M12 21v-2.5M3 12h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M5 10.5 8.2 13.7 15 6.9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ApproachSection = () => {
  const whatsappProps = createWhatsAppProps({
    page: 'home',
    section: 'approach',
    message: 'Olá! Quero saber mais sobre a abordagem da Dra. Larissa Nunes.',
  });

  return (
    <section
      className="scroll-mt-28 bg-gradient-to-b from-white to-primary-50/30 py-20"
      id="abordagem"
    >
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
              Abordagem
            </p>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Uma terapia que te escuta e te tira do piloto automático emocional
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
              O Método S.E.R. une escuta clínica profunda e Logoterapia em um processo que
              não fica revirando o passado — te ajuda a sentir, entender e responder de um
              jeito novo.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[45fr_55fr]">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-stone-100 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                <LoopIcon />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Por que terapia comum nem sempre resolve
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Você já saiu de sessões entendendo tudo racionalmente — e continuou explodindo,
                se calando, guardando mágoa. Entender não basta: o corpo ainda reage, a culpa
                ainda vem depois. É por isso que seguir apenas falando do passado não te dá
                segurança emocional.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 p-8 text-white shadow-xl md:p-10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-400/10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <CompassIcon />
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  O diferencial do Método S.E.R.
                </p>
                <p className="mt-6 text-lg leading-8 text-primary-100">
                  Em vez de te manter presa tentando explicar por que você sofre, o Método
                  S.E.R. — Segurança Emocional Reconstruída — trabalha o emocional onde ele
                  acontece: no momento da explosão, no silêncio da mágoa, na culpa que vem
                  depois.
                </p>
                <blockquote className="mt-8 border-l-4 border-amber-400 pl-4 font-serif text-xl italic leading-tight text-white md:text-2xl">
                  "Quem se sente segura por dentro para de se apagar por fora."
                </blockquote>
                <p className="mt-8 text-lg leading-8 text-primary-100">
                  Com base em Logoterapia (Viktor Frankl) e prática clínica, você aprende a
                  <strong className="font-bold text-white"> sentir</strong> com consciência,
                  <strong className="font-bold text-white"> entender</strong> a origem e
                  <strong className="font-bold text-white"> responder</strong> com intenção.
                  Quando você sabe o que sente, para de reagir pela dor.
                </p>
              </div>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary-700">
              Você se reconhece em alguma dessas?
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-4 md:grid-cols-2"
            >
              {audienceItems.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUpItem}
                  className="flex gap-3 rounded-2xl border border-stone-100 bg-white p-5 text-base leading-7 text-gray-700 shadow-sm"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-10 flex justify-center">
              <a
                {...whatsappProps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 font-semibold text-white transition hover:bg-primary-800"
              >
                Quero me sentir melhor emocionalmente
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
