# SUPERPROMPT — Landing Pages de Conversão para Google Ads (Dra. Larissa Nunes)

> **Como usar:** abra uma nova sessão do Claude Code na raiz de `site-larissa-projeto` e cole:
> `Leia integralmente @docs/prompts/SUPERPROMPT-landing-pages-google-ads.md e execute do início ao fim, seguindo todas as fases, portões de qualidade e critérios de aceite.`
> Recomendado rodar em modo plano primeiro (`/plan`) e aprovar antes da Fase 3.

---

## 0. Seu papel

Você é o **orquestrador** de um projeto de aquisição paga. Não é um executor de tarefa isolada.

Você vai, do início ao fim:
1. **Pesquisar** (via subagentes em paralelo) políticas do Google Ads para saúde, normas do CFP para publicidade de psicólogo, keywords reais em PT-BR e padrões de landing page que convertem em psicoterapia.
2. **Sintetizar** essa pesquisa em um blueprint de página validado.
3. **Escrever a copy** de cada página no tom de voz já estabelecido da marca.
4. **Implementar** as páginas no código, com SEO, schema, tracking e wiring de SSG/sitemap/robots/CSP.
5. **Verificar** de forma adversarial (build, lint, screenshots reais, revisão de compliance).
6. **Entregar** um pacote pronto de campanha do Google Ads (ad groups, keywords, RSAs, negativos, tracking de conversão).

O trabalho só está pronto quando a Dra. Larissa puder **subir a campanha no mesmo dia** sem precisar de mais nada de você.

---

## 1. Contexto do negócio (fonte primária)

### 1.1 O que a Dra. Larissa pediu, nas palavras dela

> "Vou precisar de alguns ajustes no meu site para conseguir fazer anúncios pelo Google ADS. Para conseguir ter boas conversões, é necessário ter algumas páginas dentro do site."
>
> "Preciso de páginas dentro dele que conversem com o tráfego: **Psicóloga para autoconfiança / Para Ansiedade / Falta de sentido / talvez doenças crônicas** (as buscas mais eficazes)."

### 1.2 Digest da consultoria que ela recebeu do ChatGPT (íntegra resumida, sem perder nenhuma diretriz)

Essas são as recomendações que a própria Dra. Larissa leu e endossou. Trate como requisito de produto, não como sugestão.
**Os trechos originais, na íntegra, estão em [docs/prompts/ref-conversa-chatgpt-google-ads.md](./ref-conversa-chatgpt-google-ads.md) — leia esse arquivo antes de começar a Fase 0.**

**Arquitetura de conteúdo — separar blog de landing page**
- O que existe hoje em `/blog/metodo-ser-mulheres-sobrecarregadas` é **artigo**, não landing page. Artigo tem categoria, data, tempo de leitura, "voltar para o blog" — isso é bom para SEO informacional e **ruim** para anúncio.
- Landing pages de conversão devem ficar **dentro do mesmo domínio**, mas **fora do `/blog`**, com URL própria e keyword no slug. Exemplos citados: `/psicologa-online-ansiedade`, `/terapia-online-para-mulheres`, `/psicoterapia-para-sobrecarga-emocional`, `/terapia-para-culpa-e-autocobranca`, `/terapia-para-dificuldade-de-colocar-limites`.
- **Não criar site separado.** Não criar uma LP para cada assunto pequeno — isso deixa o site repetitivo e faz canibalização de SEO. Poucas páginas, fortes e estratégicas.
- Divisão de papéis: **o blog atrai** (dor específica, busca informacional) → **a landing page converte** (dor grande, busca transacional) → **o WhatsApp transforma visita em conversa**.
- Cada artigo do blog termina com transição leve e botão que aponta para a LP correspondente. Exemplo dado: `/blog/por-que-sinto-culpa-quando-digo-nao` → botão "Conheça a terapia para culpa, autocobrança e limites" → `/terapia-culpa-autocobranca-limites` → botão "Falar no WhatsApp".

**Regra de ouro do Google Ads citada**
- A página de destino precisa **combinar com o anúncio e com a palavra-chave pesquisada**. Se o anúncio diz "psicóloga online para ansiedade", a pessoa tem que cair numa página com esse mesmo tema — não na home, não num post genérico. Isso afeta diretamente Índice de Qualidade e experiência da página de destino.
- Mandar todo mundo para a home é explicitamente apontado como erro.

**Problemas de conversão observados na página atual**
- A imagem ocupa a primeira dobra inteira; a pessoa precisa rolar para entender se aquilo é para ela. **Na primeira dobra a pessoa tem que ver, em segundos: título com a dor + frase de identificação + botão de contato.**
- Cara de artigo (breadcrumb de blog, data, tempo de leitura) não serve para anúncio.

**Blueprint de LP recomendado (usar como esqueleto)**
1. **Primeira dobra:** H1 com a keyword + subtítulo de identificação (sintomas na linguagem da pessoa) + CTA WhatsApp.
2. **"Você se reconhece nesses sinais?"** — lista de sintomas pesquisáveis, em primeira pessoa.
3. **"Como a terapia pode ajudar"** — explica o mecanismo. "O objetivo não é apenas controlar sintomas, mas compreender o que está por trás e reconstruir uma relação mais segura consigo mesma."
4. **"Para quem é esse atendimento"** — qualificação do público.
5. **"Como funciona o atendimento"** — online, sessões individuais, ~50 minutos, primeira conversa para compreender a história.
6. **Fechamento:** "Você não precisa esperar chegar ao limite para buscar cuidado." + CTA.

