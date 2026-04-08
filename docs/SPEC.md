# SPEC — Especificacao Funcional
> Projeto: Site Dra. Larissa Nunes
> Data: 07/04/2026
> Versao: 1.0
> Referencia: PRD v1.0

---

## 1. Requisitos Funcionais

### RF-001 — Redesign da Hero Section
**Descricao:** O sistema deve exibir uma hero section com headline de impacto ("Quem tem um porque, suporta qualquer como"), subheadline, foto profissional da Dra. Larissa e CTA para WhatsApp.
**Prioridade:** Alta
**Criterio de aceite:** CA-001
**Notas:** Copy definida no documento copy_site_dra_larissa_2026-04-07.md. Design via Google Stitch MCP.

### RF-002 — Secao Sobre Otimizada
**Descricao:** O sistema deve exibir secao "Quem vai caminhar com voce" com bio da Dra. Larissa, foto, credenciais e experiencia em Logoterapia.
**Prioridade:** Alta
**Criterio de aceite:** CA-002

### RF-003 — Secao Abordagem (Logoterapia)
**Descricao:** O sistema deve exibir secao explicando Logoterapia de forma acessivel, com citacao de Viktor Frankl, diferencial vs. terapias convencionais e lista "para quem e".
**Prioridade:** Alta
**Criterio de aceite:** CA-003

### RF-004 — Secao Servicos com Precos
**Descricao:** O sistema deve exibir 3 servicos (Psicoterapia Individual, Sessao de Resolucao, Orientacao Vocacional) com descricao, precos e CTAs individuais para WhatsApp.
**Prioridade:** Alta
**Criterio de aceite:** CA-004

### RF-005 — CTA WhatsApp Otimizado
**Descricao:** O botao flutuante de WhatsApp deve abrir conversa com numero dedicado e mensagem pre-configurada sobre interesse em psicoterapia e metodologia da Dra. Larissa Nunes.
**Prioridade:** Alta
**Criterio de aceite:** CA-005
**Notas:** Cada pagina/secao pode ter mensagem contextual diferente no CTA inline, mas o botao flutuante usa mensagem padrao.

### RF-006 — Secao FAQ/Objecoes
**Descricao:** O sistema deve exibir secao de perguntas frequentes com respostas que neutralizam as 3 objecoes principais (preco, nunca fez terapia, o que e Logoterapia).
**Prioridade:** Alta
**Criterio de aceite:** CA-006

### RF-007 — Google Analytics (GA4)
**Descricao:** O sistema deve instalar GA4 com eventos personalizados: clique no WhatsApp, leitura de artigo (scroll >75%), pageview, origem do trafego.
**Prioridade:** Alta
**Criterio de aceite:** CA-007
**Notas:** Tag do GA4 deve ser configurada via variavel de ambiente (VITE_GA_MEASUREMENT_ID).

### RF-008 — SEO Tecnico Completo
**Descricao:** Todas as paginas publicas devem ter: meta tags (title, description, keywords), OpenGraph tags, canonical URL, structured data (Schema.org), sitemap.xml atualizado, robots.txt otimizado.
**Prioridade:** Alta
**Criterio de aceite:** CA-008
**Notas:** Structured data: MedicalBusiness + Physician na home, BlogPosting por artigo, FAQPage na secao FAQ.

### RF-009 — Blog Otimizado
**Descricao:** A pagina de listagem do blog deve exibir artigos com imagem, titulo, resumo, categoria, data, tempo de leitura. A pagina de artigo deve ter layout otimizado para leitura, CTA para WhatsApp ao final, compartilhamento social, artigos relacionados.
**Prioridade:** Alta
**Criterio de aceite:** CA-009

### RF-010 — Painel Admin Simplificado
**Descricao:** O painel admin deve permitir CRUD de artigos com interface minima: lista de artigos, formulario de criacao/edicao, botao de publicar/despublicar. Deve ser utilizavel sem conhecimento tecnico.
**Prioridade:** Alta
**Criterio de aceite:** CA-010

### RF-011 — Agente de Blog com IA
**Descricao:** O painel admin deve ter funcionalidade para enviar tema/prompt e receber artigo completo gerado por LLM, com titulo SEO, resumo, conteudo HTML, sugestao de imagens, tags e categoria. O artigo deve ser exibido em preview antes da publicacao. Publicacao so ocorre apos aprovacao explicita.
**Prioridade:** Alta
**Criterio de aceite:** CA-011
**Notas:** Integracao com Claude/GPT/Groq via API. Diretrizes de copy e SEO definidas no guia de blog.

