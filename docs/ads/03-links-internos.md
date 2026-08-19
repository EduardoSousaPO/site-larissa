# Links internos — blog → landing page

> **Por que este documento existe em vez de código.** Os artigos do blog vivem no Supabase, não no repositório. Eu não edito banco de dados. O sentido LP → blog já está implementado (componente `ArtigosRelacionados`); o sentido blog → LP depende de uma edição manual no painel, e está descrito abaixo pronto para copiar e colar.

---

## 1. Como aplicar

1. Acessar `/admin/blog` e abrir o artigo.
2. Ir ao **fim do conteúdo**, depois da conclusão e antes de qualquer assinatura.
3. Colar o bloco de transição da tabela abaixo.
4. Salvar.
5. **Fazer um novo deploy.** O site é SSG: o conteúdo do blog é um retrato do momento do build. Sem redeploy, a mudança fica no banco e não aparece no HTML publicado.

O bloco tem sempre a mesma forma: uma frase de transição leve, sem pressão, e um link com texto descritivo. Nada de "clique aqui".

---

## 2. Mapa artigo → landing page

### Território ansiedade → `/psicologa-online-para-ansiedade`

| Artigo | Slug |
|---|---|
| Mente Acelerada: Entendendo a Ansiedade e como Controlá-la | `mente-acelerada-ansiedade` |
| Sintomas físicos da ansiedade: como identificar e tratar | `sintomas-fisicos-ansiedade` |
| Por que não consigo relaxar? Entenda a ansiedade constante | `nao-consigo-relaxar` |
| Medo de Enlouquecer: Um Sintoma Comum da Ansiedade | `medo-de-enlouquecer` |

**Bloco para `mente-acelerada-ansiedade`:**

> Se a mente acelerada é o que mais pesa no seu dia, a psicoterapia é um espaço para entender o que mantém esse estado de alerta ligado.
>
> [Conheça o atendimento psicológico para ansiedade](/psicologa-online-para-ansiedade)

**Bloco para `sintomas-fisicos-ansiedade`:**

> Exame normal e sintoma real não são contraditórios. Se o corpo tem falado por você, existe um caminho para compreender o que está por trás disso.
>
> [Conheça o atendimento psicológico para ansiedade](/psicologa-online-para-ansiedade)

**Bloco para `nao-consigo-relaxar`:**

> Se o descanso não chega nem quando a agenda permite, vale olhar para o que mantém o alarme ligado.
>
> [Conheça o atendimento psicológico para ansiedade](/psicologa-online-para-ansiedade)

**Bloco para `medo-de-enlouquecer`:**

> Esse medo é mais comum do que parece e tem explicação. A psicoterapia ajuda a entender de onde ele vem e o que ele está tentando comunicar.
>
> [Conheça o atendimento psicológico para ansiedade](/psicologa-online-para-ansiedade)

---

### Território sentido → `/psicologa-online-para-crise-existencial`

| Artigo | Slug |
|---|---|
| Vazio existencial: por que sinto isso? | `vazio-existencial` |

**Bloco para `vazio-existencial`:**

> Se essa sensação de vazio já dura meses, ela merece um lugar para ser examinada com calma, e não só administrada.
>
> [Conheça o atendimento para crise existencial e falta de sentido](/psicologa-online-para-crise-existencial)

---

### Território autoestima e sobrecarga → `/psicologa-online-para-autoestima`

| Artigo | Slug |
|---|---|
| Como Parar de Reagir no Automático | `como-parar-de-reagir-no-automatico` |
| Cansado Demais: O Cansaço Emocional e Como Superá-lo | `cansaco-emocional` |
| Superando a Sobrecarga: O Método S.E.R. | `metodo-ser-mulheres-sobrecarregadas` |

**Bloco para `como-parar-de-reagir-no-automatico`:**

> Reagir no automático costuma ter raiz na forma como a gente se cobra. Esse é um dos pontos centrais do trabalho em psicoterapia.
>
> [Conheça o atendimento para autoestima e autoconfiança](/psicologa-online-para-autoestima)

**Bloco para `cansaco-emocional`:**

> Quando o cansaço não passa com descanso, em geral a conta é de exigência, não de agenda.
>
> [Conheça o atendimento para autoestima e autoconfiança](/psicologa-online-para-autoestima)

**Bloco para `metodo-ser-mulheres-sobrecarregadas`:**