**Compliance — linguagem proibida (citado explicitamente)**
- ❌ "Cure sua ansiedade" · ❌ "Elimine a ansiedade em poucas sessões" · ❌ "Tratamento garantido"
- ✅ "A psicoterapia pode ajudar" · ✅ "Um espaço para compreender sua ansiedade" · ✅ "Atendimento psicológico online para mulheres"
- Motivo: o Google tem políticas específicas de saúde/medicamentos e restringe uso de condições de saúde em publicidade personalizada. Linguagem ética, sem promessa de cura, sem exploração de condição sensível.

**Estrutura de campanha exemplificada**
- Campanha: "Psicóloga online ansiedade" · Keywords: psicóloga online para ansiedade, terapia online para ansiedade, psicóloga para ansiedade, terapia para mente acelerada, psicóloga para mulheres ansiosas · Página de destino: a LP de ansiedade.

**Nota:** a conversa do ChatGPT tratou principalmente de ansiedade / sobrecarga / culpa-limites. Os temas **autoconfiança**, **falta de sentido** e **doenças crônicas** vieram da Dra. Larissa depois. O escopo desta entrega é o pedido dela (seção 3), aplicando o método acima.

---

## 2. Contexto técnico do repositório

**Stack:** React 19 + TypeScript + Vite 6 + Tailwind 3 + framer-motion + react-router-dom **6.30.4** (pinado) + react-helmet-async **1.3.0** (pinado) + Supabase (só blog/admin) + deploy Vercel.

**⚠️ O site é SSG, não SPA.** Build = `vite-react-ssg build`. Toda rota concreta é pré-renderizada em `dist/<rota>/index.html`. Consequências:
- Nada de código que assuma `window` no render inicial — só dentro de `useEffect`.
- Rota nova **precisa** ser adicionada ao array `routes` em `src/App.tsx` para ser pré-renderizada.
- Conteúdo de blog é snapshot de build: novos posts só aparecem no HTML após redeploy.
- **Não desatualizar/alterar** as versões de `react-router-dom` e `react-helmet-async` — estão pinadas por incompatibilidade com `vite-react-ssg`.

**Mapa dos arquivos que importam para esta tarefa:**

| Arquivo | Papel |
|---|---|
| [src/App.tsx](../../src/App.tsx) | array `routes` (RouteRecord[]), loaders SSG, `RootLayout` com analytics |
| [src/layouts/MainLayout.tsx](../../src/layouts/MainLayout.tsx) | Navbar + `<main class="pt-24">` + Footer + WhatsAppFloat |
| [src/components/SEOHead.tsx](../../src/components/SEOHead.tsx) | title/description/canonical/OG/robots/JSON-LD. Props: `title, description, path, keywords?, image?, type?, schema?, noindex?` |
| [src/config/site.ts](../../src/config/site.ts) | SITE_URL, contatos, CRP, `FAQ_ITEMS`, `LOCAL_BUSINESS_SCHEMA`, `PHYSICIAN_SCHEMA`, IDs de GA/Pixel, WhatsApp |
| [src/lib/whatsapp.ts](../../src/lib/whatsapp.ts) | `createWhatsAppProps({ message, page, section })` → `{href, onClick}` já com tracking |
| [src/services/analytics.ts](../../src/services/analytics.ts) | `initGA`, `trackEvent`, `trackWhatsAppClick(page, section)`, `trackLPView(lpName, utm)`, Meta Pixel |
| [src/components/sections/CTASection.tsx](../../src/components/sections/CTASection.tsx) | bloco final reutilizável, aceita `page` e `message` |
| [src/pages/PrimeiraConsultaPage.tsx](../../src/pages/PrimeiraConsultaPage.tsx) | **referência de LP existente** (captura de UTM, `trackLPView`, layout) — mas é `noindex` e fora do MainLayout |
| [src/components/Navbar.tsx](../../src/components/Navbar.tsx) | array de links do menu (Início, Método S.E.R., Sobre, Serviços, Blog) |
| [vite.config.ts](../../vite.config.ts) | plugin `sitemap` (`dynamicRoutes`, `exclude`), `ssgOptions.includedRoutes` |
| [public/robots.txt](../../public/robots.txt) | allow/disallow + sitemap |
| [vercel.json](../../vercel.json) | **CSP restritiva** — qualquer domínio novo de script/pixel precisa ser liberado aqui |
| [docs/copy_site_dra_larissa_2026-04-07.md](../../docs/copy_site_dra_larissa_2026-04-07.md) | **tom de voz oficial**, mini-PRD de copy, dores, objeções, provas |
| [docs/keyword_strategy.md](../../docs/keyword_strategy.md) | pesquisa de keywords existente (tiers, volumes, fontes) |
| [docs/blog/](../../docs/blog/) | 11 artigos já mapeados (TOFU/MOFU/BOFU) — matéria-prima para links internos |

**Dados de negócio já no código (não invente, reutilize de `src/config/site.ts`):**
- CRP 09/16269 · (62) 99629-0052 · la.nunesdasilva@hotmail.com
- Av. C-255, nº 271, Setor Nova Suíça, Goiânia-GO · Seg-Sex 8-18h, Sáb 8-12h
- Online para todo o Brasil, presencial em Goiânia
- Preços: sessão avulsa **R$180** · pacote mensal 4 sessões **R$576** (R$144/sessão) · Sessão de Resolução **R$200**
- Método S.E.R. = **S**entir com consciência · **E**ntender a origem · **R**esponder com intenção (base: Logoterapia)

**Comandos:** `npm run dev` · `npm run build` (SSG) · `npm run lint` · `npm run preview`

