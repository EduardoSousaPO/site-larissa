import { motion } from 'framer-motion';

const ApproachSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50" id="abordagem">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Abordagem Terapêutica
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-lg text-gray-700 mb-6">
              A Logoterapia, desenvolvida por Viktor Frankl, é uma abordagem terapêutica 
              centrada no sentido da vida. Ela parte do princípio de que a principal força 
              motivadora do ser humano é encontrar um significado para sua existência.
            </p>
            
            <p className="text-lg text-gray-700">
              Como logoterapeuta, trabalho ajudando as pessoas a encontrarem propósito 
              e significado, mesmo nas situações mais desafiadoras da vida. Isso fortalece 
              a resiliência e proporciona uma base sólida para superar dificuldades como 
              ansiedade, depressão e questionamentos existenciais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-10"
          >
            <svg className="w-12 h-12 text-primary-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium italic text-gray-800 mb-6 text-center">
              "Quando a situação não puder ser transformada, transforme-se."
            </blockquote>
            <cite className="block text-lg text-gray-600 font-medium text-center">— Viktor Frankl</cite>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a 
              href="/agendamento" 
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-colors"
            >
              Conheça Minha Abordagem
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection; 