# Site Dra. Larissa Nunes — Product Requirements Document (PRD)

**Versão:** 1.0
**Data:** 06/04/2026
**Autor:** Consultor de Produto (via Claude Code)
**Status:** Em Revisão
**Última Atualização:** 06/04/2026

---

## 1. Resumo Executivo

O site da Dra. Larissa Nunes é uma plataforma digital profissional projetada para ser o principal canal de captação de pacientes para sessões de psicoterapia online e presencial, com especialização em Logoterapia (abordagem de Viktor Frankl).

Atualmente, a Dra. Larissa depende exclusivamente de indicações boca-a-boca, atendendo apenas 3 pacientes por mês. O site deve funcionar como uma **máquina de geração de leads orgânicos** que converte visitantes em pacientes, posicionando-a como referência em Logoterapia no Centro-Oeste brasileiro e alcançando pacientes nas regiões Sudeste e Sul via atendimento online.

A estratégia de aquisição combina três pilares: **SEO** (aparecer com destaque no Google Search e Maps para buscas sobre terapia, ansiedade, depressão, crise existencial), **GEO** (Generative Engine Optimization — aparecer em respostas de LLMs/IAs quando pessoas buscam ajuda psicológica), e **conteúdo de blog otimizado** produzido com auxílio de agente de IA e curadoria humana da profissional.

A meta é atingir **10 pacientes recorrentes por mês** (1 sessão semanal cada), gerando receita mensal de **R$6.000-7.000** em até 12 meses.

---

## 2. Contexto e Background

### 2.1 Situação Atual
- A Dra. Larissa Nunes é psicóloga em Goiânia-GO, especializada em Logoterapia
- Captação de pacientes ocorre 100% por indicação boca-a-boca
- Atende apenas **3 pacientes por mês** — muito abaixo da capacidade
- Presença digital limitada a um perfil de Instagram pouco trabalhado
- Não há canal digital estruturado para captação, qualificação ou conversão de leads
- Existe um site já construído (React + Supabase + Vercel) com funcionalidades básicas, mas que precisa de melhorias significativas em design, SEO, conteúdo e funcionalidades

### 2.2 Motivação
- **Independência de indicações:** Construir um canal de aquisição próprio e escalável
- **Posicionamento como referência:** Tornar-se a principal referência em Logoterapia no Centro-Oeste
- **Alcance geográfico:** Expandir atendimento online para Sudeste e Sul, onde há maior demanda e poder aquisitivo
- **Presença em buscas:** Ser encontrada quando pessoas pesquisam sobre terapia, ansiedade, depressão, sentido da vida — tanto no Google quanto em IAs/LLMs
- **Profissionalização:** Ter um site que transmita credibilidade, autoridade e converta visitantes em pacientes

### 2.3 Referências e Benchmarks
- Sites de psicólogos com forte presença orgânica no Google
- Plataformas como Doctoralia e Zenklub (referência de UX, mas o site próprio oferece independência e diferenciação)
- Blogs de saúde mental com alta autoridade de domínio (referência para estratégia de conteúdo)
- Profissionais de saúde que usam landing pages com vídeo para campanhas pagas

---

## 3. Declaração do Problema

### 3.1 O Problema
Pessoas que sofrem com ansiedade, depressão, burnout, crises existenciais e falta de propósito na vida buscam ajuda online — no Google, em IAs e redes sociais — mas não encontram a Dra. Larissa Nunes. Ela possui experiência prática rara em Logoterapia e histórico de acompanhamento de pessoas em sofrimento severo, mas essa expertise é invisível no mundo digital.

### 3.2 Quem É Afetado
- **Potenciais pacientes:** Pessoas entre 20-45 anos que buscam terapia online e não encontram a Dra. Larissa nas buscas
- **A própria profissional:** Capacidade ociosa de atendimento, receita abaixo do potencial
- **Pessoas em crise:** Que poderiam se beneficiar da Logoterapia mas não conhecem a abordagem

### 3.3 Impacto
- **Financeiro:** Receita atual estimada de ~R$540/mês (3 pacientes × R$180) vs. potencial de R$7.000/mês
- **Profissional:** Subutilização de expertise rara no mercado
- **Social:** Pessoas em sofrimento que poderiam ser ajudadas não têm acesso à profissional

### 3.4 Soluções Alternativas Atuais
- **Indicação boca-a-boca:** Funciona mas é lenta, imprevisível e não escalável
- **Instagram:** Perfil existe mas está pouco trabalhado e não gera leads de forma consistente
- **Plataformas de terceiros (Doctoralia, Zenklub):** Possível, mas com alto custo de comissão e sem diferenciação

---

## 4. Público-Alvo e Personas

### 4.1 Segmentos de Usuário

| Segmento | Descrição | Prioridade |
|----------|-----------|------------|
| Pacientes potenciais | Pessoas buscando terapia online | Primário |
| Dra. Larissa (admin) | Gestão de conteúdo e leads | Primário |
| Visitantes do blog | Pessoas buscando informação sobre saúde mental | Secundário |

### 4.2 Personas

