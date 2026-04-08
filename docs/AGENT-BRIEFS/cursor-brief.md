# CURSOR — Brief de Execucao

## Seu Papel
Voce e o agente de **Design + Database** deste projeto. Usa Stitch MCP para gerar UI e Supabase MCP para gerenciar banco de dados.

## Projeto
Site profissional da Dra. Larissa Nunes, psicologa especializada em Logoterapia em Goiania-GO. React 19 + TypeScript + Tailwind + Supabase + Vercel. Supabase: projeto **site-lari**, ref `fkwfjahctuqiedbgrqvi`, URL `https://fkwfjahctuqiedbgrqvi.supabase.co`.

## Suas Tasks
Todas as tasks marcadas com **[CURSOR]** no arquivo `docs/TASKS.md`. Sao as tasks das ondas T-DB-* e T-DES-*.

## O que voce NAO faz
- NAO escreve componentes React
- NAO implementa logica de negocio
- NAO modifica arquivos em src/
- Isso e responsabilidade do agente CODEX

---

## SESSAO A — Database (Supabase MCP)

Execute na ordem:

### T-DB-001: Listar tabelas
```
Use: list_tables
Verificar: blog_posts, agendamentos, mensagens existem?
Reportar: campos atuais de blog_posts
```

### T-DB-002: Migration — novos campos
```
Use: apply_migration
Nome: "add_blog_posts_seo_fields"

ALTER TABLE blog_posts
  ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  ADD COLUMN IF NOT EXISTS reading_time INTEGER,
  ADD COLUMN IF NOT EXISTS seo_title TEXT,
  ADD COLUMN IF NOT EXISTS seo_description TEXT,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();
```

### T-DB-003: Indices
```
Use: execute_sql

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(status, published_at DESC);
```

### T-DB-004: Trigger updated_at
```
Use: execute_sql

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

### T-DB-005: RLS Policies
```
Use: execute_sql

DROP POLICY IF EXISTS "public_read_published" ON blog_posts;
DROP POLICY IF EXISTS "admin_full_access" ON blog_posts;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_read_published" ON blog_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "admin_full_access" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');
```

### T-DB-006: Gerar tipos TypeScript
```
Use: generate_typescript_types
Salvar output — sera entregue ao Codex para src/types/database.ts
```

### T-DB-007: Credenciais
```
Use: get_project_url
Use: get_anon_key
Reportar valores para configuracao do .env
```

---

## SESSAO B — Design (Stitch MCP)

Execute na ordem:

### T-DES-001: Criar projeto
```
Use: create_project
Nome: "site-dra-larissa"
```

### T-DES-002: Homepage
```
Use: generate_screen_from_text

Professional psychology website homepage. Purple/violet color theme, modern and clean design.

Sections from top to bottom:
1. HERO: Large headline "Quem tem um porque, suporta qualquer como. Descubra o seu." Subheadline: "Psicoterapia com Logoterapia para voce que sente que esta vivendo sem rumo." Professional woman photo placeholder on right. Green WhatsApp CTA button "Quero falar com a Dra. Larissa". Below button: "Atendimento online para todo o Brasil."

2. ABOUT: Title "Quem vai caminhar com voce". Photo placeholder left, bio text right. CTA "Quero conhecer essa abordagem".

3. APPROACH: Title "Uma terapia que nao fica presa no passado". Blockquote with Viktor Frankl quote. Explanation of Logotherapy. Bullet list "Para quem e". CTA "Quero encontrar meu porque".

4. SERVICES: 3 equal cards side by side. Card 1: "Psicoterapia Individual" R$180/sessao, pacote R$576/mes. Card 2: "Sessao de Resolucao" R$200. Card 3: "Orientacao Vocacional". Each card has green WhatsApp CTA.

5. FAQ: Title "Perguntas que quase todo mundo faz antes de comecar". 4 accordion items. Questions about first therapy, price, what is Logotherapy, online sessions.

6. FINAL CTA: Title "Voce nao precisa continuar carregando isso sozinho". Large green WhatsApp button. Info: online + presencial Goiania, Mon-Fri 8-18, Sat 8-12.