**Rotas públicas hoje:** `/`, `/agendamento`, `/blog`, `/blog/:slug`, `/privacidade`, `/primeira-consulta` (noindex), `/sessao-de-resolucao` (noindex), `/admin/*` (noindex).

---

## 3. Escopo da entrega

### 3.1 Quatro landing pages de conversão (obrigatórias)

Os slugs abaixo são o **default**. A Fase 1 pode alterá-los **se e somente se** a pesquisa de keywords provar volume/intenção superior — nesse caso registre a justificativa no doc de estratégia.

| # | Tema (pedido da Larissa) | Slug default | Intenção-alvo |
|---|---|---|---|
| 1 | **Ansiedade** | `/psicologa-online-para-ansiedade` | transacional alta — maior volume, maior CPC, prioridade 1 |
| 2 | **Autoconfiança / autoestima** | `/psicologa-para-autoestima-e-autoconfianca` | transacional média-alta |
| 3 | **Falta de sentido** | `/terapia-para-falta-de-sentido-na-vida` | transacional média — **maior diferencial competitivo** (Logoterapia, nicho sub-atendido, CPC baixo) |
| 4 | **Doenças crônicas** | `/psicologa-para-doencas-cronicas` | nicho, baixo volume, **maior risco de política de saúde** — validar na Fase 0 antes de implementar |

### 3.2 Páginas de suporte (obrigatórias para aprovação e qualidade no Google Ads)

O Google avalia transparência do anunciante e navegabilidade. O site precisa ter, indexáveis e linkadas no rodapé:

- `/contato` — **criar**. NAP completo, CRP, WhatsApp, e-mail, horários, mapa/endereço, forma de contato clara.
- `/sobre` — **criar** página dedicada (hoje "Sobre" é só uma âncora `/#sobre` na home). Reforça E-E-A-T: formação, CRP, abordagem, experiência.
- `/privacidade` — **já existe**, revisar se cobre cookies/GA/Meta Pixel/Google Ads e se está linkada em todas as LPs.

### 3.3 Fora de escopo (não faça)

- Não criar novo site, subdomínio ou construtor externo de LP.
- Não criar uma LP por dor pequena (canibalização). Dores pequenas viram **artigo de blog** que aponta para a LP.
- Não mexer em `/primeira-consulta` e `/sessao-de-resolucao` (são ofertas noindex de Meta Ads).
- Não trocar versões de `react-router-dom` / `react-helmet-async` / `vite-react-ssg`.
- Não fazer commit nem push sem o usuário pedir. Não criar campanha no Google Ads — você entrega o pacote, quem sobe é a Larissa.

---

## 4. Regras invioláveis de compliance (guard-rails)

Violação aqui reprova a entrega inteira, mesmo que o código esteja perfeito.

**Publicidade de psicólogo (CFP) — confirme os detalhes na Fase 0, mas assuma como baseline:**
- CRP visível em toda página de captação.
- Proibido: promessa de resultado ou cura, prazo de melhora, sensacionalismo, apelo à emoção que crie urgência artificial, comparação com outros profissionais, "antes e depois".
- Cuidado máximo com **depoimento de paciente** — a norma do CFP restringe uso de testemunho de cliente em divulgação. Se a Fase 0 confirmar restrição, **não use depoimentos de pacientes nas LPs** (avalie também se as reviews do Google usadas hoje na home precisam de ajuste e **reporte** isso ao usuário — não altere a home sem autorização).
- Sem preço apresentado como promoção/liquidação; preço informativo é aceitável.

**Google Ads (política de saúde e publicidade personalizada):**
- Proibido segmentar/insinuar segmentação por condição de saúde mental do usuário. A copy fala do **serviço**, não acusa o visitante ("Você tem depressão?" ❌ / "Atendimento psicológico para quem convive com ansiedade" ✅).
- Sem "cura", "elimine", "garantido", "resultado em X sessões", "tratamento definitivo".
- Sem alegação médica, sem diagnóstico, sem menção a medicamento controlado.
- Página de destino precisa: carregar rápido, funcionar em mobile, ter conteúdo original e substancial, informar quem é o anunciante, ter política de privacidade acessível, não ter pop-up intrusivo nem botão enganoso.
- Se a LP de doenças crônicas exigir certificação (ex.: telessaúde) ou cair em categoria restrita, **reporte antes de implementar** e proponha alternativa (ex.: página com enquadramento de "apoio psicológico para quem convive com condição crônica", sem alegação de tratamento da doença).

**Tom de voz (de `docs/copy_site_dra_larissa_2026-04-07.md`):**
- Acolhedor, direto, primeira pessoa, sem jargão clínico, sem gerúndio, sem "talvez" em excesso, sem tom de coach/venda agressiva.
- Falar a dor com as palavras que a pessoa usa, não com nome técnico.

---

## 5. FASE 0 — Pesquisa paralela com subagentes

**Dispare os 5 subagentes abaixo em uma única mensagem, em paralelo.** Use `general-purpose` para os que precisam de web e `Explore` para o de codebase. Cada um deve retornar um relatório estruturado — você depois consolida. Não implemente nada nesta fase.

> Instrução comum a colar no fim de cada prompt de subagente:
> *"Retorne um relatório em markdown. Toda afirmação factual precisa de URL de fonte. Separe explicitamente FATO VERIFICADO (com fonte oficial), INFERÊNCIA (seu raciocínio) e INCERTO. Não invente números de volume de busca — se não achar dado, diga 'sem dado confiável' e classifique por intenção/concorrência qualitativa. Não escreva nem edite arquivos do projeto."*