### RF-012 — Landing Page: Primeira Consulta (50% desconto)
**Descricao:** O sistema deve ter pagina oculta (/primeira-consulta) com video promocional, oferta de primeira sessao por R$90, CTA para WhatsApp com mensagem especifica da oferta. Nao aparece no menu, nao indexada.
**Prioridade:** Media
**Criterio de aceite:** CA-012
**Notas:** URL com noindex. Suporta UTM parameters para rastreamento GA4.

### RF-013 — Landing Page: Sessao de Resolucao (R$200)
**Descricao:** O sistema deve ter pagina oculta (/sessao-de-resolucao) com video explicativo, oferta de sessao pontual por R$200, CTA para WhatsApp com mensagem especifica. Nao aparece no menu, nao indexada.
**Prioridade:** Media
**Criterio de aceite:** CA-013
**Notas:** Mesmas regras de RF-012.

### RF-014 — Secao CTA Final
**Descricao:** Toda pagina publica deve terminar com secao de CTA "Voce nao precisa continuar carregando isso sozinho" com botao para WhatsApp e informacoes de atendimento.
**Prioridade:** Alta
**Criterio de aceite:** CA-014

### RF-015 — Otimizacao GEO
**Descricao:** O conteudo do site e blog deve ser estruturado para aparecer em respostas de LLMs: definicoes claras, formato pergunta-resposta, dados estruturados, mencao a "Dra. Larissa Nunes" + "Logoterapia" juntos.
**Prioridade:** Media
**Criterio de aceite:** CA-015

### RF-016 — Pagina de Depoimentos Otimizada
**Descricao:** A pagina de depoimentos deve exibir avaliacoes com nome, localizacao, tipo de servico, nota (estrelas), texto do depoimento. Deve ter Schema markup Review.
**Prioridade:** Media
**Criterio de aceite:** CA-016

---

## 2. Requisitos Nao Funcionais

### RNF-001 — Performance
- Lighthouse Performance Score > 90 em todas as paginas publicas
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Tempo de carregamento total < 3s em conexao 4G

### RNF-002 — Seguranca
- Headers de seguranca: X-Frame-Options DENY, X-Content-Type-Options nosniff, X-XSS-Protection
- HTTPS obrigatorio (Vercel)
- Variaveis sensiveis apenas em .env (nunca no codigo)
- Supabase RLS habilitado em todas as tabelas
- Admin protegido por autenticacao Supabase Auth
- Input sanitizado em formularios (prevenir XSS)

### RNF-003 — SEO
- Lighthouse SEO Score > 95
- Structured data valido (zero erros no Rich Results Test)
- Sitemap.xml atualizado automaticamente
- Meta tags em todas as paginas
- URLs amigaveis com keywords

### RNF-004 — Usabilidade
- Site 100% responsivo (320px a 2560px)
- Admin utilizavel por pessoa sem conhecimento tecnico
- CTA WhatsApp visivel em qualquer pagina sem scroll
- Formularios com feedback visual de sucesso/erro

### RNF-005 — Custo
- Infraestrutura mensal < R$50
- Supabase Free tier
- Vercel Free tier
- LLM APIs: usar creditos existentes (GPT/Groq/Claude)

### RNF-006 — Acessibilidade
- Contraste minimo AA (WCAG 2.1)
- Alt text em todas as imagens
- Navegacao por teclado funcional
- Textos legiveis (minimo 16px corpo)

---

## 3. Fluxos Principais

### Fluxo 1 — Visitante Descobre o Site e Contata via WhatsApp

**Pre-condicao:** Visitante encontra o site via Google, LLM ou link direto

1. Visitante acessa a homepage
2. Sistema exibe hero section com headline e CTA
3. Visitante rola pagina, le secoes Sobre, Abordagem, Servicos
4. Visitante clica em CTA WhatsApp (flutuante ou inline)
5. Sistema abre WhatsApp com numero dedicado e mensagem pre-configurada
6. Sistema registra evento "whatsapp_click" no GA4 com pagina de origem

