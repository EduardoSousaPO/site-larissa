import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div>
      {/* Banner Principal - Utilizando o novo componente */}
      <HeroSection />

      {/* Citação */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <svg className="w-12 h-12 text-primary-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium italic text-gray-800 mb-6">
              "Quando a situação não puder ser transformada, transforme-se."
            </blockquote>
            <cite className="text-lg text-gray-600 font-medium">— Viktor Frankl</cite>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conheça os serviços de psicologia oferecidos pela Dra. Larissa Nunes para adultos e adolescentes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Psicoterapia Individual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-3 bg-primary-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Psicoterapia Individual</h3>
                <p className="text-gray-700 mb-6">
                  Atendimento personalizado para tratar ansiedade, depressão, estresse, 
                  e outras questões emocionais, criando um espaço seguro para autoconhecimento 
                  e crescimento pessoal.
                </p>
                <Link to="/servicos" className="text-primary-700 font-medium hover:text-primary-800 inline-flex items-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Aconselhamento Vocacional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-3 bg-primary-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aconselhamento Vocacional</h3>
                <p className="text-gray-700 mb-6">
                  Orientação para descobrir suas inclinações profissionais e tomar decisões 
                  sobre carreira baseadas em seus valores, temperamento e propósito de vida.
                </p>
                <Link to="/servicos" className="text-primary-700 font-medium hover:text-primary-800 inline-flex items-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Orientação Familiar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-3 bg-primary-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Orientação Familiar</h3>
                <p className="text-gray-700 mb-6">
                  Suporte para questões familiares, incluindo orientação aos pais, 
                  conflitos de geração, comunicação familiar e fortalecimento de vínculos.
                </p>
                <Link to="/servicos" className="text-primary-700 font-medium hover:text-primary-800 inline-flex items-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <AboutSection />

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pronto para transformar sua vida?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Agende sua sessão agora ou entre em contato para mais informações.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/agendamento" className="btn btn-primary px-8 py-3 text-lg">
                  Agendar Sessão
                </Link>
                <Link to="/contato" className="btn bg-white border border-gray-300 px-8 py-3 text-lg text-gray-700 hover:bg-gray-50">
                  Entre em Contato
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <ContactSection />
    </div>
  );
};

export default Home; 