#### Persona 1: Rafael — O Profissional em Crise Existencial
- **Perfil:** Homem, 32 anos, analista de TI em Goiânia
- **Contexto:** Trabalha muito, ganha bem, mas sente que "falta algo". Acorda sem motivação. Questiona o sentido da carreira e da vida. Pesquisa no Google "como encontrar propósito na vida" e "terapia para crise existencial"
- **Necessidades:** Alguém que entenda sua angústia sem julgamento. Uma abordagem que não seja apenas "falar dos problemas" mas que dê direção concreta
- **Frustrações:** Já tentou terapia genérica e não funcionou. Não quer psicanálise longa. Quer resultados
- **Nível Técnico:** Alto (navega bem, pesquisa no Google e em IAs)
- **Frequência de uso esperada:** Visita o site 1-2 vezes antes de decidir, lê artigos do blog, depois entra em contato via WhatsApp
- **Valor do pacote:** R$576/mês (4 sessões com desconto)

#### Persona 2: Ana Clara — A Mãe com Ansiedade e Burnout
- **Perfil:** Mulher, 28 anos, professora em Brasília, mãe de um filho de 2 anos
- **Contexto:** Ansiedade constante, burnout do trabalho + maternidade. Católica praticante, quer uma abordagem que respeite sua fé. Pesquisa "psicóloga online ansiedade" e "terapia cristã"
- **Necessidades:** Atendimento online (não consegue ir presencial por causa do filho). Alguém que integre fé e psicologia. Horários flexíveis
- **Frustrações:** Muitos psicólogos online parecem genéricos. Tem medo de "fábrica de consultas" tipo plataformas
- **Nível Técnico:** Médio (usa celular, WhatsApp, Instagram)
- **Frequência de uso esperada:** Encontra via blog ou busca, lê depoimentos, clica no WhatsApp

#### Persona 3: Pedro — O Jovem em Busca de Direção
- **Perfil:** Homem, 22 anos, universitário em Goiânia, indeciso sobre carreira
- **Contexto:** Não sabe se está no curso certo. Sente pressão da família. Pesquisa "orientação vocacional" e "como saber meu propósito"
- **Necessidades:** Orientação vocacional com profundidade (não apenas teste vocacional). Preço acessível
- **Frustrações:** Testes vocacionais online são superficiais. Não quer coach, quer algo fundamentado
- **Nível Técnico:** Alto
- **Frequência de uso esperada:** Encontra via Google/LLM, lê artigo sobre propósito, agenda sessão pontual de "desabafo" (R$200) como primeiro contato

### 4.3 Anti-personas
- **Pessoas buscando atendimento psiquiátrico/medicamentoso** — Dra. Larissa é psicóloga, não psiquiatra
- **Pessoas buscando terapia de casal** — Não é o foco atual
- **Crianças e adolescentes** — Foco em adultos 20-45 anos
- **Pessoas buscando terapia gratuita ou de baixo custo** — O posicionamento é de valor, não de preço

---

## 5. Proposta de Valor

### 5.1 Proposta de Valor Principal
Para **pessoas entre 20-45 anos que enfrentam crises existenciais, ansiedade, depressão ou falta de propósito**, que buscam ajuda online, o **site da Dra. Larissa Nunes** é uma **plataforma de captação e conexão com psicoterapia especializada em Logoterapia** que **oferece conteúdo transformador e acesso direto a uma das poucas especialistas práticas em Logoterapia do Centro-Oeste**. Diferente de plataformas genéricas como Doctoralia ou Zenklub, a Dra. Larissa oferece **acompanhamento personalizado com uma abordagem que integra busca de sentido, propósito de vida e valores católicos**.

### 5.2 Benefícios-Chave
- **Especialização rara:** Uma das poucas profissionais com experiência prática real em Logoterapia na região
- **Experiência com sofrimento severo:** Histórico de acompanhamento de pessoas em hemodiálise, perdas, tratamentos médicos complexos
- **Integração fé + terapia:** Abordagem que respeita e integra valores católicos
- **Atendimento online:** Acessível de qualquer região do Brasil
- **Conteúdo educativo:** Blog com artigos profundos sobre sentido da vida, ansiedade, depressão, propósito
- **Entrada acessível:** Sessão pontual de "desabafo" (R$200) como porta de entrada de baixo compromisso

### 5.3 Diferenciação Competitiva
| Aspecto | Dra. Larissa | Plataformas (Doctoralia/Zenklub) | Psicólogos genéricos |
|---------|-------------|----------------------------------|---------------------|
| Especialização | Logoterapia (raro) | Múltiplas abordagens | TCC/Psicanálise (comum) |
| Experiência | Sofrimento severo | Variável | Variável |
| Abordagem de fé | Integrada | Ausente | Raro |
| Conteúdo | Blog especializado | Genérico | Pouco/nenhum |
| Atendimento | Personalizado | Massificado | Variável |
| Custo de aquisição | Orgânico (SEO/GEO) | Comissão por consulta | Dependente |

---

## 6. Objetivos e Métricas de Sucesso

### 6.1 Objetivos do Produto
| # | Objetivo | Prazo | Métrica | Target |
|---|----------|-------|---------|--------|
| 1 | Aparecer na 1ª página do Google para termos-chave de terapia | 6 meses | Posição média no Google Search Console | Top 10 para 5+ termos |
| 2 | Gerar leads qualificados via site | 3 meses | Cliques no WhatsApp/mês | 30+ cliques/mês |
| 3 | Converter leads em pacientes | 6 meses | Pacientes novos vindos do site/mês | 3-5 pacientes/mês |
| 4 | Atingir meta de receita | 12 meses | Receita mensal recorrente | R$6.000-7.000/mês |
| 5 | Posicionar como referência em Logoterapia | 12 meses | Tráfego orgânico mensal | 2.000+ visitantes/mês |

