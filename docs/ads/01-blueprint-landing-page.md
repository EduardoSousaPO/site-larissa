# Blueprint da Landing Page — comum às 4 páginas

> Esqueleto único, preenchido por dados. Base: recomendação da consultoria endossada pela Dra. Larissa (§1.2 do briefing) + benchmark de CRO em psicoterapia + requisitos de "landing page experience" do Google Ads.
> Implementação: componentes em `src/components/lp/`, conteúdo em `src/content/landing/<slug>.ts`. **Zero JSX duplicado entre as 4 páginas.**

---

## 0. Revisão de 19/08/2026 — menos texto, com fotos

A primeira versão entregou nove seções em pilha centrada, com grade de cartões em quase todas e cerca de 1.900 palavras visíveis por página. Lia como artigo, não como landing page. Revisão pedida pela Dra. Larissa, tomando como referência de **lógica de apresentação** (não de estética) o site `site-odonto-vip.vercel.app`.

**O que mudou:**

- **Sete seções em vez de nove.** `SintomasSection` + `ParaQuemSection` viraram [`SinaisSection`](../../src/components/lp/SinaisSection.tsx) — ambas respondiam à mesma pergunta ("isso é sobre mim?") e respondê-la duas vezes diluía a resposta. `CredenciaisSection` foi absorvida por [`ComoFuncionaSection`](../../src/components/lp/ComoFuncionaSection.tsx).
- **Três fotos da Dra. Larissa**, via [`PortraitFrame`](../../src/components/lp/PortraitFrame.tsx): consultório na primeira dobra, escrivaninha nos sinais, atendimento online em "como funciona". A do notebook é deliberada: quem procura terapia online quer ver como a sessão acontece.
- **Primeira dobra em duas colunas**, fundo `primary-950`, alinhada à esquerda. No mobile a foto grande vem depois do CTA (a dobra é o que decide), mas o rosto já aparece no retrato pequeno ao lado do nome.
- **Fim dos cartões** nas seções de conteúdo. Filetes, numerais em serifada e colunas. Os cartões aninhados do bloco S.E.R. (cartão escuro dentro de cartão escuro) saíram.
- **Ênfase em Playfair itálico** no fim do H1, via o campo opcional `hero.h1Accent`. Uma vez por página: repetir o recurso em todo título vira maneirismo.
- **Contraindicações em `<details>`.** Continuam na página por dever ético, mas fechadas. A orientação de emergência (CVV, SAMU, CAPS) fica **sempre visível**, fora do disclosure.
- **Copy enxugada** em `comoAjuda`, `credenciais` e nos itens de `comoFunciona`, preservando as âncoras de compliance: Logoterapia/Frankl, ausência de prazo fixo e, na página de doenças crônicas, "complementar ao tratamento médico e não o substitui".

**Resultado medido:** 1.325 a 1.455 palavras visíveis por página, contra 1.749 a 2.006 antes. Piso de 700 do blueprint mantido com folga.

**Adições ao design system:** escala `canvas` no `tailwind.config.js` (neutros puxados para o roxo da marca) e o eixo itálico da Playfair no `index.html`. Nada de fonte nova nem dependência nova.

> Nota descoberta na revisão: `theme.colors` do Tailwind **substitui** a paleta padrão. Fora de `white`, `gray`, `primary`, `secondary`, `green`, `red` e `yellow` não existe cor. `stone-*`, usado em `Navbar`, `Footer` e `PrimeiraConsultaPage`, não gera classe alguma — mesma família do `emerald-700` já corrigido. Não faz parte deste escopo, mas precisa ser tratado.

---

## 1. Ordem das seções

| # | Seção | Componente | Objetivo | Limite | CTA |
|---|---|---|---|---|---|
| 1 | **Primeira dobra** | `LandingHero` | Confirmar em 3 segundos: "é disso que eu preciso" | H1 ≤ 70 car. · subtítulo ≤ 180 car. | **CTA 1** — WhatsApp |
| 2 | **Você reconhece estes sinais?** | `SintomasSection` | Espelho. A pessoa se vê na lista | 6–8 itens, ≤ 90 car. cada | — |
| 3 | **Como a psicoterapia pode ajudar** | `ComoAjudaSection` | Mecanismo. Explica o *como*, sem prometer o *quanto* | 2–3 parágrafos + 3 etapas do S.E.R. | — |
| 4 | **Para quem é este atendimento** | `ParaQuemSection` | Qualificar e desqualificar com honestidade | 5–6 itens "é para você se" + bloco "não é para" | **CTA 2** — WhatsApp |
| 5 | **Como funciona o atendimento** | `ComoFuncionaSection` | Remover incerteza operacional | 4–5 cards | — |
| 6 | **Perguntas frequentes** | `LandingFAQ` | Objeções + long-tail + `FAQPage` schema | 6–7 perguntas | — |
| 7 | **Quem vai te atender** | `CredenciaisSection` | E-E-A-T e transparência do anunciante | ≤ 160 palavras | — |
| 8 | **Para ler antes de decidir** | `ArtigosRelacionados` | 2–3 artigos do blog do mesmo tema | 3 cards | — |
| 9 | **Fechamento** | `CTASection` (existente) | Último convite, sem pressão | — | **CTA 3** — WhatsApp |
| — | **Barra fixa mobile** | `StickyWhatsAppBar` | CTA sempre ao alcance no mobile | ≤ 72px de altura | **CTA 4** |
| — | **Botão flutuante** | `WhatsAppFloat` (layout) | Já vem do `MainLayout` | — | **CTA 5** |

