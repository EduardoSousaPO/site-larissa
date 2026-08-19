# Pacote de campanha — Google Ads

> Pronto para copiar e colar no painel. Todos os textos de anúncio foram conferidos contra os limites do Google (headline ≤30 caracteres, descrição ≤90) e contra a lista de termos proibidos de `00-estrategia-google-ads.md` §4.
>
> **Ordem de lançamento recomendada:** C0 e C1 na semana 1 · C2 na semana 3 · C3 com orçamento mínimo na semana 4 · **C4 só depois de 60–90 dias de dados orgânicos** (justificativa em §7).

---

## 1. Configuração da conta e das campanhas

### 1.1 Válido para todas as campanhas

| Item | Valor | Por quê |
|---|---|---|
| Tipo | **Rede de Pesquisa apenas** | Desmarcar "Incluir na Rede de Display" e "Incluir parceiros de pesquisa". Display gasta rápido e converte mal em serviço clínico |
| Local | **Brasil**, com campanha separada ou ajuste de lance para **Goiânia** | Ela atende online no país e presencial na cidade |
| Opções de local | **Presença: pessoas na sua localização** | O default ("presença ou interesse") traz quem só pesquisou sobre o Brasil de fora |
| Idioma | Português | — |
| Dispositivos | Todos, sem ajuste inicial | Mobile domina; ajustar só com dados |
| Rotação de anúncios | Otimizar | — |
| Agendamento | Ininterrupto no início | O WhatsApp recebe mensagem fora de horário; ajustar depois com dados |
| Estratégia de lance | **Maximizar cliques com CPC máximo teto** → migrar para **Maximizar conversões** após ~30 conversões em 30 dias | Smart Bidding sem histórico gasta caro para aprender |
| Públicos-alvo | **Somente predefinidos do Google.** Sem Customer Match, sem remarketing, sem semelhantes, sem expansão | Obrigatório: as LPs caem na categoria sensível "Saúde" |
| Correspondência | **Frase e exata apenas** nos primeiros 90 dias | Ampla neste nicho é ralo, por causa da poluição documentada em §4 |

### 1.2 Orçamento sugerido

Os valores abaixo são um ponto de partida conservador, não uma previsão. **Nenhuma ferramenta de volume de busca ficou acessível durante a pesquisa** — as faixas de CPC do estudo são inferência. Rode o Planejador de Palavras-chave logado, com localização Brasil, antes de fixar orçamento.

| Campanha | Diário sugerido | Racional |
|---|---|---|
| C1 — Ansiedade | R$ 40–60 | Único território com camada transacional verificada em volume. É a prioridade |
| C0 — Marca e genérico | R$ 15–25 | Protege a marca e absorve o genérico que não tem condição nomeada |
| C2 — Autoestima | R$ 20–30 | Demanda transacional fina; o volume real é informacional |
| C3 — Crise existencial | R$ 10–15 | Cauda longa. É diferencial competitivo, não volume |
| C4 — Doenças crônicas | R$ 0 no início | Ver §7 |

---

## 2. CAMPANHA 0 — Marca e genérico → `/`

Existe para uma função só: **absorver toda busca que não nomeia uma condição**. Sem ela, as quatro LPs temáticas disputam `psicóloga online` entre si e o custo sobe sem motivo.

> 🔴 **Condição para usar a home como destino — leia antes de ativar esta campanha.**
> A home (`/`) hoje exibe **preços** (R$180 avulsa, R$576 pacote mensal com 20% de economia, R$200 sessão única) e **avaliações de pacientes com nome real**. Esses dois elementos foram deliberadamente removidos das 4 landing pages porque a Nota Técnica CFP 1/2022 veda nominalmente "pacote promocional", "desconto" e o uso ou compartilhamento de depoimentos de pessoas atendidas.
>
> Enquanto a home estiver assim, **use `/sobre` como URL final desta campanha**, não `/`. A página `/sobre` cumpre a mesma função para busca genérica — identifica a profissional, explica a abordagem, lista as demandas atendidas e leva ao WhatsApp — sem carregar o risco.
>
> Assim que a home for ajustada (decisão da Dra. Larissa), trocar o destino de volta para `/` é uma edição de um campo.

