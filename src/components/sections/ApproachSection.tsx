import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

const audienceItems = [
  'Voce sente que esta no piloto automatico e quer encontrar direcao',
  'Voce esta passando por um momento dificil e precisa de apoio firme',
  'Voce quer organizar sua vida em torno de propositos claros',
  'Voce busca uma terapia que da resultados, nao que fica em circulos',
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
    message: 'Ola! Quero encontrar meu porque com a ajuda da Dra. Larissa Nunes.',
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
              Uma terapia que nao fica presa no passado
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
              A Logoterapia e a abordagem do sentido. Em vez de apenas entender por que voce
              sofre, ela te ajuda a descobrir para que seguir em frente.
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
                O problema das abordagens convencionais
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Muita gente desiste da terapia porque sente que fica "revirando" os mesmos
                assuntos sem sair do lugar. Sessao apos sessao, entende o problema — mas nao
                encontra direcao.
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
                  O diferencial da Logoterapia
                </p>
                <p className="mt-6 text-lg leading-8 text-primary-100">
                  A Logoterapia parte de um principio simples e poderoso, criado por Viktor Frankl
                  — um psiquiatra que sobreviveu aos campos de concentracao nazistas:
                </p>
                <blockquote className="mt-8 border-l-4 border-amber-400 pl-4 font-serif text-xl italic leading-tight text-white md:text-2xl">
                  "Quem tem um porque viver suporta quase qualquer como."
                </blockquote>
                <p className="mt-8 text-lg leading-8 text-primary-100">
                  Em vez de apenas olhar para tras, trabalhamos juntos para encontrar os seus
                  <strong className="font-bold text-white"> lastros</strong> — os valores,
                  propositos e razoes concretas que dao sustentacao a sua vida. Quando voce sabe
                  por que esta de pe, consegue enfrentar qualquer tempestade.
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
              Para quem e
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
                Quero encontrar meu porque
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
