import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

const pillars = [
  {
    letter: 'S',
    title: 'Sentir com consciência',
    description:
      'Você aprende a reconhecer o que realmente está sentindo — antes da raiva, antes do cansaço, antes da explosão. Nomear a emoção tira o peso dela.',
    accent: 'from-primary-500 to-primary-700',
  },
  {
    letter: 'E',
    title: 'Entender a origem',
    description:
      'Descobre por que certas situações te afetam tanto — e por que você carrega mágoas que achava superadas. Entender para de te fazer repetir.',
    accent: 'from-primary-600 to-primary-800',
  },
  {
    letter: 'R',
    title: 'Responder com intenção',
    description:
      'Passa a agir com leveza, clareza e segurança emocional — sem se apagar para manter a paz, sem reagir pela dor, sem explodir depois.',
    accent: 'from-emerald-500 to-emerald-700',
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const MetodoSERSection = () => {
  const whatsappProps = createWhatsAppProps({
    page: 'home',
    section: 'metodo-ser',
    message: 'Olá! Quero entender melhor como funciona o Método S.E.R.',
  });

  return (
    <section id="metodo" className="scroll-mt-28 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 py-20 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">
            O Método
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Como funciona o Método S.E.R.
          </h2>
          <p className="mt-5 text-lg leading-8 text-primary-100">
            <strong className="font-semibold text-white">Segurança Emocional Reconstruída</strong> —
            um processo firme e acolhedor em três passos, baseado em Logoterapia e prática clínica,
            para você parar de reagir pela dor e voltar a se sentir segura dentro de si.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.letter}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.accent} text-3xl font-bold text-white shadow-lg`}
              >
                {pillar.letter}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-4 text-base leading-7 text-primary-100">{pillar.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-2xl text-base text-primary-100/90">
            O Método S.E.R. não é sobre revirar o passado. É sobre reconstruir, aos poucos,
            a segurança de voltar a confiar em você mesma.
          </p>
          <a
            {...whatsappProps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary-800 transition hover:bg-primary-50"
          >
            Quero entender o que estou sentindo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodoSERSection;