**Pos-condicao:** Lead no WhatsApp com mensagem de interesse. Evento rastreado no GA4.
**Requisitos cobertos:** RF-001, RF-002, RF-003, RF-004, RF-005, RF-007, RF-014

### Fluxo 2 — Visitante Le Artigo do Blog e Contata

**Pre-condicao:** Visitante encontra artigo via busca organica

1. Visitante acessa pagina do artigo (/blog/:postId)
2. Sistema exibe artigo com layout otimizado, imagem, metadata
3. Visitante le o artigo (scroll > 75%)
4. Sistema registra evento "article_read" no GA4
5. Visitante ve CTA ao final do artigo
6. Visitante clica no WhatsApp
7. Sistema abre WhatsApp com mensagem contextual

**Pos-condicao:** Lead qualificado por conteudo. Eventos article_read + whatsapp_click no GA4.
**Requisitos cobertos:** RF-009, RF-005, RF-007, RF-008

### Fluxo 3 — Visitante Chega via Campanha Paga na Landing Page

**Pre-condicao:** Visitante clica em anuncio (Google Ads ou Meta Ads) com UTM parameters

1. Visitante acessa LP (/primeira-consulta ou /sessao-de-resolucao)
2. Sistema exibe LP com video, oferta e CTA
3. Sistema captura UTM parameters e registra no GA4
4. Visitante assiste video
5. Visitante clica no CTA WhatsApp
6. Sistema abre WhatsApp com mensagem especifica da oferta

**Pos-condicao:** Lead com contexto da campanha. Eventos rastreados com UTM.
**Requisitos cobertos:** RF-012, RF-013, RF-007

### Fluxo 4 — Admin Cria Artigo via Agente IA

**Pre-condicao:** Admin autenticado no painel

1. Admin acessa /admin/blog
2. Admin clica em "Novo artigo com IA"
3. Sistema exibe campo de tema/prompt
4. Admin insere tema e envia
5. Sistema envia prompt para LLM com diretrizes de copy e SEO
6. LLM retorna artigo completo (titulo, resumo, conteudo HTML, tags, categoria)
7. Sistema exibe artigo em modo preview
8. Admin revisa conteudo
9. Admin clica em "Solicitar ajustes" (volta ao passo 5 com feedback) OU "Aprovar e publicar"
10. Sistema publica artigo no blog com SEO completo

**Pos-condicao:** Artigo publicado, visivel no blog, indexavel pelo Google.
**Requisitos cobertos:** RF-010, RF-011

### Fluxo 5 — Admin Cria/Edita Artigo Manualmente

**Pre-condicao:** Admin autenticado no painel

1. Admin acessa /admin/blog
2. Admin clica em "Novo artigo" ou seleciona artigo existente
3. Sistema exibe formulario com campos: titulo, resumo, conteudo, imagem, categoria, tags
4. Admin preenche/edita campos
5. Admin clica em "Publicar" ou "Salvar rascunho"
6. Sistema salva no Supabase e exibe confirmacao

**Pos-condicao:** Artigo salvo/publicado no banco de dados.
**Requisitos cobertos:** RF-010

---

## 4. Criterios de Aceite

### CA-001 — Hero Section renderiza corretamente
**Cobre:** RF-001
```
Given: visitante acessa a homepage
When: a pagina carrega completamente
Then: a hero section exibe headline "Quem tem um porque, suporta qualquer como"
  And: exibe subheadline sobre Logoterapia
  And: exibe foto profissional da Dra. Larissa
  And: exibe botao CTA "Quero falar com a Dra. Larissa"
  And: o CTA abre WhatsApp com mensagem pre-configurada
  And: o layout e responsivo (funciona em mobile e desktop)
```

### CA-002 — Secao Sobre exibe bio completa
**Cobre:** RF-002
```
Given: visitante esta na homepage
When: rola ate a secao Sobre
Then: exibe titulo "Quem vai caminhar com voce"
  And: exibe foto da Dra. Larissa
  And: exibe texto de bio conforme copy aprovada
  And: exibe CTA para conhecer a abordagem
```

### CA-003 — Secao Abordagem explica Logoterapia
**Cobre:** RF-003
```
Given: visitante esta na homepage
When: rola ate a secao Abordagem
Then: exibe explicacao da Logoterapia em linguagem acessivel
  And: exibe citacao de Viktor Frankl
  And: exibe lista "Para quem e"
  And: exibe CTA "Quero encontrar meu porque"
```