### Subagente A — Política do Google Ads para psicoterapia no Brasil
```
Pesquise nas fontes OFICIAIS do Google (support.google.com/adspolicy, support.google.com/google-ads) e responda:
1. Política de "Healthcare and medicines" — o que se aplica a psicólogo/psicoterapia no Brasil (2026). Terapia/aconselhamento exige certificação? LegitScript se aplica? Há restrição por país?
2. Política de "Personalized advertising" — restrições de saúde mental. O que é proibido em segmentação e o que é proibido na linguagem do anúncio/LP.
3. Requisitos de "Landing page experience" e "Destination requirements": relevância anúncio↔keyword↔LP, transparência do anunciante, conteúdo original, mobile, velocidade, política de privacidade.
4. Motivos mais comuns de reprovação de anúncio para profissionais de saúde mental e como evitá-los.
5. Requisitos de verificação de anunciante (Advertiser Verification) para o Brasil.
Entregue: (a) checklist objetivo do que a LP DEVE ter, (b) lista de palavras/frases PROIBIDAS na copy, (c) lista de formulações SEGURAS equivalentes, (d) veredito específico sobre a página de "doenças crônicas" — é seguro anunciar? com quais cuidados?
```

### Subagente B — Normas do CFP para divulgação de serviço psicológico
```
Pesquise as normas do Conselho Federal de Psicologia sobre publicidade e divulgação de serviços psicológicos (Resolução CFP nº 011/2018 e correlatas, Código de Ética Profissional do Psicólogo, orientações de CRPs regionais sobre marketing digital), vigentes em 2026.
Responda com precisão:
1. O que é OBRIGATÓRIO exibir (nome, CRP, especialidade — como declarar título/especialista).
2. O que é PROIBIDO: promessa de resultado, garantia, sensacionalismo, uso de depoimento/testemunho de paciente, "antes e depois", autopromoção comparativa, divulgação de preço, uso de "Dra." por psicólogo.
3. Regras específicas para redes sociais, anúncios pagos e site próprio.
4. Como divulgar preço e promoção sem infringir a norma.
Entregue: checklist de compliance aplicável a uma landing page + veredito explícito sobre (i) usar depoimento de paciente/review do Google, (ii) exibir preço R$180/R$576, (iii) usar o tratamento "Dra." no título do site.
```

### Subagente C — Pesquisa de keywords PT-BR para os 4 temas
```
Pesquise a demanda de busca no Brasil (Google) para os quatro territórios abaixo, para uma psicóloga clínica que atende ONLINE em todo o Brasil e PRESENCIAL em Goiânia-GO:
1. Ansiedade  2. Autoestima/autoconfiança  3. Falta de sentido / vazio existencial / crise existencial (abordagem Logoterapia)  4. Apoio psicológico para pessoas com doença crônica

Para cada território entregue:
- 10-20 keywords TRANSACIONAIS (quem quer contratar agora): "psicóloga online para X", "terapia para X", "psicólogo para X preço", variações com "online", "perto de mim", "Goiânia".
- 10-20 keywords INFORMACIONAIS (blog, não LP).
- Long-tails em linguagem de sintoma na primeira pessoa ("não consigo relaxar", "me sinto vazia", "não sei o que fazer da vida").
- Intenção, concorrência qualitativa e CPC estimado (faixa) por keyword.
- Slug de URL recomendado por território, com justificativa.
- Lista de NEGATIVE KEYWORDS (ex.: gratuito, grátis, CVV, emergência, suicídio, curso, faculdade, concurso, CRP consulta, teste online, vagas de emprego, psiquiatra, remédio, receita).
- 3 concorrentes que rankeiam/anunciam para cada território, com o que eles fazem na LP.
Considere o doc existente do projeto docs/keyword_strategy.md como ponto de partida e diga o que confirma ou contradiz.
```

### Subagente D — Benchmark de landing pages que convertem em psicoterapia
```
Analise landing pages de psicólogos/clínicas de psicoterapia no Brasil e no exterior que são claramente otimizadas para tráfego pago, e estudos/artigos de CRO para serviços de saúde mental (2024-2026).
Entregue:
1. Anatomia da LP vencedora: ordem exata das seções, o que fica acima da dobra, quantidade e posicionamento de CTAs, quando usar formulário vs. WhatsApp direto.
2. Padrões de headline que convertem em saúde mental (com exemplos reais).
3. Elementos de prova e confiança permitidos quando NÃO se pode usar depoimento de paciente (credenciais, CRP, formação, transparência de método, FAQ, política de cancelamento, foto real, número de atendimentos de forma factual).
4. Tratamento de objeção específico: preço, "terapia online funciona?", "nunca fiz terapia", medo de julgamento, tempo.
5. Benchmarks realistas de taxa de conversão para LP de psicoterapia com CTA de WhatsApp.
6. Erros que matam conversão (os 10 principais), com foco em mobile.
7. Recomendação sobre sticky CTA / barra fixa / clique-para-WhatsApp em mobile.
```

### Subagente E — Auditoria do codebase (use o agente `Explore`)
```
Mapeie com precisão cirúrgica o repositório site-larissa-projeto para uma tarefa de adicionar 4 landing pages novas + 2 páginas institucionais.
Entregue:
1. Como uma rota nova precisa ser registrada para funcionar no SSG (src/App.tsx, ssgOptions.includedRoutes em vite.config.ts) e no sitemap (dynamicRoutes/exclude).
2. Todos os componentes reutilizáveis existentes em src/components/sections/ — assinatura de props, o que cada um renderiza, quais dá para reaproveitar numa LP e quais são específicos da home.
3. Convenções de estilo Tailwind em uso (tokens de cor primary-*, stone-*, emerald-*, raios, sombras, container, tipografia, padrão de animação framer-motion). Extraia exemplos de classe reais.
4. Como SEOHead e o JSON-LD funcionam hoje e como adicionar schema por página.
5. Como o tracking funciona (analytics.ts, trackLPView, trackWhatsAppClick, captura de UTM em PrimeiraConsultaPage.tsx) e o que falta para tracking de conversão do GOOGLE ADS (hoje só existe GA4 + Meta Pixel).
6. O que exatamente na CSP do vercel.json bloquearia as tags do Google Ads (googleadservices, googleads.g.doubleclick.net, google.com/ads) e qual a alteração mínima necessária.
7. Lista final e ordenada de TODOS os arquivos a criar e a editar, com o motivo de cada um.
Não altere nenhum arquivo.
```

