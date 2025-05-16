import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'psychotherapy',
      title: 'Psicoterapia Individual',
      description: 'Atendimento personalizado para tratar ansiedade, depressão, estresse e outras questões emocionais, em um espaço seguro para autoconhecimento.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      benefits: [
        'Redução de sintomas de ansiedade e depressão',
        'Desenvolvimento de estratégias de enfrentamento',
        'Autoconhecimento e crescimento pessoal',
        'Ressignificação de experiências dolorosas'
      ]
    },
    {
      id: 'vocational',
      title: 'Aconselhamento Vocacional',
      description: 'Orientação para descobrir suas inclinações profissionais e tomar decisões sobre carreira baseadas em seus valores e propósito de vida.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      benefits: [
        'Identificação de interesses e talentos',
        'Alinhamento entre vocação e propósito de vida',
        'Superação de bloqueios na carreira',
        'Planejamento de transições profissionais'
      ]
    },
    {
      id: 'family',
      title: 'Orientação Familiar',
      description: 'Suporte para questões familiares, incluindo orientação aos pais, conflitos de geração, comunicação familiar e fortalecimento de vínculos.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      benefits: [
        'Melhoria da comunicação familiar',
        'Desenvolvimento de estratégias educativas',
        'Resolução de conflitos geracionais',
        'Fortalecimento de vínculos afetivos'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços Oferecidos
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça os serviços de psicologia oferecidos para adultos e adolescentes, 
            disponíveis no formato online e presencial em Goiânia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="h-3 bg-primary-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Benefícios</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/agendamento" className="text-primary-700 font-medium hover:text-primary-800 inline-flex items-center">
                  Agendar Consulta
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 