# WAVE-PLAN — Plano de Execucao Multi-Agent
> Projeto: Site Dra. Larissa Nunes
> Data: 07/04/2026
> Versao: 3.0

---

## Mapa de Agentes

| Agente | Ferramenta | Papel | MCPs / Recursos |
|--------|-----------|-------|-----------------|
| **CLAUDE** | Claude Code (CLI) | Orquestrador — coordena, gera prompts, revisa, nao escreve codigo | Pesquisa, docs, review |
| **CURSOR** | Cursor IDE | Design + Database — gera UI via Stitch, gerencia banco via Supabase | Stitch MCP (12 tools), Supabase MCP (29 tools) |
| **CODEX** | OpenAI Codex | Implementacao — escreve codigo React, services, SEO, testes | Filesystem, terminal, full-auto |

**Regra:** Cada task tem um unico agente responsavel. A tag `[CURSOR]`, `[CODEX]` ou `[CLAUDE]` identifica quem executa.

---

## Visao Geral das Ondas

| Onda | Descricao | Agentes | Paralelo | Tempo est. |
|------|-----------|---------|----------|------------|
| 1 | Fundacoes (DB + Design) | CURSOR | Sim (2 sessoes) | ~1h |
| 2 | Core do Site (codigo) | CODEX | Parcial (2 blocos) | ~7h |
| 3 | Landing Pages + GEO | CODEX | Sim | ~4h |
| 4 | Qualidade e Deploy | CODEX + CLAUDE (review) | Parcial | ~4.5h |

**Total estimado: ~16.5 horas de agente (~2 dias de calendario)**

---

## ONDA 1 — Fundacoes

**Quem executa:** CURSOR (2 sessoes paralelas)
**Inicio:** Imediato
**Libera:** Onda 2

### Sessao Cursor A — Database (Supabase MCP)

| Task | Descricao | MCP Tool | Tempo |
|------|-----------|----------|-------|
| T-DB-001 | Listar tabelas existentes | `list_tables` | 5 min |
| T-DB-002 | Migration: novos campos blog_posts | `apply_migration` | 15 min |
| T-DB-003 | Criar indices | `execute_sql` | 5 min |
| T-DB-004 | Criar trigger updated_at | `execute_sql` | 5 min |
| T-DB-005 | Configurar RLS policies | `execute_sql` | 10 min |
| T-DB-006 | Gerar tipos TypeScript | `generate_typescript_types` | 5 min |
| T-DB-007 | Obter credenciais (URL + anon key) | `get_project_url`, `get_anon_key` | 2 min |

**Entrega para Codex:** tipos TypeScript + credenciais confirmadas

### Sessao Cursor B — Design (Stitch MCP)

| Task | Descricao | MCP Tool | Tempo |
|------|-----------|----------|-------|
| T-DES-001 | Criar projeto Stitch | `create_project` | 5 min |
| T-DES-002 | Gerar tela: Homepage | `generate_screen_from_text` | 10 min |
| T-DES-003 | Gerar tela: Blog listing | `generate_screen_from_text` | 10 min |
| T-DES-004 | Gerar tela: Blog article | `generate_screen_from_text` | 10 min |
| T-DES-005 | Gerar tela: LP Primeira Consulta | `generate_screen_from_text` | 10 min |
| T-DES-006 | Gerar tela: LP Sessao Resolucao | `generate_screen_from_text` | 10 min |
| T-DES-007 | Gerar tela: Admin panel | `generate_screen_from_text` | 10 min |
| T-DES-008 | Gerar tela: Depoimentos | `generate_screen_from_text` | 10 min |
| T-DES-009 | Extrair HTML/CSS de todas as telas | `get_screen_code` (x7) | 15 min |

**Entrega para Codex:** HTML/CSS de 7 telas em `docs/stitch-output/`

### Criterio para liberar Onda 2
- [ ] Campos novos em blog_posts existem no banco
- [ ] RLS policies ativas
- [ ] Tipos TypeScript gerados
- [ ] HTML/CSS de 7 telas extraido
- [ ] Credenciais confirmadas

---

## ONDA 2 — Core do Site

**Quem executa:** CODEX
**Inicio:** Apos Onda 1 completa
**Libera:** Onda 3