> Se você se reconheceu na sobrecarga descrita aqui, o acompanhamento continuado é onde esse trabalho acontece de verdade.
>
> [Conheça o atendimento para autoestima e autoconfiança](/psicologa-online-para-autoestima)

---

### Território doenças crônicas → `/psicologa-para-doencas-cronicas`

**Nenhum artigo publicado aponta para esta LP.** Ela nasce sem rede de links internos. Ver §4.

---

## 3. Links já implementados (LP → blog)

Estes já estão no código, no componente `ArtigosRelacionados`, e não exigem nenhuma ação.

| LP | Artigos linkados |
|---|---|
| `/psicologa-online-para-ansiedade` | `mente-acelerada-ansiedade`, `sintomas-fisicos-ansiedade`, `nao-consigo-relaxar` |
| `/psicologa-online-para-autoestima` | `como-parar-de-reagir-no-automatico`, `cansaco-emocional`, `metodo-ser-mulheres-sobrecarregadas` |
| `/psicologa-online-para-crise-existencial` | `vazio-existencial`, `metodo-ser-mulheres-sobrecarregadas`, `como-parar-de-reagir-no-automatico` |
| `/psicologa-para-doencas-cronicas` | `cansaco-emocional`, `mente-acelerada-ansiedade`, `vazio-existencial` |

A LP de doenças crônicas linka para artigos de temas vizinhos porque não há artigo próprio. Funciona, mas é remendo.

---

## 4. Lacuna de conteúdo, dita sem rodeio

Dos quatro territórios, **dois têm zero artigo próprio**: autoestima e doenças crônicas. Isso não impede o Google Ads de rodar — o Índice de Qualidade avalia a relação anúncio ↔ keyword ↔ página de destino, não autoridade de domínio. Mas limita o tráfego orgânico, que é o que faz o custo por lead cair com o tempo.

**Pauta recomendada, em ordem de prioridade.** As keywords abaixo foram verificadas na API de autocomplete do Google, em PT-BR.

### Autoestima (4 artigos)

| Keyword-alvo | Título sugerido | Aponta para |
|---|---|---|
| `como aumentar a autoestima de uma mulher` | Como aumentar a autoestima: o que funciona e o que só parece funcionar | `/psicologa-online-para-autoestima` |
| `o que causa baixa autoestima` | O que causa baixa autoestima: de onde vem a régua que a gente usa contra si | `/psicologa-online-para-autoestima` |
| `síndrome do impostor` | Síndrome do impostor: por que o reconhecimento não convence | `/psicologa-online-para-autoestima` |
| `não consigo aceitar elogio` | Por que a crítica cola e o elogio escorre | `/psicologa-online-para-autoestima` |

### Doenças crônicas (4 artigos)

| Keyword-alvo | Título sugerido | Aponta para |
|---|---|---|
| `ansiedade e fibromialgia` | Ansiedade e fibromialgia: o que uma coisa tem a ver com a outra | `/psicologa-para-doencas-cronicas` |
| `aceitação da doença crônica` | Aceitação da doença crônica não é conformismo | `/psicologa-para-doencas-cronicas` |
| `como lidar com o diagnóstico de câncer` | Como lidar com o diagnóstico: os primeiros dias depois da notícia | `/psicologa-para-doencas-cronicas` |
| `psicólogo para familiares de pacientes oncológicos` | Quem cuida também adoece: o cansaço de quem acompanha um tratamento | `/psicologa-para-doencas-cronicas` |

> `ansiedade e fibromialgia` é a keyword com sinal mais forte de todo o território 4 (8 sugestões de autocomplete). É por onde eu começaria.

### Crise existencial (2 artigos, para reforçar)

| Keyword-alvo | Título sugerido |
|---|---|
| `crise existencial dos 30 anos` | Crise existencial dos 30 anos: quando a vida planejada perde a graça |
| `quanto tempo dura uma crise existencial` | Quanto tempo dura uma crise existencial? |

**Ao publicar qualquer um deles, aplicar o bloco de transição do §1 apontando para a LP correspondente.**

---

## 5. Lembrete operacional

Toda alteração de artigo — inclusive só adicionar o bloco de CTA — **só aparece no site depois de um novo deploy**. O build lê o Supabase uma vez e congela o resultado no HTML. Se a Dra. Larissa editar dez artigos e não redeployar, o site continua exibindo a versão antiga.
