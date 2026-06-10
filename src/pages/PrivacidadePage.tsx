import SEOHead from '../components/SEOHead';
import { CONTACT_EMAIL, CRP } from '../config/site';

const sections = [
  {
    title: '1. Quem somos',
    body: (
      <p>
        Este site e os canais de atendimento associados são de responsabilidade de{' '}
        <strong>Larissa Nunes da Silva</strong>, psicóloga inscrita no Conselho Regional de
        Psicologia sob o registro <strong>{CRP}</strong>, com atendimento online em todo o Brasil e
        presencial em Goiânia-GO ("nós"). Esta política explica como tratamos os seus dados
        pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>
    ),
  },
  {
    title: '2. Quais dados coletamos',
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Dados fornecidos por você</strong> — nome, telefone/WhatsApp e e-mail informados
          em formulários de contato, agendamento ou em formulários de cadastro veiculados em
          anúncios (por exemplo, formulários instantâneos do Facebook/Instagram), além das
          respostas às perguntas desses formulários.
        </li>
        <li>
          <strong>Dados de navegação</strong> — coletados automaticamente por cookies e
          tecnologias semelhantes (Google Analytics e Pixel da Meta), como páginas visitadas,
          dispositivo, navegador e interações com o site, de forma agregada.
        </li>
      </ul>
    ),
  },
  {
    title: '3. Para que usamos os dados',
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Entrar em contato com você (inclusive por WhatsApp) quando você solicita informações ou preenche um formulário de interesse;</li>
        <li>Agendar e organizar atendimentos;</li>
        <li>Medir o desempenho do site e de campanhas de divulgação;</li>
        <li>Cumprir obrigações legais e regulamentares da profissão.</li>
      </ul>
    ),
  },
  {
    title: '4. Compartilhamento',
    body: (
      <p>
        Não vendemos seus dados. Eles podem ser tratados por operadores que dão suporte à nossa
        atividade — como Meta Platforms (formulários e anúncios), Google (analytics) e provedores
        de hospedagem — sempre limitados às finalidades descritas acima. Informações compartilhadas
        em sessão de psicoterapia são protegidas pelo sigilo profissional previsto no Código de
        Ética Profissional do Psicólogo e <strong>não</strong> são utilizadas para fins de
        marketing.
      </p>
    ),
  },
  {
    title: '5. Armazenamento e segurança',
    body: (
      <p>
        Os dados são mantidos pelo tempo necessário às finalidades desta política ou conforme
        prazos legais aplicáveis, em ambientes com controle de acesso. Dados de formulários de
        anúncios ficam armazenados nas plataformas da Meta e em nossos registros de contato.
      </p>
    ),
  },
  {
    title: '6. Seus direitos (LGPD)',
    body: (
      <p>
        Você pode solicitar, a qualquer momento: confirmação do tratamento, acesso, correção,
        anonimização, portabilidade, informação sobre compartilhamentos, revogação de consentimento
        e eliminação dos seus dados pessoais. Para exercer esses direitos, escreva para{' '}
        <a className="font-medium text-primary-700 underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    title: '7. Cookies',
    body: (
      <p>
        Utilizamos cookies para análise de tráfego (Google Analytics) e mensuração de campanhas
        (Pixel da Meta). Você pode bloquear ou apagar cookies nas configurações do seu navegador —
        o site continua funcionando normalmente.
      </p>
    ),
  },
  {
    title: '8. Atualizações',
    body: (
      <p>
        Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A versão
        vigente estará sempre disponível nesta página. Última atualização: junho de 2026.
      </p>
    ),
  },
];

const PrivacidadePage = () => (
  <>
    <SEOHead
      title="Política de Privacidade"
      description="Como a psicóloga Larissa Nunes (CRP 09/16269) coleta, usa e protege seus dados pessoais no site e nos formulários de contato, em conformidade com a LGPD."
      path="/privacidade"
    />
    <section className="bg-stone-50 py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
            Transparência
          </p>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Política de Privacidade</h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Aqui você encontra, de forma simples, como os seus dados pessoais são coletados,
            usados e protegidos quando você navega neste site, preenche um formulário ou entra em
            contato.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                <div className="mt-4 text-base leading-7 text-gray-700">{section.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PrivacidadePage;
