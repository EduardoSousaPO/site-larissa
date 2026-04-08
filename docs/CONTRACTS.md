# CONTRACTS — Interfaces Compartilhadas
> Projeto: Site Dra. Larissa Nunes
> Gerado em: 07/04/2026
> Versao: 1.0
> Este documento e imutavel durante uma onda de execucao.

---

## 1. Tipos e Entidades Compartilhadas

```typescript
// src/types/database.ts — gerado pelo Supabase MCP, compartilhado por todos os agentes

export interface BlogPost {
  id: string                    // UUID
  title: string                 // 5-200 caracteres
  slug: string                  // lowercase, hifens, unico
  summary: string               // 50-155 caracteres (meta description)
  content: string               // HTML valido
  image_url: string | null      // URL da imagem de capa
  category: BlogCategory        // enum
  tags: string[]                // array de strings
  author: string                // default: "Dra. Larissa Nunes"
  status: 'draft' | 'published' // controle de publicacao
  reading_time: number | null   // minutos, calculado automaticamente
  seo_title: string | null      // ate 60 caracteres
  seo_description: string | null // ate 155 caracteres
  created_at: string            // ISO 8601
  published_at: string | null   // ISO 8601, setado ao publicar
  updated_at: string            // ISO 8601, auto-atualizado via trigger
}

export type BlogCategory = 
  | 'logoterapia' 
  | 'ansiedade' 
  | 'depressao' 
  | 'proposito' 
  | 'vocacional' 
  | 'geral'

export interface Agendamento {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  session_type: 'online' | 'presencial'
  message: string | null
  created_at: string
}

export interface Mensagem {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

// Resposta padrao para operacoes async
export interface AsyncResult<T> {
  data: T | null
  error: string | null
  loading: boolean
}
```

---

## 2. Contratos de Modulo

### Modulo: supabase (src/services/supabase.ts)
**Responsavel:** Agente DB (Onda 1) + Agente Code (integracao)
**Disponivel:** Ja existe — manter

```typescript
// Ja existe, nao alterar a interface
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
```

### Modulo: auth (src/services/auth.ts)
**Responsavel:** Ja implementado — manter
**Disponivel:** Ja existe

```typescript
export function useAuth(): {
  user: User | null
  loading: boolean
  signIn(email: string, password: string): Promise<void>
  signUp(email: string, password: string): Promise<void>
  signOut(): Promise<void>
}
```

### Modulo: analytics (src/services/analytics.ts)
**Responsavel:** Agente Code (Onda 2)
**Disponivel a partir da:** Onda 2

```typescript
export function initGA(measurementId: string): void
export function trackPageView(path: string): void
export function trackEvent(name: string, params: Record<string, string>): void

// Eventos predefinidos
export function trackWhatsAppClick(page: string, section: string): void
export function trackArticleRead(articleId: string, title: string, category: string): void
export function trackLPView(lpName: string, utmParams: Record<string, string>): void
```

### Modulo: llm (src/services/llm.ts)
**Responsavel:** Agente Code (Onda 2)
**Disponivel a partir da:** Onda 2

```typescript
export interface GeneratedArticle {
  title: string
  summary: string
  content: string         // HTML
  seo_title: string
  seo_description: string
  category: BlogCategory
  tags: string[]
  suggested_slug: string
  image_url?: string      // URL da imagem de capa gerada por inference.sh (pode ser undefined)
}

export function generateArticle(
  topic: string, 
  provider?: 'claude' | 'openai' | 'groq'
): Promise<GeneratedArticle>
// Retorna artigo COM image_url se VITE_INFSH_API_KEY estiver configurada
// Retorna artigo SEM image_url se API falhar (fallback graceful)

export function regenerateArticle(
  topic: string, 
  feedback: string,
  previousArticle: GeneratedArticle
): Promise<GeneratedArticle>
// Tambem regenera imagem de capa
```