7. FOOTER: "Dra. Larissa Nunes - CRP 09/16269". Address, phone, hours. Copyright.

Mobile-first, high conversion focus, minimal and professional.
```

### T-DES-003: Blog listing
```
Use: generate_screen_from_text

Blog listing page for psychology website. Purple theme.
- Top: page title "Blog" with subtitle about mental health content
- Category filter bar: Logoterapia, Ansiedade, Depressao, Proposito, Vocacional, Todos
- Grid of article cards (3 columns desktop, 1 mobile): cover image, category badge, title, 2-line summary, date, reading time estimate
- Cards are clickable, clean design, good spacing
```

### T-DES-004: Blog article
```
Use: generate_screen_from_text

Blog article reading page. Purple accents.
- Full-width header image
- Below image: title in large serif font, "Dra. Larissa Nunes" with avatar, date, "X min de leitura"
- Content area max-width 720px centered, large line-height, spaced paragraphs
- Social share buttons row (WhatsApp, Facebook, LinkedIn)
- At bottom: green CTA box "Identificou-se? Fale com a Dra. Larissa" with WhatsApp button
- No sidebar
```

### T-DES-005: LP Primeira Consulta
```
Use: generate_screen_from_text

High-conversion landing page. NO navigation menu. Purple accents on white.
- Video player placeholder (16:9 aspect ratio) centered at top
- Below: headline "Sua primeira sessao de Logoterapia por R$90" with strikethrough "R$180" and "50% OFF" badge
- Short emotional paragraph about finding purpose
- Offer box: bullet points (sessao completa 50min, online ou presencial, sem compromisso)
- "Vagas limitadas" urgency text
- Large green WhatsApp CTA "Quero minha primeira sessao por R$90"
- Small text: "Seus dados estao seguros. Conversa confidencial."
- NO menu, NO footer links
```

### T-DES-006: LP Sessao de Resolucao
```
Use: generate_screen_from_text

Conversion landing page. NO navigation menu. Warm, professional.
- Video player centered
- Headline "Uma sessao. Uma decisao. Um caminho mais claro."
- Subtitle "Para voce que precisa de clareza agora."
- "Para quem e" section with icon list: luto, decisao importante, conflito, crise, beco sem saida
- Offer: "Sessao de Resolucao: R$200" with details (50min, online, foco total)
- Green WhatsApp CTA "Quero agendar minha sessao de resolucao"
- "Sigilo profissional garantido pelo CRP."
- NO menu, NO footer
```

### T-DES-007: Admin panel
```
Use: generate_screen_from_text

Simple blog admin dashboard. Clean, functional, minimal.
- Top bar: "Admin Blog" + "Logout" button
- Two action buttons: "Novo Artigo" (blue) and "Novo Artigo com IA" (purple, with sparkle icon)
- Article list table: title, status badge (green "Publicado" / yellow "Rascunho"), date, actions (Edit, Delete)
- Article form (modal or side panel): title input, summary textarea, content large textarea, image URL input, category dropdown, tags input, two buttons "Publicar" (green) and "Salvar Rascunho" (gray)
```

### T-DES-008: Depoimentos
```
Use: generate_screen_from_text

Testimonials page. Purple theme, credible.
- Header: "O que dizem quem encontrou o caminho" with "Avaliacoes do Google - 5.0 estrelas" badge
- Grid of review cards: avatar circle placeholder, name, location, service type badge, 5 gold stars, review text in quotes
- Each card has subtle shadow, clean design
- Bottom CTA to leave a review on Google
```

### T-DES-009: Extrair HTML/CSS
```
Use: get_screen_code para cada tela gerada (7 telas)
Salvar cada output como arquivo separado.
Entregar ao Codex para conversao em React.
```

---

## Ao Terminar

Reporte:
1. Quais tabelas/campos foram criados/alterados
2. Quais RLS policies estao ativas
3. URL + anon key do Supabase
4. Tipos TypeScript gerados (copiar conteudo)
5. Quais telas foram geradas no Stitch
6. HTML/CSS de cada tela (ou onde foram salvos)

Estes outputs sao a entrada do agente CODEX na Onda 2.
