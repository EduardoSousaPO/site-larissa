# Estratégia de Aquisição Paga — Google Ads | Psicóloga Larissa Nunes (CRP 09/16269)

> Documento-mestre da entrega de landing pages para Google Ads.
> Data: 18/08/2026 · Base: pesquisa de Fase 0 (política Google Ads, normas CFP, keywords PT-BR, benchmark CRO, auditoria do código).
> **Este documento é o critério de aprovação/reprovação da Fase 4.** Qualquer página que viole a seção 4 é reprovada, mesmo que o código esteja correto.

---

## 1. Decisão final dos slugs

Os slugs default do briefing foram testados contra a **API de autocomplete do Google** (`suggestqueries.google.com`, `hl=pt-BR&gl=br`), com verificação independente feita pelo orquestrador. Dois foram alterados.

| # | Território | Slug default | Decisão | Slug final |
|---|---|---|---|---|
| 1 | Ansiedade | `/psicologa-online-para-ansiedade` | **MANTIDO** | `/psicologa-online-para-ansiedade` |
| 2 | Autoestima / autoconfiança | `/psicologa-para-autoestima-e-autoconfianca` | **ALTERADO** | `/psicologa-online-para-autoestima` |
| 3 | Falta de sentido | `/terapia-para-falta-de-sentido-na-vida` | **ALTERADO** | `/psicologa-online-para-crise-existencial` |
| 4 | Doenças crônicas | `/psicologa-para-doencas-cronicas` | **MANTIDO** | `/psicologa-para-doencas-cronicas` |

### 1.1 Evidência das alterações

Comandos reproduzíveis e saída real:

```
q=terapia%20para%20falta%20de%20sentido            → ["terapia para falta de sentido",[]]
q=terapia%20para%20falta%20de%20sentido%20na%20vida → ["terapia para falta de sentido na vida",[]]
q=crise%20existencial                              → 9 sugestões, subtipos 512
q=psicologa%20para%20autoconfianca                 → ["psicologa para autoconfianca",[]]
q=psicologo%20online%20autoestima                  → 1 sugestão
q=psicologo%20online%20para%20ansiedade            → sugestão própria
q=psicologa%20para%20doencas%20cronicas            → ["psicologa para doencas cronicas",[]]
q=ansiedade%20e%20fibromialgia                     → 8 sugestões
```

**Território 2.** "Autoconfiança" não existe como busca. Retirá-lo do slug concentra a densidade na keyword que tem demanda e alinha o padrão com o território 1. "Autoconfiança" e "insegurança" entram como H2, FAQ e keywords de ad group.

**Território 3.** O slug default estava apoiado numa frase que o Google não reconhece como consulta. O território pedido pela Dra. Larissa — falta de sentido — **não mudou**; mudou o nome pelo qual ele é comprado. "Falta de sentido", "vazio existencial" e "não sei o que fazer da vida" continuam na página, como H2, FAQ e corpo, porque são o vocabulário emocional real da pessoa. O que eles não têm é forma transacional.

**Regra derivada, aplicada às 4 páginas:** o slug carrega a keyword transacional; o corpo carrega o vocabulário da dor.

### 1.2 Doenças crônicas — página sim, orçamento por último

Treze formulações do guarda-chuva foram testadas. **Todas retornaram zero sugestões:** `psicologo para doenca cronica`, `psicologa para doencas cronicas`, `psicologo doenca cronica`, `apoio psicologico doenca cronica`, `apoio emocional doenca cronica`, `psicologia hospitalar doenca cronica`, `terapia para quem tem doenca cronica`, `psicoterapia doenca cronica`, `psicologo especialista em doencas cronicas`, `como lidar com uma doenca cronica`, `cansaco emocional doenca cronica`, `doenca cronica saude mental`, `impacto emocional doenca cronica`.

A demanda existe, mas **nomeada pela doença**: `ansiedade e fibromialgia` (8 sugestões), `aceitação da doença crônica`, `fibromialgia psicologo`, `psicologo para pacientes oncologicos`, `psicologo dor cronica`, `psicologo lupus`, `psicologo diabetes tipo 1`.

**Decisão:** a página é construída, indexada e recebe conteúdo — é o hub do território e ocupa uma interseção que nenhum concorrente ocupa (mulher adulta + doença crônica + busca de sentido). Os ad groups são entregues prontos, **organizados por doença**, nunca por guarda-chuva. A sequência de lançamento está em `04-campanhas-google-ads.md`.