**Portão de qualidade 0:** só avance quando tiver os 5 relatórios. Se A ou B trouxerem restrição que invalide alguma página (especialmente a de doenças crônicas ou o uso de depoimentos), **pare e reporte ao usuário** com a alternativa recomendada, antes de continuar.

---

## 6. FASE 1 — Síntese e blueprint

Você (agente principal) consolida a pesquisa e escreve:

**`docs/ads/00-estrategia-google-ads.md`**
- Decisão final dos 4 slugs (+ justificativa se mudou o default).
- Mapa `intenção de busca → keyword → ad group → LP → CTA → evento de conversão`.
- Regras de compliance consolidadas (CFP + Google Ads) em formato de checklist verificável.
- Lista de termos proibidos e substitutos seguros — esta lista será usada como critério de reprovação na Fase 4.
- Plano de linkagem interna: quais dos 11 artigos em `docs/blog/` apontam para qual LP.

**`docs/ads/01-blueprint-landing-page.md`**
- Wireframe seção a seção, comum às 4 páginas, na ordem definida pela pesquisa (partindo do esqueleto da seção 1.2 e ajustando pelo Subagente D).
- Para cada seção: objetivo, elementos obrigatórios, limite de palavras, posição de CTA.
- Regras de mobile-first: o que aparece na primeira dobra em 390px de largura, sem rolagem.
- Padrão de acessibilidade (contraste, foco visível, hierarquia de headings, `aria-label` nos CTAs).

**Requisitos fixos do blueprint (não negociáveis):**
1. **Primeira dobra sem imagem gigante.** H1 com a keyword exata + subtítulo de identificação + CTA visível **sem rolar**, em mobile.
2. Um `<h1>` por página, contendo a keyword principal.
3. Mínimo 3 CTAs de WhatsApp na página (dobra 1, meio, fechamento) + `WhatsAppFloat` do layout.
4. Cada CTA leva a mensagem pré-preenchida **específica da página**, para a Larissa saber a origem do lead.
5. Bloco FAQ com 5-7 perguntas específicas do tema (alimenta `FAQPage` schema e captura long-tail).
6. Bloco de credenciais/transparência: nome, CRP, formação, abordagem, como funciona, preço, política de privacidade — sem depoimento de paciente se a Fase 0 restringir.
7. Bloco de links internos para 2-3 artigos do blog do mesmo tema (SEO + tempo de sessão).
8. Conteúdo original e substancial: **mínimo 700 palavras** de texto real por página (Google reprova LP fina).
9. Zero pop-up, zero interstitial, zero contagem regressiva falsa.

**Portão de qualidade 1:** apresente o blueprint ao usuário em resumo curto (10-15 linhas) e siga. Se algum slug mudou ou alguma página foi vetada por compliance, isso precisa estar explícito.

---

## 7. FASE 2 — Copy

Dispare **4 subagentes em paralelo, um por página**. Cada um recebe:
- o conteúdo integral de `docs/copy_site_dra_larissa_2026-04-07.md` (tom de voz, dores, objeções, provas);
- o blueprint da Fase 1;
- as keywords do território (Subagente C);
- a lista de termos proibidos.

Prompt-modelo para cada um:
```
Escreva a copy completa da landing page "<TEMA>" para a psicóloga Dra. Larissa Nunes (CRP 09/16269), seguindo EXATAMENTE o blueprint em docs/ads/01-blueprint-landing-page.md e o tom de voz em docs/copy_site_dra_larissa_2026-04-07.md.

Keyword principal: <KW>. Keywords secundárias: <lista>.

Regras:
- Fale a dor com as palavras que a pessoa usa no Google, não com nome técnico.
- Primeira pessoa, acolhedor, direto. Sem gerúndio. Sem jargão. Sem tom de coach.
- PROIBIDO: <lista de termos proibidos>. Nenhuma promessa de cura, resultado ou prazo.
- Conecte com o Método S.E.R. (Sentir com consciência / Entender a origem / Responder com intenção) e com a Logoterapia, sem transformar a página numa aula.
- Mínimo 700 palavras de conteúdo real.
- Densidade natural da keyword: no H1, em 1-2 H2, e no corpo — sem stuffing.

Entregue em markdown, seção por seção, na ordem do blueprint, incluindo:
H1, subtítulo, texto de cada CTA, mensagem pré-preenchida do WhatsApp, todos os blocos de corpo, FAQ com 5-7 perguntas e respostas, meta title (≤60 caracteres), meta description (≤155 caracteres), e 5 sugestões de <h2>.
Grave em docs/ads/copy-<slug>.md. Não escreva código React.
```

**Portão de qualidade 2:** você (principal) revisa cada copy contra a lista de termos proibidos **antes** de codificar. Copy reprovada volta para o subagente com o motivo.

---

## 8. FASE 3 — Implementação

