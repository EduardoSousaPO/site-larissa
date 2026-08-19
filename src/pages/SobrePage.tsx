import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import WhatsAppCTA from '../components/lp/WhatsAppCTA';
import { CRP, PROFESSIONAL_SCHEMA, SITE_URL } from '../config/site';

const WHATSAPP_MESSAGE =
  'Olá, Larissa. Li sua página Sobre e gostaria de entender como funciona o atendimento.';

const ATENDIMENTOS = [
  {
    to: '/psicologa-online-para-ansiedade',
    titulo: 'Ansiedade',
    texto: 'Mente acelerada, sintomas no corpo, preocupação que não desliga.',
  },
  {
    to: '/psicologa-online-para-autoestima',
    titulo: 'Autoestima e autoconfiança',
    texto: 'Autocrítica constante, medo de decepcionar, dificuldade de colocar limites.',
  },
  {
    to: '/psicologa-online-para-crise-existencial',
    titulo: 'Crise existencial e falta de sentido',
    texto: 'Vazio, perda de direção, viradas de fase, luto.',
  },
  {
    to: '/psicologa-para-doencas-cronicas',
    titulo: 'Convivência com condição crônica',
    texto: 'Impacto emocional do adoecimento, para quem trata e para quem cuida.',
  },
];

const ETAPAS = [
  {
    letra: 'S',
    nome: 'Sentir com consciência',
    texto:
      'Dar nome ao que acontece no corpo e na emoção, antes de julgar. Sentimento nomeado ocupa menos espaço do que sentimento sem nome.',
  },
  {
    letra: 'E',
    nome: 'Entender a origem',
    texto:
      'Olhar para a história por trás da reação: o que a ensinou, a que ela responde hoje, que exigências a mantêm de pé.',
  },
  {
    letra: 'R',
    nome: 'Responder com intenção',
    texto:
      'Ensaiar respostas escolhidas no lugar da reação automática, orientadas pelos valores que a própria pessoa reconhece como seus.',
  },
];

/**
 * Página institucional de E-E-A-T.
 *
 * Conteúdo deliberadamente distinto do bloco "Sobre" da home: aqui a trajetória
 * é mais longa e o foco é comprovar competência e transparência (registro,
 * formação, abordagem, o que atendo e o que não atendo). Duplicar a seção da
 * home criaria conteúdo repetido entre duas URLs indexáveis.
 */
