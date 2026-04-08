# PLAN — Plano Tecnico (v2 — Multi-Agent com MCPs)
> Projeto: Site Dra. Larissa Nunes
> Data: 07/04/2026
> Versao: 2.0
> Referencia: SPEC v1.0, PRD v1.1

---

## 1. Stack Tecnologica

| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| Frontend | React 19 + TypeScript | Ja em uso no projeto, ecossistema maduro |
| Build | Vite 6 | Ja em uso, rapido, HMR excelente |
| Estilo | Tailwind CSS 3 | Ja em uso, utility-first, responsivo nativo |
| Animacoes | Framer Motion | Ja em uso, animacoes suaves |
| Roteamento | React Router DOM 7 | Ja em uso, client-side routing |
| SEO | React Helmet Async | Ja em uso, meta tags dinamicas |
| Banco de dados | Supabase (PostgreSQL) | Ja configurado, free tier, RLS |
| Autenticacao | Supabase Auth | Ja configurado, email/password |
| Hospedagem | Vercel | Ja configurado, free tier, CDN global |
| Analytics | Google Analytics 4 | Novo — gratuito, padrao de mercado |
| LLM (Blog) | Claude API / GPT API / Groq | Usar APIs ja disponiveis do usuario |
| Sitemap | vite-plugin-sitemap | Ja em uso, geracao automatica |
| Imagens | html2canvas (cards IG) | Ja em uso para gerador de cards |

**Decisao: Manter stack existente.** Nao ha motivo tecnico para mudar nenhuma tecnologia.

### Ferramentas MCP (Cursor IDE)

| MCP Server | Tools | Responsabilidade |
|-----------|-------|-----------------|
| **Google Stitch** (12 tools) | create_project, generate_screen_from_text, get_screen_code, build_site, etc. | Gerar UI/design de todas as paginas e componentes |
| **Supabase** (29 tools) | apply_migration, execute_sql, list_tables, deploy_edge_function, generate_typescript_types, etc. | Gerenciar banco de dados, migrations, RLS, Edge Functions |

---

## 2. Arquitetura do Sistema

```
┌──────────────────────────────────────────────────────────┐
│                     VISITANTE                             │
│              Browser (Mobile/Desktop)                     │
└────────────────────────┬─────────────────────────────────┘
                         │ HTTPS
┌────────────────────────▼─────────────────────────────────┐
│                    VERCEL (CDN)                            │
│              React SPA (client-side)                      │
│                                                           │
│  Paginas Publicas          Admin (protegido)              │
│  ├── / (Home)              ├── /admin/login               │
│  ├── /blog                 ├── /admin/blog                │
│  ├── /blog/:postId         └── /admin/criar-artigos       │
│  ├── /depoimentos                                        │
│  ├── /agendamento                                        │
│  ├── /primeira-consulta (LP oculta)                      │
│  └── /sessao-de-resolucao (LP oculta)                    │
└──────┬──────────────────────┬────────────────────────────┘
       │                      │
       │ Supabase JS Client   │ gtag.js
       │                      │
┌──────▼──────────┐   ┌──────▼───────────┐
│   SUPABASE      │   │  GOOGLE          │
│                 │   │                  │
│ PostgreSQL      │   │ GA4 (Analytics)  │
│ ├─ blog_posts   │   │ Search Console   │
│ ├─ agendamentos │   └──────────────────┘
│ └─ mensagens    │
│                 │
│ Auth (email/pw) │
│ RLS Policies    │
└─────────────────┘

┌─────────────────────────────────────────┐
│         LLM APIs (Blog Agent)            │
│                                          │
│  Claude API / GPT API / Groq API         │
│  (chamada do admin para gerar artigos)   │
└─────────────────────────────────────────┘
```

### Principios Arquiteturais
- **SPA client-side:** Nao ha SSR. SEO resolvido com React Helmet + structured data + sitemap
- **Supabase como backend:** Sem API custom. CRUD direto via Supabase client JS
- **RLS como seguranca:** Row Level Security no banco, nao depende apenas do frontend
- **LLM no admin:** Chamadas de API para LLM acontecem do frontend admin (protegido por auth). A chave da API e armazenada em variavel de ambiente (VITE_LLM_API_KEY)
- **Stateless:** Nenhum estado de sessao no servidor. Tudo no client + Supabase

