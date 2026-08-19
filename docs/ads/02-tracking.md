# Tracking de conversão — Google Ads

> O que já está implementado no site, e o que a Dra. Larissa precisa fazer no painel do Google Ads para fechar o circuito.

---

## 1. O que já está no código

| Peça | Arquivo | Comportamento |
|---|---|---|
| Variáveis de ambiente | `src/config/site.ts` | `GOOGLE_ADS_ID` e `GOOGLE_ADS_CONVERSION_LABEL`, ambas com fallback vazio |
| Carregamento do gtag | `src/services/analytics.ts` → `ensureGtagLoaded()` | Injeta `gtag.js` **uma única vez**. GA4 e Google Ads compartilham o script; cada um é ativado pelo seu próprio `config` |
| Ativação do Ads | `src/services/analytics.ts` → `initGoogleAds()` | `gtag('config', 'AW-...')`. **No-op silencioso** se a variável estiver vazia |
| Disparo da conversão | `src/services/analytics.ts` → `trackAdsConversion()` | `gtag('event','conversion',{ send_to: 'AW-XXX/LABEL', currency: 'BRL' })` |
| Ponto único de saída | `src/lib/whatsapp.ts` → `createWhatsAppProps()` | Todo CTA de WhatsApp do site passa por aqui. `trackWhatsAppClick()` dispara **GA4 + Meta Pixel + Google Ads** de uma vez |
| Inicialização | `src/App.tsx` → `RouteAnalytics` | `initGA()`, `initGoogleAds()`, `initMetaPixel()` no mount |
| Captura de campanha | `src/lib/utm.ts` | `getUtmParams()` (5 UTMs, com guard de SSG) e `getClickId()` (gclid/gbraid/wbraid, persistido em `sessionStorage`) |
| Evento de LP | `src/components/lp/LandingPageView.tsx` | `trackLPView(slug, getUtmParams())` no mount de cada LP |
| CSP | `vercel.json` | Domínios do Ads liberados em `script-src`, `connect-src` e `frame-src` |

**Nada quebra se as variáveis não existirem.** Sem `VITE_GOOGLE_ADS_ID`, `initGoogleAds` e `trackAdsConversion` retornam sem fazer nada. O site continua funcionando, o build SSG continua passando e o GA4 e o Meta Pixel seguem normais.

### 1.1 Eventos disparados

| Evento | Quando | Destino |
|---|---|---|
| `whatsapp_click` | clique em qualquer CTA de WhatsApp | GA4 (`page`, `section`) |
| `Contact` | idem | Meta Pixel |
| `conversion` | idem | Google Ads (`send_to`) |
| `lp_view` | carregamento de uma LP | GA4, com os 5 parâmetros UTM |

O parâmetro `section` distingue de onde veio o clique: `hero`, `meio`, `final`, `sticky-mobile`, `float`, `navbar`, `footer`. Isso permite descobrir qual posição de CTA converte melhor.

---

## 2. Passo a passo no Google Ads

### 2.1 Criar a ação de conversão

1. Google Ads → **Metas** → **Conversões** → **Ações de conversão** → **Nova ação de conversão**
2. Escolher **Site**
3. Informar o domínio `larissanunespsi.com.br` e **Verificar**
4. Escolher **Adicionar manualmente uma ação de conversão**
5. Configurar:

| Campo | Valor recomendado | Por quê |
|---|---|---|
| Categoria da meta | **Contato** | É o que o clique representa |
| Nome da conversão | `Contato por WhatsApp` | — |
| Valor | **Não usar valor** | Não há receita conhecida no clique |
| Contagem | **Uma** | Uma pessoa que clica três vezes é um lead, não três |
| Janela de conversão por clique | **30 dias** | Decisão de terapia raramente é no mesmo dia |
| Janela de engajamento de visualização | 1 dia | — |
| Conversão primária | **Sim** | É o que o Smart Bidding deve otimizar |
| Modelo de atribuição | Baseado em dados (ou Último clique, se ainda não houver volume) | — |

6. Ao final, o Google mostra o **rótulo de conversão** (algo como `AbC-D_efG-h1234567`) e o **ID de conversão** (`AW-1234567890`).

### 2.2 Preencher as variáveis

Na Vercel → projeto → **Settings → Environment Variables**, criar nos ambientes **Production** e **Preview**:

```
VITE_GOOGLE_ADS_ID=AW-1234567890
VITE_GOOGLE_ADS_CONVERSION_LABEL=AbC-D_efG-h1234567
```

> ⚠️ **É obrigatório fazer um novo deploy depois.** Estas variáveis são lidas em tempo de build (prefixo `VITE_`), não em tempo de execução. Salvar a variável sem redeployar não muda nada no site.

### 2.3 Importar o evento do GA4 como conversão secundária

Além da tag direta, vale importar o evento do GA4 — dá uma segunda fonte de medição e sobrevive melhor a bloqueadores.