### CA-004 — Secao Servicos exibe precos e CTAs
**Cobre:** RF-004
```
Given: visitante esta na homepage
When: rola ate a secao Servicos
Then: exibe 3 cards de servico (Psicoterapia Individual, Sessao de Resolucao, Orientacao Vocacional)
  And: cada card tem descricao, preco e CTA para WhatsApp
  And: Psicoterapia exibe R$180/sessao e pacote R$576/mes
  And: Sessao de Resolucao exibe R$200
  And: cada CTA abre WhatsApp com mensagem contextual do servico
```

### CA-005 — WhatsApp flutuante funciona em todas as paginas
**Cobre:** RF-005
```
Given: visitante esta em qualquer pagina publica do site
When: visualiza o canto inferior direito da tela
Then: ve botao flutuante de WhatsApp
  And: ao clicar, abre WhatsApp com numero dedicado
  And: a mensagem pre-preenchida menciona interesse em psicoterapia e metodologia da Dra. Larissa
  And: o evento "whatsapp_click" e registrado no GA4 com pagina de origem
```

### CA-006 — FAQ neutraliza objecoes
**Cobre:** RF-006
```
Given: visitante esta na homepage
When: rola ate a secao FAQ
Then: exibe pelo menos 4 perguntas frequentes
  And: responde sobre "nunca fiz terapia"
  And: responde sobre preco com fragmentacao (R$45/semana)
  And: responde sobre "o que e Logoterapia"
  And: responde sobre atendimento online
  And: as respostas sao expansiveis (accordion) em mobile
```

### CA-007 — Google Analytics rastreia eventos
**Cobre:** RF-007
```
Given: GA4 esta configurado com measurement ID valido
When: visitante navega pelo site
Then: GA4 registra pageview automaticamente
  And: registra evento "whatsapp_click" ao clicar em qualquer CTA WhatsApp
  And: registra evento "article_read" quando scroll > 75% em artigo do blog
  And: captura UTM parameters de campanhas pagas
  And: o measurement ID vem de variavel de ambiente, nao hardcoded
```

### CA-008 — SEO tecnico completo
**Cobre:** RF-008
```
Given: qualquer pagina publica do site
When: analisada pelo Lighthouse ou Rich Results Test
Then: tem tag <title> unica e descritiva
  And: tem meta description ate 155 caracteres
  And: tem canonical URL
  And: tem OpenGraph tags (og:title, og:description, og:image)
  And: homepage tem Schema MedicalBusiness + Physician
  And: artigos do blog tem Schema BlogPosting
  And: sitemap.xml inclui todas as paginas publicas
  And: robots.txt permite indexacao das paginas publicas
  And: landing pages ocultas tem meta noindex
```

### CA-009 — Blog otimizado para leitura e conversao
**Cobre:** RF-009
```
Given: visitante acessa pagina de listagem do blog
When: a pagina carrega
Then: exibe artigos com imagem, titulo, resumo, categoria, data
  And: artigos ordenados por data (mais recente primeiro)
  And: categorias sao filtraveis

Given: visitante acessa artigo individual
When: a pagina carrega
Then: exibe artigo com layout otimizado para leitura (largura maxima, tipografia)
  And: exibe tempo de leitura estimado
  And: exibe botoes de compartilhamento social
  And: exibe CTA para WhatsApp ao final do artigo
  And: exibe Schema BlogPosting valido
```

### CA-010 — Admin simplificado e funcional
**Cobre:** RF-010
```
Given: admin autenticado acessa /admin/blog
When: a pagina carrega
Then: exibe lista de artigos existentes com titulo, status e data
  And: botao "Novo artigo" visivel
  And: cada artigo tem opcoes de editar e excluir
  And: formulario de criacao tem campos: titulo, resumo, conteudo, imagem URL, categoria, tags
  And: botao "Publicar" e "Salvar rascunho" disponiveis
  And: feedback visual de sucesso/erro apos acoes
```