export default function SobrePage() {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre a psicóloga Larissa Nunes',
    description:
      'Formação, abordagem e trajetória clínica da psicóloga Larissa Nunes, CRP 09/16269, com atuação em Logoterapia.',
    url: `${SITE_URL}/sobre`,
    inLanguage: 'pt-BR',
    // Referência por `@id` em vez do objeto inteiro: o mesmo nó já é emitido
    // ao lado deste, e repeti-lo criaria duas entidades soltas para a mesma pessoa.
    mainEntity: { '@id': `${SITE_URL}/#psicologa` },
  };

  return (
    <>
      <SEOHead
        title="Sobre a Psicóloga Larissa Nunes | CRP 09/16269"
        description="Conheça a psicóloga Larissa Nunes, CRP 09/16269: formação em Logoterapia, trajetória clínica e como conduzo o atendimento, online e em Goiânia-GO."
        path="/sobre"
        keywords="psicóloga Larissa Nunes, psicóloga Goiânia, logoterapia, CRP 09/16269, psicóloga online Brasil, Método S.E.R."
        schema={[PROFESSIONAL_SCHEMA, aboutPageSchema]}
        hideTitleSuffix
      />

      <section className="bg-gradient-to-b from-primary-50 via-white to-white">
        <div className="container pb-12 pt-8 md:pb-16 md:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-700 md:text-sm md:tracking-[0.3em]">
              Psicóloga Larissa Nunes · {CRP}
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Sobre mim e sobre como eu trabalho
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg md:leading-8">
              Sou psicóloga clínica e atendo pessoas adultas, online por videochamada para
              todo o Brasil e presencialmente em Goiânia-GO. Minha abordagem é a Logoterapia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Formação e registro profissional
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                Sou graduada em Psicologia e inscrita no Conselho Regional de Psicologia sob o
                registro {CRP}. Minha formação complementar é em Logoterapia, a abordagem
                psicoterapêutica formulada pelo psiquiatra austríaco Viktor Frankl e
                apresentada em "Em Busca de Sentido", de 1946.
              </p>
              <p>
                O registro no Conselho pode ser conferido publicamente no Cadastro Nacional de
                Psicólogos, mantido pelo Conselho Federal de Psicologia. Prefiro que seja
                assim: em saúde mental, a checagem de quem atende deveria ser simples e não
                depender de confiança cega em um site.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Onde essa forma de trabalhar foi aprendida
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                Boa parte da minha experiência clínica se deu ao lado de pessoas em sofrimento
                severo: pacientes em tratamento de hemodiálise, famílias em processo de luto,
                pessoas atravessando crises longas em que a saída não estava à vista.
              </p>
              <p>
                Foi ali que a pergunta pelo sentido deixou de ser assunto abstrato e virou
                ferramenta de trabalho. Quando não é possível remover o que dói, ainda resta
                uma margem de escolha sobre a postura diante daquilo — e essa margem, quando
                encontrada, muda a experiência inteira. É um princípio clínico, não uma frase
                de efeito.
              </p>
              <p>
                Hoje atendo majoritariamente mulheres adultas que chegam exaustas de dar conta
                de tudo: ansiedade que não desliga, autocrítica que não dá trégua, a sensação
                de estar cumprindo uma rotina sem saber para quê. Também acompanho pessoas que
                convivem com uma condição crônica de saúde, e quem cuida delas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-primary-950 p-8 text-white md:p-12"
          >
            <h2 className="text-2xl font-bold md:text-3xl">Como eu organizo o acompanhamento</h2>
            <p className="mt-4 text-base leading-8 text-white/85">
              Chamo de Método S.E.R. o enquadre em três etapas com que estruturo o processo.
              Não é técnica autônoma nem substitui a abordagem: é a forma como aplico a
              Logoterapia no dia a dia da clínica. As etapas se sobrepõem e voltam quantas
              vezes o processo pedir — não há sequência com data marcada.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {ETAPAS.map((etapa) => (
                <div
                  key={etapa.letra}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-primary-800"
                  >
                    {etapa.letra}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{etapa.nome}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/80">{etapa.texto}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Demandas que eu atendo
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {ATENDIMENTOS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">{item.texto}</p>
                  <span aria-hidden="true" className="mt-3 block text-sm font-semibold text-primary-700">
                    Ver a página →
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/*
            O bloco "O que eu não faço" saiu a pedido da Dra. Larissa (19/08/2026).
            Era uma lista de recusas em destaque logo antes do CTA, e a última
            coisa que a visitante lia antes de decidir.

            O que ele carregava e onde continua vivo:
            - orientação de emergência (CVV 188, SAMU 192): no rodapé de todas as
              páginas e em /contato;
            - "complementar ao tratamento médico e não o substitui": no corpo da
              LP de doenças crônicas, que é onde a afirmação de fato importa.
          */}

          <div className="mt-12 flex justify-center">
            <WhatsAppCTA
              label="Falar comigo no WhatsApp"
              message={WHATSAPP_MESSAGE}
              page="sobre"
              section="final"
            />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-600">
            Psicóloga Larissa Nunes · {CRP} · Online para todo o Brasil · Presencial em
            Goiânia-GO ·{' '}
            <Link
              to="/contato"
              className="font-medium text-primary-700 underline underline-offset-4 transition hover:text-primary-800"
            >
              Contato
            </Link>
            {' · '}
            <Link
              to="/privacidade"
              className="font-medium text-primary-700 underline underline-offset-4 transition hover:text-primary-800"
            >
              Política de Privacidade
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
