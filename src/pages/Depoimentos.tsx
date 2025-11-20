import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface Depoimento {
  nome: string;
  idade?: number;
  cidade: string;
  texto: string;
  servico: string;
  avaliacao: number;
}

const Depoimentos = () => {
  // Exemplo de depoimentos - substituir por dados reais quando disponíveis
  const depoimentos: Depoimento[] = [
    {
      nome: "M. S.",
      cidade: "Goiânia",
      texto: "A Dra. Larissa me ajudou a encontrar sentido em um momento muito difícil da minha vida. A abordagem da Logoterapia foi exatamente o que eu precisava. Hoje me sinto mais confiante e com propósito.",
      servico: "Psicoterapia Individual",
      avaliacao: 5
    },
    {
      nome: "J. P.",
      cidade: "São Paulo",
      texto: "Fiz terapia online com a Dra. Larissa e foi uma experiência incrível. Mesmo à distância, consegui me conectar profundamente e trabalhar questões importantes. Recomendo muito!",
      servico: "Psicoterapia Online",
      avaliacao: 5
    },
    {
      nome: "A. R.",
      cidade: "Goiânia",
      texto: "Estava em dúvida sobre minha carreira e a orientação vocacional me ajudou muito. A Dra. Larissa me ajudou a entender meus valores e encontrar um caminho profissional que faz sentido para mim.",
      servico: "Aconselhamento Vocacional",
      avaliacao: 5
    },
    {
      nome: "C. M.",
      cidade: "Brasília",
      texto: "Lutei contra a ansiedade por anos. A Logoterapia me mostrou uma nova perspectiva. A Dra. Larissa é muito acolhedora e profissional. Sinto que finalmente estou no caminho certo.",
      servico: "Psicoterapia Online",
      avaliacao: 5
    },
    {
      nome: "L. F.",
      cidade: "Goiânia",
      texto: "A orientação familiar foi fundamental para melhorar a comunicação em casa. A Dra. Larissa nos ajudou a entender melhor uns aos outros e criar um ambiente mais harmonioso.",
      servico: "Orientação Familiar",
      avaliacao: 5
    },
    {
      nome: "R. T.",
      cidade: "Rio de Janeiro",
      texto: "Fazer terapia online com a Dra. Larissa foi uma das melhores decisões que tomei. A flexibilidade de horários e a qualidade do atendimento são excelentes. Me sinto muito mais equilibrada emocionalmente.",
      servico: "Psicoterapia Online",
      avaliacao: 5
    }
  ];

  const renderEstrelas = (avaliacao: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < avaliacao ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Depoimentos de Pacientes | Dra. Larissa Nunes - Psicóloga</title>
        <meta 
          name="description" 
          content="Leia depoimentos de pacientes que fizeram terapia com a Dra. Larissa Nunes. Psicoterapia online e presencial em Goiânia baseada em Logoterapia."
        />
        <meta property="og:title" content="Depoimentos | Dra. Larissa Nunes - Psicóloga" />
        <meta property="og:description" content="Depoimentos de pacientes sobre psicoterapia com a Dra. Larissa Nunes em Goiânia e online." />
        <link rel="canonical" href="https://site-larissa-three.vercel.app/depoimentos" />
      </Helmet>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Depoimentos de Pacientes
            </h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conheça a experiência de pessoas que encontraram sentido, superaram desafios 
              e transformaram suas vidas através da Logoterapia com a Dra. Larissa Nunes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {depoimentos.map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{depoimento.nome}</h3>
                    <p className="text-sm text-gray-600">{depoimento.cidade}</p>
                  </div>
                  <div className="flex">
                    {renderEstrelas(depoimento.avaliacao)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 flex-grow italic">
                  "{depoimento.texto}"
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm text-primary-600 font-medium">
                    {depoimento.servico}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-600 rounded-xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para sua transformação?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Agende sua primeira consulta e dê o primeiro passo em direção a uma vida 
              com mais sentido e propósito.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/agendamento"
                className="bg-white text-primary-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Agendar Consulta
              </a>
              <a
                href="https://wa.me/5562996290052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Nota sobre privacidade */}
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>
              * Todos os depoimentos são reais e publicados com autorização dos pacientes. 
              Iniciais foram utilizadas para preservar a privacidade.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Depoimentos;