**Fator adicional de mercado:** a ABRALE oferece atendimento psicológico **gratuito** a pacientes oncológicos, com autoridade institucional. Competir por "psicólogo para câncer" genérico é competir contra R$ 0 mais marca.

---

## 2. Mapa: intenção → keyword → ad group → LP → CTA → conversão

| Intenção de busca | Keyword-cabeça | Campanha / Ad group | LP de destino | Evento |
|---|---|---|---|---|
| Quer psicóloga para ansiedade | `psicólogo online para ansiedade` | C1 / AG 1.1 | `/psicologa-online-para-ansiedade` | `whatsapp_click` |
| Quer especialista | `psicólogo especialista em ansiedade` | C1 / AG 1.2 | idem | idem |
| Busca local | `psicólogo ansiedade goiânia` | C1 / AG 1.3 | idem | idem |
| Subtipo nomeado | `psicólogo para ansiedade generalizada` | C1 / AG 1.4 | idem | idem |
| Quer trabalhar autoestima | `psicólogo online autoestima` | C2 / AG 2.1 | `/psicologa-online-para-autoestima` | idem |
| Nomeia "baixa autoestima" | `terapia para baixa autoestima` | C2 / AG 2.2 | idem | idem |
| Nomeia insegurança | `terapia para autoconfiança`, `terapia para insegurança` | C2 / AG 2.3 | idem | idem |
| Brecha local | `tratamento para baixa autoestima goiânia` | C2 / AG 2.4 | idem | idem |
| Crise de sentido | `psicólogo para crise existencial` | C3 / AG 3.1 | `/psicologa-online-para-crise-existencial` | idem |
| Vazio / propósito | `psicólogo para vazio existencial` | C3 / AG 3.2 | idem | idem |
| Procura a abordagem | `psicólogo online logoterapia`, `logoterapia goiânia` | C3 / AG 3.3 (**exata**) | idem | idem |
| Adoecimento oncológico | `psicólogo para pacientes oncológicos` | C4 / AG 4.1 | `/psicologa-para-doencas-cronicas` | idem |
| Dor crônica | `fibromialgia psicólogo`, `psicólogo dor crônica` | C4 / AG 4.2 | idem | idem |
| Autoimune | `psicólogo lúpus` | C4 / AG 4.3 | idem | idem |
| Genérico sem condição | `psicóloga online`, `psicólogo em goiânia` | **C0 / ad group "pai"** | `/` (home) | idem |

**Conversão primária:** `whatsapp_click`. **Secundários:** `lp_view` (com UTM), scroll de 75%.

**Regra do ad group "pai":** toda keyword sem condição nomeada vive **só na Campanha 0**. As campanhas 1–4 negativam esses termos em correspondência de frase. Esta regra sozinha resolve a canibalização mais cara — quatro LPs temáticas disputando `psicóloga online` entre si.

**Regra da condição médica vence:** quando a busca nomeia **doença + sintoma psíquico** (`ansiedade e fibromialgia`), ela pertence à Campanha 4, nunca à 1. Operacionalizado com `fibromialgia`, `lúpus`, `câncer`, `autoimune`, `diabetes`, `dor crônica` como negativas de frase na Campanha 1.

**Regra da fronteira autoestima × sentido:** autoestima é **juízo sobre si** ("não gosto de mim", "não me sinto boa o suficiente"); sentido é **ausência de direção** ("me sinto vazia", "me sinto perdida"). O vocabulário de vazio vai para a Campanha 3 mesmo parecendo autoestima.

---

## 3. Regras de compliance consolidadas

### 3.1 CFP — obrigatório em toda LP

- [ ] Nome + a palavra **"Psicóloga"** + **CRP 09/16269** visíveis na página (Res. CFP 003/2007 art. 53; CEPP art. 20 "a")
- [ ] "Dra." nunca como identificação isolada — sempre acompanhado de "Psicóloga … CRP 09/16269" com peso visual igual ou maior (NT CRP-05/RJ 1/2025)
- [ ] Zero previsão taxativa de resultado (CEPP art. 20 "e"; Res. 003/2007 art. 56 I)
- [ ] Zero preço, faixa, pacote, desconto ou termo de vantagem financeira (CEPP art. 20 "d"; NT CFP 1/2022)
- [ ] Zero depoimento de paciente, review do Google, print de conversa, "antes e depois" (NT CFP 1/2022; CEPP art. 2º "q" e art. 9º; Res. 003/2007 art. 54)
- [ ] Zero autopromoção comparativa (art. 20 "f"; art. 56 V)
- [ ] Zero sensacionalismo e urgência artificial (art. 20 "h"; art. 2º "i"; art. 56 VII)
- [ ] Zero teste/quiz de autodiagnóstico na página (CEPP art. 18; Res. 003/2007 art. 55 § único)
- [ ] Método S.E.R. **sempre ancorado na Logoterapia**, nunca como técnica autônoma nem sujeito de resultado (art. 20 "c"; art. 2º "f"; Res. CFP 010/97 art. 1º)
- [ ] Atendimento online: recursos de sigilo especificados (Res. CFP 9/2024 art. 7º § único)
- [ ] **Não** mencionar cadastro e-Psi — extinto pela Res. CFP 9/2024 (plataforma encerrada em 31/08/2024)