### CA-011 — Agente de blog gera artigo com revisao
**Cobre:** RF-011
```
Given: admin autenticado no painel de blog
When: clica em "Novo artigo com IA" e insere um tema
Then: sistema envia tema para LLM com diretrizes de copy/SEO
  And: exibe indicador de carregamento durante geracao
  And: exibe artigo gerado em modo preview (titulo, resumo, conteudo, tags)
  And: exibe botao "Aprovar e publicar" e "Solicitar ajustes"
  And: ao solicitar ajustes, permite inserir feedback e regenerar
  And: so publica apos clique explicito em "Aprovar e publicar"
  And: NUNCA publica automaticamente sem aprovacao
```

### CA-012 — Landing Page Primeira Consulta
**Cobre:** RF-012
```
Given: visitante acessa /primeira-consulta
When: a pagina carrega
Then: exibe video promocional como elemento central
  And: exibe headline e oferta de primeira sessao por R$90 (50% desconto)
  And: exibe CTA para WhatsApp com mensagem especifica da oferta
  And: a pagina NAO aparece no menu de navegacao
  And: a pagina tem meta tag noindex
  And: UTM parameters sao capturados e enviados ao GA4
```

### CA-013 — Landing Page Sessao de Resolucao
**Cobre:** RF-013
```
Given: visitante acessa /sessao-de-resolucao
When: a pagina carrega
Then: exibe video explicativo como elemento central
  And: exibe headline e oferta de sessao por R$200
  And: exibe lista "para quem e" com cenarios de uso
  And: exibe CTA para WhatsApp com mensagem especifica
  And: a pagina NAO aparece no menu de navegacao
  And: a pagina tem meta tag noindex
```

### CA-014 — CTA final em todas as paginas
**Cobre:** RF-014
```
Given: visitante esta em qualquer pagina publica
When: rola ate o final da pagina (antes do footer)
Then: exibe secao CTA com titulo "Voce nao precisa continuar carregando isso sozinho"
  And: exibe botao para WhatsApp
  And: exibe informacoes de atendimento (horarios, modalidades)
```

### CA-015 — Conteudo otimizado para GEO
**Cobre:** RF-015
```
Given: qualquer pagina ou artigo do site
When: analisado por estrutura de conteudo
Then: contem definicoes claras que LLMs podem citar
  And: menciona "Dra. Larissa Nunes" + "Logoterapia" juntos em pelo menos 2 pontos
  And: usa formato pergunta-resposta em pelo menos 1 secao
  And: contem dados estruturados Schema.org validos
```

### CA-016 — Depoimentos com Schema
**Cobre:** RF-016
```
Given: visitante acessa pagina de depoimentos
When: a pagina carrega
Then: exibe depoimentos com nome, localizacao, servico e nota
  And: Schema markup Review valido em cada depoimento
```

---

## 5. Casos de Borda

| ID | Cenario | Comportamento Esperado | Prioridade |
|----|---------|----------------------|------------|
| CB-001 | WhatsApp Web nao instalado no desktop | Abre whatsapp.com/send com fallback web | Alta |
| CB-002 | LLM API indisponivel ao gerar artigo | Exibe mensagem "Servico temporariamente indisponivel, tente novamente" + log do erro | Alta |
| CB-003 | LLM retorna conteudo incompleto ou com erro | Exibe preview com aviso "Conteudo pode estar incompleto" + botao para regenerar | Media |
| CB-004 | Visitante acessa LP sem UTM parameters | Pagina funciona normalmente, GA4 registra como trafego direto | Baixa |
| CB-005 | Admin tenta publicar artigo sem titulo/conteudo | Formulario valida e impede publicacao com mensagem de erro | Alta |
| CB-006 | Imagem de artigo nao carrega | Exibe placeholder com cor de fundo e texto alternativo | Media |
| CB-007 | Blog sem artigos publicados | Exibe mensagem "Em breve novos conteudos" com CTA para WhatsApp | Media |
| CB-008 | Sessao admin expira durante edicao de artigo | Redireciona para login preservando dados do formulario em localStorage | Media |
| CB-009 | Video da LP nao carrega | Exibe imagem fallback com headline e CTA funcionais | Alta |

---

## 6. Anti-SPEC (Especificacao Negativa)

### O que NAO construir nesta versao
- NAO implementar agente de WhatsApp IA (projeto separado)
- NAO implementar pagamento online (Pix/transferencia via WhatsApp)
- NAO implementar area do paciente com login
- NAO implementar agendamento automatizado com agenda Google
- NAO implementar chat ao vivo no site
- NAO implementar app mobile
- NAO implementar multi-idioma
- NAO implementar sistema de newsletter/email marketing
- NAO implementar comentarios nos artigos do blog
- NAO implementar editor WYSIWYG complexo no admin (campo HTML simples e suficiente)