**Nota sobre LLM API key no frontend:** Como o admin e protegido por autenticacao e so a Dra. Larissa acessa, expor a API key no bundle do admin e aceitavel para o MVP. Para v2, migrar para Supabase Edge Function como proxy.

---

## 3. Modelagem do Banco de Dados

### Tabela: blog_posts (atualizar tabela existente)

```sql
-- Adicionar campos que faltam na tabela existente
ALTER TABLE blog_posts
  ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  ADD COLUMN IF NOT EXISTS reading_time INTEGER,
  ADD COLUMN IF NOT EXISTS seo_title TEXT,
  ADD COLUMN IF NOT EXISTS seo_description TEXT,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

-- Indice para busca por slug
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Indice para listagem publica (status + data)
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(status, published_at DESC);

-- Trigger para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### RLS Policies (manter existentes + ajustar)
```sql
-- Leitura publica: apenas artigos publicados
CREATE POLICY "public_read_published" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Admin: CRUD completo para usuarios autenticados
CREATE POLICY "admin_full_access" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');
```

### Tabelas existentes (sem alteracao)
- **agendamentos** — manter como esta (formulario de agendamento)
- **mensagens** — manter como esta (formulario de contato)

---

## 4. Integracao com LLM para Blog

### Arquitetura da integracao

```
Admin Panel (React)
    │
    │ 1. Envia tema + system prompt
    │
    ▼
LLM API (Claude/GPT/Groq)
    │
    │ 2. Retorna artigo em JSON
    │    { title, summary, content, tags, category, seo_title, seo_description }
    │
    ▼
Admin Panel (React)
    │
    │ 3. Exibe preview
    │ 4. Admin revisa e aprova
    │
    ▼
Supabase (blog_posts)
    │
    │ 5. INSERT com status = 'published'
    │
    ▼
Blog publico (renderiza)
```

### System Prompt do Agente de Blog

O system prompt deve incluir:
1. Diretrizes de tom de voz (do guia de blog no copy doc)
2. Estrutura padrao de artigo (titulo SEO, introducao, corpo, secao Logoterapia, CTA)
3. Regras de SEO (keyword no titulo, H2s, meta description)
4. Regras de GEO (definicoes claras, formato P&R)
5. Restricoes: nunca diagnosticar, nunca prescrever, conteudo educativo apenas

### Configuracao de API

```env
# .env
VITE_LLM_PROVIDER=claude  # claude | openai | groq
VITE_LLM_API_KEY=sk-...
VITE_LLM_MODEL=claude-sonnet-4-6  # ou gpt-4o-mini, llama-3.1-70b
```

O frontend admin tera um service (`src/services/llm.ts`) que abstrai o provider, permitindo trocar entre Claude, GPT e Groq sem mudar o componente.

---

## 4b. Integracao com inference.sh para Imagens de Capa

### Arquitetura

```
Admin Panel (React)
    │
    │ 1. Apos LLM gerar artigo, chama inference.sh
    │
    ▼
POST https://api.inference.sh/apps/run
    │  App: pruna/p-image
    │  Input: { prompt, aspect_ratio: "16:9" }
    │
    │ 2. Retorna task ID (async)
    │
    ▼
GET https://api.inference.sh/tasks/{id}
    │  Polling a cada 2s, max 30 tentativas (60s)
    │
    │ 3. Retorna output.image (URL publica)
    │
    ▼
Admin Panel exibe preview com imagem
    │
    │ 4. Ao aprovar, salva image_url no blog_posts
    │
    ▼
