import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

const ServicesSection = () => {
  const services = [
    {
      id: 'psychotherapy',
      icon: '🧠',
      title: 'Psicoterapia Individual',
      description:
        'Para quem precisa de acompanhamento continuo. Sessoes semanais com foco em encontrar sentido, superar crises e construir uma vida com direcao.',
      bullets: [
        'Sessao avulsa: R$180',
        'Pacote mensal (4 sessoes): R$576 (economia de 20%)',
        'Online ou presencial em Goiania',
      ],
      price: 'R$180',
      priceSuffix: '/sessao',
      badge: 'Pacote mensal R$576 (20% off)',
      featured: true,
      cta: 'Quero comecar minha terapia',
      message: 'Ola! Quero comecar minha terapia com a Dra. Larissa Nunes.',
    },
    {
      id: 'resolution-session',
      icon: '🎯',
      title: 'Sessao de Resolucao',
      description:
        'Uma sessao pontual para quem esta passando por um momento dificil e precisa de clareza agora. Luto, decisao importante, conflito, crise — uma conversa profunda para te ajudar a enxergar o caminho.',
      bullets: ['Sessao unica: R$200', 'Online, com horarios flexiveis'],
      price: 'R$200',
      priceSuffix: '/sessao',
      badge: 'Sessao unica',
      featured: false,
      cta: 'Preciso de uma sessao agora',
      message: 'Ola! Gostaria de agendar uma sessao de resolucao com a Dra. Larissa Nunes.',
    },
    {
      id: 'vocational',
      icon: '🧭',
      title: 'Orientacao Vocacional',
      description:
        'Para quem sente que esta na carreira errada ou nao sabe que direcao seguir. Nao e um teste vocacional — e um processo de descoberta do que realmente importa pra voce.',
      bullets: [],
      price: 'Sob consulta',
      priceSuffix: '',
      badge: '',
      featured: false,
      cta: 'Quero descobrir minha direcao',
      message: 'Ola! Quero descobrir minha direcao com orientacao vocacional.',
    },
  ] as const;

  return (
    <section className="scroll-mt-28 bg-white py-20" id="servicos">
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

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.96fr_0.96fr]">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group flex h-full flex-col overflow-hidden rounded-[2rem] p-[1px] transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                service.featured
                  ? 'bg-gradient-to-br from-primary-200 via-primary-300 to-primary-500 shadow-2xl shadow-primary-200/80 lg:scale-[1.02]'
                  : 'border border-stone-200 bg-white shadow-lg'
              }`}
            >
              <div
                className={`flex h-full flex-col rounded-[1.95rem] p-8 md:p-9 ${
                  service.featured ? 'bg-primary-50' : 'bg-gradient-to-b from-white to-stone-50'
                }`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-[1.5rem] text-3xl shadow-sm transition-transform group-hover:scale-110 ${
                    service.featured
                      ? 'bg-white text-primary-700 shadow-primary-100'
                      : 'bg-primary-50 text-primary-700'
                  }`}
                >
                  <span role="img" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>

                <div className="mt-6 flex h-full flex-col">
                  <h3
                    className={`font-bold text-gray-900 ${
                      service.featured ? 'text-[1.95rem] leading-tight' : 'text-2xl'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-gray-700">{service.description}</p>

                  {service.badge ? (
                    <div
                      className={`mt-6 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                        service.id === 'psychotherapy'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-primary-100 text-primary-700'
                      }`}
                    >
                      {service.badge}
                    </div>
                  ) : null}

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

                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                    {service.priceSuffix ? (
                      <span className="pb-1 text-sm font-medium text-gray-500">
                        {service.priceSuffix}
                      </span>
                    ) : null}
                  </div>

                  <a
                    {...createWhatsAppProps({
                      message: service.message,
                      page: 'home',
                      section: service.id,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-semibold transition ${
                      service.featured
                        ? 'bg-primary-700 text-white hover:bg-primary-800'
                        : 'border border-primary-700 text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
