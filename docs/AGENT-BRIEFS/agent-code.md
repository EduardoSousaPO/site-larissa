# Agent Brief — CODE (Cursor com Filesystem + Terminal)

## Identidade
Voce e o agente de codigo do projeto. Seu trabalho e implementar toda a logica React, integrar os designs do Stitch, configurar SEO/GA4 e criar os services.

## Projeto
Site React 19 + TypeScript + Vite + Tailwind CSS + Supabase. Projeto existente em `c:\Users\edusp\Projetos_App_Desktop\site-larissa-projeto`. Deploy no Vercel. Supabase alvo: **site-lari** (`fkwfjahctuqiedbgrqvi`).

## Documentos de Referencia (LEIA TODOS ANTES DE COMECAR)
- `docs/CONTRACTS.md` — Tipos, interfaces e convencoes (OBRIGATORIO)
- `docs/SPEC.md` — Requisitos funcionais e criterios de aceite
- `docs/PLAN.md` — Arquitetura e decisoes tecnicas
- `docs/copy_site_dra_larissa_2026-04-07.md` — Copy aprovada (textos exatos)
- `docs/keyword_strategy.md` — Keywords SEO para meta tags e conteudo
- `docs/TASKS.md` — Tasks detalhadas com criterios de conclusao

## Inputs que voce recebe da Onda 1
1. **Do Agente Design:** HTML/CSS de 7 telas em `docs/stitch-output/` (converter para React/Tailwind)
2. **Do Agente DB:** Tipos TypeScript gerados do schema Supabase (copiar para `src/types/database.ts`)
3. **Do Agente DB:** Credenciais Supabase (URL + anon key para .env)

## Suas Tasks

### ONDA 2 — Core do Site

**Bloco A — Infraestrutura:**

T-CODE-001: Configurar .env
- Criar/atualizar .env com: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_GA_MEASUREMENT_ID, VITE_LLM_PROVIDER, VITE_LLM_API_KEY, VITE_LLM_MODEL, VITE_WHATSAPP_NUMBER, VITE_WHATSAPP_DEFAULT_MESSAGE
- Atualizar .env.example (sem valores reais)

T-CODE-002: Google Analytics (GA4)
- Criar `src/services/analytics.ts` com: initGA, trackPageView, trackEvent, trackWhatsAppClick, trackArticleRead, trackLPView
- Integrar no App.tsx com useLocation para trackPageView automatico
- Measurement ID via env var

T-CODE-003: Headers seguranca
- Criar/atualizar vercel.json com X-Frame-Options DENY, X-Content-Type-Options nosniff, CSP

T-CODE-004: Integrar tipos TypeScript
- Copiar tipos gerados pelo Agente DB para `src/types/database.ts`
- Atualizar imports nos services existentes

**Bloco B — Paginas (usar HTML do Stitch como base, converter para React/Tailwind):**

T-CODE-005: Homepage
- Converter HTML do Stitch para componentes em `src/components/sections/`
- Aplicar copy EXATA do doc `copy_site_dra_larissa_2026-04-07.md`
- Componentes: HeroSection, AboutSection, ApproachSection, ServicesSection, FAQSection, CTASection
- Cada CTA WhatsApp deve chamar trackWhatsAppClick()
- Schema JSON-LD: MedicalBusiness + Physician + FAQPage

T-CODE-006: WhatsApp CTA
- Atualizar WhatsAppFloat.tsx: numero do env var, mensagem padrao do env var
- Cada clique dispara trackWhatsAppClick(page, section)
- CTAs inline em secoes tambem trackam

T-CODE-007: SEO completo
- Atualizar MainLayout.tsx com meta tags globais
- Cada pagina: title unico, meta description, canonical, og:tags
- Structured data JSON-LD por pagina
- Atualizar vite.config.ts sitemap com novas rotas
- robots.txt: bloquear /admin/, /primeira-consulta, /sessao-de-resolucao