Blog publico exibe artigo com capa
```

### Geracao de Prompt de Imagem

O sistema sorteia aleatoriamente entre:
- **30 cenas tematicas** (5 por categoria: logoterapia, ansiedade, depressao, proposito, vocacional, geral)
- **5 estilos fotograficos** (editorial, cinematic, fine art, documentary, minimalist)
- Total: **150 combinacoes unicas**

Regras do prompt:
- NUNCA incluir texto na imagem (instrucao explicita no prompt)
- NUNCA incluir rostos visiveis de pessoas
- Sempre aspect ratio 16:9
- Estilo: fotografia realista profissional

### Configuracao

```env
VITE_INFSH_API_KEY=1nfsh-...  # API key inference.sh
```

### Custo
- Modelo pruna/p-image: ~$0.003/imagem
- 100 capas = ~R$1.50
- Fallback: se API falhar, artigo e publicado sem imagem

---

## 5. Autenticacao e Autorizacao

### Estrategia (manter existente)
- Supabase Auth com email/password
- Hook `useAuth` ja implementado em `src/services/auth.ts`
- ProtectedRoute ja implementado
- Sessao persistente via Supabase

### Roles e Permissoes
| Role | Permissoes | Notas |
|------|-----------|-------|
| anon (visitante) | Ler blog_posts publicados, acessar paginas publicas | Via RLS |
| authenticated (admin) | CRUD blog_posts, gerar artigos com IA | Via RLS + ProtectedRoute |

### Sem alteracao necessaria
O sistema de auth atual atende. Nao ha necessidade de roles adicionais ou middleware custom.

---

## 6. Google Analytics (GA4)

### Implementacao

Criar `src/services/analytics.ts`:

```typescript
// Funcoes a implementar:
initGA(measurementId: string): void       // Carrega gtag.js
trackPageView(path: string): void          // Chamado no route change
trackEvent(name: string, params: object): void  // Eventos custom
```

### Eventos customizados

| Evento | Quando | Parametros |
|--------|--------|------------|
| whatsapp_click | Clique em qualquer CTA WhatsApp | { page, section, service } |
| article_read | Scroll > 75% em artigo do blog | { article_id, article_title, category } |
| lp_view | Pageview em landing page | { lp_name, utm_source, utm_medium, utm_campaign } |
| admin_article_generated | Artigo gerado pelo agente IA | { article_title } |
| admin_article_published | Artigo publicado | { article_id } |

### Integracao no React Router
Usar `useLocation()` para disparar `trackPageView` em cada mudanca de rota.

---

## 7. Estrategia de SEO

### Structured Data (JSON-LD)

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dra. Larissa Nunes - Psicoterapia e Logoterapia",
  "description": "Psicoterapia especializada em Logoterapia...",
  "address": { "streetAddress": "Av. C-255, 271", "addressLocality": "Goiania" },
  "telephone": "+5562996290052",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
  "priceRange": "$$"
}
```

**Artigos:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "author": { "@type": "Person", "name": "Dra. Larissa Nunes" },
  "datePublished": "...",
  "image": "..."
}
```

**FAQ:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

### Meta Tags por Pagina
Cada pagina usa React Helmet Async com title, description, keywords, og:*, canonical.

### Sitemap
Vite plugin sitemap ja configurado. Adicionar novas rotas (LPs com noindex separado).

---

## 8. Seguranca

### Checklist
- [x] HTTPS obrigatorio (Vercel)
- [x] Headers de seguranca (firebase.json — migrar para vercel.json)
- [x] Supabase RLS habilitado
- [x] Auth com Supabase (email/password)
- [ ] Variaveis sensiveis em .env (verificar se ha hardcoded)
- [ ] Sanitizacao de input no formulario de agendamento
- [ ] CSP header configurado no Vercel
- [ ] Rate limiting via Supabase (ou aceitar risco no MVP)

### Tratamento de API Keys LLM
- Armazenar em VITE_LLM_API_KEY (variavel de ambiente)
- Aceitar exposicao no bundle admin (protegido por auth) no MVP
- Migrar para Edge Function em v2

---

## 9. Deploy e Infraestrutura

### Projeto Supabase (referencia unica)
Valores conforme **Project Settings → General** no dashboard:
| Campo | Valor |
|-------|--------|
| Nome do projeto (dashboard) | `site-lari` |
| Project ID (ref, APIs e URLs) | `fkwfjahctuqiedbgrqvi` |
| URL publica da API | `https://fkwfjahctuqiedbgrqvi.supabase.co` |

Usar sempre este projeto em `.env`, MCP Supabase e documentacao. IDs ou URLs de outros projetos Supabase sao obsoletos para este repositorio.