### 3.2 Google Ads — obrigatório em toda LP

- [ ] HTTPS válido · HTTP 200 em desktop e mobile · AdsBot liberado no `robots.txt`
- [ ] Zero pop-up, interstitial ou overlay que cubra o conteúdo (Destination experience)
- [ ] Botão Voltar funcional; zero download automático; zero redirect cross-domain
- [ ] Conteúdo original e substantivo — não é bridge page para o WhatsApp (Insufficient original content)
- [ ] Nenhuma frase que **presuma a condição do leitor** (Misusing personal information — ver §4.2)
- [ ] Nenhum vocabulário de dependência química (Addiction services: o Brasil **não** é país habilitado, logo não há caminho de certificação — reprovação sem recurso)
- [ ] Nenhuma alegação de tratar a doença física na LP de doenças crônicas
- [ ] Anunciante identificado: nome, CRP, contato, cidade, modalidade (Unidentified business)
- [ ] Link para `/privacidade` acessível
- [ ] Mobile-friendly; alvos de toque ≥48×48px
- [ ] Conteúdo presente no HTML servido — o site é SSG, requisito já atendido

**Não há exigência de certificação (LegitScript) para psicoterapia no Brasil.** A única categoria certificável de saúde mental é *addiction services*, e o Brasil não está entre os 6 países habilitados para ela.

**Não existe mínimo oficial de palavras.** O Google não publica número; o critério de "Insufficient original content" é qualitativo. As ≥700 palavras adotadas aqui são **padrão interno de qualidade**, não regra do Google.

### 3.3 Configuração de campanha — restrição da categoria sensível "Saúde"

A política *Health in personalized advertising* nomeia literalmente *"counseling services for mental health issues like depression, anxiety"* e *"chronic health conditions"*. As 4 LPs **serão** classificadas nessa categoria. Consequência obrigatória:

- [ ] **Sem Customer Match** · **Sem "Seus dados"/remarketing** · **Sem expansão de público-alvo** · **Sem segmentos semelhantes**
- [ ] Permitidos: públicos predefinidos do Google, in-market, afinidade, demografia, eventos importantes, **segmentação por local**

Para campanha de Pesquisa movida por keyword o impacto é baixo — a conversão vem da intenção declarada. **Não construir a estratégia sobre remarketing.**

---

## 4. Termos proibidos e substitutos seguros

> **Esta lista é o critério literal de reprovação da Fase 4.** A verificação é por busca de string, não por leitura.

### 4.1 Promessa de resultado — CEPP art. 20 "e" + Google *Unreliable claims*

| Proibido | Substituto |
|---|---|
| cura, curar, tem cura, cura definitiva | "processo terapêutico", "acompanhamento" |
| elimine, eliminar, acabe com, livre-se, adeus [X] | "desenvolver recursos para lidar com" |
| resultado garantido, garantia, garantido, 100% | "objetivos definidos em conjunto e revisados ao longo do processo" |
| em X sessões, em 30 dias, alta em | "a duração varia conforme a demanda de cada pessoa" |
| método infalível, fórmula, protocolo definitivo, revolucionário | "abordagem com respaldo na literatura em Psicologia" |
| nunca mais, de uma vez por todas, definitivo, sem recaída | "um espaço de cuidado continuado" |
| comprovadamente eficaz, cientificamente comprovado que cura | "abordagem reconhecida pela profissão" |
| você vai conseguir / superar / mudar | "o trabalho se orienta a…" |

### 4.2 Presunção da condição do leitor — Google *Misusing personal information*

O exemplo oficial da política, em PT-BR, é **"Você está com muitas dívidas. Consiga ajuda hoje."** Toda construção com a mesma forma é de alto risco.

