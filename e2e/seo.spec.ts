import { expect, test } from '@playwright/test';
import { LANDING_PAGES, SITE_URL, SUPPORT_ROUTES } from './fixtures';

test.describe('SEO por rota', () => {
  // Só no projeto desktop: é propriedade do HTML/servidor, não do viewport.
  test.skip(({ isMobile }) => Boolean(isMobile), 'roda uma vez só, no projeto desktop');

  for (const content of LANDING_PAGES) {
    test(`/${content.slug} tem head próprio e coerente`, async ({ page }) => {
      await page.goto(`/${content.slug}`, { waitUntil: 'networkidle' });

      // O head tem que ser o DESTA rota. O modo de falha real observado foi a
      // página servir o head da home.
      await expect(page).toHaveTitle(content.seo.title);

      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', `${SITE_URL}/${content.slug}`);

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect(description).toBe(content.seo.description);
      expect(description!.length).toBeLessThanOrEqual(155);
      expect(content.seo.title.length).toBeLessThanOrEqual(60);

      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        'content',
        'index, follow',
      );

      // O H1 renderizado tem que ser o do módulo de conteúdo desta rota.
      await expect(page.locator('h1')).toHaveText(content.hero.h1);
    });
  }

  test('as 4 landing pages não canibalizam title nem canonical', async ({ page }) => {
    const titles = new Set<string>();
    const canonicals = new Set<string>();

    for (const content of LANDING_PAGES) {
      await page.goto(`/${content.slug}`, { waitUntil: 'domcontentloaded' });
      titles.add(await page.title());
      canonicals.add(
        (await page.locator('link[rel="canonical"]').getAttribute('href')) ?? '',
      );
    }

    expect(titles.size).toBe(LANDING_PAGES.length);
    expect(canonicals.size).toBe(LANDING_PAGES.length);
  });

  for (const content of LANDING_PAGES) {
    test(`/${content.slug} tem JSON-LD válido com FAQ e breadcrumb`, async ({ page }) => {
      await page.goto(`/${content.slug}`, { waitUntil: 'networkidle' });

      const raw = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(raw.length).toBeGreaterThanOrEqual(3);

      const types = raw.map((text) => {
        // Precisa fazer parse: JSON-LD quebrado é ignorado em silêncio pelo Google.
        const parsed = JSON.parse(text) as { '@type'?: string };
        return parsed['@type'];
      });

      expect(types).toContain('FAQPage');
      expect(types).toContain('BreadcrumbList');
    });
  }

  test('sitemap lista as rotas novas e o robots não as bloqueia', async ({ request }) => {
    const sitemap = await (await request.get('/sitemap.xml')).text();
    const robots = await (await request.get('/robots.txt')).text();

    const disallowed = robots
      .split('\n')
      .filter((line) => line.toLowerCase().startsWith('disallow:'))
      .map((line) => line.split(':')[1].trim())
      .filter(Boolean);

    for (const route of [...LANDING_PAGES.map((c) => `/${c.slug}`), ...SUPPORT_ROUTES]) {
      expect(sitemap, `${route} no sitemap`).toContain(`${SITE_URL}${route}`);
      for (const rule of disallowed) {
        expect(route.startsWith(rule), `${route} bloqueado por "Disallow: ${rule}"`).toBe(false);
      }
    }
  });
});