**Keywords — frase**
```
"psicóloga online"
"psicólogo online"
"terapia online"
"psicóloga particular"
"psicóloga online brasil"
"consulta com psicólogo online"
"agendar consulta psicólogo online"
```

**Keywords — exata**
```
[psicóloga online]
[psicólogo em goiânia]
[psicóloga goiânia]
[psicóloga em goiânia online]
[psicóloga larissa nunes]
[larissa nunes psicóloga]
[psicólogo goiânia preço]
```

**Negativas específicas:** todos os termos-núcleo das outras campanhas, em frase — `"ansiedade"`, `"autoestima"`, `"autoconfiança"`, `"insegurança"`, `"crise existencial"`, `"vazio existencial"`, `"falta de propósito"`, `"sentido da vida"`, `"logoterapia"`, `"fibromialgia"`, `"lúpus"`, `"câncer"`, `"dor crônica"`, `"doença crônica"`.

**RSA — 15 headlines**
```
Psicóloga Online e Presencial
Psicóloga Clínica em Goiânia
Atendimento Psicológico
Psicóloga Larissa Nunes
CRP 09/16269
Online para Todo o Brasil
Presencial em Goiânia-GO
Sessões de 50 Minutos
Abordagem em Logoterapia
Primeira Conversa sem Pressa
Fale Direto pelo WhatsApp
Atendimento para Adultos
Sessões Individuais Online
Agenda de Segunda a Sábado
Psicoterapia para Adultos
```

**RSA — 4 descrições**
```
Psicóloga clínica, CRP 09/16269. Atendimento online e presencial em Goiânia-GO.
Sessões individuais de 50 minutos, por videochamada, em ambiente sigiloso.
Primeira conversa para entender sua história e ver se faz sentido seguirmos.
Abordagem em Logoterapia. Fale comigo pelo WhatsApp e tire suas dúvidas.
```

**URL final:** `https://www.larissanunespsi.com.br/sobre` — trocar para `/` somente depois que a home for ajustada (ver aviso acima)
**Caminho de exibição:** `/psicologa/goiania`

---

## 3. CAMPANHA 1 — Ansiedade → `/psicologa-online-para-ansiedade`

### AG 1.1 — Ansiedade + online

**Frase**
```
"psicóloga online para ansiedade"
"psicólogo online para ansiedade"
"terapia online para ansiedade"
"psicóloga para ansiedade"
"psicólogo para ansiedade"
"tratamento para ansiedade com psicólogo"
"terapia para ansiedade online"
```
**Exata**
```
[psicóloga online para ansiedade]
[terapia online para ansiedade]
[psicóloga para ansiedade]
[psicólogo online para ansiedade]
```

### AG 1.2 — Especialista e comparativo

**Frase**
```
"psicólogo especialista em ansiedade"
"psicóloga especialista em ansiedade"
"psicólogo online especialista em ansiedade"
"qual a melhor terapia para ansiedade"
"psicólogo ou psiquiatra para ansiedade"
```
> ⚠️ `psiquiatra` é negativa geral da conta. Nesta keyword específica ele é intencional — a pessoa está escolhendo entre os dois, e é busca de alto valor. Adicione a keyword como **exata** e mantenha `psiquiatra` como negativa de **frase**, nunca ampla.
>
> 🔴 **Limite ético deste ad group.** Comprar a keyword `psicólogo especialista em ansiedade` é legítimo: keyword é segmentação, não é afirmação. **Mas a palavra "especialista" não pode aparecer em nenhum headline, descrição ou extensão** — o art. 20 "b" do Código de Ética permite referir apenas títulos que se possui, e o título de especialista é concedido pelo CFP em áreas específicas. Por isso os 15 headlines desta campanha usam "Psicóloga Clínica CRP 09" e nunca "especialista". A LP responde a essa busca com honestidade no FAQ, pergunta 6. Se alguém editar os anúncios no futuro, esta é a linha que não se cruza.

