import type { LandingContent } from '../../types/landing';

/**
 * Conteúdo da LP de ansiedade.
 * Copy aprovada em docs/ads/copy-psicologa-online-para-ansiedade.md
 * Compliance verificado contra docs/ads/00-estrategia-google-ads.md §4.
 */
export const ansiedadeContent: LandingContent = {
  slug: 'psicologa-online-para-ansiedade',

  seo: {
    title: 'Psicóloga Online para Ansiedade | Larissa Nunes',
    description:
      'Atendimento psicológico para quem convive com ansiedade. Psicóloga online para ansiedade em todo o Brasil e presencial em Goiânia. Fale pelo WhatsApp.',
    keywords:
      'psicóloga online para ansiedade, terapia online para ansiedade, psicóloga para ansiedade, ansiedade generalizada, ansiedade social, psicóloga para mente acelerada, psicólogo ansiedade Goiânia, Logoterapia',
    serviceName: 'Psicoterapia para ansiedade — online e presencial em Goiânia',
    about: 'Ansiedade',
  },

  whatsappMessage:
    'Olá, Larissa. Cheguei pela página sobre psicóloga online para ansiedade e gostaria de entender como funciona o atendimento.',

  hero: {
    eyebrow: 'Psicóloga Larissa Nunes · CRP 09/16269',
    h1: 'Psicóloga online para ansiedade, atendimento em todo o Brasil',
    h1Accent: 'atendimento em todo o Brasil',
    subtitle:
      'Atendimento psicológico para quem convive com ansiedade, mente acelerada e sintomas no corpo. Online por videochamada para todo o Brasil e presencial em Goiânia-GO.',
    ctaLabel: 'Falar com a psicóloga no WhatsApp',
    microcopy:
      'A conversa é direta comigo. Os valores são informados no primeiro contato.',
  },

  sintomas: {
    title: 'Ansiedade: sinais que aparecem quase toda semana em consulta',
    intro:
      'Não é teste, não tem pontuação e não serve para fechar diagnóstico. É só o vocabulário que escuto quase toda semana em consulta, escrito do jeito que as pessoas contam.',
    items: [
      'Sua mente não desliga na hora de dormir e o pensamento fica em volta do mesmo assunto?',
      'Você revisa conversas na cabeça horas depois e pensa no que deveria ter dito?',
      'Você não consegue dormir de ansiedade e acorda sem sensação de descanso?',
      'Sente tudo no corpo — coração acelerado, aperto no peito — e os exames vieram normais?',
      'Espera algo ruim acontecer mesmo quando está tudo em ordem?',
      'Não consegue relaxar a mente nem no fim de semana, sem uma razão clara?',
      'Aparece o medo de enlouquecer ou de perder o controle na frente das pessoas?',
      'A crise chega do nada e depois vem a dúvida: por que sinto ansiedade sem motivo?',
    ],
  },

  comoAjuda: {
    title: 'Como a psicoterapia trabalha com a ansiedade',
    paragraphs: [
      'A ansiedade tem função: preparar o corpo diante de uma ameaça. O problema não é o alarme existir, é ele disparar o dia inteiro, sem ameaça à vista, até o corpo perder a referência de quando pode descansar.',
      'No atendimento a gente mapeia quando o alarme dispara, o que vem antes, o que alivia no curto prazo e o preço disso no longo. A abordagem é a Logoterapia, criada pelo psiquiatra Viktor Frankl: além de trabalhar o sintoma, ela pergunta para que serve o esforço de cada dia. Os dois entram no mesmo processo, não em fases separadas.',
    ],
    etapasTitle: 'As três etapas do Método S.E.R.',
    etapas: [
      {
        letra: 'S',
        nome: 'Sentir com consciência',
        texto:
          'Dar nome ao que acontece no corpo e na mente, sem correr do sintoma nem tratá-lo como defeito de caráter. Reconhecer o sinal diminui o susto de senti-lo.',
      },
      {
        letra: 'E',
        nome: 'Entender a origem',
        texto:
          'Olhar para a história: quando esse alarme aprendeu a disparar, a que ele responde hoje, que exigências e crenças o mantêm ativo.',
      },
      {
        letra: 'R',
        nome: 'Responder com intenção',
        texto:
          'Ensaiar respostas escolhidas no lugar da reação automática, orientadas pelos valores que a própria pessoa reconhece como seus.',
      },
    ],
  },

  paraQuem: {
    title: 'Para quem é este atendimento',
    items: [
      'A ansiedade aparece quase todos os dias e já interfere no sono, no trabalho ou nas relações próximas.',
      'Os exames físicos vieram normais e o próprio médico indicou acompanhamento psicológico.',
      'Já houve tentativa de dar conta sozinha — livro, vídeo, conselho de amigo — e o alívio não se sustentou.',
      'A demanda tem nome: ansiedade generalizada, ansiedade social, crises que chegam sem aviso, preocupação constante com o futuro.',
      'Terapia é território novo e a ideia de começar ainda dá um certo receio.',
      'Faz sentido cuidar do sintoma e também das perguntas maiores: direção, valores, o que sustenta o esforço de cada dia.',
    ],
    naoIndicadoTitle: 'Este atendimento não é indicado para',
    naoIndicado: [
      'Emergência. Risco de suicídio, de se machucar ou de machucar alguém pede socorro imediato, não agendamento. Ligue CVV 188 (24 horas, todos os dias), SAMU 192, ou procure o CAPS ou pronto-socorro mais próximo. Se o risco for agora, esta página não é o caminho.',
      'Quadros que exigem avaliação médica ou medicação. O acompanhamento psicológico é complementar ao tratamento médico e não o substitui. Nenhuma orientação sobre medicação parte de mim.',
      'Laudo, perícia ou documento avaliativo. Não emito parecer para processo, concurso, adoção ou benefício. A avaliação acontece dentro do processo de atendimento.',
      'Crianças e adolescentes. Atendo adultos. Para essas faixas, indico colegas com formação específica.',
      'Quem espera resposta imediata a qualquer hora. O WhatsApp serve para agendar e organizar sessões, não é canal de plantão.',
    ],
    ctaLabel: 'Falar com a psicóloga no WhatsApp',
  },

  comoFunciona: {
    title: 'Psicóloga online para ansiedade: como funciona o atendimento',
    intro:
      'Do primeiro contato à primeira sessão, sem formulário longo e sem triagem automática.',
    items: [
      {
        titulo: 'Primeiro contato pelo WhatsApp',
        texto:
          'Quem responde sou eu, não uma central. Você conta em poucas linhas o que tem vivido, eu explico como funciona e combinamos um horário. Os valores são informados aqui.',
      },
      {
        titulo: 'Sessão inicial para ouvir a história',
        texto:
          'Não é entrevista de triagem. Serve para eu entender o que trouxe você até aqui e o que hoje mais atrapalha. No fim dela definimos os objetivos em conjunto, e eles são revisados ao longo do processo.',
      },
      {
        titulo: 'Sessões individuais de cerca de 50 minutos',
        texto:
          'Frequência em geral semanal, acertada com você. A duração varia conforme a demanda de cada pessoa. Não trabalho com número fechado de sessões.',
      },
      {
        titulo: 'Online por videochamada, em ambiente sigiloso',
        texto:
          'Videochamada em plataforma com conexão criptografada, sala reservada dos dois lados, sem gravação, conforme a Resolução CFP 9/2024. Do seu lado, basta um lugar onde ninguém escute e conexão estável.',
      },
      {
        titulo: 'Presencial em Goiânia-GO',
        texto:
          'Para quem mora na região metropolitana, há também atendimento presencial em consultório. Endereço, dias e horários disponíveis são informados no primeiro contato.',
      },
    ],
  },

  faq: {
    title: 'Dúvidas de quem procura terapia para ansiedade',
    items: [
      {
        question: 'Nunca fiz terapia. Como é a primeira sessão?',
        answer:
          'A maior parte das pessoas que atendo chega sem experiência nenhuma com terapia, e isso não atrapalha em nada. Você não precisa saber explicar o que sente, nem chegar com o assunto organizado. A primeira sessão é uma conversa: você fala do que tem vivido, no ritmo que der, e eu conduzo com perguntas. Se travar, eu ajudo a destravar. Não existe forma certa de começar.',
      },
      {
        question: 'Terapia online para ansiedade funciona mesmo?',
        answer:
          'O atendimento por videochamada é modalidade reconhecida e regulamentada pelo Conselho Federal de Psicologia (Resolução CFP 9/2024), e a literatura em Psicologia a descreve como alternativa consistente ao presencial em demandas de ansiedade em adultos. Na prática clínica, o que mais pesa é o vínculo e a regularidade — não o meio. O que muda é a logística: um lugar reservado, fone de ouvido e conexão estável do seu lado.',
      },
      {
        question: 'Quanto tempo dura o acompanhamento?',
        answer:
          'A duração varia conforme a demanda de cada pessoa e não dá para prever isso de fora. O que faço na prática: objetivos definidos em conjunto no início e revisados ao longo do processo, para que você acompanhe onde estamos e decida com informação. Não trabalho com prazo fechado nem com contagem de sessões.',
      },
      {
        question: 'E se eu não me adaptar a você?',
        answer:
          'A escolha do profissional é sua e pode ser revista a qualquer momento. Se depois de algumas sessões você perceber que não houve encaixe, me diga com franqueza — não vou levar para o lado pessoal. Quando for o caso, indico colegas com outras abordagens. Psicoterapia sem vínculo de confiança rende pouco, e isso não é falha sua.',
      },
      {
        question: 'Como são os valores e a forma de pagamento?',
        answer:
          'Os valores são informados no primeiro contato, junto com as formas de pagamento e a política de remarcação. Prefiro tratar disso em conversa, com a informação completa e sem letra miúda, do que deixar um número solto numa página.',
      },
      {
        question: 'Qual é a sua abordagem? Você é psicóloga especialista em ansiedade?',
        answer:
          'Muita gente busca no Google por "psicólogo especialista em ansiedade", então respondo com precisão: no Brasil, o título de especialista é concedido pelo Conselho Federal de Psicologia em áreas específicas, e não é o caso aqui. Sou psicóloga clínica, CRP 09/16269, com formação em Logoterapia — a abordagem de Viktor Frankl, que trabalha o sofrimento a partir da busca de sentido. Ansiedade é uma das demandas que mais atendo, e é sobre isso que escrevo no blog.',
      },
      {
        question: 'Sinto tudo no corpo e os exames vieram normais. Isso é ansiedade?',
        answer:
          'Exame normal não significa que o sintoma seja invenção. Coração acelerado, aperto no peito, nó na garganta, tontura e intestino desregulado são sintomas físicos da ansiedade e aparecem no corpo mesmo com todos os laudos limpos. E raramente a crise vem "do nada": costuma haver um gatilho que passou despercebido — um assunto adiado, uma conversa pendente, um acúmulo de dias sem descanso. Parte do trabalho é justamente tornar visível esse encadeamento. A avaliação acontece dentro do processo de atendimento, e o acompanhamento psicológico é complementar ao tratamento médico, nunca substituto dele.',
      },
    ],
  },

  credenciais: {
    title: 'Quem vai te atender',
    paragraphs: [
      'Sou Larissa Nunes, psicóloga clínica, CRP 09/16269. Atendo adultos na abordagem da Logoterapia, criada por Viktor Frankl, online para todo o Brasil e presencial em Goiânia-GO.',
      'Acompanhei pessoas em contextos de alta exigência emocional: hemodiálise, luto, adoecimento crônico. Foi ali que aprendi a escutar a ansiedade sem separar o sintoma da história de quem o carrega.',
      'Não uso relato de paciente nem avaliação republicada nesta página: sigilo é dever ético e vale também na divulgação.',
    ],
  },

  artigos: {
    title: 'Para ler antes de decidir',
    intro: 'Escrevi estes textos sobre o que aparece com mais frequência em consulta.',
    items: [
      {
        slug: 'mente-acelerada-ansiedade',
        titulo: 'Mente acelerada: o que alimenta o ciclo da ansiedade',
        resumo: 'Por que o pensamento não desliga e o que costuma alimentar esse ciclo.',
      },
      {
        slug: 'sintomas-fisicos-ansiedade',
        titulo: 'Sintomas físicos da ansiedade: como reconhecer',
        resumo: 'O que a ansiedade faz no corpo quando os exames voltam normais.',
      },
      {
        slug: 'nao-consigo-relaxar',
        titulo: 'Por que não consigo relaxar? Entenda a ansiedade constante',
        resumo: 'O estado de alerta permanente e por que o descanso não chega.',
      },
    ],
  },

  fechamento: {
    title: 'Um primeiro passo, no seu tempo',
    text: 'Ninguém precisa chegar organizado à terapia. Basta uma mensagem com o que tem sido difícil ultimamente — do jeito que der, com as palavras que existirem no momento. Eu respondo, explico como funciona e você decide depois, com calma, se faz sentido seguir. Quando fizer sentido para você, a conversa está aberta.',
    ctaLabel: 'Falar com a psicóloga no WhatsApp',
  },
};