Faça você mesmo (agente principal) os arquivos **compartilhados** — nunca paralelize edição neles. Se quiser paralelizar, paralelize apenas a criação dos arquivos de página novos (um agente por arquivo), pois são independentes.

### 8.1 Componentes

Se as 4 páginas compartilharem estrutura (e vão), extraia componentes reutilizáveis em vez de duplicar 4× o mesmo JSX:
- `src/components/lp/LandingHero.tsx`
- `src/components/lp/SintomasSection.tsx` ("Você se reconhece nesses sinais?")
- `src/components/lp/ComoAjudaSection.tsx`
- `src/components/lp/ParaQuemSection.tsx`
- `src/components/lp/ComoFuncionaSection.tsx`
- `src/components/lp/LandingFAQ.tsx` (renderiza + devolve o `FAQPage` schema)
- `src/components/lp/ArtigosRelacionados.tsx`
- `src/components/lp/StickyWhatsAppBar.tsx` (mobile) — só se o Subagente D recomendar

Cada componente recebe o conteúdo por props e é 100% data-driven. O conteúdo de cada página vive em `src/content/landing/<slug>.ts` (objeto tipado), não hard-coded no JSX. Crie o tipo em `src/types/landing.ts`.

### 8.2 Páginas

`src/pages/landing/AnsiedadePage.tsx`, `AutoconfiancaPage.tsx`, `SentidoPage.tsx`, `DoencasCronicasPage.tsx` — mais `src/pages/ContatoPage.tsx` e `src/pages/SobrePage.tsx`.

Cada LP:
- renderiza dentro do **`MainLayout`** (Navbar + Footer + WhatsAppFloat) — Navbar e Footer atendem ao requisito do Google de navegabilidade e transparência do anunciante, e as páginas também precisam ranquear organicamente;
- usa `<SEOHead>` com `title`, `description`, `path`, `keywords` e `schema`;
- é **indexável** (`noindex` = false — ao contrário de `/primeira-consulta`);
- chama `trackLPView('<slug>', utmParams)` em `useEffect`, reaproveitando o padrão de captura de UTM de `PrimeiraConsultaPage.tsx` (extraia `getUtmParams` para `src/lib/utm.ts` e use nos dois lugares em vez de duplicar);
- usa `createWhatsAppProps({ page: '<slug>', section: '<hero|meio|final>', message: '<msg da página>' })` em todo CTA.

### 8.3 Schema JSON-LD por página

Monte em `src/lib/landingSchema.ts` um builder que gere, por LP:
- `MedicalWebPage` (ou `WebPage`) com `about`, `audience`, `lastReviewed`, `specialty`;
- `Service` / `MedicalBusiness` com `provider` apontando para `PHYSICIAN_SCHEMA`, `areaServed`, `availableChannel` (online);
- `FAQPage` com as perguntas reais da página;
- `BreadcrumbList` (`Início → <Página>`).
Reutilize `LOCAL_BUSINESS_SCHEMA`/`PHYSICIAN_SCHEMA` de `src/config/site.ts` — não duplique dados de contato.

### 8.4 Roteamento e SSG

Em `src/App.tsx`, adicione as 6 rotas novas **dentro do filho `MainLayout`**, para herdarem Navbar/Footer:
```
{ path: 'psicologa-online-para-ansiedade', element: <AnsiedadePage /> },
{ path: 'psicologa-para-autoestima-e-autoconfianca', element: <AutoconfiancaPage /> },
{ path: 'terapia-para-falta-de-sentido-na-vida', element: <SentidoPage /> },
{ path: 'psicologa-para-doencas-cronicas', element: <DoencasCronicasPage /> },
{ path: 'contato', element: <ContatoPage /> },
{ path: 'sobre', element: <SobrePage /> },
```
Confirme que `ssgOptions.includedRoutes` (que hoje só filtra `:` e `*`) as inclui, e que o build gera `dist/<slug>/index.html` para cada uma.

### 8.5 Sitemap, robots, navegação

- `vite.config.ts`: acrescente os 6 caminhos a `dynamicRoutes`. **Não** os coloque em `exclude`.
- `public/robots.txt`: continue permitindo (nada a bloquear); confira que nenhum novo slug bate com um `Disallow` existente.
- `src/components/Navbar.tsx`: adicione um acesso às LPs sem poluir o menu — preferir um item "Atendimentos"/"Para você" com submenu, ou incluir os links na página `/sobre` e no Footer. Decida e justifique.
- `src/components/Footer.tsx`: adicione bloco "Atendimentos" com as 4 LPs + links `/contato`, `/sobre`, `/privacidade`, e garanta CRP visível.
- **Links internos do blog:** identifique os artigos publicados de cada tema e adicione o CTA de transição apontando para a LP correspondente. Se os artigos vivem no Supabase (conteúdo dinâmico), **não edite banco** — em vez disso entregue em `docs/ads/03-links-internos.md` a lista `artigo → LP → texto de CTA sugerido` para a Larissa aplicar no `/admin/blog`, e implemente o componente `ArtigosRelacionados` no sentido LP → blog, que você controla.

### 8.6 Tracking de conversão do Google Ads