### AG 1.3 — Local Goiânia

**Frase**
```
"psicólogo ansiedade goiânia"
"psicóloga ansiedade goiânia"
"psicólogo para ansiedade em goiânia"
```
**Exata**
```
[psicólogo ansiedade goiânia]
[psicóloga para ansiedade goiânia]
```

### AG 1.4 — Subtipos nomeados

**Frase**
```
"psicólogo para ansiedade generalizada"
"terapia para ansiedade generalizada"
"psicólogo para ansiedade social"
"terapia para ansiedade social"
"psicólogo para crise de ansiedade"
"terapia para mente acelerada"
```

### RSA da Campanha 1 — 15 headlines
```
Psicóloga Online Ansiedade
Terapia Online p/ Ansiedade
Psicóloga para Ansiedade
Atendimento Psicológico
Psicóloga Clínica CRP 09
Online para Todo o Brasil
Presencial em Goiânia-GO
Sessões de 50 Minutos
Ansiedade Generalizada
Ansiedade Social e Crises
Abordagem em Logoterapia
Primeira Conversa sem Pressa
Fale Direto pelo WhatsApp
Psicóloga Larissa Nunes
Atendimento para Adultos
```

### RSA da Campanha 1 — 4 descrições
```
Atendimento psicológico para quem convive com ansiedade. Online e em Goiânia-GO.
Psicóloga clínica, CRP 09/16269. Abordagem em Logoterapia. Fale pelo WhatsApp.
Sessões individuais de 50 minutos, por videochamada, em ambiente sigiloso.
Primeira conversa para entender sua história e ver se faz sentido seguirmos.
```

**URL final:** `https://www.larissanunespsi.com.br/psicologa-online-para-ansiedade`
**Caminho de exibição:** `/psicologa/ansiedade`

### Correspondência intenção → seção da LP

| Keyword | Seção que responde |
|---|---|
| psicóloga online para ansiedade | H1 e primeira dobra |
| ansiedade generalizada, ansiedade social | "Para quem é este atendimento", item 4 |
| terapia online funciona | FAQ, pergunta 2 |
| psicólogo especialista em ansiedade | FAQ, pergunta 6 (responde com precisão sobre o título) |
| sintomas físicos, exames normais | FAQ, pergunta 7 |
| psicólogo ansiedade goiânia | "Como funciona", card 5 |

---

## 4. CAMPANHA 2 — Autoestima → `/psicologa-online-para-autoestima`

### AG 2.1 — Autoestima + online
**Frase**
```
"psicóloga online para autoestima"
"psicólogo online autoestima"
"psicólogo para autoestima"
"psicóloga para autoestima"
"psicólogo autoestima online"
```
### AG 2.2 — Baixa autoestima
**Frase**
```
"terapia para baixa autoestima"
"terapia para melhorar autoestima"
"tratamento para baixa autoestima"
"psicólogo para baixa autoestima"
"terapia para autoestima em adultos"
```
### AG 2.3 — Autoconfiança e insegurança
**Frase**
```
"terapia para autoconfiança"
"terapia para insegurança"
"psicólogo para insegurança"
"síndrome do impostor terapia"
"terapia para síndrome do impostor"
```
### AG 2.4 — Local Goiânia (brecha confirmada)
**Frase**
```
"tratamento para baixa autoestima goiânia"
"psicóloga para autoestima goiânia"
```
> A Doctoralia não lista "autoestima" entre os filtros de Goiânia e a Psitto atende a cidade só online. Volume baixo, custo de captura próximo de zero.