### 6.2 Objetivos de Negócio
- **Receita:** De ~R$540/mês para R$6.000-7.000/mês em 12 meses
- **Pacientes recorrentes:** De 3 para 10 pacientes/mês (1 sessão/semana cada)
- **Independência:** Reduzir dependência de indicações de 100% para <40% da captação
- **Escalabilidade:** Canal digital que cresce organicamente com conteúdo

### 6.3 North Star Metric
**Número de pacientes recorrentes ativos por mês** — esta métrica reflete simultaneamente a eficácia do SEO, a qualidade do conteúdo, a conversão do site e a retenção dos pacientes.

### 6.4 Métricas de Acompanhamento
| Categoria | Métrica | Como Medir | Frequência | Target (6 meses) |
|-----------|---------|------------|------------|-------------------|
| Aquisição | Visitantes únicos/mês | Google Analytics | Semanal | 1.000+ |
| Aquisição | Posição Google (termos-chave) | Google Search Console | Mensal | Top 10 para 5 termos |
| Engajamento | Tempo médio na página | Google Analytics | Mensal | >2 minutos |
| Engajamento | Artigos lidos por visita | Google Analytics | Mensal | >1.5 |
| Conversão | Cliques no WhatsApp/mês | Google Analytics (evento) | Semanal | 30+ |
| Conversão | Taxa de conversão visita→WhatsApp | Google Analytics | Mensal | >3% |
| Conteúdo | Artigos publicados/mês | Admin panel | Mensal | 4-8 artigos |
| Negócio | Pacientes novos do site/mês | Registro manual | Mensal | 3-5 |
| Negócio | Receita mensal | Registro manual | Mensal | R$6.000+ |
| GEO | Citações em respostas de LLMs | Teste manual | Mensal | Presente em 3+ queries |

---

## 7. Escopo do MVP

### 7.1 Critério de Inclusão no MVP
Entra no MVP o que atende a pelo menos um destes critérios:
1. **Essencial para captar leads:** Se não tiver, o site não converte visitantes em contatos
2. **Essencial para SEO/GEO:** Se não tiver, o site não aparece nas buscas
3. **Essencial para operação:** Se não tiver, a Dra. Larissa não consegue gerenciar o site

### 7.2 O Que Está Dentro

**Fase 1 — Melhorias do Site Atual (Prioridade Máxima):**
- Redesign e melhoria de UX/UI (via Google Stitch + MCP)
- Instalação e configuração do Google Analytics (GA4) com eventos personalizados
- Otimização completa de SEO on-page (meta tags, structured data, sitemap, robots.txt)
- Otimização de SEO técnico (performance, Core Web Vitals, mobile-first)
- Otimização GEO (conteúdo estruturado para LLMs)
- Melhoria da mensagem pré-configurada do WhatsApp (interesse em psicoterapia/metodologia)
- Melhoria do blog existente (layout, UX de leitura, CTA em artigos)
- Melhoria do painel admin (simplificação máxima)

**Fase 2 — Agente de Blog com IA:**
- Painel admin com campo de tema/prompt para a Dra. Larissa
- Integração com LLM (GPT/Groq/Claude Code) para pesquisa e redação
- Geração de artigo otimizado para SEO com imagens
- Fluxo de revisão: agente gera → doutora revisa → aprova → publica
- Princípios de copy: objetividade, comunicação clara, brevidade inteligente
- Frequência-alvo: conforme recomendação de relevância orgânica (mínimo 1/semana)

**Fase 3 — Landing Pages para Campanhas:**
- LP 1: "Primeira Consulta" — 50% desconto (R$90), vídeo promocional central, CTA WhatsApp
- LP 2: "Sessão de Resolução" — Sessão pontual R$200, vídeo explicativo, CTA WhatsApp
- URLs ocultas (não aparecem na navegação principal)
- Otimizadas para conversão em campanhas Google Ads e Meta Ads

### 7.3 O Que Está Fora (e por quê)
| Excluído | Razão |
|----------|-------|
| Agente WhatsApp (IA secretária) | Projeto separado, já em desenvolvimento independente |
| Pagamento online integrado | Complexidade desnecessária no MVP; Pix/transferência via WhatsApp é suficiente |
| Área do paciente (login) | Não agrega valor na fase atual; relação é via WhatsApp |
| Agendamento automatizado com agenda Google | O fluxo via WhatsApp + agente IA externo é suficiente |
| App mobile | Site responsivo atende a necessidade |
| Chat ao vivo no site | WhatsApp cumpre esse papel de forma superior (familiaridade) |
| Terapia de casal/infantil | Fora do escopo de serviços atuais |
| Multi-idioma | Público é brasileiro |

### 7.4 Premissas do MVP
- A Dra. Larissa dedicará tempo para revisar artigos do blog antes da publicação
- Os vídeos promocionais para as landing pages já existem ou serão produzidos pela Dra. Larissa
- O agente de WhatsApp externo estará funcional para receber os leads do site
- A infraestrutura gratuita/low-cost (Supabase free, Vercel free, GPT/Groq existentes) será suficiente para o volume inicial
- O número dedicado de WhatsApp já está configurado

---

## 8. Requisitos Funcionais

### 8.1 Visão Geral das Funcionalidades