**Ordem justificada.** A consultoria endossada pela Dra. Larissa define as seções 1–5 e o fechamento. O benchmark acrescenta: FAQ na voz da paciente (seção 6) é o ativo de conteúdo mais escasso entre os concorrentes brasileiros e o mais barato de conquistar; e o bloco de credenciais (seção 7) é o substituto obrigatório da prova social, já que depoimento está vedado pelo CFP.

---

## 2. Primeira dobra — requisitos não negociáveis

**Regra dura: em 390×844 (iPhone 12/13/14), o H1, o subtítulo e o CTA 1 precisam estar visíveis sem rolagem.**

Orçamento vertical real, descontando a navbar fixa do `MainLayout`:

```
390 × 844  viewport
  −  88px  navbar fixa (header)
  =  756px disponíveis
```

Alocação-alvo:

| Elemento | Altura-alvo |
|---|---|
| Espaçamento superior | 24px |
| Selo de credencial ("Psicóloga Larissa Nunes · CRP 09/16269") | 28px |
| **H1** (2–3 linhas, `text-3xl` → 30px, `leading-tight`) | ~112px |
| **Subtítulo** (3–4 linhas, `text-base` → 16px, `leading-7`) | ~112px |
| **CTA 1** (botão, `py-4`) | 56px |
| Microcopy sob o CTA | 40px |
| Linha de reforço (online Brasil / presencial Goiânia) | 24px |
| Folga | resto |

**Proibido na primeira dobra:** imagem de fundo pesada, foto grande, vídeo, carrossel, animação de entrada que atrase o H1.

**A primeira dobra usa `animate`, nunca `whileInView`.** Com `whileInView` no topo, a animação pode não disparar antes da hidratação e o conteúdo fica invisível.

> ⚠️ **Ponto de atenção herdado do layout.** O `MainLayout` envolve o conteúdo em `motion.main` com `initial={{ opacity: 0 }}`. No HTML estático, o `<main>` nasce com `opacity:0` e só aparece após a hidratação. Isso não afeta o rastreamento (o texto está no HTML e o AdsBot o lê), mas atrasa o *first paint* percebido. Registrado como recomendação de melhoria, fora do escopo desta entrega.

---

## 3. Regras por seção

### 3.1 `LandingHero`

- **Um único `<h1>` na página**, contendo a keyword principal exata.
- Selo de credencial **acima** do H1 — atende CFP (art. 53) e transparência do anunciante do Google numa tacada.
- Subtítulo em linguagem de sintoma, **sem afirmar a condição da leitora**.
- CTA com `aria-label` descritivo e mensagem de WhatsApp própria da página.
- Sem imagem. Fundo: gradiente CSS leve, custo zero de rede.

### 3.2 `SintomasSection`

- Título: "Talvez você reconheça alguns destes sinais" — a moldura condicional é obrigatória.
- Itens em **primeira pessoa da leitora**, com o vocabulário verificado no autocomplete ("minha mente não desliga", "me sinto vazia", "não gosto de mim").
- **Nunca** afirmar diagnóstico. **Nunca** "Você tem X".
- Sem checkbox, sem pontuação, sem quiz — quiz de autodiagnóstico é vedado pelo CEPP art. 18.

### 3.3 `ComoAjudaSection`

- Explica o mecanismo, não o resultado.
- Frase-âncora aprovada na Fase 0: *"O objetivo não é apenas controlar sintomas, mas compreender o que está por trás e reconstruir uma relação mais segura consigo mesma."*
- As 3 etapas do Método S.E.R. — **sempre** com a âncora "fundamentado na Logoterapia".
- Proibido: prazo, garantia, "você vai".

### 3.4 `ParaQuemSection`