### RSA da Campanha 2 — 15 headlines
```
Psicóloga Online Autoestima
Terapia p/ Baixa Autoestima
Terapia para Autoconfiança
Atendimento Psicológico
Psicóloga Clínica CRP 09
Online para Todo o Brasil
Presencial em Goiânia-GO
Sessões de 50 Minutos
Autocrítica e Insegurança
Medo de Decepcionar
Abordagem em Logoterapia
Primeira Conversa sem Pressa
Fale Direto pelo WhatsApp
Psicóloga Larissa Nunes
Atendimento para Adultos
```

### RSA da Campanha 2 — 4 descrições
```
Atendimento para quem convive com autocrítica constante e insegurança.
Psicóloga clínica, CRP 09/16269. Abordagem em Logoterapia. Fale pelo WhatsApp.
Sessões individuais de 50 minutos, por videochamada, em ambiente sigiloso.
Primeira conversa para entender sua história e ver se faz sentido seguirmos.
```

**URL final:** `https://www.larissanunespsi.com.br/psicologa-online-para-autoestima`
**Caminho de exibição:** `/psicologa/autoestima`

---

## 5. CAMPANHA 3 — Crise existencial → `/psicologa-online-para-crise-existencial`

> Orçamento mínimo. Este é território de SEO, não de volume de Search. É onde ela ganha no médio prazo.

### AG 3.1 — Crise existencial
**Frase**
```
"psicólogo para crise existencial"
"terapia para crise existencial"
"psicóloga para crise existencial"
"tratamento para crise existencial"
```
### AG 3.2 — Vazio e propósito
**Frase**
```
"psicólogo para vazio existencial"
"terapia para vazio existencial"
"terapia para falta de propósito"
"psicólogo falta de sentido na vida"
```
### AG 3.3 — Logoterapia clínica — **EXATA OBRIGATÓRIA**
```
[psicólogo online logoterapia]
[psicóloga logoterapeuta]
[logoterapeuta online]
[psicólogo especialista em logoterapia]
[logoterapia goiânia]
```
> 🔴 **Nunca use frase nem ampla neste ad group.** O autocomplete de "logoterapia" no Brasil é dominado por curso, formação, pós-graduação e conteúdo em espanhol. Sem exata, este grupo entrega psicólogo querendo se formar, a preço de CPC de saúde.

### AG 3.4 — Terapia existencial
**Frase**
```
"terapia existencial online"
"psicoterapia existencial online"
"psicólogo terapia existencial"
```

### RSA da Campanha 3 — 15 headlines
```
Psicóloga Crise Existencial
Terapia p/ Crise Existencial
Vazio e Falta de Sentido
Atendimento Psicológico
Psicóloga Clínica CRP 09
Online para Todo o Brasil
Presencial em Goiânia-GO
Sessões de 50 Minutos
Abordagem em Logoterapia
Terapia Existencial Online
Primeira Conversa sem Pressa
Fale Direto pelo WhatsApp
Psicóloga Larissa Nunes
Atendimento para Adultos
Psicóloga Logoterapeuta
```

### RSA da Campanha 3 — 4 descrições
```
Atendimento para quem atravessa uma crise de sentido ou sensação de vazio.
Psicóloga clínica, CRP 09/16269. Abordagem em Logoterapia. Fale pelo WhatsApp.
Sessões individuais de 50 minutos, por videochamada, em ambiente sigiloso.
Primeira conversa para entender sua história e ver se faz sentido seguirmos.
```

**URL final:** `https://www.larissanunespsi.com.br/psicologa-online-para-crise-existencial`
**Caminho de exibição:** `/psicologa/sentido`

---

## 6. CAMPANHA 4 — Doenças crônicas → `/psicologa-para-doencas-cronicas`

> **Pronta para uso, mas não recomendada no mês 1.** Justificativa em §7. Se for lançar, lance **por doença**, nunca pelo guarda-chuva.