| ID | Funcionalidade | Descrição | Persona | Prioridade | Complexidade | Fase |
|----|---------------|-----------|---------|------------|--------------|------|
| RF-001 | Site institucional otimizado | Landing page com design profissional, SEO e GEO | Pacientes | Must | Média | 1 |
| RF-002 | Blog otimizado | Listagem e leitura de artigos com SEO completo | Pacientes | Must | Média | 1 |
| RF-003 | CTA WhatsApp otimizado | Botão flutuante com mensagem pré-configurada | Pacientes | Must | Baixa | 1 |
| RF-004 | Google Analytics (GA4) | Rastreamento de visitas, eventos e conversões | Admin | Must | Baixa | 1 |
| RF-005 | Página de depoimentos | Social proof com avaliações de pacientes | Pacientes | Must | Baixa | 1 |
| RF-006 | Painel admin simplificado | CRUD de artigos com interface mínima e intuitiva | Admin | Must | Média | 1 |
| RF-007 | Agente de blog IA | Geração de artigos via LLM com curadoria humana | Admin | Must | Alta | 2 |
| RF-008 | Gerador de cards Instagram | Criar imagens compartilháveis dos artigos | Admin | Should | Média | 1 |
| RF-009 | LP Primeira Consulta | Landing page com vídeo + oferta 50% desconto | Pacientes | Must | Média | 3 |
| RF-010 | LP Sessão de Resolução | Landing page com vídeo + sessão pontual R$200 | Pacientes | Must | Média | 3 |
| RF-011 | SEO técnico completo | Sitemap, robots, structured data, Core Web Vitals | Google | Must | Média | 1 |
| RF-012 | Otimização GEO | Conteúdo estruturado para aparecer em respostas de LLMs | LLMs | Should | Média | 1 |
| RF-013 | Geração automática de capa | Imagem de capa gerada por IA (inference.sh) ao criar artigo | Admin | Must | Média | 2 |

### 8.2 Detalhamento por Funcionalidade

#### RF-001: Site Institucional Otimizado
- **Descrição:** Landing page profissional com seções: Hero, Sobre, Abordagem (Logoterapia), Serviços, Depoimentos, Contato
- **Persona:** Pacientes potenciais
- **Pré-condições:** Design aprovado pela Dra. Larissa
- **Fluxo principal:**
  1. Visitante acessa o site
  2. Vê hero section com frase de impacto sobre sentido da vida
  3. Rola e conhece a Dra. Larissa (foto, bio, credenciais)
  4. Entende a abordagem (Logoterapia explicada de forma acessível)
  5. Vê os serviços oferecidos (terapia contínua, sessão pontual, orientação vocacional)
  6. Lê depoimentos de pacientes
  7. Clica no WhatsApp para iniciar conversa
- **Critérios de aceite:**
  - [ ] Design responsivo (mobile-first)
  - [ ] Tempo de carregamento <3s (Lighthouse score >90)
  - [ ] Todas as seções com conteúdo final
  - [ ] Schema markup MedicalBusiness/Physician implementado
  - [ ] Meta tags e OpenGraph em todas as páginas
  - [ ] Frase de impacto aprovada pela Dra. Larissa

#### RF-003: CTA WhatsApp Otimizado
- **Descrição:** Botão flutuante de WhatsApp com mensagem pré-configurada sobre interesse em psicoterapia e metodologia da Dra. Larissa Nunes
- **Persona:** Pacientes potenciais
- **Fluxo principal:**
  1. Visitante vê botão flutuante em qualquer página
  2. Clica no botão
  3. Abre WhatsApp com número dedicado e mensagem pré-preenchida
  4. Agente de IA externo inicia qualificação
- **Regras de negócio:** RN-001
- **Critérios de aceite:**
  - [ ] Botão visível em todas as páginas (desktop e mobile)
  - [ ] Mensagem pré-preenchida: interesse em conhecer a psicoterapia e metodologia da Dra. Larissa Nunes
  - [ ] Número de WhatsApp dedicado configurado
  - [ ] Evento de clique rastreado no GA4

#### RF-004: Google Analytics (GA4)
- **Descrição:** Instalação e configuração do GA4 com eventos personalizados para rastrear a jornada do visitante
- **Persona:** Admin (Dra. Larissa / equipe)
- **Eventos a rastrear:**
  - Pageview (automático)
  - Clique no botão WhatsApp (evento personalizado)
  - Clique em "Agendar consulta" em qualquer CTA
  - Leitura de artigo do blog (scroll >75%)
  - Tempo na página
  - Origem do tráfego (orgânico, pago, social, direto)
- **Critérios de aceite:**
  - [ ] GA4 instalado e recebendo dados
  - [ ] Eventos personalizados configurados e testados
  - [ ] Dashboard básico com métricas-chave acessível

#### RF-007: Agente de Blog com IA
- **Descrição:** Sistema integrado ao painel admin que permite à Dra. Larissa solicitar a criação de artigos por IA, revisar e publicar
- **Persona:** Admin (Dra. Larissa)
- **Pré-condições:** Painel admin funcional; integração com LLM configurada
- **Fluxo principal:**
  1. Dra. Larissa acessa painel admin
  2. Insere um tema, texto ou prompt sobre o artigo desejado
  3. Sistema envia para LLM (Claude Code/GPT/Groq) que pesquisa e redige artigo completo
  4. Artigo gerado com: título SEO, resumo, conteúdo HTML, tags, categoria
  5. Sistema gera automaticamente imagem de capa via inference.sh (IA) — sem texto, estilo editorial, tema visual baseado na categoria do artigo
  6. Artigo é exibido em modo preview com imagem de capa para a Dra. Larissa
  7. Dra. Larissa revisa, solicita ajustes ou aprova
  8. Ao aprovar, artigo é publicado com imagem no blog
