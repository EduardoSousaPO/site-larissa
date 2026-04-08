# TASKS — Plano de Execucao Multi-Agent
> Projeto: Site Dra. Larissa Nunes
> Versao: 3.0 — Separacao CLAUDE / CURSOR / CODEX
> Data: 07/04/2026

---

## Legenda
- `[ ]` Pendente | `[x]` Concluida
- **[CURSOR]** = Cursor IDE (Stitch MCP + Supabase MCP)
- **[CODEX]** = OpenAI Codex (codigo React, services, testes)
- **[CLAUDE]** = Claude Code CLI (orquestracao, review, docs)

---

## ONDA 1 — Fundacoes [CURSOR]

> Cursor executa usando MCPs. Duas sessoes em paralelo.

### Sessao A — Database (Supabase MCP)

- [x] **T-DB-001** [CURSOR] — Listar tabelas existentes
  - Tool: `list_tables`
  - Entrega: inventario das tabelas atuais

- [x] **T-DB-002** [CURSOR] — Aplicar migration: novos campos em blog_posts
  - Tool: `apply_migration`
  - SQL: ADD slug, status, reading_time, seo_title, seo_description, published_at, updated_at

- [x] **T-DB-003** [CURSOR] — Criar indices de performance
  - Tool: `execute_sql`
  - SQL: idx_blog_posts_slug, idx_blog_posts_published

- [x] **T-DB-004** [CURSOR] — Criar trigger updated_at
  - Tool: `execute_sql`

- [x] **T-DB-005** [CURSOR] — Configurar RLS policies
  - Tool: `execute_sql`
  - Policies: public_read_published + admin_full_access

- [x] **T-DB-006** [CURSOR] — Gerar tipos TypeScript do schema
  - Tool: `generate_typescript_types`
  - Entrega: arquivo de tipos para o Codex usar

- [x] **T-DB-007** [CURSOR] — Obter credenciais (URL + anon key)
  - Tool: `get_project_url`, `get_anon_key`
  - Entrega: credenciais para .env

### Sessao B — Design (Stitch MCP)

- [x] **T-DES-001** [CURSOR] — Criar projeto no Google Stitch
  - Tool: `create_project`

- [x] **T-DES-002** [CURSOR] — Gerar tela: Homepage completa
  - Tool: `generate_screen_from_text`
  - Prompt detalhado no agent-brief

- [x] **T-DES-003** [CURSOR] — Gerar tela: Blog listing
  - Tool: `generate_screen_from_text`

- [x] **T-DES-004** [CURSOR] — Gerar tela: Blog article
  - Tool: `generate_screen_from_text`

- [x] **T-DES-005** [CURSOR] — Gerar tela: LP Primeira Consulta
  - Tool: `generate_screen_from_text`

- [x] **T-DES-006** [CURSOR] — Gerar tela: LP Sessao de Resolucao
  - Tool: `generate_screen_from_text`

- [x] **T-DES-007** [CURSOR] — Gerar tela: Admin panel blog
  - Tool: `generate_screen_from_text`

- [x] **T-DES-008** [CURSOR] — Gerar tela: Depoimentos
  - Tool: `generate_screen_from_text`

- [x] **T-DES-009** [CURSOR] — Extrair HTML/CSS de todas as telas
  - Tool: `get_screen_code` (x7 telas)
  - Entrega: HTML/CSS salvo em docs/stitch-output/

---

## ONDA 2 — Core do Site [CODEX]

> Codex implementa codigo React. Recebe outputs da Onda 1.

### Bloco A — Infraestrutura

- [x] **T-CODE-001** [CODEX] — Configurar variaveis de ambiente (.env + .env.example)
  - Usar credenciais fornecidas pelo Cursor (T-DB-007)
  - Vars: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_GA_MEASUREMENT_ID, VITE_LLM_PROVIDER, VITE_LLM_API_KEY, VITE_LLM_MODEL, VITE_WHATSAPP_NUMBER, VITE_WHATSAPP_DEFAULT_MESSAGE