### AG 4.1 — Oncologia
**Frase**
```
"psicólogo para pacientes oncológicos"
"psicólogo para familiares de pacientes oncológicos"
"psico-oncologia online"
"terapia para quem tem câncer"
"apoio psicológico câncer"
```
### AG 4.2 — Dor crônica e fibromialgia
**Frase**
```
"fibromialgia psicólogo"
"psicólogo para fibromialgia"
"psicólogo dor crônica"
"terapia para dor crônica"
```
### AG 4.3 — Autoimune
**Frase**
```
"psicólogo lúpus"
"psicólogo para doença autoimune"
"apoio psicológico doença autoimune"
```
### AG 4.4 — Metabólica e renal
**Frase**
```
"psicólogo diabetes tipo 1"
"psicólogo doença renal crônica"
"apoio psicológico hemodiálise"
```

### RSA da Campanha 4 — 15 headlines
```
Apoio Psicológico Crônicos
Psicóloga Doenças Crônicas
Apoio a Quem Convive e Cuida
Atendimento Psicológico
Psicóloga Clínica CRP 09
Online para Todo o Brasil
Presencial em Goiânia-GO
Sessões de 50 Minutos
Complementar ao Tratamento
Apoio para Cuidadores
Abordagem em Logoterapia
Primeira Conversa sem Pressa
Fale Direto pelo WhatsApp
Psicóloga Larissa Nunes
Apoio no Adoecimento
```

### RSA da Campanha 4 — 4 descrições
```
Apoio psicológico para quem convive com uma condição crônica e para quem cuida.
Complementar ao tratamento médico, nunca substituto. Psicóloga CRP 09/16269.
Sessões individuais de 50 minutos, por videochamada, em ambiente sigiloso.
Primeira conversa para entender sua história e ver se faz sentido seguirmos.
```

**URL final:** `https://www.larissanunespsi.com.br/psicologa-para-doencas-cronicas`
**Caminho de exibição:** `/apoio/psicologico`

---

## 7. Por que a Campanha 4 fica por último

Três razões, todas verificadas:

1. **O guarda-chuva não é buscado.** Treze formulações de "doença crônica + psicólogo" retornaram **zero sugestões** no autocomplete PT-BR. A demanda existe, mas nomeada pela doença específica.
2. **Há concorrente a R$ 0 com marca forte.** A ABRALE oferece atendimento psicológico gratuito a pacientes oncológicos. Disputar "psicólogo para câncer" genérico é disputar contra grátis mais autoridade institucional.
3. **É a página de maior exposição a política de saúde.** Não é motivo para não anunciar — não há certificação exigida — mas é motivo para não estrear a conta por ela.

**Recomendação:** publicar a página, indexar, alimentar com os 4 artigos da pauta em `03-links-internos.md` §4 e medir o orgânico por 60–90 dias. Só então decidir sobre mídia, com ad groups por doença.

---

## 8. Negativas compartilhadas da conta

Criar em **Ferramentas → Listas de exclusão de palavras-chave** e aplicar a **todas** as campanhas.

**Gratuidade e preço**
```
grátis, gratuito, gratuita, de graça, free, sem custo, barato, mais barato,
preço popular, valor social, preço social, social, acessível, promoção, cupom,
desconto, 30 reais, 40 reais, 50 reais, low cost
```

**Rede pública e convênio**
```
sus, caps, ubs, posto de saúde, cras, cvv, 188, prefeitura, unimed, ipasgo,
amil, bradesco saúde, sulamérica, hapvida, notredame, cassi, geap,
plano de saúde, convênio, conveniado, reembolso, carteirinha, ans
```
> `ipasgo` é o plano do funcionalismo de Goiás. Negativa obrigatória neste mercado.

**Formação e acadêmico**
```
curso, cursos, formação, capacitação, pós-graduação, especialização, mestrado,
doutorado, mba, faculdade, graduação, ead, diplomado, maestría, especialidad,
apostila, pdf, slides, ebook, resumo, artigo científico, monografia, abnt,
scielo, concurso, edital, prova, gabarito, simulado
```
> 🔴 **Nunca adicione `TCC` sozinho.** Em psicologia, TCC é Terapia Cognitivo-Comportamental e é busca clínica legítima. Use só as frases longas: `"tcc pronto"`, `"tcc pdf"`, `"como fazer tcc"`, `"tema de tcc"`.

