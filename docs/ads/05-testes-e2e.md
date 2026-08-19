# Testes E2E das landing pages

## Como rodar

```bash
npm run build       # a suíte testa o build, não o dev server
npm run test:e2e    # 98 testes, ~20s
npm run test:e2e:ui # modo interativo do Playwright
```

O Playwright sobe sozinho o servidor definido em `webServer` ([playwright.config.ts](../../playwright.config.ts)). Não é preciso deixar nada rodando antes.

## A armadilha do `vite preview` — leia antes de depurar qualquer coisa

**`vite preview` não serve este site como a Vercel serve.** Ele devolve o `dist/index.html` (a home) para toda URL limpa, em vez de `dist/<slug>/index.html`.

O efeito é traiçoeiro: o HTML da home hidrata dentro da rota errada, o React reclama de mismatch, o console enche de `Minified React error #418` e, em alguns casos, a página inteira vira o error boundary do React Router com a mensagem:

```
Unexpected Application Error!
Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

Nada disso é bug do site. É o servidor entregando o arquivo errado.

Isso já custou caro duas vezes: a sessão que implementou as páginas registrou esse erro nos próprios logs e o reportou como console limpo; a sessão seguinte reproduziu o mesmo erro e chegou a diagnosticá-lo como bug de produção. Em ambos os casos havia um `vite preview` órfão preso na porta — e, no Windows, `localhost` resolve para IPv6 primeiro, então um processo antigo respondia no lugar do servidor novo sem que ninguém percebesse.

**Regra:** para verificar o build, use [scripts/serve-dist.mjs](../../scripts/serve-dist.mjs), que replica a ordem de resolução do [vercel.json](../../vercel.json) (arquivo exato → `<rota>/index.html` → fallback para a home). E use `127.0.0.1`, nunca `localhost`.

```bash
npm run serve:dist -- 4321 dist
curl -s http://127.0.0.1:4321/contato | grep -o '<title[^>]*>[^<]*</title>'
# tem que sair o título de /contato, não o da home
```

Se aparecer o título da home, o servidor está errado — não o site.

## O que a suíte cobre

| Arquivo | Cobertura |
|---|---|
| [e2e/rendering.spec.ts](../../e2e/rendering.spec.ts) | hidratação sem erro de console em 10 rotas, ausência do error boundary, 1 `h1` por página, navegação SPA, conteúdo presente no HTML servido, ≥700 palavras por LP |
| [e2e/seo.spec.ts](../../e2e/seo.spec.ts) | title/description/canonical/robots por rota, sem canibalização entre as 4 LPs, JSON-LD parseável com `FAQPage` e `BreadcrumbList`, sitemap e robots |
| [e2e/conversao.spec.ts](../../e2e/conversao.spec.ts) | ≥3 CTAs de WhatsApp com número certo e texto pré-preenchido próprio da página, primeira dobra em 390×844, termos proibidos, CRP e link de privacidade |

A expectativa de conteúdo vem dos próprios módulos `src/content/landing/*.ts`. Assim o teste compara a página renderizada com a sua fonte de verdade e pega troca de conteúdo entre rotas — não só ausência de conteúdo.

Dois projetos: `desktop` (1440×900) e `mobile` (Pixel 5, 390×844). O que é propriedade do HTML — SEO, SSG, compliance — roda só no desktop, para não duplicar.

### Duas guardas de regressão específicas

1. **`manifest-undefined`** — o teste falha se a página pedir `static-loader-data-manifest-undefined.json`. Ver a nota em `ssgOptions` no [vite.config.ts](../../vite.config.ts).
2. **Head no HTML servido** — asserção sobre o que veio pela rede, sem browser. As demais asserções de SEO leem o DOM *depois* da hidratação, quando o React já corrigiu a rota; sozinhas, elas passariam mesmo com o servidor entregando a home para tudo. Essa passa a régua no que o crawler que não executa JS realmente recebe.

## A suíte foi validada contra um build sabotado

Uma suíte que passa de primeira não prova nada. Esta foi verificada copiando o `dist` e substituindo o `index.html` de todas as 23 rotas pelo da home — exatamente o modo de falha do `vite preview`:

```
13 testes falharam / 31 passaram
```

Falharam os 9 de hidratação e os 4 de SSG. Foi essa checagem que revelou que os testes de SEO passavam mesmo assim, o que motivou a guarda nº 2 acima. Depois de adicioná-la, ela também falha no build sabotado.

## Estado atual

```
npm run build     Build finished — 24 páginas
npx tsc --noEmit  0 erros
npx eslint .      13 erros, todos pré-existentes e em arquivos não tocados
                  (InstagramCardGenerator, Login, Register, analytics, auth, llm)
npm run test:e2e  68 passaram, 30 pulados, 0 falharam
```

## O que a suíte não cobre

- Performance e Core Web Vitals (sem Lighthouse no pipeline).
- O comportamento real da Vercel: `scripts/serve-dist.mjs` replica a resolução de rota do `vercel.json`, mas não os headers, nem a CSP, nem os redirects de domínio. **Vale um teste manual em preview depois do deploy.**
- Tracking: `trackLPView` e `trackAdsConversion` não disparam sem `VITE_GA_MEASUREMENT_ID` e `VITE_GOOGLE_ADS_ID` configurados, então não há como afirmar em teste local que a conversão chega ao Google Ads. Conferir pelo Tag Assistant depois do deploy, como descrito em [02-tracking.md](./02-tracking.md).
