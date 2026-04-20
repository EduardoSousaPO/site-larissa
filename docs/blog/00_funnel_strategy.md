# Estratégia de Blog — Funil Completo (Dra. Larissa Nunes)

> Data: 2026-04-20
> Base: [keyword_strategy.md](../keyword_strategy.md) + [copy_site_dra_larissa_2026-04-07.md](../copy_site_dra_larissa_2026-04-07.md)
> Objetivo: transformar o blog em canal orgânico de captação via Google + LLMs

---

## 1. Diagnóstico rápido do site (estado atual)

**Pontos fortes já implementados:**
- Schema.org completo: `MedicalBusiness`, `Physician`, `FAQPage` ([src/config/site.ts](../../src/config/site.ts))
- SEOHead com OG tags + canonical ([src/components/SEOHead.tsx](../../src/components/SEOHead.tsx))
- Blog com categorias, slug, summary, reading_time, imagem OG ([src/lib/blog.ts](../../src/lib/blog.ts))
- Landing pages específicas (Primeira Consulta, Sessão de Resolução)
- NAP consistente (nome, endereço, telefone)

**Gaps que este pacote de conteúdo resolve:**
- Blog sem artigos publicados → zero tráfego orgânico
- Nenhum artigo-pilar competindo por keywords Tier 1 do plano existente
- Faltam artigos de fundo de funil que convertam leitor → agendamento
- Sem cluster temático (topic cluster) conectando conteúdos

---

## 2. SEO: princípios que guiam cada artigo

### 2.1 Otimização técnica (aplicar em todo post)
- **Title tag:** até 60 caracteres, keyword primária nos primeiros 30
- **Meta description:** até 155 caracteres, com keyword + benefício + verbo de ação
- **H1:** único, igual ou muito próximo do title
- **H2/H3:** escaneáveis, responder perguntas ("o que é", "como funciona", "quando procurar")
- **Slug:** 3-5 palavras, só keyword, sem stopwords
- **Primeira frase:** com a keyword principal em contexto natural
- **Parágrafos:** máximo 3-4 linhas (mobile-first)
- **Imagem de capa:** 1200x630 (OG), alt descritivo com keyword secundária
- **Internal linking:** cada post TOFU → 1 MOFU + 1 BOFU; cada MOFU → 1 BOFU + 1 página de serviço
- **CTA contextual:** WhatsApp ou Primeira Consulta no final + 1 vez no meio

### 2.2 Otimização para LLMs (GEO — Generative Engine Optimization)
- **Responder direto nos 2 primeiros parágrafos** (LLMs extraem a resposta do topo)
- **Listas e tabelas** — formato preferido por modelos generativos para citação
- **Frases curtas e declarativas** em vez de parágrafos densos
- **Citar Viktor Frankl com fonte** ("Em Busca de Sentido", 1946) — dá autoridade verificável
- **FAQ no final** em formato Q&A com Schema.org/FAQPage

### 2.3 E-E-A-T (obrigatório para YMYL/saúde)
Todo artigo deve ter:
- Nome da autora + CRP visível
- Bio curta no final do post linkando para /sobre
- Referências a livros, estudos ou autoridades (Frankl, APA, CFP)
- Data de publicação e última revisão

---

## 3. Funil de conteúdo — 10 artigos conectados

> **Lógica do funil:** TOFU atrai quem sente a dor sem saber o nome. MOFU educa sobre Logoterapia como solução. BOFU converte em agendamento.

### TOFU — Topo (descoberta da dor | 4 artigos)

Intenção de busca: **informacional**. Pessoa sente o sintoma, ainda não pensou em terapia.

| # | Título | Keyword primária | Vol./mês | Link para |
|---|--------|------------------|----------|-----------|
| 1 | Vazio Existencial: Por Que Você Sente Que Falta Algo na Sua Vida | vazio existencial | 3-6K | Artigo 5 + Artigo 9 |
| 2 | Não Sei O Que Fazer da Vida: 5 Passos Para Encontrar Direção | não sei o que fazer da vida | 8-15K | Artigo 7 + /servicos |
| 3 | Falta de Motivação: Quando o Problema Não É Preguiça, É Falta de Sentido | falta de motivação | 5-10K | Artigo 5 + Artigo 10 |
| 4 | Crise Existencial: 7 Sinais de Que Você Está Passando por Uma | crise existencial | 5-10K | Artigo 5 + Artigo 9 |

### MOFU — Meio (avaliação da solução | 4 artigos)

Intenção de busca: **comparativa/educacional**. Pessoa já considera terapia, quer entender opções.

| # | Título | Keyword primária | Vol./mês | Link para |
|---|--------|------------------|----------|-----------|
| 5 | Logoterapia: O Que É, Como Funciona e Para Quem É (Guia Completo) | logoterapia o que é | 200-500 | Artigo 8 + Artigo 9 + /servicos |
| 6 | Tipos de Terapia: Qual a Diferença e Como Escolher a Certa Para Você | tipos de terapia | 5-10K | Artigo 5 + Artigo 9 |
| 7 | Como Encontrar Sentido na Vida: O Que a Logoterapia Ensina | como encontrar sentido na vida | 1-3K | Artigo 5 + Artigo 8 |
| 8 | Quem Foi Viktor Frankl e Por Que Ele Mudou a Psicologia Para Sempre | viktor frankl | 12-18K | Artigo 5 + Artigo 7 |

