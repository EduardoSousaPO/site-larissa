import type { LandingContent } from '../../types/landing';

/**
 * Conteúdo da LP de crise existencial / falta de sentido.
 * Copy aprovada em docs/ads/copy-psicologa-online-para-crise-existencial.md
 * Compliance verificado contra docs/ads/00-estrategia-google-ads.md §4.
 *
 * Decisão de posicionamento: "Logoterapia" é diferencial explicado dentro da
 * página, nunca gancho de H1 — a busca por "logoterapia" no Brasil é dominada
 * por cursos e pós-graduação, não por quem procura atendimento.
 */
export const criseExistencialContent: LandingContent = {
  slug: 'psicologa-online-para-crise-existencial',

  seo: {
    title: 'Psicóloga online para crise existencial | Larissa Nunes',
    description:
      'Atendimento psicológico online para quem atravessa uma crise existencial e falta de sentido. Abordagem em Logoterapia. Psicóloga CRP 09/16269.',
    keywords:
      'psicóloga online para crise existencial, terapia para crise existencial, psicólogo para vazio existencial, terapia para falta de propósito, psicóloga logoterapeuta, logoterapeuta online, terapia existencial online, logoterapia Goiânia',
    serviceName: 'Psicoterapia para crise existencial e falta de sentido',
    about: 'Crise existencial e falta de sentido',
  },

  whatsappMessage:
    'Olá, Larissa. Vim pelo site, pela página sobre crise existencial. Ando com a sensação de vazio e falta de sentido e queria entender como funciona o seu atendimento.',

  hero: {
    eyebrow: 'Psicóloga Larissa Nunes · CRP 09/16269',
    h1: 'Psicóloga online para crise existencial e falta de sentido',
    h1Accent: 'e falta de sentido',
    subtitle:
      'Atendimento psicológico para quem atravessa uma crise de sentido, vazio ou falta de propósito. Abordagem em Logoterapia, online para todo o Brasil e presencial em Goiânia-GO.',
    ctaLabel: 'Falar comigo no WhatsApp',
    microcopy:
      'A mensagem chega direto para mim. Os valores são informados no primeiro contato.',
  },

  sintomas: {
    title: 'Crise de sentido: talvez você reconheça alguns destes sinais',
    intro:
      'A lista abaixo não é um teste e não fecha diagnóstico. É o vocabulário com que as pessoas costumam descrever uma crise de sentido antes de ter um nome para ela.',
    items: [
      'Me sinto vazia por dentro, mesmo com uma vida que parece boa por fora.',
      'Me sinto perdida na vida e sem rumo, sem saber que direção tomar.',
      'Não sei o que fazer da minha vida e evito pensar nisso.',
      'Cumpro a rotina no automático, sem sentir que aquilo tem alguma razão.',
      'Me sinto vazia e sozinha, mesmo perto de quem gosta de mim.',
      'Perdi o interesse por coisas que antes me moviam e não sei explicar.',
      'Depois de uma perda ou de uma mudança grande, a vida perdeu o sentido.',
      'Tenho vergonha de falar disso, porque "não tenho do que reclamar".',
    ],
  },

  comoAjuda: {
    title: 'Como a psicoterapia pode ajudar quando a vida perde o sentido',
    paragraphs: [
      'Uma crise de sentido quase nunca chega com esse nome. Aparece como desinteresse, um cansaço que o descanso não resolve, a impressão de cumprir tarefas sem saber para quê. De fora a vida parece organizada; por dentro, falta a razão que sustenta o esforço.',
      'A abordagem é a Logoterapia, formulada pelo psiquiatra Viktor Frankl em "Em Busca de Sentido". O ponto clínico é este: mesmo diante do que não se pode mudar, resta alguma margem de resposta, e é nela que o trabalho acontece. Não é aula de filosofia, não é orientação espiritual e não é discurso de motivação. É psicoterapia, com enquadre definido.',
    ],
    etapasTitle: 'As três etapas do Método S.E.R.',
    etapas: [
      {
        letra: 'S',
        nome: 'Sentir com consciência',
        texto:
          'Dar nome ao que aparece antes do julgamento: o vazio, o cansaço, a irritação sem motivo aparente. Fundamentado na Logoterapia, o começo é a descrição honesta da experiência, não a pressa de resolvê-la.',
      },
      {
        letra: 'E',
        nome: 'Entender a origem',
        texto:
          'Olhar para a história por trás do sinal: escolhas, perdas, papéis assumidos, o que ficou de lado. A pergunta deixa de ser só "por que isso dói" e passa a ser "o que essa dor indica sobre o que importa para mim". O sofrimento é lido como informação, não como defeito.',
      },
      {
        letra: 'R',
        nome: 'Responder com intenção',
        texto:
          'Tratar da resposta possível hoje: decisões concretas, revisão de compromissos, retomada de vínculos e de atividades que carregam valor. O foco é a margem de liberdade diante da circunstância, mesmo quando a circunstância não muda.',
      },
    ],
  },

  paraQuem: {
    title: 'Para quem é este atendimento',
    items: [
      'Atravessa uma virada de fase — mudança de carreira, fim de uma relação, a chamada crise existencial dos 30 anos ou dos 40 — e perdeu a direção no caminho.',
      'Convive com a sensação de vazio há meses e já tentou dar conta sozinha, com leitura, disciplina ou conversa com amigos.',
      'Sente falta de propósito no trabalho ou no estudo e não consegue nomear o que mudou.',
      'Vive um luto, um diagnóstico ou uma perda e precisa de um lugar para reorganizar a vida em volta disso.',
      'Quer um acompanhamento que trate também de valores e de direção, e não só do alívio do sintoma.',
      'Prefere atendimento online, com discrição e sem deslocamento, ou presencial em Goiânia-GO.',
    ],
    naoIndicadoTitle: 'Este atendimento não é indicado para',
    naoIndicado: [
      'Situações de emergência ou risco à própria vida. Nesses casos o caminho é imediato e não passa por agendamento: CVV, telefone 188, 24 horas por dia; SAMU 192; ou o pronto-socorro mais próximo. Se houver pensamentos de morte ou de se machucar, procure ajuda agora por um desses canais.',
      'Quadros que exigem avaliação psiquiátrica ou medicação. Uma crise de sentido e um quadro depressivo grave não são a mesma coisa, ainda que possam caminhar juntos. Quando há sinais de quadro depressivo, o encaminhamento para avaliação médica faz parte do cuidado — o acompanhamento psicológico é complementar ao tratamento médico e não o substitui.',
      'Crianças e adolescentes. O atendimento é para pessoas adultas.',
      'Quem busca aconselhamento religioso, orientação filosófica ou mentoria de carreira. São trabalhos legítimos, mas outros. Aqui o que se oferece é psicoterapia.',
      'Emissão de laudo, parecer ou avaliação para fins judiciais e periciais.',
    ],
    ctaLabel: 'Falar comigo no WhatsApp',
  },

  comoFunciona: {
    title: 'Terapia para crise existencial: como funciona o atendimento',
    intro:
      'Uma conversa inicial, sem formulário longo e sem triagem automática, para entender o momento.',
    items: [
      {
        titulo: 'A primeira conversa',
        texto:
          'O primeiro contato é pelo WhatsApp, comigo. Serve para entender sua história, esclarecer dúvidas e ver se faz sentido seguirmos juntas. Não é preciso preparar nada nem saber explicar direito o que se passa — basta o que for possível dizer.',
      },
      {
        titulo: 'Sessões online, de onde você estiver',
        texto:
          'O atendimento a distância é regulamentado pela Resolução CFP 9/2024. As sessões acontecem por videochamada em plataforma com conexão criptografada. Atendo de sala reservada, com sigilo profissional; do seu lado, o combinado é um ambiente sigiloso, onde ninguém escute a sessão.',
      },
      {
        titulo: 'Presencial em Goiânia-GO',
        texto:
          'Para quem mora na região, o atendimento também acontece presencialmente, em consultório. A modalidade é escolhida no primeiro contato e pode ser ajustada depois.',
      },
      {
        titulo: 'Sessões individuais, cerca de 50 minutos',
        texto:
          'O acompanhamento é individual, com periodicidade definida em conjunto — na maior parte dos casos, semanal no início. Os objetivos são definidos junto com você e revisados ao longo do processo.',
      },
      {
        titulo: 'Valores e agenda',
        texto:
          'Os valores são informados no primeiro contato. Consulte os horários disponíveis pelo WhatsApp; a agenda contempla horários comerciais e alternativas para quem trabalha em horário fixo.',
      },
    ],
  },

  faq: {
    title: 'Dúvidas de quem procura terapia para crise existencial',
    items: [
      {
        question: 'Quanto tempo dura uma crise existencial?',
        answer:
          'Não existe tempo padrão. Para algumas pessoas é um período de semanas ligado a um evento específico; para outras, uma sensação de baixa intensidade que se arrasta por anos. A duração varia conforme a demanda de cada pessoa, e é justamente isso que avaliamos no início do acompanhamento. O que costuma alterar a experiência não é o calendário: é o que se faz com ela no percurso.',
      },
      {
        question: 'Isso é depressão ou é crise existencial?',
        answer:
          'São coisas diferentes, e às vezes coexistem. Uma crise de sentido em geral preserva a capacidade de se envolver quando algo importa — o que falta é direção, não a possibilidade de sentir. Um quadro depressivo tende a afetar sono, apetite, energia e a própria capacidade de sentir prazer, de forma persistente e por semanas seguidas. Essa diferenciação não se faz por texto na internet nem por teste online: a avaliação acontece dentro do processo de atendimento, e quando há indícios de quadro depressivo eu oriento a avaliação médica.',
      },
      {
        question: 'Nunca fiz terapia. Como é a primeira conversa sobre isso?',
        answer:
          'A primeira sessão é uma conversa para entender sua história e o que te trouxe até aqui. Você não precisa chegar com o problema organizado nem saber usar termos técnicos — a organização é parte do trabalho, não um pré-requisito. Ao final, explico como conduzo o acompanhamento e ficamos livres para decidir se faz sentido continuar.',
      },
      {
        question: 'Terapia online funciona para esse tipo de questão?',
        answer:
          'Funciona, e para questões de sentido o formato tem uma vantagem prática: a conversa acontece no seu ambiente, sem deslocamento, o que costuma facilitar a continuidade — e continuidade importa mais do que intensidade nesse tipo de demanda. O atendimento online segue a Resolução CFP 9/2024, por videochamada em plataforma com conexão criptografada.',
      },
      {
        question: 'O que é Logoterapia, na prática?',
        answer:
          'É a abordagem psicoterapêutica que orienta meu trabalho. Na prática, além de investigar a origem do sofrimento, ela dedica atenção clínica ao que sustenta a pessoa: valores, vínculos, compromissos, aquilo que ela considera digno do próprio esforço. Em vez de parar na pergunta "por que estou assim", o trabalho inclui a pergunta "para quê eu quero seguir". É psicoterapia, com respaldo na literatura em Psicologia — não é curso, não é palestra e não é conselho.',
      },
      {
        question: 'E se eu não me identificar com a psicóloga?',
        answer:
          'Acontece, e não é problema. A relação terapêutica é parte do trabalho e precisa fazer sentido para as duas partes. Se depois das primeiras sessões a percepção for de que não é comigo, pode dizer com tranquilidade — e, se fizer sentido, indico caminhos para outro profissional. Terapia interrompida por falta de encaixe é diferente de terapia que não serve.',
      },
      {
        question: 'Como são os valores e a frequência das sessões?',
        answer:
          'Os valores são informados no primeiro contato, pelo WhatsApp. As sessões são individuais, com cerca de 50 minutos, e a frequência é definida em conjunto, conforme a demanda e a rotina de cada pessoa. Trata-se de um espaço de cuidado continuado, com objetivos definidos em conjunto e revisados ao longo do processo.',
      },
    ],
  },

  credenciais: {
    title: 'Quem vai te atender',
    paragraphs: [
      'Sou Larissa Nunes, psicóloga clínica, CRP 09/16269. Atuo com adultos na abordagem da Logoterapia, online para todo o Brasil e presencial em Goiânia-GO.',
      'A maior parte da minha rotina é com pessoas que chegam por sofrimento existencial: vazio, falta de propósito, luto, viradas de fase. Acompanhei tratamentos em hemodiálise e perdas irreparáveis, e foi ali que a pergunta pelo sentido deixou de ser tema abstrato e virou ferramenta clínica.',
      'Não uso relato de paciente, avaliação republicada nem promessa de resultado nesta página: o Código de Ética veda esse tipo de divulgação.',
    ],
  },

  artigos: {
    title: 'Para ler antes de decidir',
    intro: 'Escrevi estes textos sobre o que aparece com mais frequência em consulta.',
    items: [
      {
        slug: 'vazio-existencial',
        titulo: 'Vazio existencial: por que sinto isso?',
        resumo:
          'O que está por trás da sensação de vazio e por que ela costuma aparecer justo quando a vida parece organizada.',
      },
      {
        slug: 'metodo-ser-mulheres-sobrecarregadas',
        titulo: 'Superando a Sobrecarga: O Método S.E.R.',
        resumo:
          'As três etapas do enquadre que uso no acompanhamento, aplicadas à rotina de quem carrega demais.',
      },
      {
        slug: 'como-parar-de-reagir-no-automatico',
        titulo: 'Como Parar de Reagir no Automático',
        resumo:
          'Por que a vida no piloto automático desgasta o sentido, e o que a psicoterapia observa nesse ponto.',
      },
    ],
  },

  fechamento: {
    title: 'O primeiro passo pode ser só uma conversa',
    text: 'Não é preciso ter clareza sobre o que se passa para começar. Uma frase incompleta já basta como ponto de partida — "me sinto vazia", "não sei o que fazer da minha vida", "perdi a direção". A partir daí conversamos sobre o que faz sentido para o seu momento, inclusive sobre a possibilidade de o caminho não ser comigo. Quando fizer sentido para você, minha caixa de mensagens está aberta.',
    ctaLabel: 'Falar comigo no WhatsApp',
  },
};