- 5–6 itens "este atendimento é para você se…".
- **Bloco de honestidade obrigatório:** "este atendimento não é indicado para…" — inclui emergência, com encaminhamento ao CVV 188. Aumenta confiança e é conduta ética.
- CTA 2 ao final.

### 3.5 `ComoFuncionaSection`

- Online por videochamada · sessões individuais · ~50 minutos · primeira conversa para entender a história.
- **Sigilo digital nomeado** — exigência do art. 7º § único da Res. CFP 9/2024.
- **Valores:** "os valores são informados no primeiro contato". Nunca número.

### 3.6 `LandingFAQ`

- 6–7 perguntas, escritas **na voz da paciente**, não da clínica.
- Cobrir sempre: nunca fiz terapia · terapia online funciona · quanto tempo dura · e se eu não me adaptar · como são os valores · qual a abordagem.
- Alimenta o `FAQPage` schema com as mesmas perguntas renderizadas — o schema precisa espelhar o texto visível.
- Acordeão acessível: `<button aria-expanded>`, foco visível, navegável por teclado.

### 3.7 `CredenciaisSection`

- Nome + "Psicóloga" + CRP 09/16269 + formação + abordagem + link para `/sobre` e `/privacidade`.
- **Zero depoimento. Zero review. Zero contagem de pacientes.**
- Foto real permitida — é do próprio profissional, não de paciente. `loading="lazy"`, `width`/`height` explícitos.

### 3.8 `StickyWhatsAppBar`

Aprovada pela pesquisa, com limites técnicos:

- `position: fixed`, **fora do fluxo do documento** → CLS = 0. O espaço no fim da página é reservado desde o primeiro paint; nunca injetar `padding-bottom` após a hidratação.
- Altura **56–64px**, mais `env(safe-area-inset-bottom)` para o iPhone. Entrada por `transform: translateY()` em 300–400ms, nunca por `top`/`height`.
- Aparece **após ~30% de rolagem**, quando o CTA do hero sai de vista — antes disso seria redundante.
- Fundo **opaco** e de alto contraste. Um único botão (não dois).
- Só em mobile (`md:hidden`); no desktop o CTA do hero e o `WhatsAppFloat` bastam.
- Alvo de toque ≥ 48×48px.
- O handler de clique deve ser **leve e não bloqueante** — o disparo de analytics não pode atrasar a abertura do `wa.me`, sob pena de piorar o INP na interação mais importante da página.
- **Não é interstitial** pela definição do Google: não cobre o conteúdo principal e não exige dispensa. Fica bem abaixo do teto de 30% de viewport do Better Ads Standards.
- Não deve colidir com o `WhatsAppFloat`, que é `fixed bottom-6 right-6`. Solução: no mobile, a barra assume e o float é ocultado.

---

## 4. Acessibilidade

- **Hierarquia:** um `<h1>`, seções em `<h2>`, subitens em `<h3>`. Sem pular nível.
- **Contraste:** mínimo 4.5:1 em texto normal.

> **Correção de um erro deste documento.** A versão anterior afirmava que texto branco sobre `green-500`/`green-600` passava. **Não passa.** Medido na paleta real do projeto:
>
> | Fundo | Contraste com texto branco | WCAG AA (texto normal) |
> |---|---|---|
> | `green-500` `#22c55e` | **2,28:1** | reprova |
> | `green-600` `#16a34a` | 3,30:1 | reprova |
> | `green-700` `#15803d` | **5,02:1** | passa |
> | `green-800` `#166534` | 7,13:1 | passa |
>
> Os CTAs das LPs usam **`green-700`** com hover em `green-800`. A afirmação anterior teria mandado para produção um botão principal ilegível para parte dos visitantes — e o CTA é o elemento mais importante da página.
- **Foco visível** em todos os CTAs e no acordeão do FAQ.
- **`aria-label` em todo CTA de WhatsApp**, descrevendo destino e assunto.
- **`alt` descritivo** em toda imagem; imagem decorativa recebe `alt=""`.
- Links internos com `<Link>` do react-router, nunca `<a href>` — preserva a navegação e evita reload.

---

## 5. Performance

- Zero dependência nova. Zero fonte nova.
- Sem imagem acima da dobra. Imagens abaixo: `.webp` já existente em `public/images/`, `loading="lazy"`, `decoding="async"`, `width`/`height` explícitos.
- `framer-motion` apenas abaixo da dobra, com `whileInView` + `viewport={{ once: true }}`.
- **Paleta restrita à que existe de fato** no `tailwind.config.js`: `white`, `gray-{50..950}`, `primary-{50..950}`, `secondary-{50..950}`, `green-{50,500,600,700,800}`, `red-{50,700}`, `yellow-{50,400,800}`. As classes `stone-*`, `emerald-*` e `amber-*` usadas no site atual **não geram CSS** — não replicar.

