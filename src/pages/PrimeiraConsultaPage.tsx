import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { createWhatsAppProps } from '../lib/whatsapp';
import { trackLPView } from '../services/analytics';

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get('utm_source') ?? '',
    utm_medium: params.get('utm_medium') ?? '',
    utm_campaign: params.get('utm_campaign') ?? '',
    utm_content: params.get('utm_content') ?? '',
    utm_term: params.get('utm_term') ?? '',
  };
}

const PrimeiraConsultaPage = () => {
  const whatsappProps = createWhatsAppProps({
    page: 'primeira-consulta',
    section: 'offer',
    message: 'Ola! Vi a oferta de primeira consulta por R$90 e gostaria de agendar.',
  });

  useEffect(() => {
    trackLPView('primeira-consulta', getUtmParams());
  }, []);

  return (
    <>
      <SEOHead
        title="Primeira sessao de Logoterapia por R$90"
        description="Primeira sessao com 50% de desconto para conhecer a Logoterapia com a Dra. Larissa Nunes. Pagina exclusiva e nao indexada."
        path="/primeira-consulta"
        type="website"
        noindex
      />
      <div className="min-h-screen bg-[linear-gradient(180deg,_#fcfaf7_0%,_#ffffff_45%,_#f5fbf8_100%)]">
        <main className="pb-20 pt-12">
          <section className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-5xl rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-2xl shadow-primary-100 md:p-12"
            >
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary-700">
                  Oferta especial
                </p>
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                  Sua primeira sessao de Logoterapia por R$90
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  50% de desconto para voce conhecer uma abordagem que ja ajudou milhares de
                  pessoas a encontrar sentido — mesmo nos momentos mais dificeis.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-primary-100 bg-gray-950">
                <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.35),_transparent_55%),linear-gradient(135deg,_#0f172a,_#1f2937)]" />
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-white/70">
                  <span>Video promocional</span>
                  <span>Adicione o video final neste componente</span>
                </div>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,0.92fr]">
                <div className="space-y-8">
                  <div className="rounded-[2rem] bg-stone-50 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Voce sente que esta vivendo no piloto automatico?
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
                      <p>
                        Acorda, trabalha, cumpre obrigacoes — mas no fundo sabe que falta algo.
                        Um sentido. Uma direcao. Um porque que justifique o esforco de cada dia.
                      </p>
                      <p>
                        Voce ja tentou resolver sozinho. Leu livros, assistiu videos, rezou,
                        conversou com amigos. Mas o vazio continua.
                      </p>
                      <p>Nao e falta de forca. E falta de um caminho claro.</p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-primary-200 bg-primary-950 p-8 text-white">
                    <h2 className="text-2xl font-bold">
                      A Logoterapia e diferente de tudo que voce ja viu sobre terapia.
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-8 text-white/85">
                      <p>
                        Criada por Viktor Frankl — um psiquiatra que sobreviveu ao Holocausto —
                        essa abordagem parte de uma ideia que muda tudo:
                      </p>
                      <blockquote className="border-l-2 border-primary-300 pl-5 text-2xl font-semibold text-white">
                        Voce nao precisa entender todo o seu passado para seguir em frente. Voce
                        precisa encontrar um sentido forte o suficiente para sustentar o presente.
                      </blockquote>
                      <p>
                        A Dra. Larissa Nunes e uma das poucas profissionais no Centro-Oeste com
                        experiencia pratica em Logoterapia. Ja acompanhou pessoas em tratamentos
                        de hemodialise, perdas devastadoras e crises que pareciam sem saida.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
                      Sua primeira sessao
                    </p>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="text-5xl font-bold text-gray-900">R$90</span>
                      <span className="pb-2 text-sm text-gray-500 line-through">R$180</span>
                    </div>
                    <ul className="mt-6 space-y-3 text-base leading-7 text-gray-700">
                      {[
                        'Sessao completa de 50 minutos',
                        'Online ou presencial em Goiania',
                        'Sem compromisso de continuidade',
                        'Voce conhece a abordagem e decide se faz sentido pra voce',
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[2rem] bg-amber-50 p-8">
                    <h2 className="text-xl font-bold text-gray-900">Vagas limitadas por semana.</h2>
                    <p className="mt-4 text-base leading-8 text-gray-700">
                      A Dra. Larissa atende um numero reduzido de pacientes para garantir
                      qualidade no acompanhamento.
                    </p>
                  </div>

                  <a
                    {...whatsappProps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-green-600 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-green-700"
                  >
                    Quero minha primeira sessao por R$90
                  </a>
                  <p className="text-center text-sm text-gray-600">
                    Ao clicar, voce sera direcionado para o WhatsApp para agendar sua sessao.
                  </p>
                  <p className="text-center text-sm text-gray-500">
                    Seus dados estao seguros. A conversa no WhatsApp e confidencial.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        <CTASection
          page="primeira-consulta"
          message="Ola! Vi a oferta de primeira consulta por R$90 e gostaria de agendar."
        />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default PrimeiraConsultaPage;