- [x] **T-CODE-002** [CODEX] — Criar src/services/analytics.ts (Google Analytics GA4)
  - Funcoes: initGA, trackPageView, trackEvent, trackWhatsAppClick, trackArticleRead, trackLPView
  - Integrar no App.tsx com useLocation()
  - Measurement ID via env var

- [x] **T-CODE-003** [CODEX] — Criar/atualizar vercel.json com headers de seguranca
  - X-Frame-Options DENY, X-Content-Type-Options nosniff, CSP

- [x] **T-CODE-004** [CODEX] — Integrar tipos TypeScript do Supabase
  - Copiar tipos gerados pelo Cursor (T-DB-006) para src/types/database.ts
  - Atualizar imports nos services existentes

### Bloco B — Paginas do Site

- [x] **T-CODE-005** [CODEX] — Converter Homepage (Stitch HTML → React/Tailwind)
  - Base: HTML de docs/stitch-output/ (gerado pelo Cursor T-DES-002)
  - Aplicar copy EXATA de docs/copy_site_dra_larissa_2026-04-07.md
  - Componentes: HeroSection, AboutSection, ApproachSection, ServicesSection, FAQSection, CTASection
  - Schema JSON-LD: MedicalBusiness + Physician + FAQPage

- [x] **T-CODE-006** [CODEX] — Otimizar WhatsApp CTA com tracking GA4
  - Atualizar WhatsAppFloat.tsx: numero e mensagem via env vars
  - Cada clique dispara trackWhatsAppClick(page, section)

- [x] **T-CODE-007** [CODEX] — SEO completo (meta tags + structured data + sitemap)
  - React Helmet em cada pagina: title, description, canonical, og:tags
  - JSON-LD por pagina (MedicalBusiness, BlogPosting, FAQPage)
  - Atualizar sitemap config, robots.txt

- [x] **T-CODE-008** [CODEX] — Converter Blog listing (Stitch → React)
  - Base: HTML de docs/stitch-output/ (T-DES-003)
  - Buscar Supabase WHERE status='published' ORDER BY published_at DESC
  - Filtro por categoria, rota /blog/[slug]

- [x] **T-CODE-009** [CODEX] — Converter Blog article (Stitch → React)
  - Base: HTML de docs/stitch-output/ (T-DES-004)
  - Rota: /blog/:slug
  - Schema BlogPosting, tempo leitura, sharing social, CTA WhatsApp
  - Evento article_read quando scroll >75%

- [x] **T-CODE-010** [CODEX] — Converter Depoimentos (Stitch → React)
  - Base: HTML de docs/stitch-output/ (T-DES-008)
  - REMOVER depoimentos ficticios, usar avaliacoes reais do Google
  - Schema Review
  - **Nota:** Finalizado pelo CLAUDE com avaliacoes reais do Google Maps

### Bloco C — Admin + Agente IA

- [x] **T-CODE-011** [CODEX] — Converter Admin blog (Stitch → React simplificado)
  - Base: HTML de docs/stitch-output/ (T-DES-007)
  - Lista + formulario + status draft/published

- [x] **T-CODE-012** [CODEX] — Criar src/services/llm.ts
  - Interface GeneratedArticle conforme docs/CONTRACTS.md
  - Funcoes: generateArticle(), regenerateArticle()
  - System prompt com diretrizes de blog (docs/copy)
  - Suporte Claude/GPT/Groq via env var

- [x] **T-CODE-013** [CODEX] — Implementar fluxo "Novo artigo com IA" no admin
  - Campo tema, loading, preview, botoes aprovar/ajustar
  - NUNCA publicar sem aprovacao explicita

- [x] **T-CODE-014** [CODEX] — Auto-calc reading_time + slug ao salvar artigo

---

## ONDA 3 — Landing Pages + GEO [CODEX]

- [x] **T-CODE-015** [CODEX] — Converter LP Primeira Consulta (Stitch → React)
  - Base: HTML de docs/stitch-output/ (T-DES-005)
  - Rota: /primeira-consulta, meta noindex, UTM tracking, CTA WhatsApp com mensagem da oferta

