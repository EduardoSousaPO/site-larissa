import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

const ApproachSection = () => {
  const whatsappProps = createWhatsAppProps({
    page: 'home',
    section: 'approach',
    message: 'Ola! Quero encontrar meu porque com a ajuda da Dra. Larissa Nunes.',
  });

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-emerald-50 py-20" id="abordagem">
      <div className="container">
        <div className="mx-auto max-w-5xl">
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

          <div className="grid gap-6 lg:grid-cols-[1fr,0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-white p-8 shadow-lg shadow-primary-100"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700">
                O problema das abordagens convencionais
              </p>
              <p className="mt-5 text-lg leading-8 text-gray-700">
                Muita gente desiste da terapia porque sente que fica "revirando" os mesmos
                assuntos sem sair do lugar. Sessao apos sessao, entende o problema — mas nao
                encontra direcao.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-primary-200 bg-primary-950 p-8 text-white shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-200">
                O diferencial da Logoterapia
              </p>
              <p className="mt-5 text-lg leading-8 text-white/85">
                A Logoterapia parte de um principio simples e poderoso, criado por Viktor Frankl
                — um psiquiatra que sobreviveu aos campos de concentracao nazistas:
              </p>
              <blockquote className="mt-6 border-l-2 border-primary-300 pl-5 text-2xl font-semibold leading-tight text-white">
                "Quem tem um porque viver suporta quase qualquer como."
              </blockquote>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Em vez de apenas olhar para tras, trabalhamos juntos para encontrar os seus
                <strong className="text-white"> lastros</strong> — os valores, propositos e
                razoes concretas que dao sustentacao a sua vida. Quando voce sabe por que esta
                de pe, consegue enfrentar qualquer tempestade.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700">
              Para quem e
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                'Voce sente que esta no piloto automatico e quer encontrar direcao',
                'Voce esta passando por um momento dificil e precisa de apoio firme',
                'Voce quer organizar sua vida em torno de propositos claros',
                'Voce busca uma terapia que da resultados, nao que fica em circulos',
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-stone-50 p-4 text-base leading-7 text-gray-700">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              {...whatsappProps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 font-semibold text-white transition hover:bg-primary-800"
            >
              Quero encontrar meu porque
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