**Emprego**
```
vaga, vagas, emprego, contrata, currículo, clt, salário, quanto ganha,
piso salarial, como se tornar, como ser psicólogo, supervisão clínica,
marketing para psicólogos, consultoria para psicólogos
```

**Médico e medicação**
```
psiquiatra, psiquiatria, remédio, remédios, medicamento, medicação, receita,
fluoxetina, sertralina, escitalopram, rivotril, clonazepam, bula, dosagem,
cid, cid-10, atestado, laudo, perícia, inss, afastamento, benefício,
aposentadoria, neurologista, ressonância
```

**Emergência — negativa por segurança, não por custo**
```
suicídio, suicida, me matar, quero morrer, tirar a vida, automutilação,
emergência, urgente, urgência, 24h, 24 horas, plantão, socorro,
pronto socorro, samu, 192
```
> 🔴 **Prioridade máxima.** Ela atende por agenda, não por plantão. Anunciar nesses termos coloca pessoa em risco numa jornada que não a atende.

**Público fora de escopo**
```
infantil, criança, crianças, adolescente, adolescentes, bebê, autismo infantil,
casal, terapia de casal, conjugal, familiar, terapia familiar, sexual, sexóloga,
empresa, empresarial, corporativo, rh, organizacional, jurídica, forense,
escolar, grupo, terapia em grupo
```

**Outras modalidades — poluição pesada em Goiânia**
```
terapia ocupacional, terapia capilar, terapia neural, terapia aba, terapia trg,
terapia holística, terapia floral, florais, terapia quântica, constelação familiar,
reiki, hipnose, hipnoterapia, acupuntura, ayahuasca, coaching, coach, mentoria,
tarot, mapa astral, astrologia, numerologia, búzios, espiritismo, apometria,
psicopedagogia, fonoaudiologia, nutricionista, personal
```

**Intenção linguística, cultural e religiosa**
```
significado, sinônimo, o que significa, tradução, em inglês, em espanhol,
meaning, letra, letra da música, música, cifra, frases, mensagens, poema,
texto, status, indireta, meme, memes, tumblr, reddit, quora, wikipédia,
filme, filmes, série, livro, resenha, citações, bíblia, bíblico, versículo,
deus, evangélico, gospel, católico, espírita, espiritismo, joanna de ângelis,
chico xavier, budismo, filosofia, sartre, camus, nietzsche
```

**Testes e autodiagnóstico**
```
teste, testes, teste online, quiz, questionário, escala, inventário,
autoteste, faça o teste, descubra se, beck, hamilton
```

**Geografia fora de escopo**
```
portugal, lisboa, porto, espanha, madrid, barcelona, sevilla, valencia,
chile, argentina, méxico, colômbia, paraguay, angola, moçambique,
estados unidos, exterior, crónica, crónico, ordem dos psicólogos, telemóvel
```

### Negativas específicas por campanha

| Campanha | Adicionar |
|---|---|
| C1 Ansiedade | `mandíbula, maxilar, bruxismo, pescoço, ombros, língua, cervical, fisioterapia, massagem, alongamento, postura, gravidez, gestante, cachorro, cão, pet, gato, chá, floral, canabidiol` |
| C2 Autoestima | `mimimi, day, dose, sergio ricardo, letra, gospel, deus, meu filho, namorado, marido, casamento, namoro, relacionamento, estética, cirurgia, plástica, harmonização, dieta, emagrecer, academia, cabelo, maquiagem` |
| C3 Crise existencial | `curso, formação, pós, diplomado, maestría, livro, pdf, frankl livro, em busca de sentido pdf, joanna de ângelis, susan wolf, 42, douglas adams, adolescência, vocacional, orientação vocacional, qual profissão, amado batista` |
| C4 Doenças crônicas | `curso, master, psico oncologia curso, sintomas, tratamento médico, tem cura, quimioterapia, protocolo, exame, abrale, oncoguia, inca, hospital, ambulatório, ong, veterinário, pet` |

