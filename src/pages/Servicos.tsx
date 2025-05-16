import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Servicos = () => {
  const [activeTab, setActiveTab] = useState('psicoterapia');

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
              Serviços Oferecidos
            </h1>
            <p className="text-xl text-gray-700">
              Conheça os serviços de psicologia da Dra. Larissa Nunes para adultos e adolescentes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs de Serviços */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-10">
              <button
                className={`py-4 px-6 font-medium text-lg transition-colors ${
                  activeTab === 'psicoterapia'
                    ? 'text-primary-700 border-b-2 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                onClick={() => setActiveTab('psicoterapia')}
              >
                Psicoterapia Individual
              </button>
              <button
                className={`py-4 px-6 font-medium text-lg transition-colors ${
                  activeTab === 'vocacional'
                    ? 'text-primary-700 border-b-2 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                onClick={() => setActiveTab('vocacional')}
              >
                Aconselhamento Vocacional
              </button>
              <button
                className={`py-4 px-6 font-medium text-lg transition-colors ${
                  activeTab === 'familiar'
                    ? 'text-primary-700 border-b-2 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                onClick={() => setActiveTab('familiar')}
              >
                Orientação Familiar
              </button>
            </div>

            {/* Tabs Content */}
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Psicoterapia Individual */}
              {activeTab === 'psicoterapia' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-primary-100 rounded-lg p-6 text-center">
                        <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-primary-700 mb-4">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Psicoterapia Individual</h2>
                        <p className="text-primary-800 font-medium">
                          Para adultos e adolescentes
                        </p>
                        <div className="mt-6 pt-6 border-t border-primary-200">
                          <p className="font-semibold mb-2">Modalidades:</p>
                          <div className="flex flex-col space-y-2">
                            <span className="bg-white px-3 py-1 rounded-full text-sm">Online</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm">Presencial em Goiânia</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4">Como funciona</h3>
                      <p className="text-gray-700 mb-4">
                        A psicoterapia individual é um acompanhamento psicológico personalizado para 
                        ajudar no tratamento de ansiedade, depressão, estresse, transtornos de humor 
                        e questões emocionais diversas.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Larissa utiliza intervenções baseadas em Logoterapia e técnicas integrativas 
                        para ajudar o paciente a compreender suas emoções, superar sintomas limitantes 
                        e reencontrar o equilíbrio. Ao longo do processo, trabalha-se o autoconhecimento, 
                        a ressignificação de experiências dolorosas e o desenvolvimento da autoconfiança 
                        e da resiliência.
                      </p>
                      
                      <h4 className="text-xl font-semibold mb-3">Principais queixas tratadas:</h4>
                      <ul className="grid md:grid-cols-2 gap-2 mb-6">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Ansiedade</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Depressão</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Estresse</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Transtornos de humor</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Crises existenciais</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conflitos nos relacionamentos</span>
                        </li>
                      </ul>
                      
                      <p className="mb-6 text-gray-700">
                        Cada sessão é um espaço de acolhimento e reflexão, onde o paciente é encorajado 
                        a expressar-se livremente e construir, junto com a psicóloga, caminhos para uma 
                        vida mais significativa e alinhada a seus valores.
                      </p>
                      
                      <Link to="/agendamento" className="btn btn-primary">
                        Agendar primeira sessão
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Aconselhamento Vocacional */}
              {activeTab === 'vocacional' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-primary-100 rounded-lg p-6 text-center">
                        <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-primary-700 mb-4">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Aconselhamento Vocacional</h2>
                        <p className="text-primary-800 font-medium">
                          Descubra seu caminho profissional
                        </p>
                        <div className="mt-6 pt-6 border-t border-primary-200">
                          <p className="font-semibold mb-2">Modalidades:</p>
                          <div className="flex flex-col space-y-2">
                            <span className="bg-white px-3 py-1 rounded-full text-sm">Online</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm">Presencial em Goiânia</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4">Como funciona</h3>
                      <p className="text-gray-700 mb-4">
                        O aconselhamento vocacional é uma orientação psicológica para pessoas que estão 
                        em dúvida sobre qual caminho profissional seguir, insatisfeitas em suas ocupações 
                        atuais ou buscando maior realização no trabalho.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Com base em ferramentas vocacionais e na compreensão profunda da personalidade 
                        (temperamento, talentos, valores pessoais), Larissa auxilia o cliente a descobrir 
                        suas inclinações e aptidões, bem como os obstáculos internos que podem estar 
                        dificultando suas escolhas.
                      </p>
                      
                      <h4 className="text-xl font-semibold mb-3">O processo inclui:</h4>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Avaliação de interesses, habilidades e valores pessoais</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Identificação de propósito e sentido no trabalho</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Análise de traços de temperamento e personalidade</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Trabalho de fortalecimento pessoal para tomada de decisão</span>
                        </li>
                      </ul>
                      
                      <p className="mb-6 text-gray-700">
                        Para aqueles já inseridos no mercado, o foco pode ser o desenvolvimento de carreira 
                        – por exemplo, lidar com transições de cargo, descoberta de um novo rumo profissional 
                        mais alinhado ao seu sentido de vida, gerenciamento de ansiedade no ambiente de trabalho 
                        e busca de maior satisfação e equilíbrio entre vida profissional e pessoal.
                      </p>
                      
                      <p className="mb-6 text-gray-700">
                        Tudo isso é feito de maneira personalizada, respeitando o contexto e os objetivos 
                        individuais, e fornecendo clareza para que o cliente tome decisões seguras sobre 
                        seu futuro profissional.
                      </p>
                      
                      <Link to="/agendamento" className="btn btn-primary">
                        Agendar aconselhamento
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Orientação Familiar */}
              {activeTab === 'familiar' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-primary-100 rounded-lg p-6 text-center">
                        <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-primary-700 mb-4">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Orientação Familiar</h2>
                        <p className="text-primary-800 font-medium">
                          Melhore os relacionamentos familiares
                        </p>
                        <div className="mt-6 pt-6 border-t border-primary-200">
                          <p className="font-semibold mb-2">Modalidades:</p>
                          <div className="flex flex-col space-y-2">
                            <span className="bg-white px-3 py-1 rounded-full text-sm">Online</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm">Presencial em Goiânia</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4">Como funciona</h3>
                      <p className="text-gray-700 mb-4">
                        O serviço de orientação familiar é um suporte terapêutico voltado a questões familiares, 
                        incluindo orientação a pais que enfrentam desafios na educação dos filhos ou dificuldades 
                        de relacionamento em casa.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Nesses atendimentos, Larissa oferece um olhar profissional e acolhedor para temas 
                        como conflitos de geração, limites e disciplina, comunicação familiar e fortalecimento 
                        de vínculos.
                      </p>
                      
                      <h4 className="text-xl font-semibold mb-3">Principais questões abordadas:</h4>
                      <ul className="grid md:grid-cols-2 gap-2 mb-6">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conflitos pais-filhos</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Manejo de limites</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Comunicação familiar</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Adolescência</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Ansiedade em crianças</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Fortalecimento de vínculos</span>
                        </li>
                      </ul>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <p className="text-yellow-800">
                          <strong>Observação:</strong> Esta orientação familiar pode ser uma sessão pontual ou 
                          algumas sessões de aconselhamento, não se tratando de terapia de família de longo prazo, 
                          mas de aconselhamento estratégico para situações específicas.
                        </p>
                      </div>
                      
                      <p className="mb-6 text-gray-700">
                        Com base em sua experiência clínica, que abrange também aspectos de dinâmica familiar, 
                        Larissa ajuda a família a encontrar maneiras mais saudáveis de conviver, promovendo 
                        harmonia e compreensão mútua.
                      </p>
                      
                      <Link to="/agendamento" className="btn btn-primary">
                        Agendar orientação
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Formato dos Atendimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">Formato dos Atendimentos</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-center mb-5">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-700">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">Atendimento Online</h3>
                  </div>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sessões via videochamada em plataformas seguras</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexibilidade de horários</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sem deslocamento, evitando trânsito</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mesma qualidade do atendimento presencial</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Total sigilo e ética profissional</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-center mb-5">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-700">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">Atendimento Presencial</h3>
                  </div>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Consultório em Goiânia (Setor Nova Suíça)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ambiente acolhedor e confortável</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Estacionamento disponível no local</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fácil acesso</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Total sigilo e ética profissional</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Endereço: Av. C-255, nº 271, St. Nova Suíça, Goiânia - GO
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Buscar ajuda é um passo importante para o autoconhecimento e crescimento pessoal.
              Entre em contato para tirar suas dúvidas ou agendar sua primeira sessão.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/agendamento" className="btn btn-primary">
                Agendar Sessão
              </Link>
              <Link to="/contato" className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos; 