- **Regras de negócio:** RN-003, RN-004
- **Critérios de aceite:**
  - [ ] Campo de input de tema/prompt funcional no admin
  - [ ] Integração com pelo menos 1 LLM operacional
  - [ ] Artigo gerado segue princípios de copy (objetividade, clareza, brevidade inteligente)
  - [ ] Artigo gerado é otimizado para SEO (título, meta description, headings, keywords)
  - [ ] Preview funcional antes da publicação
  - [ ] Botão "Solicitar ajustes" funcional
  - [ ] Publicação só ocorre após aprovação explícita
  - [ ] Nunca publica automaticamente sem revisão

#### RF-009: Landing Page — Primeira Consulta (50% desconto)
- **Descrição:** Página oculta (não aparece no menu), otimizada para conversão em campanhas pagas (Google Ads, Meta Ads)
- **Persona:** Pacientes de campanhas pagas
- **Elementos:**
  - Vídeo promocional como elemento central
  - Headline de impacto sobre conhecer o trabalho da Dra. Larissa
  - Oferta: primeira consulta com 50% de desconto (R$90)
  - Benefícios da Logoterapia
  - Depoimento destaque
  - CTA único: WhatsApp
- **Critérios de aceite:**
  - [ ] URL oculta (não indexada, não no menu)
  - [ ] Vídeo carrega corretamente e é responsivo
  - [ ] CTA WhatsApp com mensagem específica da oferta
  - [ ] Rastreamento GA4 com UTM parameters
  - [ ] Tempo de carregamento <2s

#### RF-010: Landing Page — Sessão de Resolução (R$200)
- **Descrição:** Página oculta para sessão pontual de "desabafo" / resolução de conflitos
- **Persona:** Pacientes de campanhas pagas buscando solução pontual
- **Elementos:**
  - Vídeo explicativo sobre a sessão de resolução
  - Headline sobre superar momentos difíceis com uma única sessão
  - Oferta: sessão pontual de resolução por R$200
  - Para quem é: luto, decisão difícil, momento de crise, conflito
  - CTA único: WhatsApp
- **Critérios de aceite:**
  - [ ] URL oculta (não indexada, não no menu)
  - [ ] Vídeo carrega corretamente e é responsivo
  - [ ] CTA WhatsApp com mensagem específica da sessão
  - [ ] Rastreamento GA4 com UTM parameters

---

## 9. Requisitos Não-Funcionais

| ID | Categoria | Requisito | Target |
|----|-----------|-----------|--------|
| RNF-001 | Performance | Tempo de carregamento da página principal | <3 segundos |
| RNF-002 | Performance | Lighthouse Performance Score | >90 |
| RNF-003 | Performance | Core Web Vitals (LCP, FID, CLS) | Todos "Good" |
| RNF-004 | SEO | Lighthouse SEO Score | >95 |
| RNF-005 | Responsividade | Funcionar em telas de 320px a 2560px | 100% funcional |
| RNF-006 | Segurança | Headers de segurança (X-Frame, X-Content-Type, XSS) | Configurados |
| RNF-007 | Segurança | HTTPS obrigatório | Sim (Vercel) |
| RNF-008 | Disponibilidade | Uptime do site | >99.5% |
| RNF-009 | Usabilidade | Admin utilizável sem conhecimento técnico | Sim |
| RNF-010 | Custo | Infraestrutura mensal | <R$50/mês |
| RNF-011 | Acessibilidade | Contraste, alt text, navegação por teclado | WCAG 2.1 AA básico |
| RNF-012 | SEO | Structured data válido (Schema.org) | Sem erros no Rich Results Test |

---

## 10. Regras de Negócio

| ID | Regra | Condição | Ação | Exceções |
|----|-------|----------|------|----------|
| RN-001 | Mensagem WhatsApp padrão | Quando visitante clica no botão WhatsApp do site | Abrir WhatsApp com mensagem sobre interesse em psicoterapia e metodologia da Dra. Larissa Nunes | Landing pages têm mensagem específica da oferta |
| RN-002 | Precificação | Sessão avulsa | R$180 por sessão | — |
| RN-003 | Desconto pacote mensal | Pacote de 4 sessões/mês | 20% de desconto = R$144/sessão = R$576/mês | — |
| RN-004 | Sessão de resolução/desabafo | Sessão pontual | R$200 por sessão | — |
| RN-005 | LP Primeira Consulta | Campanha paga | 50% desconto = R$90 na primeira sessão | Apenas para novos pacientes |
| RN-006 | Publicação de artigo | Artigo gerado por IA | Obrigatória revisão e aprovação da Dra. Larissa antes de publicar | Nunca auto-publicar |
| RN-007 | Landing pages ocultas | URLs das LPs | Não aparecem no menu de navegação, não são indexadas pelo Google (noindex) | Acessíveis via URL direta em campanhas |
| RN-008 | Conteúdo do blog | Artigo gerado por IA | Deve seguir princípios de copy: objetividade, comunicação clara, brevidade inteligente, otimizado para SEO | — |
| RN-009 | Horário de atendimento | Informação no site | Seg-Sex 8:00-18:00, Sáb 8:00-12:00 | Pode mudar conforme agenda da doutora |

---

## 11. Fluxos e Jornadas do Usuário