> 🔴 **Regra da condição médica vence.** Adicione `fibromialgia`, `lúpus`, `câncer`, `autoimune`, `diabetes`, `dor crônica`, `hemodiálise` como negativas de **frase na Campanha 1**. Sem isso, a campanha de ansiedade rouba `ansiedade e fibromialgia`, que é o único cluster com demanda real da Campanha 4.

---

## 9. Extensões

### Sitelinks (aplicar em todas as campanhas)

| Texto (≤25) | Descrição 1 (≤35) | Descrição 2 (≤35) | URL |
|---|---|---|---|
| Como funciona | Sessões online de 50 minutos | Primeira conversa sem pressa | `/sobre` |
| Sobre a psicóloga | Formação e abordagem clínica | CRP 09/16269 | `/sobre` |
| Contato e endereço | WhatsApp, e-mail e horários | Consultório em Goiânia-GO | `/contato` |
| Artigos sobre ansiedade | Conteúdo escrito pela psicóloga | Sintomas, sono e mente acelerada | `/blog` |
| Atendimento online | Videochamada para todo o Brasil | Ambiente sigiloso | `/psicologa-online-para-ansiedade` |
| Perguntas frequentes | Dúvidas de quem nunca fez terapia | Como começa o acompanhamento | `/psicologa-online-para-ansiedade` |

### Callouts (≤25 caracteres cada)
```
CRP 09/16269
Atendimento online
Presencial em Goiânia
Sessões de 50 minutos
Abordagem em Logoterapia
Atendimento para adultos
Contato pelo WhatsApp
Segunda a sábado
```

### Snippets estruturados
- **Cabeçalho: Serviços** → `Psicoterapia individual`, `Atendimento online`, `Atendimento presencial`, `Orientação vocacional`
- **Cabeçalho: Tipos** → `Ansiedade`, `Autoestima`, `Crise existencial`, `Apoio no adoecimento`

### Extensão de chamada
`(62) 99629-0052` · agendamento de chamada apenas no horário comercial (Seg–Sex 8h–18h, Sáb 8h–12h)

### Extensão de localização
Vincular o **Perfil da Empresa no Google** (Av. C-255, nº 271, Setor Nova Suíça, Goiânia-GO). Ativar só nas campanhas com reforço em Goiânia.

---

## 10. Conversões

| Ação | Tipo | Contagem | Janela |
|---|---|---|---|
| `Contato por WhatsApp` (tag direta) | **Primária** | Uma | 30 dias |
| `whatsapp_click` (importado do GA4) | Secundária | Uma | 30 dias |
| `lp_view` | Secundária, só observação | — | — |

Configuração completa em `02-tracking.md`.

**Não marque duas ações que medem o mesmo clique como primárias.** Isso dobra a contagem e corrompe o Smart Bidding.

---

## 11. Checklist de lançamento

- [ ] Verificação de anunciante iniciada — o prazo é de **30 dias** a partir da notificação e **não pode ser estendido**; a conta é pausada se vencer
- [ ] Documentos coerentes entre si: CNPJ ou MEI, RG ou CNH, e o perfil de pagamentos com os mesmos dados
- [ ] `VITE_GOOGLE_ADS_ID` e `VITE_GOOGLE_ADS_CONVERSION_LABEL` na Vercel, em Production **e** Preview
- [ ] **Redeploy feito** depois de salvar as variáveis
- [ ] Ação de conversão criada, marcada como primária, contagem "Uma", janela de 30 dias
- [ ] Conta do Google Ads vinculada ao GA4
- [ ] Teste com `?gclid=teste`: console sem violação de CSP, requisição para `googleads` no Network
- [ ] Status da conversão em "Gravando conversões" **antes** de ativar qualquer campanha
- [ ] Rede de Display e parceiros de pesquisa **desmarcados**
- [ ] Local em "Presença: pessoas na sua localização"
- [ ] Nenhum público-alvo selecionado pelo anunciante (sem remarketing, Customer Match, semelhantes ou expansão)
- [ ] Listas de negativas aplicadas em todas as campanhas
- [ ] Negativas de emergência (`suicídio`, `24 horas`, `plantão`) confirmadas — item de segurança, não de custo
- [ ] Correspondência apenas frase e exata
- [ ] Orçamento diário definido por campanha e alerta de gasto configurado
- [ ] Cada anúncio aponta para a LP do seu tema — nenhuma campanha temática apontando para a home

