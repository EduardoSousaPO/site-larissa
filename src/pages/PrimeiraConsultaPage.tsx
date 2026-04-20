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
    message: 'Olá! Vi a oferta da primeira sessão por R$90 e gostaria de agendar.',
  });

  useEffect(() => {
    trackLPView('primeira-consulta', getUtmParams());
  }, []);

  return (
    <>
      <SEOHead
        title="Primeira sessão com o Método S.E.R. por R$90"
        description="Sua primeira sessão com 50% de desconto para experimentar o Método S.E.R. (Segurança Emocional Reconstruída) com a Dra. Larissa Nunes. Página exclusiva e não indexada."
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
                  Oferta especial — vagas limitadas
                </p>
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                  Sua primeira sessão com o Método S.E.R. por R$90
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  50% de desconto para você experimentar, sem compromisso, um processo que já
                  ajudou mulheres cansadas de se esforçar sem ser vistas a voltar a se sentir
                  seguras por dentro.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-primary-100 bg-gray-950">
                <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.35),_transparent_55%),linear-gradient(135deg,_#0f172a,_#1f2937)]" />
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-white/70">
                  <span>Vídeo de apresentação</span>
                  <span>Em breve</span>
                </div>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,0.92fr]">
                <div className="space-y-8">
                  <div className="rounded-[2rem] bg-stone-50 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Você se reconhece em alguma dessas frases?
                    </h2>
                    <ul className="mt-5 space-y-4 text-lg leading-8 text-gray-700">
                      <li>"Eu me esforço, me doo, e mesmo assim não sou vista."</li>
                      <li>"Guardo mágoa até explodir — e depois me culpo por ter explodido."</li>
                      <li>"Me sinto invisível dentro da minha própria casa."</li>
                      <li>"Estou cansada de ser forte o tempo todo."</li>
                      <li>"Já entendi racionalmente o que sinto, mas ainda reajo do mesmo jeito."</li>
                    </ul>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                      Se isso aparece na sua vida, essa sessão foi pensada pra você.
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-primary-200 bg-primary-950 p-8 text-white">
                    <h2 className="text-2xl font-bold">
                      O que é o Método S.E.R.
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-8 text-white/85">
                      <p>
                        S.E.R. é <strong className="font-semibold text-white">Segurança
                        Emocional Reconstruída</strong> — um processo clínico em três passos
                        que desenvolvi a partir da Logoterapia e da prática com mulheres que
                        chegavam exaustas no meu consultório.
                      </p>
                      <ul className="space-y-3 text-base leading-7 text-white/85">
                        <li>
                          <strong className="font-semibold text-white">S — Sentir com consciência:</strong>{' '}
                          reconhecer o que você está sentindo antes da raiva, do cansaço, da explosão.
                        </li>
                        <li>
                          <strong className="font-semibold text-white">E — Entender a origem:</strong>{' '}
                          descobrir por que certas situações te afetam tanto e por que você ainda carrega mágoas que achava superadas.
                        </li>
                        <li>
                          <strong className="font-semibold text-white">R — Responder com intenção:</strong>{' '}
                          agir com leveza, clareza e segurança — sem se apagar, sem explodir, sem se culpar depois.
                        </li>
                      </ul>
                      <blockquote className="mt-6 border-l-2 border-primary-300 pl-5 text-xl font-semibold text-white">
                        Quando você sabe o que sente, para de reagir pela dor.
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
                      Sua primeira sessão
                    </p>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="text-5xl font-bold text-gray-900">R$90</span>
                      <span className="pb-2 text-sm text-gray-500 line-through">R$180</span>
                    </div>
                    <ul className="mt-6 space-y-3 text-base leading-7 text-gray-700">
                      {[
                        'Sessão completa de 50 minutos',
                        'Online para todo o Brasil ou presencial em Goiânia',
                        'Sem compromisso de continuar depois',
                        'Espaço seguro para você falar com suas palavras — sem precisar ensaiar',
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[2rem] bg-amber-50 p-8">
                    <h2 className="text-xl font-bold text-gray-900">Poucas vagas por semana.</h2>
                    <p className="mt-4 text-base leading-8 text-gray-700">
                      A Dra. Larissa atende um número reduzido de pacientes novas por semana
                      para manter a profundidade do acompanhamento. Se surgiu no seu caminho
                      agora, vale garantir a sua.
                    </p>
                  </div>

                  <a
                    {...whatsappProps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-green-600 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-green-700"
                  >
                    Quero minha primeira sessão por R$90
                  </a>
                  <p className="text-center text-sm text-gray-600">
                    Ao clicar, você será direcionada ao WhatsApp para escolher o horário.
                  </p>
                  <p className="text-center text-sm text-gray-500">
                    Tudo que você compartilhar é confidencial. Sigilo profissional garantido pelo CRP.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
        <CTASection
          page="primeira-consulta"
          message="Olá! Vi a oferta da primeira sessão por R$90 e gostaria de agendar."
        />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default PrimeiraConsultaPage;
