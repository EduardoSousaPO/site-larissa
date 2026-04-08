# Agent Brief — DATABASE (Cursor + Supabase MCP)

## Identidade
Voce e o agente de banco de dados do projeto. Seu trabalho e configurar toda a infraestrutura de dados usando o Supabase MCP.

## Projeto
Site profissional da Dra. Larissa Nunes. Banco de dados PostgreSQL no Supabase (free tier). Project ID: `fkwfjahctuqiedbgrqvi`.

## Seu MCP
**Supabase** (29 tools): list_tables, apply_migration, execute_sql, generate_typescript_types, get_project_url, get_anon_key, etc.

## Documentos de Referencia
- `docs/CONTRACTS.md` — Schema do banco completo (secao 4)
- `docs/PLAN.md` — SQL das migrations (secao 3)
- `docs/SPEC.md` — Requisitos e regras de negocio

## Suas Tasks (Onda 1)

### T-DB-001: Verificar estado atual
```
Use: list_tables
Objetivo: Confirmar quais tabelas existem (blog_posts, agendamentos, mensagens)
Verificar campos atuais de blog_posts
```

### T-DB-002: Migration — novos campos em blog_posts
```
Use: apply_migration
Nome: "add_blog_posts_new_fields"
SQL:
ALTER TABLE blog_posts
  ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  ADD COLUMN IF NOT EXISTS reading_time INTEGER,
  ADD COLUMN IF NOT EXISTS seo_title TEXT,
  ADD COLUMN IF NOT EXISTS seo_description TEXT,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();
```

### T-DB-003: Criar indices
```
Use: execute_sql
SQL:
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(status, published_at DESC);
```

### T-DB-004: Criar trigger updated_at
```
Use: execute_sql
SQL:
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### T-DB-005: Configurar RLS policies
```
Use: execute_sql
SQL:
-- Remover policies antigas se existirem
DROP POLICY IF EXISTS "public_read_published" ON blog_posts;
DROP POLICY IF EXISTS "admin_full_access" ON blog_posts;

-- Habilitar RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Leitura publica: apenas publicados
CREATE POLICY "public_read_published" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Admin: CRUD completo
CREATE POLICY "admin_full_access" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');
```

### T-DB-006: Gerar tipos TypeScript
```
Use: generate_typescript_types
Projeto: fkwfjahctuqiedbgrqvi
Salvar output para uso pelo Agente Code
```

### T-DB-007: Obter credenciais
```
Use: get_project_url
Use: get_anon_key
Reportar: URL e anon key para configuracao do .env
```

## Regras
- NUNCA delete tabelas existentes — apenas ADD COLUMN
- NUNCA desabilite RLS
- NUNCA exponha a service_role_key — apenas anon_key
- Sempre use IF NOT EXISTS / IF EXISTS para idempotencia
- Ao terminar, reporte: quais campos foram adicionados, quais policies estao ativas, URL + anon key