| Proibido | Substituto |
|---|---|
| Você tem ansiedade? / Você sofre com ansiedade | "Atendimento psicológico para quem convive com ansiedade" |
| Você tem depressão? / Você está deprimida | "Psicoterapia para adultos, incluindo demandas de depressão" |
| Você convive com uma doença crônica? | "Apoio psicológico para quem convive com uma condição crônica" |
| Você está esgotada / Você não aguenta mais | "Atendimento para demandas de esgotamento e sobrecarga" |
| Cansada de conviver com a dor? | "Como a psicoterapia pode apoiar quem lida com dor persistente" |
| Sua ansiedade está te dominando | "Sobre o trabalho terapêutico com ansiedade" |

**Regra estrutural única: o sujeito da frase é o serviço, nunca o leitor.**

> **Nota de aplicação — leia antes de reprovar.** Perguntas de identificação em segunda pessoa **condicional**, dentro do corpo da página ("Sua mente não desliga na hora de dormir?"), descrevem um sinal e devolvem a decisão à leitora; não afirmam a condição dela. O que a política proíbe é **afirmar** ("Você tem ansiedade") e usar isso no anúncio. Regra operacional adotada nas 4 páginas: **H1, subtítulo da primeira dobra e 100% dos textos de RSA nunca interpelam**; a seção de sinais pode usar pergunta condicional, sempre sob a moldura "talvez você reconheça algum destes sinais".

### 4.3 Preço e vantagem financeira — NT CFP 1/2022 (termos literais da norma)

| Proibido | Substituto |
|---|---|
| preço social, atendimento social, valor social | *(omitir)* |
| desconto, promoção, preço promocional | *(omitir)* |
| pacote, pacote promocional, plano, combo | "acompanhamento contínuo, com periodicidade definida em conjunto" |
| valor acessível, acessível, barato | *(omitir)* |
| cupom, sorteio | *(omitir)* |
| R$180, R$576, R$200, "a partir de", "de … por …" | **"Os valores são informados no primeiro contato."** |
| primeira sessão grátis, sessão experimental gratuita | "uma primeira conversa para entender sua história e ver se faz sentido seguirmos" |

### 4.4 Sensacionalismo e urgência — CEPP art. 20 "h", art. 2º "i" + Google *Imposing negativity*

| Proibido | Substituto |
|---|---|
| últimas vagas, restam X horários, só hoje, corra | "consulte os horários disponíveis" |
| antes que seja tarde, não deixe para depois | "quando fizer sentido para você" |
| se você não tratar agora, vai piorar | *(remover)* |
| você está destruindo sua vida / falhando com sua família | *(remover)* |
| o segredo que ninguém conta, a verdade sobre, chocante | "o que a literatura em Psicologia indica sobre" |
| contador regressivo | *(remover)* |

### 4.5 Prova social — NT CFP 1/2022

| Proibido | Substituto |
|---|---|
| depoimento, testemunho, "o que dizem meus pacientes" | credenciais: CRP, formação, abordagem, instituições |
| review do Google embedado ou republicado | link ao Cadastro Nacional de Psicólogos |
| print de conversa de paciente | conteúdo autoral do blog, assinado |
| "+300 pacientes atendidos com sucesso" | "atuo há X anos em [área]" — tempo de atuação é qualificação, não resultado clínico |
| antes e depois | *(remover)* |
| melhor psicóloga, nº 1, a mais indicada | "Psicóloga Larissa Nunes — CRP 09/16269" |

> **Divergência registrada.** Parte do mercado brasileiro converge para exibir contagem de avaliações do Google como alternativa "mais segura" ao depoimento clínico. Não adoto: a NT CFP 1/2022 veda o *"compartilhamento de depoimentos"*, e o review do Google traz nome real e foto — republicá-lo no site declara publicamente que aquela pessoa é paciente, colidindo com o art. 9º (sigilo) e o art. 54 da Res. 003/2007. Reviews espontâneos que permanecem no perfil do Google são outra coisa; o risco nasce no ato de republicar.

### 4.6 Escopo e dependência química

| Proibido | Substituto |
|---|---|
| vício, viciado, dependência química, abstinência, reabilitação, desintoxicação | *(não usar — o Brasil não é país habilitado para addiction services)* |
| trato fibromialgia / lúpus / câncer / diabetes | "apoio psicológico a pessoas que convivem com [condição]" |
| substitua o antidepressivo, desmame de medicação | "o acompanhamento psicológico é complementar ao tratamento médico e não o substitui" |
| diagnóstico rápido, teste online, descubra se você tem | "a avaliação acontece no processo de atendimento" |
| método próprio, método exclusivo, técnica autoral | "Método S.E.R. — o enquadre em três etapas com que organizo o acompanhamento, fundamentado na Logoterapia" |

### 4.7 Lista de verificação literal para a Fase 4