### Ambientes
| Ambiente | URL | Branch | Deploy |
|----------|-----|--------|--------|
| Development | localhost:5173 | qualquer | manual (npm run dev) |
| Production | site-larissa-three.vercel.app | main | push to main |

### Variaveis de Ambiente
```env
# Supabase (projeto site-lari — ref fkwfjahctuqiedbgrqvi)
VITE_SUPABASE_URL=https://fkwfjahctuqiedbgrqvi.supabase.co
VITE_SUPABASE_ANON_KEY=

# Google Analytics
VITE_GA_MEASUREMENT_ID=

# LLM (Blog Agent)
VITE_LLM_PROVIDER=claude
VITE_LLM_API_KEY=
VITE_LLM_MODEL=claude-sonnet-4-6

# WhatsApp
VITE_WHATSAPP_NUMBER=5562996290052
VITE_WHATSAPP_DEFAULT_MESSAGE=Olá! Tenho interesse em conhecer a psicoterapia e a metodologia da Dra. Larissa Nunes.
```

### Build
```bash
npm run build  # Vite build para dist/
# Deploy automatico via Vercel ao push em main
```

---

## 10. Riscos Tecnicos

| # | Risco | Prob. | Impacto | Mitigacao |
|---|-------|-------|---------|-----------|
| 1 | API key LLM exposta no bundle admin | Media | Medio | Aceitar no MVP (admin protegido). Migrar para Edge Function em v2 |
| 2 | Free tier Supabase atinge limite | Baixa | Alto | Monitorar uso. 500MB banco, 2GB storage, 50K auth users — muito acima do necessario |
| 3 | Vercel free tier atinge limite de bandwidth | Baixa | Alto | 100GB/mes — so preocupante com >50K visitas/mes |
| 4 | LLM gera conteudo clinicamente incorreto | Media | Alto | Revisao obrigatoria antes de publicar. System prompt com restricoes claras |
| 5 | Google muda algoritmo e SEO perde posicao | Media | Alto | Diversificar: GEO + campanhas pagas + conteudo evergreen |
| 6 | Supabase instabilidade | Baixa | Alto | Backup periodico dos dados. Migrar para outro provider se necessario |

---

---

## 11. Arquitetura Multi-Agent (Cursor IDE)

### Visao Geral

O projeto sera executado por 3 agentes especializados no Cursor, cada um com acesso a MCPs especificos:

```
┌─────────────────────────────────────────────────────────────────┐
│                    CURSOR IDE (Orquestrador)                     │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐    │
│  │  AGENTE 1    │  │  AGENTE 2    │  │  AGENTE 3          │    │
│  │  DESIGN      │  │  DATABASE    │  │  CODE              │    │
│  │              │  │              │  │                    │    │
│  │ Stitch MCP   │  │ Supabase MCP │  │ Filesystem +      │    │
│  │ (12 tools)   │  │ (29 tools)   │  │ Terminal           │    │
│  │              │  │              │  │                    │    │
│  │ Gera UI/HTML │  │ Migrations   │  │ React components   │    │
│  │ Layouts      │  │ RLS Policies │  │ Services           │    │
│  │ Componentes  │  │ Edge Funcs   │  │ Routing            │    │
│  │ Responsivo   │  │ SQL Queries  │  │ SEO/GA4            │    │
│  └──────┬───────┘  └──────┬───────┘  └─────────┬──────────┘    │
│         │                  │                     │               │
│         │   HTML/CSS       │   Types + Schema    │   .tsx files  │
│         └─────────────────►├────────────────────►│               │
│                            │                     │               │
│              Output: Codigo React integrado no projeto           │
└─────────────────────────────────────────────────────────────────┘
```

### Agente 1 — DESIGN (Stitch MCP)

**Responsabilidade:** Gerar todo o design/UI do site usando Google Stitch.

**Tools que usa:**
- `create_project` — criar projeto no Stitch
- `generate_screen_from_text` — gerar telas a partir de prompts descritivos
- `get_screen_code` — extrair HTML/CSS gerado
- `build_site` — gerar site completo com rotas

**Entrega:** HTML/CSS de cada pagina/secao que o Agente 3 converte em componentes React/Tailwind.

