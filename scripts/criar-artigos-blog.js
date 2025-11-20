// Script para criar artigos no blog via Firebase
// Execute com: node scripts/criar-artigos-blog.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Importar configuração do Firebase
const firebaseConfig = {
  // Use as mesmas configurações do seu firebase.ts
  apiKey: process.env.VITE_FIREBASE_API_KEY || "SUA_API_KEY",
  authDomain: "site-larissa-nunes.firebaseapp.com",
  projectId: "site-larissa-nunes",
  storageBucket: "site-larissa-nunes.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const artigos = [
  {
    titulo: "O que é Logoterapia? Como Viktor Frankl nos ensina a encontrar sentido na vida",
    resumo: "Descubra como a Logoterapia, criada por Viktor Frankl, pode ajudar você a encontrar propósito e sentido mesmo nos momentos mais difíceis da vida. Uma abordagem terapêutica humanizada e transformadora.",
    categoria: "Logoterapia",
    autor: "Dra. Larissa Nunes",
    tags: ["logoterapia", "Viktor Frankl", "sentido da vida", "propósito", "terapia", "psicologia", "Goiânia"],
    imagem: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
    conteudo: `<h2>Quando tudo parece perder o sentido</h2>
<p>Você já se sentiu perdido, como se a vida tivesse perdido o sentido? Talvez esteja passando por um momento difícil no trabalho, nos relacionamentos, ou simplesmente se questionando sobre o propósito de tudo isso. Se sim, você não está sozinho. E é exatamente para essas situações que a Logoterapia foi criada.</p>

<h2>Quem foi Viktor Frankl?</h2>
<p>Viktor Frankl foi um psiquiatra austríaco que sobreviveu aos campos de concentração nazistas durante a Segunda Guerra Mundial. Durante esse período terrível, ele observou algo fascinante: as pessoas que conseguiam encontrar um sentido, mesmo naquela situação extrema, tinham mais chances de sobreviver e manter a sanidade mental.</p>

<p>Essa experiência profunda o levou a desenvolver a Logoterapia, uma abordagem terapêutica que coloca a busca por sentido como a força motivadora central do ser humano. Frankl acreditava que, mesmo quando não podemos mudar as circunstâncias, sempre podemos escolher nossa atitude diante delas.</p>

<h2>Os três pilares da Logoterapia</h2>
<p>A Logoterapia se baseia em três conceitos fundamentais:</p>

<h3>1. Liberdade de Vontade</h3>
<p>Você tem a liberdade de escolher como responder às situações da vida. Mesmo quando tudo parece estar fora do seu controle, você ainda pode escolher sua atitude, seus valores e como vai enfrentar os desafios.</p>

<h3>2. Vontade de Sentido</h3>
<p>O ser humano tem uma necessidade profunda de encontrar significado na vida. Não é apenas sobre ser feliz o tempo todo, mas sobre encontrar propósito, mesmo nas dificuldades.</p>

<h3>3. Sentido da Vida</h3>
<p>O sentido não é algo que você "descobre" como um tesouro escondido. Ele é algo que você cria através das suas escolhas, ações e valores. Cada pessoa tem um sentido único, que pode ser encontrado em três áreas principais:</p>

<ul>
<li><strong>Através do trabalho e realizações:</strong> Contribuir com algo que você valoriza</li>
<li><strong>Através do amor e relacionamentos:</strong> Amar e ser amado, cuidar de outros</li>
<li><strong>Através da atitude diante do sofrimento:</strong> Encontrar significado mesmo quando não podemos mudar a situação</li>
</ul>

<h2>Como a Logoterapia funciona na prática?</h2>
<p>Na terapia, não trabalhamos apenas com sintomas ou problemas. Vamos além. Juntos, exploramos:</p>

<ul>
<li>Quais são seus valores mais profundos?</li>
<li>O que realmente importa para você?</li>
<li>Como você pode encontrar sentido mesmo nas dificuldades atuais?</li>
<li>Quais são suas forças e recursos internos?</li>
</ul>

<p>É um processo de autoconhecimento profundo, mas também prático. Não ficamos apenas na teoria - trabalhamos com situações reais da sua vida, ajudando você a encontrar caminhos concretos para viver com mais propósito.</p>

<h2>Para quem a Logoterapia é indicada?</h2>
<p>A Logoterapia pode ajudar pessoas que estão:</p>

<ul>
<li>Passando por crises existenciais</li>
<li>Sentindo que a vida perdeu o sentido</li>
<li>Lidando com ansiedade, depressão ou estresse</li>
<li>Em transições de vida (mudança de carreira, relacionamentos, etc.)</li>
<li>Buscando maior autoconhecimento e propósito</li>
<li>Querendo viver de forma mais alinhada com seus valores</li>
</ul>

<h2>Um convite à reflexão</h2>
<p>Frankl costumava dizer: "Quando não podemos mudar uma situação, somos desafiados a mudar a nós mesmos." Essa não é uma ideia fácil de aceitar, especialmente quando estamos sofrendo. Mas é também uma mensagem de esperança: você tem mais poder do que imagina para transformar sua experiência de vida.</p>

<p>Se você está se sentindo perdido, sem direção, ou simplesmente quer viver com mais propósito, a Logoterapia pode ser um caminho transformador. Não se trata de encontrar respostas prontas, mas de descobrir, junto com um profissional, quais são as suas respostas únicas.</p>

<div style="background-color: #f3f4f6; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0;">
<h3 style="color: #1f2937; margin-top: 0;">Quer explorar a Logoterapia?</h3>
<p style="color: #4b5563; margin-bottom: 1.5rem;">Se este artigo ressoou com você, talvez seja o momento de dar o próximo passo. A Logoterapia não é apenas uma teoria - é uma experiência prática que pode transformar a forma como você vê e vive sua vida.</p>
<p style="color: #4b5563; margin-bottom: 1.5rem;">Ofereço atendimento presencial em Goiânia e também online, para que você possa ter acesso a essa abordagem terapêutica única, independente de onde esteja.</p>
<p style="margin-bottom: 0;"><strong>Agende uma primeira sessão e descubra como encontrar sentido na sua jornada.</strong></p>
</div>`
  },
  {
    titulo: "Ansiedade nos Tempos Atuais: Como a Logoterapia Pode Ajudar Quando Tudo Parece Demais",
    resumo: "A ansiedade está cada vez mais presente em nossas vidas. Descubra como a Logoterapia oferece uma perspectiva única para lidar com a ansiedade moderna, encontrando sentido mesmo em meio ao caos.",
    categoria: "Ansiedade",
    autor: "Dra. Larissa Nunes",
    tags: ["ansiedade", "logoterapia", "saúde mental", "estresse", "terapia", "Goiânia", "ansiedade Goiânia"],
    imagem: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop",
    conteudo: `<h2>Ansiedade: o mal do nosso tempo</h2>
<p>Você já acordou com aquela sensação de aperto no peito, pensamentos acelerados, preocupações que não param de girar na cabeça? Se sim, você faz parte de um número crescente de pessoas que convivem com a ansiedade no dia a dia.</p>

<p>Nos últimos anos, especialmente após a pandemia, a ansiedade se tornou ainda mais presente. Trabalho remoto, incertezas econômicas, redes sociais, pressão por produtividade constante... Tudo isso cria um ambiente perfeito para a ansiedade florescer.</p>

<h2>O que a ansiedade realmente é?</h2>
<p>A ansiedade, em si, não é necessariamente ruim. Ela é uma resposta natural do nosso corpo a situações de ameaça ou incerteza. O problema surge quando essa resposta se torna crônica, excessiva, e começa a interferir na nossa capacidade de viver bem.</p>

<p>Mas aqui está algo importante que a Logoterapia nos ensina: a ansiedade muitas vezes está relacionada não apenas ao medo, mas também à sensação de que estamos perdendo algo, de que não estamos vivendo da forma como deveríamos, ou de que não temos controle sobre nossa vida.</p>

<h2>Ansiedade e a busca por sentido</h2>
<p>Viktor Frankl observou que muitas vezes a ansiedade surge quando sentimos que nossa vida está sem direção, sem propósito claro. Quando não sabemos para onde estamos indo, ou quando sentimos que estamos desperdiçando nosso tempo, a ansiedade pode aparecer como um sinal de alerta.</p>

<p>Pense nisso: quantas vezes você se sentiu ansioso não por causa de algo específico, mas por uma sensação geral de que "algo não está certo"? Essa sensação pode ser seu sistema interno tentando te alertar que você precisa de mais clareza, mais propósito, mais alinhamento com seus valores.</p>

<h2>Como a Logoterapia aborda a ansiedade?</h2>
<p>Diferente de abordagens que focam apenas em reduzir sintomas, a Logoterapia vai mais fundo. Ela pergunta: <strong>O que essa ansiedade está tentando me dizer?</strong></p>

<h3>1. Identificando os valores por trás da ansiedade</h3>
<p>Muitas vezes, a ansiedade surge quando estamos vivendo de forma desalinhada com nossos valores. Talvez você esteja trabalhando em algo que não faz sentido para você, ou mantendo relacionamentos que não te nutrem, ou simplesmente vivendo no piloto automático.</p>

<p>Na terapia, exploramos: o que realmente importa para você? O que você valoriza? E como você pode viver de forma mais alinhada com isso?</p>

<h3>2. Encontrando propósito nas escolhas</h3>
<p>A ansiedade também pode aparecer quando sentimos que não temos controle sobre nossas escolhas. A Logoterapia nos lembra que sempre temos a liberdade de escolher nossa atitude, mesmo quando não podemos mudar as circunstâncias.</p>

<p>Isso não significa ignorar a ansiedade ou "pensar positivo". Significa reconhecer que você tem mais poder do que imagina para dar direção à sua vida.</p>

<h3>3. Transformando a ansiedade em ação</h3>
<p>Em vez de apenas tentar "eliminar" a ansiedade, podemos usá-la como um sinal. Ela pode nos indicar áreas da vida que precisam de atenção, valores que não estão sendo honrados, ou caminhos que precisam ser tomados.</p>

<h2>Estratégias práticas para lidar com a ansiedade</h2>
<p>Além do trabalho terapêutico, existem algumas práticas que podem ajudar:</p>

<ul>
<li><strong>Respiração consciente:</strong> Quando a ansiedade aparecer, pare por alguns minutos e respire profundamente. Isso ajuda a acalmar o sistema nervoso.</li>
<li><strong>Valores claros:</strong> Escreva quais são seus valores principais. Quando você sabe o que importa, fica mais fácil tomar decisões e reduzir a ansiedade da indecisão.</li>
<li><strong>Presença no momento:</strong> A ansiedade muitas vezes vive no futuro (preocupações) ou no passado (arrependimentos). Praticar estar presente no aqui e agora pode ajudar.</li>
<li><strong>Ação alinhada:</strong> Pequenas ações diárias que estejam alinhadas com seus valores podem reduzir a sensação de "vida sem sentido" que alimenta a ansiedade.</li>
</ul>

<h2>Quando buscar ajuda profissional?</h2>
<p>Se a ansiedade está:</p>
<ul>
<li>Interferindo no seu trabalho ou relacionamentos</li>
<li>Causando sintomas físicos persistentes</li>
<li>Impedindo você de fazer coisas que gostaria</li>
<li>Durando semanas ou meses</li>
<li>Afetando sua qualidade de sono</li>
</ul>

<p>É importante buscar ajuda profissional. A ansiedade é tratável, e você não precisa passar por isso sozinho.</p>

<h2>Um convite à transformação</h2>
<p>A ansiedade não precisa ser seu inimigo. Ela pode ser um sinal, um alerta, uma oportunidade de olhar mais profundamente para sua vida e fazer mudanças significativas.</p>

<p>Na Logoterapia, trabalhamos não apenas para reduzir a ansiedade, mas para ajudá-lo a viver uma vida mais significativa, alinhada com seus valores, onde a ansiedade perde espaço porque você está vivendo com propósito.</p>

<div style="background-color: #fef3c7; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #f59e0b;">
<h3 style="color: #92400e; margin-top: 0;">Você não precisa enfrentar a ansiedade sozinho</h3>
<p style="color: #78350f; margin-bottom: 1.5rem;">Se a ansiedade está impactando sua vida, considere buscar ajuda profissional. Ofereço atendimento presencial em Goiânia e também online, utilizando a abordagem da Logoterapia para ajudá-lo a encontrar sentido e propósito, mesmo em meio à ansiedade.</p>
<p style="color: #78350f; margin-bottom: 1.5rem;">Juntos, podemos explorar o que sua ansiedade está tentando comunicar e como você pode transformar essa experiência em um caminho de crescimento e autoconhecimento.</p>
<p style="margin-bottom: 0;"><strong><a href="/agendamento" style="color: #d97706; text-decoration: underline;">Agende uma sessão e dê o primeiro passo em direção a uma vida com menos ansiedade e mais propósito.</a></strong></p>
</div>`
  },
  {
    titulo: "Crise Existencial: Quando a Vida Parece Sem Sentido e Como Encontrar o Caminho de Volta",
    resumo: "Passando por uma crise existencial? Descubra como a Logoterapia pode ajudar você a encontrar sentido novamente, mesmo quando tudo parece sem propósito. Uma abordagem humanizada para momentos difíceis.",
    categoria: "Crise Existencial",
    autor: "Dra. Larissa Nunes",
    tags: ["crise existencial", "sentido da vida", "propósito", "logoterapia", "depressão", "terapia", "Goiânia"],
    imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    conteudo: `<h2>O momento em que tudo perde o sentido</h2>
<p>Você já teve aquela sensação de que, de repente, nada faz mais sentido? Talvez você tenha alcançado um objetivo importante e se perguntado: "E agora? Isso era tudo?" Ou talvez esteja passando por uma perda, uma mudança grande, ou simplesmente acordou um dia sentindo que está vivendo no piloto automático, sem saber por quê.</p>

<p>Essa experiência tem um nome: crise existencial. E, ao contrário do que muitos pensam, ela não é necessariamente ruim. Na verdade, pode ser um momento de profunda transformação.</p>

<h2>O que é uma crise existencial?</h2>
<p>Uma crise existencial acontece quando questionamos os fundamentos da nossa existência: quem somos, por que estamos aqui, qual é o sentido de tudo isso. É um momento de profunda reflexão sobre a vida, os valores, e o propósito.</p>

<p>Essas crises podem ser desencadeadas por:</p>
<ul>
<li>Mudanças significativas na vida (perda de emprego, término de relacionamento, mudança de cidade)</li>
<li>Conquistas que não trouxeram a satisfação esperada</li>
<li>Perdas importantes (morte de alguém querido, fim de um ciclo)</li>
<li>Idade e estágios de vida (crise dos 30, 40, 50 anos)</li>
<li>Questionamentos sobre carreira e propósito profissional</li>
<li>Experiências que desafiam nossas crenças fundamentais</li>
</ul>

<h2>Por que isso acontece?</h2>
<p>Viktor Frankl, criador da Logoterapia, acreditava que a busca por sentido é uma necessidade fundamental do ser humano. Quando sentimos que nossa vida está sem direção, sem propósito, nosso sistema interno nos alerta - e isso pode se manifestar como uma crise existencial.</p>

<p>É como se nossa alma estivesse nos dizendo: "Espera, algo não está certo. Precisamos de mais significado, mais propósito, mais alinhamento com quem realmente somos."</p>

<h2>Sinais de uma crise existencial</h2>
<p>Como saber se você está passando por uma? Alguns sinais comuns incluem:</p>

<ul>
<li>Sensação de vazio ou falta de propósito</li>
<li>Questionamentos constantes sobre o sentido da vida</li>
<li>Sentimento de que está "perdendo tempo" ou "vivendo errado"</li>
<li>Dificuldade para encontrar motivação</li>
<li>Sentimento de isolamento, mesmo cercado de pessoas</li>
<li>Questionamentos sobre valores e crenças que antes eram sólidos</li>
<li>Sensação de que precisa de uma mudança, mas não sabe qual</li>
</ul>

<h2>A crise como oportunidade</h2>
<p>Aqui está algo importante: uma crise existencial não é necessariamente algo a ser "resolvido" ou "superado". Ela pode ser uma oportunidade profunda de crescimento, de autoconhecimento, de realinhamento com seus valores verdadeiros.</p>

<p>Muitas pessoas que passam por crises existenciais e as enfrentam com coragem e apoio adequado, saem transformadas - mais autênticas, mais alinhadas com seus valores, vivendo com mais propósito.</p>

<h2>Como a Logoterapia pode ajudar?</h2>
<p>A Logoterapia foi criada especificamente para ajudar pessoas em momentos de crise existencial. Ela não oferece respostas prontas, mas cria um espaço seguro para você explorar suas próprias respostas.</p>

<h3>1. Explorando seus valores</h3>
<p>Juntos, exploramos: o que realmente importa para você? Quais são seus valores fundamentais? O que você quer que sua vida represente?</p>

<p>Muitas vezes, descobrimos que estamos vivendo de acordo com valores que não são nossos - valores da sociedade, da família, de outras pessoas. A crise pode ser um sinal de que precisamos realinhar nossa vida com nossos valores verdadeiros.</p>

<h3>2. Encontrando sentido nas três áreas</h3>
<p>Frankl identificou três áreas principais onde podemos encontrar sentido:</p>

<ul>
<li><strong>Através do trabalho e realizações:</strong> Contribuir com algo que você valoriza, usar seus talentos de forma significativa</li>
<li><strong>Através do amor e relacionamentos:</strong> Amar profundamente, cuidar de outros, criar conexões autênticas</li>
<li><strong>Através da atitude diante do sofrimento:</strong> Encontrar significado mesmo quando não podemos mudar a situação</li>
</ul>

<p>Na terapia, exploramos essas três áreas na sua vida: onde você já encontra sentido? Onde poderia encontrar mais?</p>

<h3>3. Liberdade e responsabilidade</h3>
<p>A Logoterapia nos lembra que temos liberdade de escolher nossa atitude, mesmo quando não podemos mudar as circunstâncias. Isso não é uma pressão, mas uma libertação: você tem mais poder do que imagina para dar direção à sua vida.</p>

<h2>Estratégias para navegar a crise</h2>
<p>Além do trabalho terapêutico, algumas práticas podem ajudar:</p>

<ul>
<li><strong>Diário de reflexão:</strong> Escrever sobre seus questionamentos, valores, e o que você quer para sua vida</li>
<li><strong>Conversas profundas:</strong> Falar com pessoas que você confia sobre suas questões existenciais</li>
<li><strong>Exploração criativa:</strong> Arte, música, escrita - formas de expressar e explorar seus sentimentos</li>
<li><strong>Natureza e silêncio:</strong> Tempo sozinho em contato com a natureza pode facilitar reflexões profundas</li>
<li><strong>Leitura e estudo:</strong> Explorar filosofia, psicologia, histórias de pessoas que passaram por transformações similares</li>
</ul>

<h2>Quando buscar ajuda profissional?</h2>
<p>Uma crise existencial pode ser transformadora, mas também pode ser esmagadora. É importante buscar ajuda profissional se:</p>

<ul>
<li>A crise está durando meses e não parece estar melhorando</li>
<li>Está afetando sua capacidade de trabalhar ou manter relacionamentos</li>
<li>Está levando a sintomas de depressão ou ansiedade severa</li>
<li>Você está tendo pensamentos sobre autolesão ou suicídio</li>
<li>Você sente que não consegue navegar sozinho</li>
</ul>

<p>Lembre-se: buscar ajuda não é sinal de fraqueza. É um ato de coragem e autocuidado.</p>

<h2>Um convite à jornada</h2>
<p>Se você está passando por uma crise existencial, quero que saiba: você não está sozinho. Muitas pessoas passam por isso, e muitas saem transformadas para melhor.</p>

<p>A crise pode ser um convite para viver de forma mais autêntica, mais alinhada com seus valores, com mais propósito e significado. Não é um caminho fácil, mas pode ser profundamente transformador.</p>

<div style="background-color: #ede9fe; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #7c3aed;">
<h3 style="color: #5b21b6; margin-top: 0;">Você não precisa navegar essa crise sozinho</h3>
<p style="color: #6d28d9; margin-bottom: 1.5rem;">Crises existenciais podem ser momentos profundos de transformação, mas também podem ser esmagadores quando enfrentados sozinhos. A Logoterapia oferece um espaço seguro e acolhedor para explorar suas questões existenciais e encontrar seu próprio caminho de sentido.</p>
<p style="color: #6d28d9; margin-bottom: 1.5rem;">Ofereço atendimento presencial em Goiânia e também online, utilizando a abordagem da Logoterapia para ajudá-lo a navegar essa crise e encontrar significado, propósito e direção.</p>
<p style="margin-bottom: 0;"><strong><a href="/agendamento" style="color: #7c3aed; text-decoration: underline;">Agende uma sessão e comece sua jornada de transformação.</a></strong></p>
</div>`
  },
  {
    titulo: "Terapia Online: Funciona? Tudo o que Você Precisa Saber Sobre Atendimento Psicológico à Distância",
    resumo: "Terapia online é eficaz? Como funciona? Descubra tudo sobre atendimento psicológico online, seus benefícios, e como a Logoterapia pode ser aplicada com sucesso no formato digital.",
    categoria: "Terapia Online",
    autor: "Dra. Larissa Nunes",
    tags: ["terapia online", "psicólogo online", "atendimento online", "terapia remota", "saúde mental", "logoterapia online", "Goiânia"],
    imagem: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop",
    conteudo: `<h2>O mundo mudou, e a terapia também</h2>
<p>Nos últimos anos, especialmente após a pandemia, a terapia online se tornou uma realidade para muitas pessoas. Mas ainda existem dúvidas: funciona mesmo? É tão eficaz quanto a terapia presencial? Como garantir privacidade e segurança?</p>

<p>Como psicóloga que oferece atendimento tanto presencial em Goiânia quanto online, posso dizer com confiança: sim, a terapia online funciona. E vou explicar o porquê.</p>

<h2>O que a pesquisa diz?</h2>
<p>Estudos científicos têm mostrado consistentemente que a terapia online (também chamada de teleterapia ou terapia remota) pode ser tão eficaz quanto a terapia presencial para muitas condições, incluindo:</p>

<ul>
<li>Ansiedade</li>
<li>Depressão</li>
<li>Estresse</li>
<li>Transtornos de humor</li>
<li>Questões relacionais</li>
<li>Crises existenciais</li>
</ul>

<p>O importante não é tanto o formato (presencial ou online), mas sim a qualidade da relação terapêutica, a competência do profissional, e o comprometimento do paciente com o processo.</p>

<h2>Como funciona a terapia online?</h2>
<p>A terapia online funciona de forma muito similar à presencial. Você e eu nos encontramos em uma videochamada segura, em horários agendados, e trabalhamos juntos nas questões que você traz.</p>

<p>O processo é o mesmo: criamos um espaço seguro de escuta, exploração e crescimento. A única diferença é que estamos em locais físicos diferentes, mas emocionalmente e terapeuticamente, estamos juntos.</p>

<h2>Benefícios da terapia online</h2>
<p>Existem várias vantagens importantes:</p>

<h3>1. Acessibilidade</h3>
<p>Você pode fazer terapia de qualquer lugar - sua casa, seu trabalho (em um espaço privado), até mesmo quando está viajando. Isso é especialmente valioso para pessoas que:</p>
<ul>
<li>Moram longe de bons profissionais</li>
<li>Têm dificuldades de locomoção</li>
<li>Têm agendas muito apertadas</li>
<li>Preferem a comodidade de estar em casa</li>
</ul>

<h3>2. Flexibilidade de horários</h3>
<p>Sem tempo de deslocamento, você pode ter sessões em horários que seriam difíceis presencialmente. Isso facilita muito para quem trabalha muito ou tem uma rotina complicada.</p>

<h3>3. Conforto e privacidade</h3>
<p>Muitas pessoas se sentem mais à vontade falando de casa, em seu próprio ambiente. Isso pode facilitar a abertura e o compartilhamento de questões sensíveis.</p>

<h3>4. Continuidade</h3>
<p>Mesmo se você viajar ou mudar de cidade, pode continuar com o mesmo terapeuta. Isso é especialmente valioso quando você já estabeleceu uma relação terapêutica forte.</p>

<h3>5. Segurança em tempos de pandemia</h3>
<p>Em momentos de preocupação com saúde pública, a terapia online oferece uma alternativa segura.</p>

<h2>E a Logoterapia online? Funciona?</h2>
<p>Absolutamente. A Logoterapia, como abordagem focada em significado e propósito, não depende de estar no mesmo espaço físico. O trabalho de explorar valores, encontrar sentido, e trabalhar com questões existenciais funciona perfeitamente online.</p>

<p>Na verdade, muitas pessoas encontram que a terapia online facilita até mesmo a reflexão profunda, porque estão em um ambiente onde se sentem mais confortáveis e seguras.</p>

<h2>Como garantir uma boa experiência?</h2>
<p>Para que a terapia online funcione bem, alguns cuidados são importantes:</p>

<h3>1. Espaço privado e silencioso</h3>
<p>Escolha um lugar onde você não será interrompido e onde se sinta seguro para falar abertamente. Pode ser um quarto, um escritório, ou qualquer espaço privado.</p>

<h3>2. Conexão estável</h3>
<p>Uma boa conexão de internet ajuda muito. Se sua conexão não for estável, considere usar dados móveis ou encontrar um local com Wi-Fi confiável.</p>

<h3>3. Dispositivo adequado</h3>
<p>Um computador ou tablet geralmente oferece uma experiência melhor que um celular, mas qualquer dispositivo com câmera e microfone funciona.</p>

<h3>4. Comprometimento</h3>
<p>Trate a sessão online com a mesma seriedade que uma presencial. Esteja presente, focado, e comprometido com o processo.</p>

<h2>Privacidade e segurança</h2>
<p>É natural se preocupar com privacidade. Por isso, utilizo plataformas seguras e criptografadas para as sessões, seguindo todas as diretrizes éticas e legais para terapia online.</p>

<p>Sua privacidade e confidencialidade são protegidas da mesma forma que em sessões presenciais. Na verdade, muitas vezes até mais, porque você está em seu próprio espaço.</p>

<h2>Quando a terapia presencial pode ser melhor?</h2>
<p>Embora a terapia online funcione muito bem para a maioria das pessoas e situações, há alguns casos onde a terapia presencial pode ser preferível:</p>

<ul>
<li>Quando você não tem um espaço privado para as sessões</li>
<li>Quando a conexão de internet é muito instável</li>
<li>Quando você tem preferência pessoal pelo contato presencial</li>
<li>Em alguns casos muito específicos de transtornos graves (que seriam avaliados individualmente)</li>
</ul>

<p>Por isso, ofereço ambas as opções - você pode escolher o que funciona melhor para você, ou até mesmo alternar entre presencial e online conforme sua necessidade.</p>

<h2>Um convite à experiência</h2>
<p>Se você está considerando terapia online mas ainda tem dúvidas, minha sugestão é: experimente. Muitas pessoas descobrem que preferem a terapia online, outras preferem presencial, e outras ainda gostam de alternar.</p>

<p>O importante é encontrar o formato que funciona melhor para você e que facilita seu processo de crescimento e autoconhecimento.</p>

<div style="background-color: #dbeafe; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #3b82f6;">
<h3 style="color: #1e40af; margin-top: 0;">Experimente a terapia online</h3>
<p style="color: #1e3a8a; margin-bottom: 1.5rem;">Se você está considerando terapia mas tem dificuldades com horários, locomoção, ou simplesmente prefere a comodidade de estar em casa, a terapia online pode ser uma excelente opção.</p>
<p style="color: #1e3a8a; margin-bottom: 1.5rem;">Ofereço atendimento online com a mesma qualidade e comprometimento do atendimento presencial, utilizando a abordagem da Logoterapia para ajudá-lo a encontrar sentido e propósito na sua vida.</p>
<p style="color: #1e3a8a; margin-bottom: 1.5rem;">As sessões são realizadas em plataformas seguras e criptografadas, garantindo sua privacidade e confidencialidade.</p>
<p style="margin-bottom: 0;"><strong><a href="/agendamento" style="color: #2563eb; text-decoration: underline;">Agende uma sessão online e descubra como a terapia pode funcionar para você, no conforto da sua casa.</a></strong></p>
</div>`
  },
  {
    titulo: "Depressão e a Busca por Sentido: Como a Logoterapia Oferece uma Perspectiva Única para o Tratamento",
    resumo: "A depressão vai além dos sintomas. Descubra como a Logoterapia aborda a depressão de forma única, explorando o sentido da vida e ajudando pessoas a encontrar propósito mesmo nos momentos mais difíceis.",
    categoria: "Depressão",
    autor: "Dra. Larissa Nunes",
    tags: ["depressão", "logoterapia", "sentido da vida", "tratamento depressão", "saúde mental", "terapia", "Goiânia", "depressão Goiânia"],
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=600&fit=crop",
    conteudo: `<h2>Depressão: mais que sintomas</h2>
<p>A depressão é uma das condições de saúde mental mais comuns do nosso tempo. E embora seja frequentemente descrita em termos de sintomas - tristeza, falta de energia, perda de interesse - ela vai muito além disso.</p>

<p>Muitas pessoas que vivenciam depressão descrevem algo mais profundo: uma sensação de vazio, de falta de sentido, de que a vida perdeu seu propósito. E é exatamente aqui que a Logoterapia oferece uma perspectiva única e poderosa.</p>

<h2>Entendendo a depressão</h2>
<p>A depressão não é simplesmente "estar triste". É uma condição complexa que afeta pensamentos, emoções, corpo e espírito. Pode ser desencadeada por fatores biológicos, psicológicos, sociais, e também existenciais.</p>

<p>Viktor Frankl, criador da Logoterapia, observou que muitas vezes a depressão está relacionada não apenas a desequilíbrios químicos ou traumas, mas também a uma sensação profunda de que a vida perdeu seu significado, seu propósito.</p>

<h2>A depressão e a perda de sentido</h2>
<p>Quando falo com pessoas que estão passando por depressão, muitas vezes escuto coisas como:</p>

<ul>
<li>"Não vejo sentido em nada"</li>
<li>"Tudo parece vazio"</li>
<li>"Não sei mais por que estou aqui"</li>
<li>"Nada importa"</li>
<li>"Perdi o propósito"</li>
</ul>

<p>Essas não são apenas expressões de tristeza - são expressões de uma perda profunda de sentido. E é aqui que a Logoterapia pode fazer uma diferença significativa.</p>

<h2>Como a Logoterapia aborda a depressão?</h2>
<p>A Logoterapia não substitui tratamentos médicos quando necessário, mas oferece uma dimensão adicional e profundamente transformadora. Ela trabalha com a ideia de que encontrar sentido pode ser uma força curativa poderosa.</p>

<h3>1. Reconhecendo a experiência única</h3>
<p>Cada pessoa vivencia a depressão de forma única. Na Logoterapia, não tratamos apenas "sintomas de depressão" - trabalhamos com você como pessoa única, com sua história, seus valores, seus recursos internos.</p>

<p>Juntos, exploramos: o que está acontecendo na sua vida? O que pode ter contribuído para essa perda de sentido? Quais são seus valores e como você pode realinhar sua vida com eles?</p>

<h3>2. Encontrando sentido mesmo na dificuldade</h3>
<p>Frankl acreditava que mesmo no sofrimento mais profundo, podemos encontrar significado. Isso não significa minimizar a dor ou dizer "pense positivo". Significa reconhecer que você tem a capacidade de encontrar propósito mesmo em momentos difíceis.</p>

<p>Isso pode acontecer através de:</p>
<ul>
<li><strong>Valores de criação:</strong> Contribuir com algo que você valoriza, usar seus talentos</li>
<li><strong>Valores de experiência:</strong> Amar, ser amado, apreciar a beleza, conectar-se profundamente</li>
<li><strong>Valores de atitude:</strong> Encontrar significado na forma como você enfrenta o sofrimento</li>
</ul>

<h3>3. Liberdade e responsabilidade</h3>
<p>A depressão pode fazer você sentir que não tem escolhas, que está preso. A Logoterapia nos lembra que, mesmo quando não podemos mudar as circunstâncias, sempre temos a liberdade de escolher nossa atitude.</p>

<p>Isso não é uma pressão para "se animar" - é um reconhecimento de que você tem mais poder do que a depressão faz você acreditar.</p>

<h3>4. Trabalhando com valores</h3>
<p>Muitas vezes, a depressão surge quando estamos vivendo de forma desalinhada com nossos valores. Talvez você esteja em um trabalho que não faz sentido, em relacionamentos que não nutrem, ou simplesmente vivendo no piloto automático.</p>

<p>Na terapia, exploramos: quais são seus valores verdadeiros? Como você pode viver de forma mais alinhada com eles? Pequenos passos nessa direção podem fazer uma diferença significativa.</p>

<h2>A abordagem integrada</h2>
<p>É importante dizer: a Logoterapia não é uma alternativa a tratamentos médicos quando necessário. Em casos de depressão moderada a severa, pode ser importante combinar terapia com acompanhamento psiquiátrico.</p>

<p>A Logoterapia oferece uma dimensão adicional: trabalhar com o sentido, o propósito, os valores. Isso pode ser profundamente curativo e transformador, especialmente quando combinado com outros tratamentos quando necessário.</p>

<h2>Sinais de que pode ser útil buscar ajuda</h2>
<p>Se você está experimentando:</p>

<ul>
<li>Tristeza persistente que não melhora</li>
<li>Perda de interesse em atividades que antes gostava</li>
<li>Mudanças significativas no sono ou apetite</li>
<li>Fadiga constante</li>
<li>Dificuldade de concentração</li>
<li>Sentimentos de desesperança ou vazio</li>
<li>Pensamentos sobre morte ou suicídio</li>
<li>Sensação de que a vida perdeu o sentido</li>
</ul>

<p>É importante buscar ajuda profissional. A depressão é tratável, e você não precisa passar por isso sozinho.</p>

<h2>O caminho da recuperação</h2>
<p>A recuperação da depressão não é linear. Pode haver altos e baixos, dias melhores e dias mais difíceis. Mas com apoio adequado, incluindo terapia, é possível encontrar um caminho de volta ao sentido, ao propósito, à vida.</p>

<p>A Logoterapia pode ser especialmente útil nesse processo porque trabalha não apenas com a redução de sintomas, mas com a construção de uma vida significativa, alinhada com seus valores, onde a depressão perde espaço porque você está vivendo com propósito.</p>

<h2>Um convite à esperança</h2>
<p>Se você está passando por depressão, quero que saiba: há esperança. A depressão não define você, e não precisa ser permanente. Com o apoio certo, incluindo terapia que trabalhe com sentido e propósito, é possível encontrar um caminho de volta.</p>

<p>Você não está sozinho nessa jornada. E você não precisa passar por isso sozinho.</p>

<div style="background-color: #fce7f3; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #ec4899;">
<h3 style="color: #9f1239; margin-top: 0;">Você não precisa enfrentar a depressão sozinho</h3>
<p style="color: #831843; margin-bottom: 1.5rem;">A depressão pode fazer você sentir que está sozinho, mas você não está. A Logoterapia oferece uma abordagem única para trabalhar com a depressão, explorando não apenas os sintomas, mas também o sentido, o propósito, e os valores que podem ser profundamente curativos.</p>
<p style="color: #831843; margin-bottom: 1.5rem;">Ofereço atendimento presencial em Goiânia e também online, utilizando a abordagem da Logoterapia para ajudá-lo a encontrar sentido e propósito, mesmo em meio à depressão.</p>
<p style="color: #831843; margin-bottom: 1.5rem;">Se você está tendo pensamentos sobre autolesão ou suicídio, por favor, busque ajuda imediata. Você pode ligar para o CVV (188) a qualquer momento.</p>
<p style="margin-bottom: 0;"><strong><a href="/agendamento" style="color: #db2777; text-decoration: underline;">Agende uma sessão e dê o primeiro passo em direção à recuperação e ao sentido.</a></strong></p>
</div>`
  }
];

async function criarArtigos() {
  try {
    console.log('Iniciando criação de artigos...');
    
    for (const artigo of artigos) {
      const docRef = await addDoc(collection(db, 'blog_posts'), {
        ...artigo,
        dataCriacao: serverTimestamp(),
        visualizacoes: 0
      });
      console.log(`Artigo criado: ${artigo.titulo} (ID: ${docRef.id})`);
    }
    
    console.log('Todos os artigos foram criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar artigos:', error);
  }
}

// Executar
criarArtigos();