### 11.1 Jornada Principal — Paciente via Busca Orgânica (Happy Path)
```
Busca no Google → Encontra artigo/site → Lê conteúdo → Confia na profissional → Clica WhatsApp → Qualificação (agente IA externo) → 1ª sessão → Pacote mensal
```

**Descrição detalhada:**
1. **Descoberta:** Pessoa pesquisa "terapia para crise existencial" ou "como encontrar sentido na vida" no Google
2. **Encontro:** Aparece artigo do blog ou página do site nos resultados
3. **Engajamento:** Lê o artigo, navega pelo site, vê credenciais e abordagem
4. **Confiança:** Lê depoimentos, entende a Logoterapia, se identifica
5. **Ação:** Clica no botão de WhatsApp
6. **Qualificação:** Agente de IA externo (no WhatsApp) coleta informações, entende demanda
7. **Contato:** Dra. Larissa recebe briefing e entra em contato para confirmar horário
8. **Primeira sessão:** Sessão avulsa (R$180) ou com desconto de LP (R$90)
9. **Retenção:** Dra. Larissa propõe pacote de 4 sessões/mês (R$576)

### 11.2 Jornada Secundária — Paciente via Campanha Paga
```
Anúncio (Google/Meta) → Landing Page com vídeo → Assiste vídeo → Clica WhatsApp → Qualificação → 1ª sessão com desconto → Pacote mensal
```

### 11.3 Jornada Secundária — Paciente via LLM/IA
```
Pergunta para ChatGPT/Claude "preciso de terapia para..." → IA menciona Logoterapia/site → Visita site → Lê conteúdo → Clica WhatsApp
```

### 11.4 Jornada Admin — Criação de Artigo
```
Dra. Larissa envia tema → Agente IA pesquisa e redige → Preview do artigo → Dra. Larissa revisa → Solicita ajustes (se necessário) → Aprova → Publicação automática
```

### 11.5 Fluxos de Exceção/Erro
- **Visitante não encontra o que busca:** Blog deve ter artigos cobrindo os principais temas buscados. CTA de WhatsApp sempre visível como alternativa
- **WhatsApp fora do ar / agente IA indisponível:** Mensagem no site com e-mail alternativo (la.nunesdasilva@hotmail.com)
- **Artigo gerado com qualidade insuficiente:** Dra. Larissa solicita nova versão via painel admin. Agente regenera com ajustes
- **Landing page sem vídeo disponível:** Usar imagem profissional + texto de impacto como fallback

---

## 12. Integrações e Dependências

### 12.1 Integrações Externas
| Sistema | Tipo | Propósito | Criticidade | Status |
|---------|------|-----------|-------------|--------|
| Supabase | Database + Auth | Banco de dados (blog_posts, mensagens) e autenticação admin | Obrigatória | Configurado |
| Google Analytics (GA4) | SDK/Tag | Rastreamento de visitas, eventos e conversões | Obrigatória | Pendente |
| Google Search Console | Verificação | Monitoramento de posição no Google, indexação | Obrigatória | Pendente |
| WhatsApp Business | Link direto | CTA principal de conversão | Obrigatória | Configurado |
| LLM (GPT/Groq/Claude) | API | Geração de artigos para o blog | Obrigatória (Fase 2) | Pendente |
| Vercel | Hosting | Deploy e hospedagem do site | Obrigatória | Configurado |
| Google Stitch | MCP/Design | Melhoria de design via Cursor | Opcional | Pendente |
| Google Maps | Embed | Localização do consultório | Opcional | Pendente |

### 12.2 Dependências Internas
- Conteúdo textual e fotos profissionais da Dra. Larissa
- Vídeos promocionais para as landing pages (produção da Dra. Larissa)
- Revisão e aprovação de artigos pela Dra. Larissa

### 12.3 Dados
- **Fontes de dados:** Supabase (artigos, mensagens), Google Analytics (métricas), LLM (geração de conteúdo)
- **Formato:** PostgreSQL (Supabase), JSON (Analytics), HTML (artigos)
- **Migração necessária:** Não — dados já migrados de Firebase para Supabase

---

## 13. Restrições

### 13.1 Técnicas
- **Stack obrigatória:** React 19 + TypeScript + Vite + Tailwind CSS + Supabase
- **Hospedagem:** Vercel (free tier)
- **LLMs:** GPT (já possui), Groq, Claude Code — usar os que já estão disponíveis
- **Performance:** Core Web Vitals dentro do "Good" (obrigatório para SEO)
- **Agente de blog:** Integrado ao Claude Code com skills, rodando via Cursor

### 13.2 Operacionais
- **Orçamento:** O mais baixo possível. Priorizar free tiers (Supabase Free, Vercel Free, Groq Free)
- **Equipe:** 1 desenvolvedor (assistido por IA) + Dra. Larissa (conteúdo e revisão)
- **Prazo:** Não definido formalmente, mas urgência alta — cada mês sem o site otimizado são pacientes não captados
- **Operação:** Dra. Larissa deve conseguir operar o admin sem conhecimento técnico

### 13.3 Regulatórias
- **CFP/CRP:** Publicidade de serviços psicológicos deve seguir o Código de Ética do Psicólogo e resoluções do CFP sobre publicidade
- **LGPD:** Dados de contato coletados devem ter consentimento e política de privacidade
- **Conteúdo clínico:** Artigos do blog não podem fazer diagnóstico ou prescrever tratamento; devem ser informativos e educacionais