**Sequencia:**
1. Criar projeto Stitch com nome "site-dra-larissa"
2. Gerar tela: Homepage (hero, sobre, abordagem, servicos, FAQ, CTA)
3. Gerar tela: Blog listing
4. Gerar tela: Blog article
5. Gerar tela: Landing Page Primeira Consulta
6. Gerar tela: Landing Page Sessao de Resolucao
7. Gerar tela: Admin panel simplificado
8. Gerar tela: Depoimentos
9. Extrair codigo de cada tela
10. Passar para Agente 3 integrar

### Agente 2 — DATABASE (Supabase MCP)

**Responsabilidade:** Gerenciar toda a infraestrutura de banco de dados.

**Tools que usa:**
- `list_tables` — verificar tabelas existentes
- `apply_migration` — criar/alterar tabelas
- `execute_sql` — executar queries, criar RLS policies, indices
- `generate_typescript_types` — gerar tipos TS do schema
- `deploy_edge_function` — deploy de Edge Functions (proxy LLM em v2)
- `get_logs` — debug de erros
- `get_project_url` / `get_anon_key` — obter credenciais

**Entrega:** Schema atualizado, RLS configurado, tipos TypeScript gerados.

**Sequencia:**
1. Listar tabelas existentes (verificar estado atual)
2. Aplicar migration: adicionar campos novos em blog_posts (slug, status, reading_time, seo_title, seo_description, published_at, updated_at)
3. Criar indices (slug, status+published_at)
4. Criar/atualizar RLS policies (leitura publica de published, CRUD para authenticated)
5. Criar trigger de updated_at
6. Gerar tipos TypeScript atualizados
7. (Futuro v2) Deploy Edge Function como proxy LLM

### Agente 3 — CODE (Filesystem + Terminal)

**Responsabilidade:** Implementar toda a logica React, integrar designs do Stitch, configurar SEO/GA4, criar services.

**Tools que usa:**
- Read/Write/Edit de arquivos
- Terminal (npm, git, build)
- Acesso ao codigo-fonte completo

**Entrega:** Codigo React funcional, integrado, testado e deployavel.

**Sequencia:**
1. Configurar variaveis de ambiente (.env)
2. Instalar GA4 e criar service de analytics
3. Converter HTML do Stitch em componentes React/Tailwind
4. Implementar copy aprovada em cada secao
5. Configurar SEO (meta tags, structured data, sitemap)
6. Implementar WhatsApp CTA com tracking
7. Criar service de LLM para agente de blog
8. Implementar painel admin simplificado
9. Criar landing pages
10. Otimizar performance (Lighthouse >90)
11. Build e deploy

### Ordem de Execucao dos Agentes

```
Agente 2 (DB) ──────────────────────────────────────────────►
  │ 1. Verifica estado    3. Gera tipos TS
  │ 2. Aplica migrations     │
  │                           │
Agente 1 (Design) ──────────────────────────────────────────►
  │ 1. Cria projeto Stitch    │
  │ 2. Gera telas (paralelo)  │
  │ 3. Extrai HTML/CSS        │
  │         │                  │
  │         ▼                  ▼
Agente 3 (Code) ──────────────────────────────────────────────►
  │         4. Recebe HTML + Types
  │         5. Converte em React
  │         6. Integra copy + SEO + GA4
  │         7. Admin + LLM service
  │         8. Landing pages
  │         9. Build + Deploy
```

**Agentes 1 e 2 rodam em paralelo.** Agente 3 comeca apos receber outputs de ambos.

---

## 12. Aprovacao

- [x] Stack validada (manter existente, sem mudancas)
- [x] Arquitetura documentada
- [x] Schema do banco definido com alteracoes necessarias
- [x] Estrategia de auth validada (manter existente)
- [x] Integracao LLM planejada
- [x] GA4 planejado com eventos customizados
- [x] SEO/GEO estrategia definida
- [x] Seguranca checklist iniciado
- [x] Deploy e infra documentados
- [x] Riscos tecnicos identificados
- [x] Arquitetura multi-agent definida com MCPs
- [ ] PLAN revisado e aprovado pelo responsavel