### Comportamentos proibidos
- NUNCA publicar artigo automaticamente sem aprovacao da Dra. Larissa
- NUNCA expor credenciais de API (Supabase, GA4, LLM) no codigo-fonte do frontend
- NUNCA indexar landing pages ocultas (/primeira-consulta, /sessao-de-resolucao)
- NUNCA fazer diagnostico clinico ou prescrever tratamento no conteudo do blog
- NUNCA armazenar dados sensiveis de pacientes no banco de dados do site
- NUNCA enviar dados do visitante para terceiros alem de GA4 e Supabase

### Padroes a evitar
- NAO usar polling para verificar status de geracao de artigo — usar estado local com loading
- NAO criar abstractions desnecessarias — manter simplicidade no admin
- NAO adicionar features de "nice to have" sem aprovacao (ex: dark mode, animacoes extras)
- NAO usar bibliotecas pesadas onde CSS/Tailwind resolve (ex: nao adicionar Material UI)
- NAO criar rotas de API custom — usar Supabase client diretamente

---

## 7. Modelos de Dados (Visao Funcional)

### Entidade: blog_posts (existente — ajustar)
| Campo | Tipo | Obrigatorio | Descricao | Validacao |
|-------|------|-------------|-----------|-----------|
| id | UUID | Sim | Identificador unico | auto-gerado |
| title | string | Sim | Titulo do artigo | 5-200 caracteres |
| slug | string | Sim | URL amigavel | lowercase, hifens, unico |
| summary | string | Sim | Resumo para listagem e meta description | 50-155 caracteres |
| content | text (HTML) | Sim | Conteudo completo do artigo | HTML valido |
| image_url | string | Nao | URL da imagem de capa | URL valida |
| category | string | Sim | Categoria do artigo | enum: logoterapia, ansiedade, depressao, proposito, vocacional, geral |
| tags | string[] | Nao | Tags para filtragem | array de strings |
| author | string | Sim | Nome do autor | default: "Dra. Larissa Nunes" |
| status | string | Sim | Status de publicacao | enum: draft, published |
| reading_time | integer | Nao | Tempo estimado de leitura (minutos) | calculado automaticamente |
| seo_title | string | Nao | Titulo SEO (se diferente do titulo) | ate 60 caracteres |
| seo_description | string | Nao | Meta description customizada | ate 155 caracteres |
| created_at | timestamptz | Sim | Data de criacao | auto-gerado |
| published_at | timestamptz | Nao | Data de publicacao | setado ao publicar |
| updated_at | timestamptz | Sim | Ultima atualizacao | auto-atualizado |

### Entidade: analytics_events (opcional — GA4 e primario)
Nao criar tabela propria. Usar GA4 como fonte de verdade para analytics.

---

## 8. Limites de Escopo

| Item | Motivo | Quando |
|------|--------|--------|
| Agente WhatsApp IA | Projeto separado ja em desenvolvimento | Paralelo |
| Pagamento online | Pix via WhatsApp e suficiente no volume atual | v2 (quando >20 pacientes/mes) |
| Area do paciente | Relacionamento e via WhatsApp | v2 |
| App mobile | Site responsivo atende | v2 |
| Newsletter | Foco em organico (SEO/GEO) primeiro | v1.1 |
| Comentarios no blog | Complexidade sem retorno claro | Talvez nunca |
| Dashboard analytics no admin | GA4 dashboard e suficiente | v1.1 |
| Testes automatizados E2E | Escala nao justifica investimento agora | v1.1 |

---

## 9. Aprovacao

- [x] Requisitos funcionais numerados e verificaveis (16 RFs)
- [x] Requisitos nao funcionais documentados (6 RNFs)
- [x] Fluxos principais com pre/pos-condicoes (5 fluxos)
- [x] Criterios de aceite em formato Given/When/Then (16 CAs)
- [x] Casos de borda mapeados (9 cenarios)
- [x] Anti-SPEC preenchida (10 proibicoes + 5 padroes a evitar)
- [x] Modelos de dados com validacoes
- [x] Limites de escopo explicitos
- [ ] SPEC revisada e aprovada pelo responsavel
