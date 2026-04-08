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

const SessaoResolucaoPage = () => {
  const whatsappProps = createWhatsAppProps({
    page: 'sessao-de-resolucao',
    section: 'offer',
    message: 'Ola! Gostaria de agendar uma sessao de resolucao.',
  });

  useEffect(() => {
    trackLPView('sessao-de-resolucao', getUtmParams());
  }, []);

  return (
    <>
      <SEOHead
        title="Sessao de Resolucao por R$200"
        description="Uma sessao pontual com foco em clareza, direcao e resolucao para momentos dificeis. Pagina exclusiva e nao indexada."
        path="/sessao-de-resolucao"
        type="website"
        noindex
      />
      <div className="min-h-screen bg-[linear-gradient(180deg,_#fffaf8_0%,_#ffffff_45%,_#f8fcfb_100%)]">
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
                  Sessao pontual
                </p>
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                  Uma sessao. Uma decisao. Um caminho mais claro.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Para voce que esta passando por um momento dificil e precisa de clareza agora
                  — nao daqui a seis meses.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-primary-100 bg-gray-950">
                <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.25),_transparent_50%),linear-gradient(135deg,_#111827,_#1f2937)]" />
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-white/70">
                  <span>Video explicativo</span>
                  <span>Adicione o video final neste componente</span>
                </div>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,0.92fr]">
                <div className="space-y-8">
                  <div className="rounded-[2rem] bg-stone-50 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      As vezes a vida coloca voce numa encruzilhada.
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
                      <p>
                        Um luto que voce nao sabe como processar. Uma decisao que tira seu sono.
                        Um conflito que esta consumindo sua energia. Uma fase que parece nao ter
                        fim.
                      </p>
                      <p>
                        Voce nao precisa de meses de terapia para ter clareza sobre o que fazer
                        agora. As vezes, voce precisa de uma conversa profunda com alguem que
                        sabe te ouvir e te dar direcao.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-primary-200 bg-primary-950 p-8 text-white">
                    <h2 className="text-2xl font-bold">
                      A Sessao de Resolucao e um encontro unico com a Dra. Larissa Nunes, focado
                      no que voce esta vivendo agora.
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-8 text-white/85">
                      <p>
                        Nao e um desabafo sem rumo. E uma sessao estruturada com base na
                        Logoterapia — a abordagem do sentido — para te ajudar a:
                      </p>
                      <ul className="space-y-3 text-base leading-7 text-white/85">
                        {[
                          'Enxergar a situacao com mais clareza',
                          'Identificar o que realmente importa nesse momento',
                          'Sair com uma direcao concreta para os proximos passos',
                        ].map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
                      Essa sessao e para voce se
                    </p>
                    <ul className="mt-6 space-y-3 text-base leading-7 text-gray-700">
                      {[
                        'Esta passando por um luto ou perda recente',
                        'Precisa tomar uma decisao importante e esta paralisado',
                        'Vive um conflito (familiar, profissional, pessoal) que esta te consumindo',
                        'Sente que esta num beco sem saida e precisa de um olhar externo',
                        'Quer testar a terapia antes de se comprometer com um acompanhamento continuo',
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[2rem] bg-emerald-50 p-8">
                    <h2 className="text-xl font-bold text-gray-900">Sessao de Resolucao: R$200</h2>
                    <ul className="mt-4 space-y-3 text-base leading-7 text-gray-700">
                      {[
                        'Uma sessao completa de 50 minutos',
                        '100% online — de onde voce estiver',
                        'Foco total no que voce precisa resolver agora',
                        'Sem compromisso de continuidade — mas se quiser seguir, conversamos sobre o pacote mensal',
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    {...whatsappProps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-green-600 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-green-700"
                  >
                    Quero agendar minha sessao de resolucao
                  </a>
                  <p className="text-center text-sm text-gray-600">
                    Ao clicar, voce sera direcionado para o WhatsApp para escolher o melhor horario.
                  </p>
                  <p className="text-center text-sm text-gray-500">
                    Tudo que voce compartilhar e 100% confidencial. Sigilo profissional garantido
                    pelo CRP.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        <CTASection
          page="sessao-de-resolucao"
          message="Ola! Gostaria de agendar uma sessao de resolucao."
        />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default SessaoResolucaoPage;