---

## 3. Schema do Banco de Dados

### Tabela: blog_posts (existente — alterar via migration)

| Campo | Tipo | Null | Default | Notas |
|-------|------|------|---------|-------|
| id | uuid | nao | gen_random_uuid() | PK |
| title | text | nao | — | 5-200 chars |
| slug | text | nao | — | unique, novo campo |
| summary | text | nao | — | 50-155 chars |
| content | text | nao | — | HTML |
| image_url | text | sim | — | URL |
| category | text | nao | 'geral' | enum via CHECK |
| tags | text[] | sim | '{}' | array |
| author | text | nao | 'Dra. Larissa Nunes' | |
| status | text | nao | 'published' | draft/published, novo campo |
| reading_time | integer | sim | — | novo campo |
| seo_title | text | sim | — | novo campo |
| seo_description | text | sim | — | novo campo |
| created_at | timestamptz | nao | now() | |
| published_at | timestamptz | sim | — | novo campo |
| updated_at | timestamptz | nao | now() | novo campo, via trigger |

**RLS Policies:**
- `public_read_published`: SELECT WHERE status = 'published' (anon)
- `admin_full_access`: ALL WHERE auth.role() = 'authenticated'

**Indices:**
- `idx_blog_posts_slug` ON blog_posts(slug)
- `idx_blog_posts_published` ON blog_posts(status, published_at DESC)

### Tabelas existentes (sem alteracao)
- `agendamentos` — manter
- `mensagens` — manter

---

## 4. Variaveis de Ambiente

| Variavel | Tipo | Usado por | Descricao |
|----------|------|-----------|-----------|
| `VITE_SUPABASE_URL` | string | Frontend | URL publica do Supabase |
| `VITE_SUPABASE_ANON_KEY` | string | Frontend | Chave anon do Supabase |
| `VITE_GA_MEASUREMENT_ID` | string | Frontend | GA4 measurement ID |
| `VITE_LLM_PROVIDER` | string | Admin | claude/openai/groq |
| `VITE_LLM_API_KEY` | string | Admin | Chave da API LLM |
| `VITE_LLM_MODEL` | string | Admin | Modelo a usar |
| `VITE_INFSH_API_KEY` | string | Admin | API key inference.sh para geracao de imagens de capa |
| `VITE_WHATSAPP_NUMBER` | string | Frontend | 5562996290052 |
| `VITE_WHATSAPP_DEFAULT_MESSAGE` | string | Frontend | Mensagem padrao WhatsApp |

**Projeto Supabase (unico):** dashboard `site-lari`, ref `fkwfjahctuqiedbgrqvi`, URL `https://fkwfjahctuqiedbgrqvi.supabase.co`. Nao usar outro Project ID neste repo.

Nenhum agente deve hardcodar valores. Sempre usar import.meta.env.NOME_DA_VAR.

---

## 5. Convencoes de Nomenclatura

### Arquivos e Pastas
- Componentes React: PascalCase → `HeroSection.tsx`
- Pages: PascalCase → `HomePage.tsx`
- Services: camelCase → `analytics.ts`
- Types: camelCase → `database.ts`
- Secoes da home: PascalCase em `src/components/sections/`

### Funcoes
- Queries Supabase: prefixo `get` → `getBlogPosts`, `getBlogPostBySlug`
- Mutations: prefixo `create/update/delete` → `createBlogPost`
- Analytics: prefixo `track` → `trackWhatsAppClick`
- LLM: prefixo `generate/regenerate` → `generateArticle`

### CSS/Tailwind
- Manter Tailwind utility classes inline
- Cores customizadas via tailwind.config.js (purple como primary)
- Nao criar arquivos CSS separados — tudo inline com Tailwind

### Branches
- Feature: `feat/nome-descritivo`
- Fix: `fix/descricao-curta`
- Commits: conventional commits → `feat(blog): add slug-based routing`