### Bloco A — Infraestrutura (pode ser paralelo)

| Task | Descricao | Tempo |
|------|-----------|-------|
| T-CODE-001 | Configurar .env e .env.example | 10 min |
| T-CODE-002 | Criar src/services/analytics.ts (GA4) + integrar no App.tsx | 30 min |
| T-CODE-003 | Criar/atualizar vercel.json (headers seguranca) | 15 min |
| T-CODE-004 | Copiar tipos TypeScript do Supabase para src/types/database.ts | 15 min |

### Bloco B — Paginas do Site (sequencial)

| Task | Descricao | Tempo |
|------|-----------|-------|
| T-CODE-005 | Converter Homepage Stitch → React/Tailwind + aplicar copy | 2h |
| T-CODE-006 | Otimizar WhatsApp CTA + tracking GA4 | 30 min |
| T-CODE-007 | SEO completo (meta tags + structured data JSON-LD + sitemap) | 1h |
| T-CODE-008 | Converter Blog listing Stitch → React + filtro categorias | 1h |
| T-CODE-009 | Converter Blog article Stitch → React + tracking + Schema | 1.5h |
| T-CODE-010 | Converter Depoimentos Stitch → React + remover ficticios | 45 min |

### Bloco C — Admin + Agente IA (sequencial)

| Task | Descricao | Tempo |
|------|-----------|-------|
| T-CODE-011 | Converter Admin Stitch → React simplificado + status draft/published | 1h |
| T-CODE-012 | Criar src/services/llm.ts (abstrai Claude/GPT/Groq) | 1.5h |
| T-CODE-013 | Implementar fluxo "Novo artigo com IA" no admin | 2h |
| T-CODE-014 | Auto-calc reading_time + slug ao salvar artigo | 30 min |

**Nota:** Blocos B e C podem rodar em paralelo se houver 2 sessoes Codex.

---

## ONDA 3 — Landing Pages + GEO

**Quem executa:** CODEX
**Inicio:** Apos T-CODE-005 e T-CODE-002 concluidas
**Libera:** Onda 4

| Task | Descricao | Tempo |
|------|-----------|-------|
| T-CODE-015 | Converter LP Primeira Consulta Stitch → React | 1.5h |
| T-CODE-016 | Converter LP Sessao Resolucao Stitch → React | 1.5h |
| T-CODE-017 | Otimizacao GEO (conteudo citavel por LLMs) | 1h |
| T-CODE-018 | Adicionar CRP 09/16269 no footer e secao Sobre | 15 min |

---

## ONDA 4 — Qualidade e Deploy

**Quem executa:** CODEX (execucao) + CLAUDE (review)
**Inicio:** Apos Onda 3

| Task | Agente | Descricao | Tempo |
|------|--------|-----------|-------|
| T-CODE-019 | CODEX | Otimizar imagens (WebP, alt text, compressao) | 1h |
| T-CODE-020 | CODEX | Performance Lighthouse >90 | 1.5h |
| T-CODE-021 | CODEX | Acessibilidade basica (contraste, teclado) | 45 min |
| T-CODE-022 | CODEX | Testar todos os CTAs WhatsApp | 30 min |
| T-CODE-023 | CODEX | Validar SEO (Lighthouse + Rich Results Test) | 30 min |
| T-CODE-024 | CODEX | Build final + deploy | 30 min |
| T-REVIEW-001 | CLAUDE | Review final: verificar SPEC vs implementacao | 1h |

---

## Fluxo de Comunicacao

```
CLAUDE (orquestrador)
   │
   ├──► Gera prompt para CURSOR (Onda 1)
   │       ├── Sessao A: "Execute tasks T-DB-001 a T-DB-007"
   │       └── Sessao B: "Execute tasks T-DES-001 a T-DES-009"
   │
   ├──◄ CURSOR reporta conclusao + entrega outputs
   │
   ├──► Gera prompt para CODEX (Onda 2)
   │       └── "Execute tasks T-CODE-001 a T-CODE-014 usando outputs da Onda 1"
   │
   ├──◄ CODEX reporta conclusao
   │
   ├──► Gera prompt para CODEX (Onda 3)
   ├──► Gera prompt para CODEX (Onda 4)
   │
   └──► CLAUDE faz review final (T-REVIEW-001)
```