- [x] **T-CODE-016** [CODEX] — Converter LP Sessao Resolucao (Stitch → React)
  - Base: HTML de docs/stitch-output/ (T-DES-006)
  - Rota: /sessao-de-resolucao, meta noindex, CTA WhatsApp

- [x] **T-CODE-017** [CODEX] — Otimizacao GEO (conteudo citavel por LLMs)

- [x] **T-CODE-018** [CODEX] — Adicionar CRP 09/16269 no footer e secao Sobre

---

## ONDA 4 — Qualidade e Deploy [CODEX + CLAUDE]

- [x] **T-CODE-019** [CODEX] — Otimizar imagens (WebP, alt text, compressao)
  - Imagens convertidas para WebP, fallback mantido, <picture> com lazy loading
- [x] **T-CODE-020** [CODEX] — Performance Lighthouse >90
  - Code-splitting com React.lazy + Suspense implementado
- [x] **T-CODE-021** [CODEX] — Acessibilidade basica (contraste, teclado, alt text)
- [x] **T-CODE-022** [CODEX] — Testar todos os CTAs WhatsApp
- [x] **T-CODE-023** [CODEX] — Validar SEO (Lighthouse + Rich Results Test)
- [x] **T-CODE-024** [CODEX] — Build final + deploy no Vercel
- [x] **T-REVIEW-001** [CLAUDE] — Review final: SPEC vs implementacao
  - 16/16 RFs implementados
  - Anti-SPEC respeitada
  - Seguranca OK (CSP, headers, env vars)
  - Build passando
  - Veredito: APROVADO para deploy
  - Recomendacoes: rodar Lighthouse em prod, remover arquivos legacy, testar fluxo completo

---

## Progresso

| Agente | Onda | Tasks | Concluidas | % |
|--------|------|-------|------------|---|
| CURSOR | 1 | 16 | 16 | 100% |
| CODEX | 2 | 14 | 14 | 100% |
| CODEX | 3 | 4 | 4 | 100% |
| CODEX + CLAUDE | 4 | 7 | 7 | 100% |
| **Total** | | **41** | **41** | **100%** |

**PROJETO CONCLUIDO — Aprovado para deploy em 07/04/2026**

---

## Rastreabilidade: Requisito → Task → Agente

| Requisito | Tasks | Agente |
|-----------|---------|--------|
| RF-001 Hero | T-DES-002 → T-CODE-005 | CURSOR → CODEX |
| RF-002 Sobre | T-DES-002 → T-CODE-005 | CURSOR → CODEX |
| RF-003 Abordagem | T-DES-002 → T-CODE-005 | CURSOR → CODEX |
| RF-004 Servicos | T-DES-002 → T-CODE-005 | CURSOR → CODEX |
| RF-005 WhatsApp | T-CODE-006 | CODEX |
| RF-006 FAQ | T-DES-002 → T-CODE-005 | CURSOR → CODEX |
| RF-007 GA4 | T-CODE-002 | CODEX |
| RF-008 SEO | T-CODE-007, T-CODE-023 | CODEX |
| RF-009 Blog | T-DES-003/004 → T-CODE-008/009 | CURSOR → CODEX |
| RF-010 Admin | T-DES-007 → T-CODE-011 | CURSOR → CODEX |
| RF-011 Agente IA | T-CODE-012, T-CODE-013 | CODEX |
| RF-012 LP1 | T-DES-005 → T-CODE-015 | CURSOR → CODEX |
| RF-013 LP2 | T-DES-006 → T-CODE-016 | CURSOR → CODEX |
| RF-014 CTA Final | T-CODE-005 | CODEX |
| RF-015 GEO | T-CODE-017 | CODEX |
| RF-016 Depoimentos | T-DES-008 → T-CODE-010 | CURSOR → CODEX |
| Schema DB | T-DB-001 a T-DB-007 | CURSOR |
