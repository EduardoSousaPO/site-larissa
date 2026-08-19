import type { LandingContent } from '../../types/landing';

/**
 * Conteúdo da LP de apoio psicológico a quem convive com condição crônica.
 * Copy aprovada em docs/ads/copy-psicologa-para-doencas-cronicas.md
 * Compliance verificado contra docs/ads/00-estrategia-google-ads.md §4 e §4.6.
 *
 * Esta é a página de maior risco de política das quatro. Duas regras nunca
 * podem ser afrouxadas em edições futuras:
 *  1. Nunca alegar tratar, curar ou aliviar a doença física.
 *  2. A ressalva de complementaridade ao tratamento médico aparece em mais de
 *     um ponto da página, de forma visível.
 */
export const doencasCronicasContent: LandingContent = {
  slug: 'psicologa-para-doencas-cronicas',

  seo: {
    title: 'Psicóloga para Doenças Crônicas | Apoio Psicológico',
    description:
      'Apoio psicológico para quem convive com uma condição crônica de saúde e para quem cuida. Psicóloga Larissa Nunes, CRP 09/16269. Online e em Goiânia.',
    keywords:
      'psicóloga para doenças crônicas, apoio psicológico para doença crônica, psicólogo para pacientes oncológicos, psicólogo para familiares de pacientes oncológicos, fibromialgia psicólogo, psicólogo dor crônica, psicólogo lúpus, psicólogo diabetes tipo 1, psicólogo doença renal crônica, aceitação da doença crônica',
    serviceName:
      'Apoio psicológico a pessoas que convivem com condição crônica de saúde',
    about: 'Impacto emocional do adoecimento crônico',
  },

  whatsappMessage:
    'Olá, Larissa. Vim pela página sobre apoio psicológico para quem convive com uma condição crônica de saúde. Gostaria de entender como funciona o atendimento.',

  hero: {
    eyebrow: 'Psicóloga Larissa Nunes · CRP 09/16269 · Logoterapia',
    h1: 'Psicóloga para doenças crônicas: apoio além do tratamento',
    h1Accent: 'apoio além do tratamento',
    subtitle:
      'Atendimento psicológico para quem convive com uma condição crônica de saúde — e para quem cuida. É um acompanhamento complementar ao tratamento médico, nunca um substituto.',
    ctaLabel: 'Falar comigo no WhatsApp',
    microcopy: 'Os valores são informados no primeiro contato.',
  },

  sintomas: {
    title: 'Adoecimento crônico: talvez você reconheça alguns destes sinais',
    intro:
      'Não é um teste e não serve para se avaliar. É só o vocabulário que aparece com frequência no consultório quando o assunto é o impacto emocional do adoecimento — o de quem está em tratamento e o de quem acompanha alguém em tratamento.',
    items: [
      'Minha vida virou uma sequência de consultas, exames e retornos.',
      'Me sinto um peso para minha família.',
      'Perdi quem eu era depois do diagnóstico.',
      'Ninguém entende o que eu sinto — nem quem mais me ama.',
      'Estou cansada de tratamento, mesmo quando o exame vem bom.',
      'Não aceito minha doença e ainda me culpo por não aceitar.',
      'Tenho medo de piorar e evito pensar no que vem depois.',
      'Cuido de alguém em tratamento e não sobrou lugar para mim.',
    ],
  },

  comoAjuda: {
    title: 'Psicóloga para doenças crônicas: o que a psicoterapia faz e o que não faz',
    paragraphs: [
      'A psicoterapia não age sobre a doença. Age sobre o que o adoecimento faz com uma vida: a rotina que muda de dono, o corpo que deixa de ser confiável, os planos que ficam em suspenso. O acompanhamento psicológico é complementar ao tratamento médico e não o substitui: quem cuida do corpo é a equipe de saúde.',
      'Atendo pessoas que convivem com condições muito diferentes entre si, e também familiares e cuidadores. Não trato nenhuma dessas condições, isso é da medicina. A abordagem é a Logoterapia, criada pelo psiquiatra Viktor Frankl, que distingue o sofrimento que pode ser retirado daquele que só pode ser atravessado, e trabalha o que ainda está de pé.',
    ],
    etapasTitle: 'As três etapas do Método S.E.R.',
    etapas: [
      {
        letra: 'S',
        nome: 'Sentir com consciência',
        texto:
          'Dar nome ao que aparece — medo, raiva, culpa, cansaço, alívio — sem que isso vire mais uma tarefa da lista do tratamento. Sentimento nomeado ocupa menos espaço do que sentimento sem nome.',
      },
      {
        letra: 'E',
        nome: 'Entender a origem',
        texto:
          'Reconhecer de onde vem cada reação. Parte é do adoecimento; parte já estava lá antes dele e o diagnóstico apenas escancarou. Separar as duas coisas muda o peso de cada uma.',
      },
      {
        letra: 'R',
        nome: 'Responder com intenção',
        texto:
          'Escolher como responder ao que não foi escolhido. A condição de saúde não se decide; a postura diante dela, sim — e é aí que o trabalho terapêutico se concentra.',
      },
    ],
  },

  paraQuem: {
    title: 'Para quem é este atendimento',
    items: [
      'Convive com uma condição crônica de saúde e sente que o lado emocional ficou de fora do tratamento.',
      'Recebeu um diagnóstico recente e ainda não encontrou um jeito de falar sobre isso com alguém.',
      'Está num tratamento longo, de retornos frequentes, e a rotina passou a ser organizada pela doença.',
      'Convive com dor persistente e percebe o quanto isso afeta o humor, o sono, o trabalho e as relações.',
      'É familiar ou cuidador de alguém em tratamento e há tempos coloca as próprias necessidades por último.',
      'Passou por uma perda ligada ao adoecimento — de uma pessoa, de uma função do corpo, de um projeto de vida.',
    ],
    naoIndicadoTitle: 'Este atendimento não é indicado para',
    naoIndicado: [
      'Situações de emergência. Se houver risco imediato à própria vida ou à vida de outra pessoa, o caminho é SAMU 192, a emergência do hospital mais próximo ou o CVV 188, que atende 24 horas por dia.',
      'Substituir o tratamento da equipe de saúde. O acompanhamento psicológico é complementar ao tratamento médico e não o substitui.',
      'Orientação sobre a condição física. Exames, condutas e resultados são assunto da equipe médica, não do meu campo de atuação.',
      'Alívio imediato de sintoma físico. A psicoterapia não faz isso e eu não prometo isso.',
    ],
    ctaLabel: 'Falar comigo no WhatsApp',
  },

  comoFunciona: {
    title: 'Apoio psicológico para doença crônica: como funciona o atendimento',
    intro:
      'Um caminho pensado para quem já tem a agenda cheia de consultas e exames.',
    items: [
      {
        titulo: 'Uma primeira conversa',
        texto:
          'O primeiro encontro serve para entender a história de quem chega, o momento do tratamento e o que pesa mais agora — e para avaliarmos juntas se faz sentido seguirmos.',
      },
      {
        titulo: 'Sessões individuais',
        texto:
          'Encontros de cerca de 50 minutos. A periodicidade é definida em conjunto e revista ao longo do processo, conforme a demanda de cada pessoa.',
      },
      {
        titulo: 'Online ou presencial',
        texto:
          'Online por videochamada para todo o Brasil, e presencial em Goiânia-GO. Em dias de internação, de tratamento ou de indisposição, o horário pode ser remarcado.',
      },
      {
        titulo: 'Sigilo em ambiente reservado',
        texto:
          'O atendimento online acontece por videochamada em plataforma com conexão protegida, em ambiente sigiloso e sem gravação, conforme a Resolução CFP 9/2024. O registro do processo é guardado sob sigilo profissional.',
      },
      {
        titulo: 'Valores e agenda',
        texto:
          'Os valores são informados no primeiro contato, junto com os horários disponíveis.',
      },
    ],
  },

  faq: {
    title: 'Dúvidas de quem convive com uma condição crônica',
    items: [
      {
        question: 'A terapia vai me ajudar com a dor?',
        answer:
          'Vou ser honesta: a psicoterapia não age sobre a dor física e eu não prometo que ela diminua. Quem cuida disso é a equipe médica. O que a psicoterapia acompanha é a relação com a dor — o medo que vem antes dela, a irritação que vem depois, o isolamento que ela cria, a culpa por precisar parar. Isso não é pouco, e é um trabalho real. Mas é diferente de dizer que a dor vai passar, e eu não vou dizer isso.',
      },
      {
        question: 'Meu médico já cuida de mim. Por que eu preciso disso?',
        answer:
          'Porque são cuidados de naturezas diferentes, e um não ocupa o lugar do outro. O acompanhamento psicológico é complementar ao tratamento médico e não o substitui. A consulta médica tem tempo contado e uma pauta clínica a cumprir; raramente sobra espaço para o luto do corpo que era, para o medo do próximo exame ou para a conversa que ninguém teve com a família. Na Logoterapia, esse é justamente o material de trabalho.',
      },
      {
        question: 'Nunca fiz terapia. Como é a primeira conversa — e se eu não me adaptar?',
        answer:
          'Não é preciso saber nada sobre terapia antes de começar. A primeira conversa é uma conversa mesmo: eu escuto a história, o momento do tratamento e o que aperta mais, e explico como costumo trabalhar. Se ao final não fizer sentido, isso pode ser dito com todas as letras. Vínculo terapêutico não se força — quando não há encaixe, ajudo a pensar em outro caminho.',
      },
      {
        question: 'Faço tratamento e canso fácil. A terapia online funciona?',
        answer:
          'Funciona, e para muita gente em tratamento longo é o que torna o acompanhamento possível. A sessão acontece por videochamada, em ambiente sigiloso, de onde a pessoa estiver — de casa, no dia seguinte a um procedimento, sem deslocamento. É a mesma sessão, com a mesma duração e o mesmo sigilo do presencial. Se a preferência for presencial, atendo em Goiânia-GO.',
      },
      {
        question: 'Não sou eu quem está doente, sou eu quem cuida. Posso ser atendida?',
        answer:
          'Pode, e esse é um dos atendimentos que mais faltam. Quem cuida costuma chegar depois de meses de sono ruim, culpa por sentir raiva, medo do que vem e a sensação de não ter direito de reclamar, porque "quem está doente é o outro". Familiares e cuidadores — inclusive familiares de pacientes oncológicos — são atendidos aqui pelo que estão vivendo, não como apoio do tratamento de outra pessoa.',
      },
      {
        question: 'Não aceito minha doença e tenho medo de piorar. Dá para falar disso na terapia?',
        answer:
          'É exatamente sobre isso. A aceitação da doença crônica não é conformismo, nem resignação, nem parar de querer melhorar — e ela não chega por decisão nem em data marcada. O medo de piorar também tem lugar na sessão: em vez de ser empurrado para o canto, ele é examinado, para que ocupe o tamanho que de fato tem, e não o tamanho que ganha às três da manhã.',
      },
      {
        question: 'Quanto tempo dura o acompanhamento e como são os valores?',
        answer:
          'A duração varia conforme a demanda de cada pessoa. Em situações de adoecimento crônico, o acompanhamento tende a ser contínuo e a mudar de foco conforme a fase do tratamento — o começo, a rotina, as recaídas, as retomadas. Os objetivos são definidos em conjunto e revisados ao longo do processo. Os valores são informados no primeiro contato.',
      },
    ],
  },

  credenciais: {
    title: 'Quem vai te atender',
    paragraphs: [
      'Sou Larissa Nunes, psicóloga clínica, CRP 09/16269. Atuo na abordagem da Logoterapia, criada por Viktor Frankl, e atendo adultos online para todo o Brasil e presencial em Goiânia-GO.',
      'Parte relevante da minha experiência clínica se deu ao lado de pessoas em sofrimento severo: pacientes em hemodiálise e famílias em luto. Foi ali que aprendi a diferença entre o que se pode mudar e o que se pode habitar de outro jeito.',
      'O acompanhamento psicológico é complementar ao tratamento médico e não o substitui: trabalho lado a lado com o que a equipe de saúde conduz.',
    ],
  },

  artigos: {
    title: 'Para ler antes de decidir',
    intro: 'Escrevi estes textos sobre o que aparece com mais frequência em consulta.',
    items: [
      {
        slug: 'cansaco-emocional',
        titulo: 'Cansaço emocional: quando o descanso não resolve',
        resumo:
          'Sobre o esgotamento que não passa com descanso — comum em quem está há muito tempo em tratamento.',
      },
      {
        slug: 'mente-acelerada-ansiedade',
        titulo: 'Mente acelerada: o que alimenta o ciclo da ansiedade',
        resumo:
          'O que acontece com a mente diante da espera por exames, retornos e resultados.',
      },
      {
        slug: 'vazio-existencial',
        titulo: 'Vazio existencial: por que sinto isso?',
        resumo:
          'Quando a rotina passa a girar em torno da doença e o sentido parece ter ficado para trás.',
      },
    ],
  },

  fechamento: {
    title: 'O tratamento cuida do corpo. O resto também merece um lugar.',
    text: 'Conviver com uma condição crônica de saúde é uma tarefa em tempo integral, e quase sempre ela é feita em silêncio. Aqui existe um espaço em que a doença não é o assunto principal — a pessoa é. Me mande uma mensagem no WhatsApp, no seu tempo, e conversamos sobre como o acompanhamento pode funcionar. O acompanhamento psicológico é complementar ao tratamento médico e não o substitui.',
    ctaLabel: 'Falar comigo no WhatsApp',
  },
};
