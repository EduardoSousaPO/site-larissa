import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import WhatsAppCTA from '../components/lp/WhatsAppCTA';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  CRP,
  LOCAL_BUSINESS_SCHEMA,
  SITE_URL,
} from '../config/site';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+C-255,+271,+Setor+Nova+Su%C3%AD%C3%A7a,+Goi%C3%A2nia+-+GO';

const HORARIOS = [
  { dias: 'Segunda a sexta', horario: '8h às 18h' },
  { dias: 'Sábado', horario: '8h às 12h' },
  { dias: 'Domingo e feriados', horario: 'sem atendimento' },
];

const WHATSAPP_MESSAGE =
  'Olá, Larissa. Vim pela página de contato do site e gostaria de saber como funciona o atendimento.';

/**
 * Página de contato.
 *
 * Existe por duas razões que se somam: a política de destino do Google Ads
 * exige que o anunciante seja identificável a partir da página anunciada, e o
 * art. 53 da Res. CFP 003/2007 exige nome, titulação e registro em toda
 * divulgação. Aqui os dois requisitos ficam num lugar só, com o NAP completo
 * (nome, endereço, telefone) consistente com o schema do site.
 */
export default function ContatoPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato — Psicóloga Larissa Nunes',
    description:
      'Canais de contato, endereço do consultório em Goiânia e horários de atendimento da psicóloga Larissa Nunes, CRP 09/16269.',
    url: `${SITE_URL}/contato`,
    inLanguage: 'pt-BR',
  };

  return (
    <>
      <SEOHead
        title="Contato — Psicóloga Larissa Nunes | CRP 09/16269"
        description="Fale com a psicóloga Larissa Nunes (CRP 09/16269): WhatsApp, e-mail, endereço em Goiânia-GO e horários. Atendimento online para todo o Brasil."
        path="/contato"
        keywords="contato psicóloga Goiânia, psicóloga Larissa Nunes contato, consultório de psicologia Setor Nova Suíça, agendar psicóloga Goiânia"
        schema={[LOCAL_BUSINESS_SCHEMA, contactPageSchema]}
        hideTitleSuffix
      />

      <section className="bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="container pb-12 pt-8 md:pb-16 md:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-700 md:text-sm md:tracking-[0.3em]">
              Psicóloga Larissa Nunes · {CRP}
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Contato da psicóloga Larissa Nunes — Goiânia-GO e online
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg md:leading-8">
              O primeiro contato é pelo WhatsApp e quem responde sou eu. Você conta em poucas
              linhas o que tem vivido, eu explico como funciona e combinamos um horário. Os
              valores são informados nessa conversa.
            </p>
            <div className="mt-7 flex justify-center">
              <WhatsAppCTA
                label="Falar no WhatsApp"
                message={WHATSAPP_MESSAGE}
                page="contato"
                section="hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900">Canais diretos</h2>
              <dl className="mt-6 space-y-5 text-base text-gray-700">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
                    WhatsApp e telefone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${CONTACT_PHONE_E164}`}
                      className="font-medium underline decoration-gray-300 underline-offset-4 transition hover:text-primary-700"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
                    E-mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="break-all font-medium underline decoration-gray-300 underline-offset-4 transition hover:text-primary-700"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
                    Registro profissional
                  </dt>
                  <dd className="mt-1 font-medium">Psicóloga Larissa Nunes — {CRP}</dd>
                  {/*
                    Esta linha existe para ancorar o Método S.E.R. na abordagem
                    reconhecida. Sem ela, /contato era a única página do site em
                    que o nome do método aparecia (no cabeçalho e no rodapé) sem
                    nenhuma menção à Logoterapia no texto visível.
                  */}
                  <dd className="mt-2 text-sm leading-7 text-gray-600">
                    Abordagem: Logoterapia. O Método S.E.R. é o enquadre em três etapas com
                    que organizo o acompanhamento, fundamentado nessa abordagem.
                  </dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900">Onde eu atendo</h2>
              <p className="mt-6 text-base leading-8 text-gray-700">
                <strong className="font-semibold text-gray-900">Presencial:</strong>{' '}
                {CONTACT_ADDRESS}
              </p>
              <p className="mt-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-primary-700 underline underline-offset-4 transition hover:text-primary-800"
                >
                  Ver o endereço no Google Maps
                </a>
              </p>
              <p className="mt-5 text-base leading-8 text-gray-700">
                <strong className="font-semibold text-gray-900">Online:</strong> por
                videochamada, para todo o Brasil, em plataforma com conexão criptografada e
                sem gravação da sessão, conforme a Resolução CFP 9/2024.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-5xl rounded-[2rem] border border-gray-200 bg-gray-50 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900">Horários de atendimento</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {HORARIOS.map((item) => (
                <li
                  key={item.dias}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-gray-900">{item.dias}</p>
                  <p className="mt-1 text-base text-gray-700">{item.horario}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-gray-600">
              O WhatsApp serve para agendar e organizar sessões — não é canal de plantão nem
              de atendimento de urgência. Em situação de emergência ou risco à vida, procure o{' '}
              <strong className="font-semibold text-gray-900">CVV pelo 188</strong> (24 horas,
              todos os dias), o <strong className="font-semibold text-gray-900">SAMU 192</strong>{' '}
              ou o pronto-socorro mais próximo.
            </p>
          </motion.div>

          <p className="mx-auto mt-8 max-w-5xl text-sm text-gray-600">
            Sobre o tratamento dos seus dados neste site, consulte a{' '}
            <Link
              to="/privacidade"
              className="font-medium text-primary-700 underline underline-offset-4 transition hover:text-primary-800"
            >
              Política de Privacidade
            </Link>
            . Para conhecer minha formação e minha trajetória, veja a página{' '}
            <Link
              to="/sobre"
              className="font-medium text-primary-700 underline underline-offset-4 transition hover:text-primary-800"
            >
              Sobre
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
