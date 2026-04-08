import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

const ServicesSection = () => {
  const services = [
    {
      id: 'psychotherapy',
      title: 'Psicoterapia Individual',
      description:
        'Para quem precisa de acompanhamento continuo. Sessoes semanais com foco em encontrar sentido, superar crises e construir uma vida com direcao.',
      bullets: [
        'Sessao avulsa: R$180',
        'Pacote mensal (4 sessoes): R$576 (economia de 20%)',
        'Online ou presencial em Goiania',
      ],
      cta: 'Quero comecar minha terapia',
      message: 'Ola! Quero comecar minha terapia com a Dra. Larissa Nunes.',
    },
    {
      id: 'resolution-session',
      title: 'Sessao de Resolucao',
      description:
        'Uma sessao pontual para quem esta passando por um momento dificil e precisa de clareza agora. Luto, decisao importante, conflito, crise — uma conversa profunda para te ajudar a enxergar o caminho.',
      bullets: ['Sessao unica: R$200', 'Online, com horarios flexiveis'],
      cta: 'Preciso de uma sessao agora',
      message: 'Ola! Gostaria de agendar uma sessao de resolucao com a Dra. Larissa Nunes.',
    },
    {
      id: 'vocational',
      title: 'Orientacao Vocacional',
      description:
        'Para quem sente que esta na carreira errada ou nao sabe que direcao seguir. Nao e um teste vocacional — e um processo de descoberta do que realmente importa pra voce.',
      bullets: [],
      cta: 'Quero descobrir minha direcao',
      message: 'Ola! Quero descobrir minha direcao com orientacao vocacional.',
    },
  ];

  return (
    <section className="bg-white py-20" id="servicos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
            Servicos
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Como posso te ajudar
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-b from-white to-stone-50 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-2 bg-primary-600" />
              <div className="flex h-full flex-col p-8">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-4 flex-grow text-base leading-8 text-gray-700">
                  {service.description}
                </p>

                {service.bullets.length > 0 ? (
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-gray-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <a
                  {...createWhatsAppProps({
                    message: service.message,
                    page: 'home',
                    section: service.id,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-primary-800"
                >
                  {service.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
