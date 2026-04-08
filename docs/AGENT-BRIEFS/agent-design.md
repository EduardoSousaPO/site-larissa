# Agent Brief — DESIGN (Cursor + Stitch MCP)

## Identidade
Voce e o agente de design do projeto. Seu trabalho e gerar todas as telas/paginas do site usando o Google Stitch MCP.

## Projeto
Site profissional da Dra. Larissa Nunes, psicologa especializada em Logoterapia em Goiania-GO. O site e uma maquina de captacao de leads via SEO/GEO que converte visitantes em pacientes via WhatsApp.

## Seu MCP
**Google Stitch** (12 tools): create_project, generate_screen_from_text, get_screen_code, build_site, etc.

## Documentos de Referencia
- `docs/copy_site_dra_larissa_2026-04-07.md` — Copy aprovada (textos exatos para cada secao)
- `docs/PRD_Site_Dra_Larissa_Nunes.md` — Contexto completo do produto
- `docs/CONTRACTS.md` — Tipos e convencoes compartilhadas

## Suas Tasks (Onda 1)

### T-DES-001: Criar projeto no Stitch
```
Use: create_project
Nome: "site-dra-larissa"
Descricao: "Site profissional de psicologia, Logoterapia, tema roxo/violeta, moderno, clean, foco em conversao"
```

### T-DES-002: Gerar Homepage
```
Use: generate_screen_from_text
Prompt: "Professional psychology website homepage. Purple/violet theme. Sections:
1. Hero: headline 'Quem tem um porque, suporta qualquer como. Descubra o seu.' with subheadline about Logotherapy, professional woman photo placeholder, green WhatsApp CTA button.
2. About section 'Quem vai caminhar com voce' with photo and bio text.
3. Approach section explaining Logotherapy with Viktor Frankl quote blockquote.
4. Services: 3 cards - Individual Therapy R$180, Resolution Session R$200, Vocational Guidance. Each with WhatsApp CTA.
5. FAQ accordion with 4 questions about therapy.
6. Final CTA 'Voce nao precisa continuar carregando isso sozinho' with WhatsApp button.
7. Footer with CRP 09/16269, address, phone, hours.
Modern, clean, mobile-first, high conversion focus."
```

### T-DES-003: Gerar Blog Listing
```
Prompt: "Blog listing page for psychology website. Grid of article cards with cover image, title, summary, category badge, date, reading time estimate. Category filter bar on top. Purple theme. Clean, Eurekka-style educational blog."
```

### T-DES-004: Gerar Blog Article
```
Prompt: "Blog article reading page. Max width 720px centered. Large header image. Title in large font. Author 'Dra. Larissa Nunes' with date and reading time. Clean typography, spaced paragraphs. Social share buttons (WhatsApp, Facebook, LinkedIn). Green WhatsApp CTA at bottom. No sidebar. Purple accents."
```

### T-DES-005: Gerar LP Primeira Consulta
```
Prompt: "High-conversion landing page. NO navigation menu. Center: video player placeholder (16:9). Below: headline 'Sua primeira sessao de Logoterapia por R$90' with '50% discount' badge. Emotional copy about finding purpose. Offer box with bullet points. Large green WhatsApp CTA button. Urgency text about limited spots. Minimal, clean, purple accents."
```

### T-DES-006: Gerar LP Sessao de Resolucao
```
Prompt: "Conversion landing page for single therapy session. NO navigation. Video player centered. Headline 'Uma sessao. Uma decisao. Um caminho mais claro.' R$200 session. List of 'who this is for': grief, important decisions, conflicts, crisis. Green WhatsApp CTA. Clean, warm, professional."
```

### T-DES-007: Gerar Admin Panel
```
Prompt: "Simple admin dashboard for blog management. Left: list of articles with title, status badge (published/draft), date. Top: buttons 'New Article' and 'New Article with AI'. Right/modal: form with fields title, summary, content textarea, image URL, category dropdown, tags input. Publish and Save Draft buttons. Minimal, functional, no decorations."
```

### T-DES-008: Gerar Depoimentos
```
Prompt: "Testimonials page showing Google Reviews. Cards with avatar placeholder, name, location, service type, 5 star rating, review text. Header 'O que dizem quem encontrou o caminho'. Badge 'Google Reviews 5.0'. Purple theme, clean, credible."
```

### T-DES-009: Extrair HTML/CSS
```
Use: get_screen_code (para cada tela gerada)
Salvar output em: docs/stitch-output/[nome-da-tela].html
```

## Regras
- NUNCA modifique arquivos em src/ — apenas gere designs no Stitch
- NUNCA invente textos — use a copy aprovada no doc de copy
- O tema e ROXO/VIOLETA (purple) — consistente em todas as telas
- Mobile-first em todos os designs
- CTA principal e sempre WhatsApp (botao verde)
- Ao terminar, informe quais telas foram geradas e onde estao os HTMLs
