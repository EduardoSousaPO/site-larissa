import { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../services/firebase';

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

const initialFormData: FormData = {
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: '',
};

const Contato = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      // Adicionar a mensagem ao Firestore
      await addDoc(collection(db, 'mensagens'), {
        ...formData,
        criado: Timestamp.now(),
        lido: false,
      });

      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato por WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

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
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-700">
              Estou à disposição para ajudar você em sua jornada
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo - Contato */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Coluna Informações */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                
                <div className="space-y-8">
                  {/* Telefone/WhatsApp */}
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Telefone/WhatsApp</h3>
                      <p className="text-gray-700 mt-1">(62) 9XXXX-XXXX</p>
                      <p className="text-gray-600 mt-2 text-sm">
                        Disponível de segunda a sexta, das 8h às 18h
                      </p>
                      <a 
                        href="https://wa.me/5562999999999" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-primary-700 hover:text-primary-600 font-medium"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Enviar mensagem no WhatsApp
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-700 mt-1">contato@larissanunespsicologa.com.br</p>
                      <p className="text-gray-600 mt-2 text-sm">
                        Respondemos em até 24 horas úteis
                      </p>
                    </div>
                  </div>
                  
                  {/* Endereço */}
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Consultório</h3>
                      <address className="text-gray-700 mt-1 not-italic">
                        Av. C-255, nº 271, St. Nova Suíça<br />
                        Goiânia - GO, CEP XXXXX-XXX
                      </address>
                      <p className="text-gray-600 mt-2 text-sm">
                        Próximo ao [ponto de referência]. Estacionamento disponível no local.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Redes Sociais */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Coluna Formulário */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h2>
                  
                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg"
                    >
                      <h3 className="text-green-800 text-xl font-semibold mb-2">Mensagem enviada com sucesso!</h3>
                      <p className="text-green-700 mb-4">
                        Obrigado por entrar em contato. Sua mensagem foi recebida e responderemos o mais breve possível.
                      </p>
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="text-white bg-green-600 hover:bg-green-700 rounded-md py-2 px-4"
                      >
                        Enviar nova mensagem
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                            Nome completo *
                          </label>
                          <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefone/WhatsApp
                          </label>
                          <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                            Assunto *
                          </label>
                          <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            required
                            value={formData.assunto}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                            Mensagem *
                          </label>
                          <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={6}
                            required
                            value={formData.mensagem}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          ></textarea>
                        </div>
                        
                        {submitError && (
                          <div className="bg-red-50 text-red-700 p-3 rounded-md">
                            {submitError}
                          </div>
                        )}
                        
                        <div>
                          <button
                            type="submit"
                            disabled={submitting}
                            className={`w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors ${
                              submitting ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                          >
                            {submitting ? 'Enviando...' : 'Enviar Mensagem'}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
            
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Localização</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                <span className="text-gray-600">
                  Mapa do Google vai aqui (Use a API do Google Maps para integração)
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato; 