import { expect, test } from '@playwright/test';
import {
  CONTACT_PHONE_DIGITS,
  CRP,
  FORBIDDEN_PATTERNS,
  LANDING_PAGES,
  SUPPORT_ROUTES,
  visibleText,
} from './fixtures';

test.describe('CTA de WhatsApp', () => {
  for (const content of LANDING_PAGES) {
    test(`/${content.slug} tem CTAs válidos e com mensagem própria`, async ({ page }) => {
      await page.goto(`/${content.slug}`, { waitUntil: 'networkidle' });

      const ctas = page.locator('a[href*="wa.me"]');
      // Blueprint: primeira dobra, meio e fechamento, mais o botão flutuante.
      await expect(ctas).not.toHaveCount(0);
      expect(await ctas.count()).toBeGreaterThanOrEqual(3);

      const hrefs = await ctas.evaluateAll((links) =>
        links.map((link) => (link as HTMLAnchorElement).href),
      );

      for (const href of hrefs) {
        expect(href, 'número do WhatsApp').toContain(`wa.me/${CONTACT_PHONE_DIGITS}`);
        const text = new URL(href).searchParams.get('text');
        expect(text, `texto pré-preenchido em ${href}`).toBeTruthy();
      }

      // Pelo menos um CTA carrega a mensagem desta página — é assim que a
      // Dra. Larissa sabe de qual anúncio veio o lead.
      const messages = hrefs.map((href) => new URL(href).searchParams.get('text'));
      expect(messages).toContain(content.whatsappMessage);
    });
  }
});

test.describe('primeira dobra no mobile', () => {
  test.skip(({ isMobile }) => !isMobile, 'só faz sentido no viewport de 390x844');

  for (const content of LANDING_PAGES) {
    test(`/${content.slug} mostra H1 e CTA sem rolagem`, async ({ page }) => {
      await page.goto(`/${content.slug}`, { waitUntil: 'networkidle' });

      const viewport = page.viewportSize()!;

      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      const h1Box = (await h1.boundingBox())!;
      expect(h1Box.y + h1Box.height, 'H1 acima da dobra').toBeLessThan(viewport.height);

      // O CTA do hero, não o botão flutuante — o flutuante está sempre visível
      // e tornaria a asserção vazia.
      const heroCta = page
        .locator('main a[href*="wa.me"]')
        .filter({ hasText: content.hero.ctaLabel })
        .first();
      await expect(heroCta).toBeVisible();
      const ctaBox = (await heroCta.boundingBox())!;
      expect(ctaBox.y + ctaBox.height, 'CTA do hero acima da dobra').toBeLessThan(
        viewport.height,
      );
    });
  }
});

test.describe('compliance na página renderizada', () => {
  // Só no projeto desktop: é propriedade do HTML/servidor, não do viewport.
  test.skip(({ isMobile }) => Boolean(isMobile), 'roda uma vez só, no projeto desktop');

  const routes = [...LANDING_PAGES.map((content) => `/${content.slug}`), ...SUPPORT_ROUTES];

  for (const route of routes) {
    test(`${route} não usa termo proibido`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'networkidle' });
      const text = await visibleText(page);

      const hits = FORBIDDEN_PATTERNS.filter((pattern) => pattern.test(text)).map((pattern) => {
        const match = text.match(pattern);
        return `${pattern} -> "${match?.[0]}"`;
      });

      expect(hits, `termos proibidos em ${route}`).toEqual([]);
    });
  }

  for (const content of LANDING_PAGES) {
    test(`/${content.slug} exibe CRP e link de privacidade`, async ({ page }) => {
      await page.goto(`/${content.slug}`, { waitUntil: 'networkidle' });

      await expect(page.getByText(CRP).first()).toBeVisible();
      await expect(page.locator('a[href="/privacidade"]').first()).toBeAttached();
    });
  }
});
