import { expect, test } from '@playwright/test';
import {
  LANDING_PAGES,
  LEGACY_ROUTES,
  SITE_URL,
  SUPPORT_ROUTES,
  visibleText,
  watch,
} from './fixtures';

const ALL_ROUTES = [
  ...LANDING_PAGES.map((content) => `/${content.slug}`),
  ...SUPPORT_ROUTES,
  ...LEGACY_ROUTES,
];

test.describe('renderização e hidratação', () => {
  for (const route of ALL_ROUTES) {
    test(`${route} hidrata sem erro e mantém o conteúdo`, async ({ page }) => {
      const seen = watch(page);

      await page.goto(route, { waitUntil: 'networkidle' });

      // O sintoma do bug que originou esta suíte: o React Router troca a página
      // inteira pelo seu error boundary quando a hidratação falha.
      await expect(page.locator('body')).not.toContainText('Unexpected Application Error');

      // Hidratação quebrada aparece como console error (React #418/#423) ou
      // exceção. Violação de CSP também cai aqui.
      expect(seen.errors, `console de ${route}`).toEqual([]);
      expect(seen.failedRequests, `requisições de ${route}`).toEqual([]);

      // Regressão específica: com `script: 'async'` o bundle podia rodar antes do
      // inline que define __VITE_REACT_SSG_HASH__, e o cliente pedia o manifest
      // com "undefined" no nome, recebia HTML e estourava no JSON.parse.
      const undefinedManifest = seen.requested.filter((url) => url.includes('manifest-undefined'));
      expect(undefinedManifest, `manifest com hash undefined em ${route}`).toEqual([]);

      // Conteúdo real depois de hidratar, não só a casca.
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).not.toBeEmpty();
    });
  }

  test('navegação interna não quebra a aplicação', async ({ page }) => {
    const seen = watch(page);

    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Contato', exact: true }).first().click();

    await expect(page).toHaveURL(/\/contato$/);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('body')).not.toContainText('Unexpected Application Error');
    expect(seen.errors, 'console após navegação SPA').toEqual([]);
  });
});

test.describe('conteúdo pré-renderizado (SSG)', () => {
  // Só no projeto desktop: é propriedade do HTML/servidor, não do viewport.
  test.skip(({ isMobile }) => Boolean(isMobile), 'roda uma vez só, no projeto desktop');

  for (const content of LANDING_PAGES) {
    test(`/${content.slug} entrega o conteúdo já no HTML estático`, async ({ request }) => {
      const response = await request.get(`/${content.slug}`);
      expect(response.status()).toBe(200);

      const html = await response.text();

      // Sem isto, quem indexa sem executar JS não vê a página.
      //
      // O H1 é comparado sem marcação porque o trecho de ênfase vive num
      // <span> próprio (a parte em serifada itálica), então a frase não existe
      // contígua no HTML. O que precisa ser garantido é o texto completo, não
      // a forma como ele está dividido em elementos.
      const h1Html = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '';
      const h1Text = h1Html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      expect(h1Text).toBe(content.hero.h1);
      expect(html).toContain(`<title data-rh="true">${content.seo.title}</title>`);
      expect(html).toContain(`href="${SITE_URL}/${content.slug}"`);

      // O JSON-LD precisa estar no HTML servido, não injetado depois.
      const blocks = html.match(/application\/ld\+json/g) ?? [];
      expect(blocks.length).toBeGreaterThanOrEqual(3);
    });
  }

  // Fecha o buraco que a validação desta suíte revelou: as asserções de SEO
  // leem o DOM depois da hidratação, e aí o React já corrigiu a rota. Se o
  // servidor entregar o HTML errado (o index.html da home para toda URL, que é
  // o que `vite preview` faz), aquelas passam e o crawler que não executa JS
  // recebe a home. Esta olha só o que veio pela rede.
  test('cada rota entrega o próprio head já no HTML servido', async ({ request }) => {
    const routes = [
      ...LANDING_PAGES.map((content) => `/${content.slug}`),
      ...SUPPORT_ROUTES,
      '/agendamento',
    ];

    const titles = new Map<string, string>();

    for (const route of routes) {
      const html = await (await request.get(route)).text();

      const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
      expect(canonical, `canonical servido em ${route}`).toBe(`${SITE_URL}${route}`);

      const title = html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1];
      expect(title, `title servido em ${route}`).toBeTruthy();
      titles.set(route, title!);
    }

    // Nenhuma rota pode entregar o mesmo título de outra.
    expect(new Set(titles.values()).size, `títulos repetidos: ${[...titles].join(' | ')}`).toBe(
      routes.length,
    );
  });
});

test.describe('conteúdo substancial', () => {
  for (const content of LANDING_PAGES) {
    test(`/${content.slug} tem volume de texto de landing page`, async ({ page }) => {
      await page.goto(`/${content.slug}`, { waitUntil: 'networkidle' });

      const words = (await visibleText(page)).trim().split(/\s+/).length;
      // Piso definido no blueprint: página fina reprova na política de destino.
      expect(words, `palavras em /${content.slug}`).toBeGreaterThanOrEqual(700);
    });
  }
});