### BOFU — Fundo (decisão de compra | 2 artigos)

Intenção de busca: **transacional**. Pessoa está pronta para agendar, avaliando o profissional.

| # | Título | Keyword primária | Vol./mês | Link para |
|---|--------|------------------|----------|-----------|
| 9 | Quando Procurar um Psicólogo: 8 Sinais de Que Chegou a Hora | quando procurar psicólogo | 3-6K | /primeira-consulta + WhatsApp |
| 10 | Terapia Online Funciona? O Que Esperar da Primeira Sessão com Logoterapia | terapia online logoterapia | 300+27K | /agendamento + WhatsApp |

---

## 4. Arquitetura de links internos (topic cluster)

```
                    PÁGINA PILAR: Logoterapia (Artigo 5)
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
      TOFU 1-4          MOFU 6,7,8           BOFU 9,10
    (atração)          (educação)         (conversão)
         │                  │                  │
         └─────────► /primeira-consulta ◄──────┘
                     /agendamento
                     WhatsApp
```

**Regra de ouro:** nunca deixar um post sem pelo menos 2 links internos (1 lateral + 1 descendente no funil).

---

## 5. Calendário sugerido (primeiros 90 dias)

| Semana | Artigo | Stage | Objetivo |
|--------|--------|-------|----------|
| 1 | #5 Logoterapia: O Que É | MOFU | Pilar — fundar o cluster |
| 2 | #1 Vazio Existencial | TOFU | Tráfego de cauda longa |
| 3 | #9 Quando Procurar Psicólogo | BOFU | Conversão imediata |
| 4 | #8 Viktor Frankl | MOFU | Alto volume + autoridade |
| 5 | #4 Crise Existencial | TOFU | Match emocional forte |
| 6 | #7 Como Encontrar Sentido | MOFU | Ponte filosofia → prática |
| 7 | #2 Não Sei O Que Fazer da Vida | TOFU | Maior volume TOFU |
| 8 | #10 Terapia Online Funciona | BOFU | Conversão + autoridade |
| 9 | #6 Tipos de Terapia | MOFU | Comparativo posicionando LT |
| 10 | #3 Falta de Motivação | TOFU | Fechar cluster |

---

## 6. Entregas neste pacote

- [x] **Estratégia SEO + funil** (este documento)

**Pilares MOFU (fundação do cluster)**
- [x] #5 MOFU — [02_mofu_logoterapia_o_que_e.md](./02_mofu_logoterapia_o_que_e.md) · `logoterapia o que é`
- [x] #8 MOFU — [09_mofu_viktor_frankl.md](./09_mofu_viktor_frankl.md) · `viktor frankl`
- [x] #7 MOFU — [08_mofu_como_encontrar_sentido_na_vida.md](./08_mofu_como_encontrar_sentido_na_vida.md) · `como encontrar sentido na vida`
- [x] #6 MOFU — [07_mofu_tipos_de_terapia.md](./07_mofu_tipos_de_terapia.md) · `tipos de terapia`

**Atração TOFU**
- [x] #1 TOFU — [01_tofu_vazio_existencial.md](./01_tofu_vazio_existencial.md) · `vazio existencial`
- [x] #2 TOFU — [04_tofu_nao_sei_o_que_fazer_da_vida.md](./04_tofu_nao_sei_o_que_fazer_da_vida.md) · `não sei o que fazer da vida`
- [x] #3 TOFU — [05_tofu_falta_de_motivacao.md](./05_tofu_falta_de_motivacao.md) · `falta de motivação`
- [x] #4 TOFU — [06_tofu_crise_existencial.md](./06_tofu_crise_existencial.md) · `crise existencial`

**Conversão BOFU**
- [x] #9 BOFU — [03_bofu_quando_procurar_psicologo.md](./03_bofu_quando_procurar_psicologo.md) · `quando procurar um psicólogo`
- [x] #10 BOFU — [10_bofu_terapia_online_logoterapia.md](./10_bofu_terapia_online_logoterapia.md) · `terapia online funciona`

Cada artigo tem:
- Frontmatter pronto para importação no Supabase (`blog_posts`)
- Title + meta description otimizados
- Estrutura H1→H2→H3 escaneável
- FAQ no final (compatível com FAQPage Schema.org)
- CTAs contextuais (`/primeira-consulta`, `/agendamento`, WhatsApp)
- Links internos mapeados entre os 10 posts

## 7. Próximos passos (fora deste pacote)

1. Revisar os 10 artigos no seu ritmo (sugestão: comece pelos 3 pilares — #5 Logoterapia, #8 Viktor Frankl, #9 Quando Procurar Psicólogo)
2. Gerar as 10 imagens de capa (1200x630) — prompt de cada está no frontmatter `image_prompt`
3. Importar via [BlogAdmin](../../src/pages/BlogAdmin.tsx) como `draft`, publicar seguindo o calendário da seção 5
4. Após 30 dias da primeira publicação, medir via Search Console: CTR, impressions, keywords capturadas
5. Refinar o cluster com 4-6 posts de cauda mais longa (ex.: "logoterapia para luto", "logoterapia para burnout", "frases Viktor Frankl explicadas") — usando Tier 4 de [keyword_strategy.md](../keyword_strategy.md)