T-CODE-008: Blog listing
- Converter HTML Stitch → BlogPage.tsx
- Buscar artigos do Supabase (WHERE status='published', ORDER BY published_at DESC)
- Filtro por categoria funcional
- Cada card linka para /blog/[slug]

T-CODE-009: Blog article
- Converter HTML Stitch → PostDetail.tsx
- Rota: /blog/:slug (nao mais :postId)
- Schema BlogPosting JSON-LD
- Tempo de leitura exibido
- Compartilhamento social
- CTA WhatsApp no final
- Evento article_read quando scroll >75%

T-CODE-010: Depoimentos
- Converter HTML Stitch → Depoimentos.tsx
- REMOVER depoimentos ficticios existentes
- Usar avaliacoes reais do Google (copiar texto das avaliacoes do Google Maps)
- Schema Review

T-CODE-011: Admin blog
- Converter HTML Stitch → BlogAdmin.tsx (simplificar o existente)
- Lista com titulo, status badge, data
- Formulario: titulo, resumo, conteudo, imagem, categoria, tags
- Botoes: Publicar (status='published') e Salvar Rascunho (status='draft')
- Campo status funcional

T-CODE-012: Service LLM
- Criar `src/services/llm.ts`
- Interface GeneratedArticle conforme CONTRACTS.md
- Funcoes generateArticle() e regenerateArticle()
- System prompt com diretrizes de copy/SEO/GEO do doc de blog
- Suporte a Claude/GPT/Groq via env var VITE_LLM_PROVIDER
- NUNCA expor system prompt ao usuario

T-CODE-013: Fluxo "Novo artigo com IA"
- Botao "Novo artigo com IA" no admin
- Campo de tema/prompt
- Loading state durante geracao
- Preview do artigo gerado (titulo, resumo, conteudo)
- Botoes: "Aprovar e publicar" e "Solicitar ajustes"
- REGRA INVIOLAVEL: NUNCA publicar sem clique explicito em "Aprovar"

T-CODE-014: Auto-calc reading_time + slug
- Ao salvar artigo: calcular reading_time (palavras/200)
- Gerar slug do titulo (lowercase, hifens, sem acentos, unico)

### ONDA 3 — Landing Pages

T-CODE-015: LP Primeira Consulta
- Rota: /primeira-consulta
- Converter HTML Stitch
- Video player (URL do video como prop/env)
- Copy exata do doc de copy
- CTA WhatsApp com mensagem: "Ola! Vi a oferta de primeira consulta por R$90 e gostaria de agendar."
- Meta noindex
- Captura UTM params → GA4
- NAO aparece no menu/navbar

T-CODE-016: LP Sessao Resolucao
- Rota: /sessao-de-resolucao
- Mesma estrutura da LP1 com copy diferente
- CTA: "Ola! Gostaria de agendar uma sessao de resolucao."
- Meta noindex

T-CODE-017: Otimizacao GEO
- Revisar conteudo para definicoes citaveis ("A Logoterapia e...")
- Formato P&R em pelo menos 1 secao
- Mencoes "Dra. Larissa Nunes + Logoterapia" 2+ vezes por pagina

T-CODE-018: CRP no footer/sobre
- Adicionar "CRP 09/16269" no footer
- Adicionar no AboutSection

### ONDA 4 — Qualidade

T-CODE-019 a T-CODE-024: Performance, acessibilidade, testes, deploy.

## Regras Inviolaveis
- NUNCA publicar artigo automaticamente — sempre exigir aprovacao
- NUNCA hardcodar credenciais — sempre usar env vars
- NUNCA adicionar depoimentos ficticios
- NUNCA indexar landing pages ocultas (meta noindex obrigatorio)
- NUNCA criar features nao especificadas no SPEC
- SEMPRE usar tipos do CONTRACTS.md — nunca criar tipos duplicados
- SEMPRE aplicar copy EXATA do doc de copy — nunca inventar textos
- Ao terminar cada task, reportar o que foi feito e quais arquivos foram modificados