---

## 12. Checklist da primeira semana

- [ ] **Dia 1 e 2:** conferir se os anúncios foram aprovados. Reprovação por política aparece em até 1 dia útil
- [ ] **Diário nos primeiros 7 dias:** relatório de **termos de pesquisa**. É o único lugar que mostra o que está entrando de verdade
- [ ] Adicionar como negativa todo termo irrelevante que aparecer — em especial curso, formação, grátis, convênio e as outras modalidades de terapia
- [ ] Conferir se `whatsapp_click` está aparecendo no GA4 em tempo real
- [ ] Comparar cliques no botão × conversas realmente recebidas no WhatsApp. Se a distância for grande, o problema é a página, não a campanha
- [ ] Verificar o Índice de Qualidade por keyword. Abaixo de 5, revisar a correspondência entre anúncio e página
- [ ] Verificar parcela de impressões perdida por orçamento e por classificação
- [ ] Pausar keyword com mais de 50 cliques e nenhuma conversão
- [ ] Não mexer no lance nos primeiros 7 dias — dados insuficientes geram decisão ruim
- [ ] Ao chegar em ~30 conversões em 30 dias, migrar para Maximizar conversões

---

## 13. Riscos e planos B

### Se o anúncio for reprovado por política de saúde

1. Ler o motivo exato no painel. As causas prováveis, em ordem: linguagem que presume a condição do leitor; vocabulário de dependência química; alegação de resultado.
2. Conferir a copy do anúncio contra `00-estrategia-google-ads.md` §4. **A landing page já foi auditada e está limpa** — o problema quase certamente está no texto do anúncio.
3. Corrigir e reenviar. Revisão costuma sair em 1 dia útil.
4. Se persistir, abrir recurso. Prazo típico de 5 a 7 dias úteis.
5. **Não crie conta nova para contornar reprovação.** É motivo de suspensão.

### Se o status vier como "Aprovado (limitado)"

Provavelmente é a classificação na categoria sensível "Saúde". **É esperado e não impede a veiculação em Pesquisa.** Confirme que nenhum público selecionado pelo anunciante está aplicado e siga.

### Se o CPC vier muito acima do previsto

1. Restringir para correspondência **exata** nos termos mais caros.
2. Aumentar o peso das keywords locais de Goiânia, que têm concorrência muito menor.
3. Reforçar os ad groups de cauda longa (subtipos de ansiedade, síndrome do impostor, crise existencial).
4. Revisar o Índice de Qualidade: CPC alto costuma ser sintoma de relevância baixa, não de leilão caro.
5. Reduzir horário de veiculação para as faixas com melhor taxa de conversão.

### Se a LP de doenças crônicas não tiver volume

Já é o cenário previsto. Não aumente lance para forçar volume onde não há busca. Mude de canal: conteúdo orgânico por doença, começando por `ansiedade e fibromialgia`, que é a única keyword do território com sinal forte.

### Se a conversão não registrar

Verifique nesta ordem: variável preenchida na Vercel → **redeploy feito** → rótulo de conversão correto → CSP sem bloqueio no console → conta vinculada ao GA4. Na prática, o erro mais comum é salvar a variável e esquecer o redeploy.
