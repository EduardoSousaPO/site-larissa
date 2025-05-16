import { motion } from 'framer-motion';

const Abordagem = () => {
  return (
    <div>
      {/* Banner Principal */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Abordagem Terapêutica
            </h1>
            <p className="text-xl text-gray-700">
              Uma psicoterapia centrada na pessoa e orientada por propósito
            </p>
          </motion.div>
        </div>
      </section>

      {/* O que é Logoterapia */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">O que é Logoterapia?</h2>
              
              <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <div className="rounded-full overflow-hidden h-48 w-48 mx-auto bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Foto de Viktor Frankl</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <blockquote className="text-lg italic mb-4">
                      "Quem tem um porquê para viver pode suportar quase qualquer como."
                    </blockquote>
                    <p className="text-gray-700">
                      A Logoterapia, desenvolvida pelo psiquiatra e neurologista Viktor Frankl, é uma 
                      abordagem terapêutica que coloca o sentido da vida como questão central no processo 
                      de tratamento. O termo "logos" vem do grego e significa "sentido" ou "significado".
                    </p>
                    <p className="text-gray-700 mt-4">
                      Frankl afirmava que a busca de sentido é a principal força motivadora no ser humano, 
                      e não apenas a busca de prazer ou poder. Ele desenvolveu esta teoria após sobreviver 
                      a quatro campos de concentração nazistas, onde observou que os prisioneiros que 
                      conseguiam encontrar um propósito - mesmo em meio ao sofrimento extremo - tinham 
                      maiores chances de sobreviver.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Princípios da Logoterapia</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Liberdade da Vontade</h3>
                  <p className="text-gray-700">
                    O ser humano é livre para tomar posição diante de quaisquer condições que lhe 
                    sejam apresentadas, sejam biológicas, psicológicas ou sociais.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Vontade de Sentido</h3>
                  <p className="text-gray-700">
                    A motivação primária do ser humano é encontrar um sentido para sua vida, 
                    um propósito ou missão que lhe seja significativo.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sentido da Vida</h3>
                  <p className="text-gray-700">
                    A vida tem sentido sob quaisquer circunstâncias, mesmo nas mais difíceis. 
                    O sentido pode ser descoberto por meio de valores experienciais, 
                    criativos ou atitudinais.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Minha Abordagem Integrativa</h2>
              
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <p className="text-gray-700 mb-4">
                  Como logoterapeuta, minha abordagem de trabalho é centrada na pessoa e orientada por 
                  propósito. Ajudo meus clientes a encontrar significado nas situações que vivem, mesmo 
                  nas mais desafiadoras, fortalecendo sua capacidade de resiliência e de encontrar um 
                  "porquê" para viver que os motive a superar qualquer "como" enfrentar.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Seguindo a filosofia de Viktor Frankl, conduzo sessões que incentivam reflexões sobre 
                  valores pessoais, propósito de vida e responsabilidade por escolhas. Frequentemente 
                  compartilho reflexões inspiradoras, pois acredito no poder de uma frase inspiradora 
                  no momento certo.
                </p>
                
                <blockquote className="border-l-4 border-primary-300 pl-4 py-2 italic text-gray-700 my-6">
                  "Se você não sabe qual é sua missão na vida, já tem uma: encontrá-la."
                  <cite className="block text-sm mt-2 font-normal">— Viktor Frankl</cite>
                </blockquote>
                
                <p className="text-gray-700">
                  Além da Logoterapia, utilizo recursos da psicologia contemporânea alinhados com a visão 
                  tomista e conhecimentos sobre os temperamentos. Isso significa que, durante o processo 
                  terapêutico, considero tanto as dimensões espirituais e morais do indivíduo (como virtudes, 
                  caráter e busca de sentido), quanto aspectos de personalidade e temperamento que influenciam 
                  o comportamento no dia a dia.
                </p>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                  Processo Terapêutico
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Minha abordagem integrada permite uma terapia personalizada, onde técnicas da psicologia 
                  clínica tradicional são complementadas por insights filosóficos. O resultado é um 
                  acompanhamento terapêutico robusto, que cuida da pessoa em todas as suas camadas – física, 
                  emocional, racional e espiritual – em busca de uma vida mais plena e significativa.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Importante salientar que adoto uma postura ética e objetiva em relação ao tratamento: 
                  meu compromisso é conduzir o paciente até onde ele alcance autonomia e bem-estar 
                  suficientes para dar alta. Ou seja, a terapia não se prolonga além do necessário – o 
                  foco está na evolução do paciente e no alcance de resultados concretos, para que ele 
                  possa seguir sua vida com as ferramentas e a confiança adquiridas ao longo do processo.
                </p>
                
                <p className="text-gray-700">
                  Esse direcionamento proporciona clareza e confiança aos clientes, que percebem um 
                  propósito bem definido no trabalho terapêutico: atingir melhorias reais e desenvolver 
                  habilidades emocionais para lidar com futuras dificuldades por conta própria.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abordagem; 