Hoje só existe GA4 + Meta Pixel. Para Ads é preciso:
- Em `src/config/site.ts`: `GOOGLE_ADS_ID` (`VITE_GOOGLE_ADS_ID`) e `GOOGLE_ADS_CONVERSION_LABEL` (`VITE_GOOGLE_ADS_CONVERSION_LABEL`), com fallback vazio e no-op quando ausentes (nunca quebrar o build/SSG).
- Em `src/services/analytics.ts`: `initGoogleAds()` (carrega/config `gtag` com o `AW-`) e `trackAdsConversion(label?, params?)` que dispara `gtag('event','conversion',{ send_to: 'AW-XXX/LABEL' })`. `trackWhatsAppClick` passa a disparar GA4 + Meta + Google Ads.
- Documente em `docs/ads/02-tracking.md`: como criar a conversão no Google Ads, como importar o evento `whatsapp_click` do GA4 como conversão, e o **template de URL final / UTM** por campanha (`?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}&gclid={gclid}`).
- Atualize `.env.example` com as duas variáveis novas.
- **`vercel.json` — CSP:** libere o mínimo necessário para as tags do Ads (`script-src`: `https://www.googleadservices.com`, `https://googleads.g.doubleclick.net`; `img-src` já é `https:`; `connect-src`: os domínios de coleta). Não afrouxe a CSP mais do que o necessário e não remova diretivas existentes.
- **Consentimento/LGPD:** verifique se `/privacidade` cobre GA4, Meta Pixel e Google Ads; atualize o texto se não cobrir. Se não houver banner de cookies, registre a lacuna em `docs/ads/02-tracking.md` como recomendação (não implemente banner sem o usuário pedir).

### 8.7 Performance

- Nada de imagem pesada acima da dobra. Se usar foto, `.webp` já existente em `public/images/`, com `width`/`height` explícitos e `fetchpriority="high"` só na LCP.
- Todas as demais imagens: `loading="lazy"` + `decoding="async"`.
- Animações `framer-motion` só abaixo da dobra (`whileInView`), nunca bloqueando o primeiro paint do H1.
- Sem fonte nova, sem biblioteca nova. Zero dependências adicionais.

---

## 9. FASE 4 — Verificação (adversarial, não complacente)

Execute nesta ordem e **cole a saída real** no relatório. Nada de "deve funcionar".

1. `npm run lint` — zero erros novos.
2. `npx tsc --noEmit` — zero erros de tipo.
3. `npm run build` — build SSG passa. Depois confirme por comando que os arquivos existem:
   `ls dist/psicologa-online-para-ansiedade/index.html` (e os outros 5).
4. Verifique que o HTML **estático** já contém o H1, a copy e o JSON-LD (não só depois de hidratar):
   `grep -o "<h1[^>]*>[^<]*" dist/psicologa-online-para-ansiedade/index.html`
   `grep -c "application/ld+json" dist/psicologa-online-para-ansiedade/index.html`
5. Confirme os 6 slugs em `dist/sitemap.xml` e que nenhum está bloqueado no `robots.txt`.
6. `npm run preview` e, com o **Playwright MCP**, para cada uma das 4 LPs:
   - viewport 390×844 (mobile) e 1440×900 (desktop);
   - screenshot de cada uma (salve em `docs/screenshots/lp-<slug>-mobile.png` / `-desktop.png`);
   - confirme que H1 + subtítulo + CTA estão visíveis **sem rolagem** em 390×844;
   - confirme que o `href` do CTA é `https://wa.me/5562996290052?text=...` com a mensagem correta e codificada;
   - console sem erro de hidratação e sem violação de CSP.
7. **Subagente revisor de compliance** (novo, adversarial):
   ```
   Você é um revisor de políticas hostil. Leia as 4 landing pages implementadas (src/content/landing/*.ts e as páginas renderizadas em dist/) e tente REPROVAR cada uma.
   Critérios: docs/ads/00-estrategia-google-ads.md (regras Google Ads + CFP + lista de termos proibidos).
   Para cada página aponte: qualquer promessa de resultado/cura, qualquer prazo, qualquer linguagem que insinue segmentação por condição de saúde, ausência de CRP, ausência de link de privacidade, depoimento de paciente, alegação sem lastro, ou conteúdo raso.
   Retorne veredito APROVADO/REPROVADO por página, com citação literal do trecho problemático e a reescrita segura sugerida. Default para REPROVADO em caso de dúvida.
   ```
8. **Subagente revisor de SEO/conversão** (paralelo ao 7):
   ```
   Audite as 4 landing pages implementadas contra: um único H1 com a keyword; hierarquia correta de headings; meta title ≤60 e description ≤155 caracteres únicos por página; canonical correto; JSON-LD válido (valide a estrutura de FAQPage, Service, BreadcrumbList); ≥700 palavras de conteúdo real; densidade natural da keyword sem stuffing; links internos presentes; alt em todas as imagens; contraste e foco acessíveis; nenhuma canibalização entre as 4 páginas (verifique sobreposição de keyword-alvo e de conteúdo).
   Retorne lista priorizada de problemas com arquivo:linha e correção concreta.
   ```
9. Aplique **todas** as correções REPROVADO/críticas e rode 1-6 de novo. Repita até limpo.

**Portão de qualidade 4:** nenhuma página sai com veredito REPROVADO pendente.

---

## 10. FASE 5 — Pacote de campanha do Google Ads

Escreva `docs/ads/04-campanhas-google-ads.md`, pronto para a Larissa copiar e colar no Ads:

Para **cada uma das 4 páginas**, um ad group:
- **Keywords** separadas por tipo de correspondência (frase e exata; ampla só se justificar), 10-20 por grupo.
- **Negative keywords** — lista compartilhada da conta (grátis, gratuito, CVV, emergência, suicídio, curso, faculdade, apostila, concurso, vaga, salário, psiquiatra, remédio, receita, teste online, PDF, letra de música…) + negativas específicas do grupo.
- **RSA:** 15 headlines (≤30 caracteres cada) e 4 descriptions (≤90 caracteres cada), todas dentro das regras de compliance, com a keyword no headline 1.
- **URL final** + template de UTM + path de exibição.
- **Extensões:** 4-6 sitelinks (com descrição), 4-8 callouts, snippets estruturados, extensão de chamada com `(62) 99629-0052`, extensão de localização (Goiânia).
- Match previsto entre a intenção da keyword e a seção da LP que responde a ela.

