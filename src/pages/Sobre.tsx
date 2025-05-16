import { motion } from 'framer-motion';

const Sobre = () => {
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
              Sobre a Dra. Larissa Nunes
            </h1>
            <p className="text-xl text-gray-700">
              Psicóloga clínica especializada em Logoterapia e abordagens integrativas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Principal - Bio e Foto */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Coluna da Foto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-2/5"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                {/* Foto da psicóloga */}
                <img 
                  src="/images/Imagem do WhatsApp de 2025-05-09 à(s) 15.26.10_4a533d6e.jpg" 
                  alt="Dra. Larissa Nunes - Psicóloga" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary-800">Credenciais</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>CRP 09/16269</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Formada pela PUC Goiás</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Especialista em Logoterapia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Formação WRL com Ítalo Marsili</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Coluna da Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:w-3/5"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Dra. Larissa Nunes da Silva é psicóloga clínica (CRP 09/16269) especializada em Logoterapia, 
                  a abordagem terapêutica desenvolvida pelo psiquiatra Viktor Frankl que considera a busca de 
                  sentido para a vida como a principal força motivadora do ser humano.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Formada pela PUC Goiás, Larissa possui vasta experiência em atendimentos clínicos de adultos 
                  e adolescentes, com ênfase em intervenções para ansiedade e depressão, além de auxiliar pacientes 
                  com transtornos de humor e dificuldades nas relações familiares.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Sua atuação é marcada pelo acolhimento e pela criação de um espaço seguro, no qual cada paciente 
                  se sente ouvido e respeitado em sua individualidade. Inspirada nos valores de Viktor Frankl, 
                  Larissa acredita que "quando a situação não puder ser transformada, transforme-se" – ou seja, 
                  mesmo diante de desafios imutáveis, podemos encontrar novos caminhos e crescer internamente.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Formação Complementar</h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Com formação complementar de destaque, Dra. Larissa concluiu a Formação WRL com Ítalo Marsili, 
                  um curso intensivo sobre as 12 Camadas da Personalidade Humana, temperamentos, antropologia e 
                  filosofia aplicada à clínica.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Esse aprofundamento teórico permitiu-lhe compreender as várias camadas do desenvolvimento humano 
                  – dos aspectos mais básicos até questões existenciais mais elevadas – e utilizar esse entendimento 
                  para adaptar suas intervenções de forma eficaz a cada pessoa.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Além disso, Larissa integra conceitos da Psicologia Tomista (inspirada na filosofia de São Tomás 
                  de Aquino) em sua prática, valorizando uma visão integral do ser humano que abrange razão, vontade 
                  e afetividade.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Ela também considera os temperamentos clássicos (sanguíneo, colérico, fleumático e melancólico) 
                  ao entender a personalidade de seus clientes, reconhecendo que cada indivíduo tem inclinações 
                  inatas únicas que influenciam seu modo de sentir e reagir.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Essa combinação singular de formações – unindo ciência, filosofia e espiritualidade – reflete-se 
                  em uma abordagem terapêutica sofisticada e humanizada, focada não apenas em aliviar sintomas, 
                  mas em promover um profundo autoconhecimento e crescimento pessoal alinhado aos valores e sentido 
                  de vida de cada paciente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre; 