### 13.4 De Negócio
- Dependência dos vídeos promocionais para as landing pages
- Disponibilidade da Dra. Larissa para revisar artigos (gargalo potencial)

---

## 14. Riscos e Hipóteses

### 14.1 Riscos
| ID | Risco | Probabilidade | Impacto | Mitigação |
|----|-------|--------------|---------|-----------|
| R-001 | SEO demora mais que 6 meses para gerar tráfego significativo | Alta | Alto | Complementar com campanhas pagas (LPs) enquanto SEO amadurece |
| R-002 | Dra. Larissa não consegue revisar artigos na frequência necessária | Média | Alto | Simplificar ao máximo o fluxo de revisão; permitir revisão por celular |
| R-003 | Conteúdo gerado por IA não atinge qualidade clínica/ética necessária | Média | Alto | Skills de copy + prompt engineering robusto + revisão obrigatória |
| R-004 | Vídeos promocionais não ficam prontos para as LPs | Média | Médio | Lançar LPs com imagem + texto primeiro, adicionar vídeo depois |
| R-005 | Free tiers de infraestrutura atingem limites | Baixa | Médio | Monitorar uso; migrar para plano pago só quando necessário |
| R-006 | Concorrentes investem em SEO para mesmos termos | Média | Médio | Focar em long-tail keywords e nicho (Logoterapia + católico + Centro-Oeste) |
| R-007 | Regulação do CFP restringe publicidade online | Baixa | Alto | Manter conteúdo informativo/educativo, nunca promocional-clínico |

### 14.2 Hipóteses a Validar
| ID | Hipótese | Criticidade | Como Validar | Status |
|----|----------|-------------|--------------|--------|
| H-001 | Há volume de busca suficiente para termos de Logoterapia | Alta | Google Keyword Planner / Search Console | Pendente |
| H-002 | O público-alvo católico responde melhor a abordagem integrada fé + terapia | Média | A/B test em conteúdo do blog (com e sem referência a valores) | Pendente |
| H-003 | Sessão de "desabafo" pontual (R$200) funciona como porta de entrada para pacote mensal | Alta | Rastrear conversão de sessão pontual → pacote | Pendente |
| H-004 | 50% de desconto na primeira sessão gera leads qualificados (não apenas curiosos) | Média | Rastrear taxa de conversão LP → paciente recorrente | Pendente |
| H-005 | Blog com 4+ artigos/mês é suficiente para ganhar relevância orgânica em 6 meses | Média | Monitorar posição no Google Search Console | Pendente |
| H-006 | Conteúdo otimizado para GEO faz o site ser citado em respostas de LLMs | Alta | Testar queries em ChatGPT, Claude, Gemini mensalmente | Pendente |

---

## 15. Priorização

### 15.1 Matriz de Priorização (MoSCoW)

**Must Have (MVP — Fase 1):**
- RF-001: Site institucional otimizado (design, conteúdo, UX)
- RF-002: Blog otimizado (SEO, layout, UX de leitura)
- RF-003: CTA WhatsApp otimizado (mensagem pré-configurada)
- RF-004: Google Analytics (GA4) com eventos personalizados
- RF-005: Página de depoimentos
- RF-006: Painel admin simplificado
- RF-011: SEO técnico completo
- RNF-001 a RNF-004: Performance e SEO

**Must Have (Fase 2):**
- RF-007: Agente de blog com IA

**Must Have (Fase 3):**
- RF-009: Landing page — Primeira Consulta
- RF-010: Landing page — Sessão de Resolução

**Should Have:**
- RF-008: Gerador de cards Instagram
- RF-012: Otimização GEO
- RNF-011: Acessibilidade WCAG 2.1 AA

**Could Have:**
- Integração com Google Maps (embed do consultório)
- Dashboard de métricas no admin (resumo de visitas, cliques)
- Notificação por email quando novo lead clica no WhatsApp

**Won't Have (neste release):**
- Agente WhatsApp IA (projeto separado)
- Pagamento online
- Área do paciente com login
- Agendamento automatizado
- Terapia de casal / infantil
- Multi-idioma

### 15.2 Sequência Recomendada de Implementação

| Ordem | Entrega | Justificativa | Dependências |
|-------|---------|---------------|--------------|
| 1 | Google Analytics (GA4) | Instalar primeiro para medir impacto de todas as melhorias seguintes | Nenhuma |
| 2 | SEO técnico + structured data | Base para aparecer no Google; precede melhorias de conteúdo | Nenhuma |
| 3 | Redesign UI/UX | Melhora conversão imediatamente; fundação para todo o resto | Google Stitch MCP |
| 4 | Otimização de conteúdo do site | Textos, CTAs, mensagem WhatsApp, proposta de valor | Redesign |
| 5 | Blog otimizado | Layout, UX de leitura, CTA em artigos | Redesign |
| 6 | Painel admin simplificado | Necessário antes do agente de blog | — |
| 7 | Agente de blog IA | Começa a gerar conteúdo orgânico escalável | Admin, LLM API |
| 8 | Landing pages | Para campanhas pagas enquanto SEO amadurece | Vídeos prontos |
| 9 | GEO optimization | Refinamento para aparecer em LLMs | Conteúdo de blog |
| 10 | Cards Instagram | Complemento para distribuição de conteúdo | Blog funcional |

---

## 16. Dúvidas Pendentes — TODAS RESOLVIDAS (07/04/2026)