Strings que **não podem aparecer** em nenhuma das 4 páginas (busca case-insensitive, sem acento sensível):

```
cura            curar           garantid        elimine
eliminar        livre-se        acabe com       definitiv
infalível       comprovadamente nunca mais      de uma vez por todas
últimas vagas   só hoje         antes que seja tarde
desconto        promoção        promocional     pacote
preço social    valor social    acessível       cupom
sorteio         grátis          gratuito        R$
depoimento      antes e depois  melhor psicóloga
vício           viciado         dependência química
abstinência     reabilitação    e-Psi
você tem ansiedade      você sofre      você está deprimid
você convive com uma doença
```

---

## 5. Plano de linkagem interna

### 5.1 Artigos publicados hoje (Supabase, verificados no build)

| Slug | Título | Categoria |
|---|---|---|
| `mente-acelerada-ansiedade` | Mente Acelerada: Entendendo a Ansiedade e como Controlá-la | ansiedade |
| `sintomas-fisicos-ansiedade` | Sintomas físicos da ansiedade: como identificar e tratar | ansiedade |
| `nao-consigo-relaxar` | Por que não consigo relaxar? Entenda a ansiedade constante | ansiedade |
| `medo-de-enlouquecer` | Medo de Enlouquecer: Um Sintoma Comum da Ansiedade | ansiedade |
| `cansaco-emocional` | Cansado Demais: O Cansaço Emocional e Como Superá-lo | geral |
| `vazio-existencial` | Vazio existencial: por que sinto isso? | ansiedade |
| `metodo-ser-mulheres-sobrecarregadas` | Superando a Sobrecarga: O Método S.E.R. | logoterapia |
| `como-parar-de-reagir-no-automatico` | Como Parar de Reagir no Automático | logoterapia |

### 5.2 LP → blog (implementado no componente `ArtigosRelacionados`)

| LP | Artigos linkados |
|---|---|
| `/psicologa-online-para-ansiedade` | `mente-acelerada-ansiedade`, `sintomas-fisicos-ansiedade`, `nao-consigo-relaxar` |
| `/psicologa-online-para-autoestima` | `como-parar-de-reagir-no-automatico`, `cansaco-emocional`, `metodo-ser-mulheres-sobrecarregadas` |
| `/psicologa-online-para-crise-existencial` | `vazio-existencial`, `metodo-ser-mulheres-sobrecarregadas`, `como-parar-de-reagir-no-automatico` |
| `/psicologa-para-doencas-cronicas` | `cansaco-emocional`, `mente-acelerada-ansiedade`, `vazio-existencial` |

**Cobertura honesta:** ansiedade tem 5 artigos e rede forte. Crise existencial tem 1 artigo direto. **Autoestima e doenças crônicas não têm artigo próprio** — essas LPs nascem sem autoridade tópica. Isso não bloqueia o Google Ads (o Índice de Qualidade avalia relevância anúncio↔keyword↔LP, não backlinks), mas limita o orgânico. Pauta recomendada em `03-links-internos.md`.

### 5.3 Blog → LP (não implementável por mim)

Os artigos vivem no Supabase e são editados via `/admin/blog`. **Não edito banco de dados.** A lista `artigo → LP → texto de CTA` está em `03-links-internos.md`. Lembrete operacional: o site é SSG — a alteração só aparece no HTML **após novo deploy**.

---

## 6. Riscos aceitos e registrados

| Risco | Decisão | Justificativa |
|---|---|---|
| LPs classificadas na categoria sensível "Saúde" | **Aceito** | Inevitável — a política nomeia literalmente terapia para ansiedade e condições crônicas. Custa segmentação, não aprovação |
| Território 4 sem demanda de guarda-chuva | **Aceito, com sequência de lançamento** | Página existe como hub de SEO; ad groups são por doença |
| Autoestima e doenças crônicas sem artigo de apoio | **Aceito, com pauta recomendada** | Não bloqueia Ads |
| "Método S.E.R." como método autoral | **Mitigado** | Sempre ancorado na Logoterapia e descrito como enquadre de processo |
| Home exibe preços e reviews de pacientes | **Reportado, não alterado** | Fora do escopo desta entrega. Requer autorização da Dra. Larissa |
| Nome completo pode estar abreviado | **Reportado** | A NT CRP-12 exige nome sem abreviação. Confirmar com o registro do CRP |
| Bandas de CPC da pesquisa são inferência | **Registrado** | Nenhuma ferramenta de volume ficou acessível. Rodar o Planejador de Palavras-chave logado antes de definir orçamento |