Mais, no mesmo documento:
- **Configuração de campanha recomendada:** tipo (Rede de Pesquisa apenas — sem parceiros de pesquisa nem Display no início), localização (Brasil + reforço em Goiânia, "presença: pessoas na localização"), idioma, dispositivos, agendamento, estratégia de lance inicial (Maximizar cliques com teto de CPC → migrar para Maximizar conversões após ~30 conversões), sugestão de orçamento diário por ad group e por que.
- **Conversões:** quais eventos contam como conversão primária (`whatsapp_click`) vs. secundária (`lp_view`, scroll), janela de conversão, contagem.
- **Checklist de lançamento** (10-15 itens) e **checklist da 1ª semana de otimização** (relatório de termos de pesquisa, negativas, IS perdido, pausa de keyword sem conversão etc.).
- **Riscos e planos B:** o que fazer se o anúncio for reprovado por política de saúde; o que fazer se o CPC vier acima do previsto; o que fazer se a LP de doenças crônicas não tiver volume.

---

## 11. Critérios de aceite (checklist final — cole preenchido no relatório)

**Entrega**
- [ ] 4 LPs + `/contato` + `/sobre` criadas, renderizando sem erro em dev e em preview do build.
- [ ] Conteúdo em `src/content/landing/*.ts`, componentes em `src/components/lp/*`, zero JSX duplicado entre páginas.
- [ ] ≥700 palavras de conteúdo original por LP.
- [ ] Zero dependência nova. Versões pinadas intactas.

**SSG / SEO**
- [ ] `npm run build` passa; `dist/<slug>/index.html` existe para os 6 slugs.
- [ ] H1, copy e JSON-LD presentes no HTML estático (verificado por `grep`).
- [ ] 6 slugs no `sitemap.xml`; nenhum bloqueado no `robots.txt`; canonical correto em cada um.
- [ ] Title ≤60 e description ≤155, únicos por página.
- [ ] `FAQPage` + `Service`/`MedicalWebPage` + `BreadcrumbList` válidos por página.
- [ ] Sem canibalização de keyword entre as 4 LPs.

**Conversão**
- [ ] Em 390×844, H1 + subtítulo + CTA visíveis sem rolar (comprovado por screenshot).
- [ ] ≥3 CTAs de WhatsApp por página, cada um com mensagem pré-preenchida própria da página.
- [ ] Screenshots mobile e desktop das 4 LPs salvos em `docs/screenshots/`.
- [ ] Console limpo: sem erro de hidratação, sem violação de CSP.

**Tracking**
- [ ] `trackLPView` disparando com UTM capturado, em todas as LPs.
- [ ] `trackWhatsAppClick` disparando GA4 + Meta + Google Ads.
- [ ] `VITE_GOOGLE_ADS_ID` / `VITE_GOOGLE_ADS_CONVERSION_LABEL` em `.env.example`, com no-op seguro quando vazios.
- [ ] CSP do `vercel.json` liberando o mínimo necessário para as tags do Ads.

**Compliance**
- [ ] Revisor adversarial deu APROVADO nas 4 páginas.
- [ ] CRP 09/16269 visível em todas as LPs.
- [ ] Link para `/privacidade` acessível em todas as LPs; política cobre GA4/Meta/Google Ads.
- [ ] Zero termo da lista proibida em qualquer página (verificado por busca literal, não por leitura).

**Documentação**
- [ ] `docs/ads/00-estrategia-google-ads.md`
- [ ] `docs/ads/01-blueprint-landing-page.md`
- [ ] `docs/ads/02-tracking.md`
- [ ] `docs/ads/03-links-internos.md`
- [ ] `docs/ads/04-campanhas-google-ads.md`
- [ ] `docs/ads/copy-<slug>.md` (4 arquivos)

---

## 12. Regras de operação

- **Português do Brasil** em todo conteúdo de usuário, documentação e commits.
- **Não commite e não faça push** sem o usuário pedir explicitamente. Ao final, mostre `git status` e proponha a mensagem de commit.
- Rode subagentes de pesquisa **em paralelo**, numa única mensagem. Edições em arquivos compartilhados (`App.tsx`, `vite.config.ts`, `Navbar.tsx`, `Footer.tsx`, `vercel.json`, `site.ts`, `analytics.ts`) são **só suas** — nunca de subagente.
- Se um subagente devolver algo que contradiz uma fonte oficial ou o código do repositório, **não aceite de cara**: verifique você mesmo antes de agir.
- Se algo for bloqueado (política, ausência de dado, decisão que é da Larissa), **entregue tudo o mais em pleno** e liste explicitamente o que ficou de fora e por quê. Não reduza o escopo por conta própria.
- Reporte o resultado com honestidade: se um teste falhou, mostre a saída.

## 13. Relatório final esperado

1. O que foi criado (lista de arquivos, com caminho clicável).
2. As 4 URLs finais e o que cada uma ataca.
3. Saída real de `lint`, `tsc`, `build` e das verificações de `dist/`.
4. Screenshots das 4 LPs (mobile e desktop).
5. Veredito dos revisores adversariais de compliance e SEO.
6. Checklist da seção 11 preenchido.
7. **Próximos passos para a Dra. Larissa**, em linguagem não técnica: o que ela precisa fazer no Google Ads, nesta ordem, para colocar a campanha no ar.
8. O que ficou pendente ou precisa de decisão dela.