| # | Dúvida | Resolução | Data |
|---|--------|-----------|------|
| 1 | Frase de impacto / tagline definitiva | 3 opções aprovadas: (A) "Quem tem um porquê, suporta qualquer como. Descubra o seu." (B) "Você não precisa de mais força. Precisa de um porquê." (C) "O sofrimento não precisa ser o fim da história. Ele pode ser o começo de uma direção." Opção A como headline principal, B e C para variações/A/B test. | 07/04/2026 |
| 2 | Vídeos para landing pages | Vídeos JÁ EXISTEM. Prontos para uso nas LPs. | 07/04/2026 |
| 3 | Volume de busca para Logoterapia | Pesquisa completa realizada. Documento: docs/keyword_strategy.md. Principais oportunidades: "não sei o que fazer da vida" (8-15K), "crise existencial" (5-10K), "vazio existencial" (3-6K). Logoterapia é nicho pouco explorado = oportunidade. | 07/04/2026 |
| 4 | Número WhatsApp dedicado | Confirmado: +55 62 99629-0052. Mesmo número já no site. Agente IA externo já configurado. | 07/04/2026 |
| 5 | Depoimentos no site | Depoimentos atuais NÃO são reais — devem ser REMOVIDOS. Usar avaliações reais do Google (5.0 estrelas, 4 avaliações). Solicitar mais avaliações reais no Google. | 07/04/2026 |
| 6 | Registro CRP | CRP 09/16269. Deve aparecer no footer, seção Sobre e landing pages. | 07/04/2026 |
| 7 | Frequência de revisão de artigos | 3 artigos por semana. Sem restrição de horário ou dia. Frequência de publicação: 12 artigos/mês (acima do ideal). | 07/04/2026 |

---

## 17. Próximos Passos

| # | Ação | Responsável | Status |
|---|------|-------------|--------|
| 1 | ~~Resolver dúvidas pendentes (seção 16)~~ | Equipe | CONCLUÍDO 07/04 |
| 2 | ~~Gerar copy do site (skill /consultor_copy)~~ | Equipe | CONCLUÍDO 07/04 — docs/copy_site_dra_larissa_2026-04-07.md |
| 3 | ~~Criar SDD/SPEC técnico (skill /SDD-avancado)~~ | Equipe | CONCLUÍDO 07/04 — docs/SPEC.md, PLAN.md, TASKS.md |
| 4 | ~~Pesquisa de keywords e estratégia de conteúdo~~ | Equipe | CONCLUÍDO 07/04 — docs/keyword_strategy.md |
| 5 | Iniciar implementação Fase 1 (GA4 + SEO + Infra) | Desenvolvedor | PENDENTE |
| 6 | Conectar Google Stitch MCP para redesign | Desenvolvedor | PENDENTE |
| 7 | Auditar site com /consultor_site_que_converte | Equipe | PENDENTE |
| 8 | Remover depoimentos fictícios e substituir por avaliações reais do Google | Desenvolvedor | PENDENTE |
| 9 | Adicionar CRP 09/16269 no footer e seção Sobre | Desenvolvedor | PENDENTE |
| 10 | Começar produção de artigos (12/mês) seguindo keyword_strategy.md | Dra. Larissa + Agente IA | Após Fase 5 |

---

## 18. Glossário

| Termo | Definição |
|-------|-----------|
| Logoterapia | Abordagem psicoterapêutica criada por Viktor Frankl, focada na busca de sentido como principal motivação humana |
| GEO | Generative Engine Optimization — otimização de conteúdo para aparecer em respostas geradas por IAs/LLMs |
| SEO | Search Engine Optimization — otimização para mecanismos de busca (Google) |
| Lead | Potencial paciente que demonstrou interesse (clicou no WhatsApp, enviou mensagem) |
| CTA | Call to Action — elemento que incentiva o visitante a tomar uma ação (ex: botão "Fale no WhatsApp") |
| LP | Landing Page — página de destino otimizada para conversão em campanhas |
| North Star Metric | Métrica principal que indica se o produto está cumprindo seu propósito |
| MoSCoW | Método de priorização: Must have, Should have, Could have, Won't have |
| Core Web Vitals | Métricas do Google que medem experiência do usuário (LCP, FID, CLS) |
| Schema Markup | Dados estruturados em formato JSON-LD que ajudam o Google a entender o conteúdo |
| CFP/CRP | Conselho Federal/Regional de Psicologia — órgão regulador da profissão |
| LGPD | Lei Geral de Proteção de Dados — legislação brasileira de privacidade |
| GA4 | Google Analytics 4 — versão atual da ferramenta de analytics do Google |

---

## 19. Histórico de Revisões

| Versão | Data | Autor | Alterações |
|--------|------|-------|------------|
| 1.0 | 06/04/2026 | Consultor de Produto (Claude Code) | Versão inicial — discovery completo com 4 blocos de perguntas |
| 1.1 | 07/04/2026 | Consultor de Produto (Claude Code) | Todas as 7 dúvidas pendentes resolvidas. Copy do site produzida. SPEC, PLAN e TASKS técnicos gerados. Estratégia de keywords pesquisada e documentada. Depoimentos fictícios sinalizados para remoção. CRP 09/16269 registrado. |
| 1.2 | 08/04/2026 | Claude Code | Adicionado RF-013: geração automática de imagem de capa por IA (inference.sh, modelo pruna/p-image). Fluxo do RF-007 atualizado com etapa de geração de imagem. 30 cenas temáticas + 5 estilos = 150 combinações. Sem texto nas imagens. |
