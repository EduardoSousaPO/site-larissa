import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { createWhatsAppProps } from '../lib/whatsapp';
import { getUtmParams } from '../lib/utm';
import { trackLPView } from '../services/analytics';


const SessaoResolucaoPage = () => {
  const whatsappProps = createWhatsAppProps({
    page: 'sessao-de-resolucao',
    section: 'offer',
    message: 'Olá! Gostaria de agendar uma Sessão de Resolução.',
  });

  useEffect(() => {
    trackLPView('sessao-de-resolucao', getUtmParams());
  }, []);

  return (
    <>
      <SEOHead
        title="Sessão de Resolução | Uma conversa profunda quando você precisa de clareza agora"
        description="Sessão única para mulheres que estão no meio de uma crise emocional, um luto, uma decisão travada ou uma explosão com culpa depois. Espaço seguro para ser ouvida e sair com direção."
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
                  Sessão pontual
                </p>
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                  Uma conversa profunda para quando você precisa de clareza agora
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Para você que está no meio de uma crise emocional e não consegue esperar
                  meses de terapia para respirar. Uma sessão estruturada para ser ouvida,
                  nomear o que sente e sair com direção.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-primary-100 bg-gray-950">
                <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.25),_transparent_50%),linear-gradient(135deg,_#111827,_#1f2937)]" />
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-white/70">
                  <span>Vídeo explicativo</span>
                  <span>Em breve</span>
                </div>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,0.92fr]">
                <div className="space-y-8">
                  <div className="rounded-[2rem] bg-stone-50 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Quando a vida aperta, a espera pesa mais
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
                      <p>
                        Uma discussão que não termina. Um luto que sufoca sem aviso. Uma
                        decisão que trava o sono. Uma mágoa que explodiu e deixou culpa.
                        Uma fase que parece não ter fim.
                      </p>
                      <p>
                        Você não precisa começar uma terapia longa agora. Às vezes, o que
                        você precisa é de uma conversa profunda, com alguém que saiba te
                        escutar sem julgamento e te ajudar a enxergar o próximo passo.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-primary-200 bg-primary-950 p-8 text-white">
                    <h2 className="text-2xl font-bold">
                      Não é um desabafo sem rumo. É uma sessão com método.
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-8 text-white/85">
                      <p>
                        A Sessão de Resolução é estruturada pelo{' '}
                        <strong className="font-semibold text-white">Método S.E.R. —
                        Segurança Emocional Reconstruída</strong>. Em 50 minutos você vai
                        conseguir:
                      </p>
                      <ul className="space-y-3 text-base leading-7 text-white/85">
                        {[
                          'Sentir com consciência: nomear o que está por trás da raiva, da culpa ou do cansaço',
                          'Entender a origem: identificar o que essa situação específica toca em você',
                          'Responder com intenção: sair com 1 a 3 próximos passos concretos — sem pressão de decidir tudo agora',
                        ].map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <blockquote className="mt-6 border-l-2 border-primary-300 pl-5 text-xl font-semibold text-white">
                        Quem se sente segura por dentro para de se apagar por fora.
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
                      Essa sessão é para você se…
                    </p>
                    <ul className="mt-6 space-y-3 text-base leading-7 text-gray-700">
                      {[
                        'Está passando por um luto ou perda recente e não sabe como processar',
                        'Precisa tomar uma decisão importante e está paralisada',
                        'Vive um conflito (conjugal, familiar, profissional) que está te consumindo',
                        'Explodiu com alguém próximo e está se culpando desde então',
                        'Sente um cansaço emocional que não melhora com descanso',
                        'Quer testar como é ser ouvida por mim antes de começar um acompanhamento contínuo',
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[2rem] bg-emerald-50 p-8">
                    <h2 className="text-xl font-bold text-gray-900">Sessão de Resolução: R$200</h2>
                    <ul className="mt-4 space-y-3 text-base leading-7 text-gray-700">
                      {[
                        '50 minutos de conversa focada no que você está vivendo agora',
                        '100% online — de onde você estiver',
                        'Estruturada pelo Método S.E.R.',
                        'Sem compromisso de continuar — se quiser seguir, conversamos sobre o pacote mensal',
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
                    Quero agendar minha Sessão de Resolução
                  </a>
                  <p className="text-center text-sm text-gray-600">
                    Ao clicar, você será direcionada ao WhatsApp para escolher o horário.
                  </p>
                  <p className="text-center text-sm text-gray-500">
                    Tudo que você compartilhar é 100% confidencial. Sigilo profissional garantido pelo CRP.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        <CTASection
          page="sessao-de-resolucao"
          message="Olá! Gostaria de agendar uma Sessão de Resolução."
        />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default SessaoResolucaoPage;