1. GA4 → **Admin** → **Eventos** → marcar `whatsapp_click` como **evento principal**
2. Google Ads → **Metas** → **Conversões** → **Nova ação** → **Importar** → **Google Analytics 4** → **Web**
3. Selecionar `whatsapp_click`
4. Marcar como **secundária** — para não contar a mesma conversão duas vezes no Smart Bidding

### 2.4 Vincular as contas

Google Ads → **Ferramentas** → **Contas vinculadas** → **Google Analytics (GA4)** → vincular. Sem isso, os dados de campanha não aparecem no GA4 e a importação acima não funciona.

---

## 3. Template de URL final e UTM

### 3.1 Modelo por campanha

Use este template no nível da **campanha** (Configurações → Configurações adicionais → Opções de URL da campanha → Modelo de acompanhamento):

```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}&utm_matchtype={matchtype}&gclid={gclid}
```

Os `{...}` são parâmetros ValueTrack que o Google substitui sozinho no clique.

### 3.2 URLs finais por ad group

| Campanha | URL final |
|---|---|
| C0 — Marca e genérico | `https://www.larissanunespsi.com.br/sobre` (ver condição em `04-campanhas-google-ads.md` §2) |
| C1 — Ansiedade | `https://www.larissanunespsi.com.br/psicologa-online-para-ansiedade` |
| C2 — Autoestima | `https://www.larissanunespsi.com.br/psicologa-online-para-autoestima` |
| C3 — Crise existencial | `https://www.larissanunespsi.com.br/psicologa-online-para-crise-existencial` |
| C4 — Doenças crônicas | `https://www.larissanunespsi.com.br/psicologa-para-doencas-cronicas` |

**Sem barra final** — o `vercel.json` tem `trailingSlash: false` e o canonical de cada página é sem barra. URL final com barra criaria divergência com o canonical.

**Mesmo domínio na URL de exibição e na URL final.** Domínio diferente é reprovação por *Destination mismatch*.

---

## 4. O buraco que nenhuma tag fecha

**O clique no WhatsApp não é o lead. É o começo dele.**

O que a tag mede é o clique no botão. O que importa para o negócio é: quantas dessas pessoas efetivamente mandaram mensagem, e quantas viraram primeira sessão. Se o Google Ads for alimentado só com cliques, o Smart Bidding vai otimizar para gerar cliques — inclusive os ociosos.

**Duas métricas que só a Dra. Larissa pode medir, e que valem mais que qualquer dashboard:**

1. **Cliques → mensagens recebidas.** Comparar o número de `whatsapp_click` do GA4 com o número de conversas novas no WhatsApp no mesmo período.
2. **Mensagens → primeira sessão agendada.** Anotar, para cada conversa nova, se virou sessão.

**Sugestão de baixa fricção:** o código já captura o `gclid` e o guarda na sessão. Um passo adiante — não implementado nesta entrega porque muda o texto que a pessoa envia — seria anexar o `gclid` à mensagem pré-preenchida do WhatsApp. Isso permitiria fazer **importação de conversão offline** no Google Ads e ensinar o algoritmo a buscar quem realmente agenda, não quem apenas clica. É a melhoria de maior retorno depois que a campanha tiver volume. Fica registrado como recomendação.

---

## 5. LGPD e consentimento — lacuna registrada

A política em `/privacidade` foi atualizada nesta entrega e agora cobre nominalmente **Google Analytics, Google Ads e Meta Pixel**, os cookies de mensuração de campanha e os identificadores de campanha na URL (UTM e `gclid`).

**O que NÃO existe: banner de consentimento de cookies.** O site carrega GA4, Meta Pixel e, a partir de agora, Google Ads, sem pedir consentimento prévio.

Isso é uma lacuna real diante da LGPD. **Não implementei banner porque isso não foi pedido** e porque um banner mal colocado interfere na experiência da página de destino — o Google reprova destino com overlay que atrapalha a leitura do conteúdo.

Se a Dra. Larissa quiser tratar disso, a recomendação é: banner discreto no rodapé (não modal, não cobrindo conteúdo), com opção real de recusar, integrado ao **Google Consent Mode v2**, que ajusta o comportamento das tags conforme a escolha. É uma tarefa própria, com escopo próprio.

---

## 6. Como testar antes de gastar dinheiro

1. Publicar com as variáveis preenchidas e fazer o deploy.
2. Abrir uma LP com `?gclid=teste123&utm_source=google&utm_medium=cpc`.
3. DevTools → **Console**: não pode haver nenhuma mensagem de `Refused to load ... violates Content Security Policy`.
4. DevTools → **Network**, filtrar por `googleads` e `google-analytics`: deve haver requisição ao carregar e outra ao clicar no botão de WhatsApp.
5. Google Ads → **Metas → Conversões**: o status da ação sai de "Nenhuma conversão recente" e passa a "Gravando conversões" em algumas horas.
6. Extensão **Google Tag Assistant**: confirma o disparo do evento `conversion` com o `send_to` correto.

**Só ative as campanhas depois do passo 5.** Campanha rodando sem conversão registrada é dinheiro gasto para treinar o algoritmo errado.