---

## 6. SEO por página

- `<title>` ≤ 60 caracteres, único. Exige o novo prop `hideSuffix` no `SEOHead` — o sufixo fixo de 33 caracteres inviabiliza o limite.
- `<meta description>` ≤ 155 caracteres, única, com a keyword e um convite sem promessa.
- `canonical` absoluto, sem barra final.
- JSON-LD por página: `MedicalWebPage` + `Service` + `FAQPage` + `BreadcrumbList`, reusando `LOCAL_BUSINESS_SCHEMA` e `PHYSICIAN_SCHEMA`.
- Keyword no H1, em 1–2 H2 e naturalmente no corpo. Sem stuffing.
- **Alvo de 900 a 1.400 palavras**, com o FAQ carregando 350–500 delas. O piso de 700 do briefing é respeitado; o teto existe porque contagem de palavras correlaciona **negativamente** com conversão (−18,6% no Conversion Benchmark Report), e a faixa ótima medida para o setor de saúde é 355–1.020. Profundidade extra vai para o blog, não para a LP.

> **Divergência registrada na entrega.** As 4 páginas implementadas ficaram entre **1.915 e 2.004 palavras** no `<main>` — cerca de 40% acima do teto que este blueprint definiu. Mantive assim, com três razões e uma ressalva:
> 1. O requisito contratual do briefing é um **piso** de 700 palavras; o teto foi refinamento meu a partir do benchmark de CRO.
> 2. Cerca de 600 dessas palavras estão no FAQ em acordeão, fechado por padrão. O comprimento **percebido** em mobile é o das 7 perguntas, que é exatamente a mitigação que o próprio benchmark propõe para conciliar SEO e conversão.
> 3. Estas páginas têm dupla função: destino de anúncio **e** conteúdo que precisa ranquear organicamente, já que autoestima e doenças crônicas não têm nenhum artigo de apoio no blog.
>
> **Ressalva honesta:** a evidência de CRO é contrária a páginas longas. Se a taxa de conversão medida ficar abaixo de 3%, o primeiro teste a rodar é uma versão enxuta — cortar a terceira dobra de texto corrido de "como a psicoterapia ajuda" e reduzir o FAQ de 7 para 5 perguntas leva as páginas para dentro da faixa sem tocar em compliance.
- Texto em nível de leitura simples. Em saúde, páginas escritas em nível de 5ª–7ª série convertem 56% acima das de 8ª–9ª. "Transtorno de ansiedade generalizada" é linguagem de reprovação; "a preocupação que não desliga" é a que converte.

### 6.1 Tensão registrada — navegação na LP

O benchmark de CRO recomenda **attention ratio 1:1**: nenhuma LP de conversão deveria ter menu de navegação, porque cada link é uma rota de fuga. O briefing deste projeto determinou o contrário — as 4 LPs ficam dentro do `MainLayout`, com Navbar e Footer.

**Mantida a decisão do briefing**, por três razões que valem mais que o ganho marginal de attention ratio: a política de destino do Google pede navegabilidade e transparência do anunciante; o Footer é onde vivem o CRP e o link de privacidade, ambos obrigatórios; e estas páginas também precisam ranquear organicamente, não apenas receber tráfego pago. Mitigação: o CTA da primeira dobra é o único elemento clicável de destaque acima da dobra, e a Navbar não ganha links para as LPs (evita dispersão lateral entre elas).
- Rota registrada em `App.tsx` (pré-renderização) **e** em `dynamicRoutes` do `vite.config.ts` (sitemap). Faltar a segunda é falha silenciosa.

---

## 7. Contrato de dados

```ts
// src/types/landing.ts
export type LandingContent = {
  slug: string;
  seo: { title: string; description: string; keywords: string };
  hero: { eyebrow: string; h1: string; subtitle: string; ctaLabel: string; microcopy: string };
  whatsappMessage: string;          // mensagem própria da página
  sintomas: { title: string; intro: string; items: string[] };
  comoAjuda: { title: string; paragraphs: string[]; etapas: { letra: string; nome: string; texto: string }[] };
  paraQuem: { title: string; items: string[]; naoIndicado: string[] };
  comoFunciona: { title: string; items: { titulo: string; texto: string }[] };
  faq: { question: string; answer: string }[];
  artigos: { slug: string; titulo: string; resumo: string }[];
  fechamento: { title: string; text: string; ctaLabel: string };
};
```

Toda copy vive nesse objeto. O JSX não contém texto de negócio — isso permite auditar compliance lendo só `src/content/landing/*.ts`.
