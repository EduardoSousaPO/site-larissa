import type { Page, Request, Response } from '@playwright/test';
import type { LandingContent } from '../src/types/landing';

import { ansiedadeContent } from '../src/content/landing/psicologa-online-para-ansiedade';
import { autoestimaContent } from '../src/content/landing/psicologa-online-para-autoestima';
import { criseExistencialContent } from '../src/content/landing/psicologa-online-para-crise-existencial';
import { doencasCronicasContent } from '../src/content/landing/psicologa-para-doencas-cronicas';

// Declarados aqui, e não importados de src/config/site.ts, por dois motivos:
// aquele módulo lê `import.meta.env`, que não existe no runner do Playwright
// (Node); e um teste que importa a constante do próprio código não prova nada —
// se alguém trocar o telefone por engano, o teste acompanharia a troca. Aqui
// eles são a expectativa independente.
export const SITE_URL = 'https://www.larissanunespsi.com.br';
export const CONTACT_PHONE_DIGITS = '5562996290052';
export const CRP = 'CRP 09/16269';

/**
 * As 4 landing pages de Google Ads. A expectativa vem do próprio módulo de
 * conteúdo, então o teste compara a página renderizada com a sua fonte de
 * verdade — e pega troca de conteúdo entre rotas, não só ausência de conteúdo.
 */
export const LANDING_PAGES: LandingContent[] = [
  ansiedadeContent,
  autoestimaContent,
  criseExistencialContent,
  doencasCronicasContent,
];

/** Páginas institucionais exigidas pela política de destino do Google Ads. */
export const SUPPORT_ROUTES = ['/contato', '/sobre', '/privacidade'] as const;

/** Rotas públicas que já existiam — guarda contra regressão colateral. */
export const LEGACY_ROUTES = ['/', '/agendamento', '/blog'] as const;

/**
 * Termos que reprovam a página por política, de docs/ads/00-estrategia-google-ads.md §4.
 * Só entram aqui os que podem ser buscados por regex sem falso positivo
 * (\bcura\b não pode ser /cura/, senão "procura" acusa).
 */
export const FORBIDDEN_PATTERNS: RegExp[] = [
  // §4.1 promessa de resultado
  /\bcura\b/i,
  /\bcurar\b/i,
  /\btem cura\b/i,
  /\belimine\b/i,
  /\blivre-se\b/i,
  /\bacabe com\b/i,
  /\bresultado garantido\b/i,
  /\bgarantia de resultado\b/i,
  /\b100\s?%\s/i,
  /\bem \d+ sess(ão|ões)\b/i,
  /\bmétodo infalível\b/i,
  /\brevolucionári[oa]\b/i,
  /\bnunca mais\b/i,
  /\bde uma vez por todas\b/i,
  /\bcientificamente comprovado\b/i,
  /\bsem recaída\b/i,
  // §4.2 presunção da condição do leitor (afirmação, não pergunta condicional)
  /\bvocê tem ansiedade\b/i,
  /\bvocê sofre com\b/i,
  /\bvocê está deprimid[ao]\b/i,
  /\bvocê não aguenta mais\b/i,
  // §4.3 preço e vantagem financeira
  /R\$\s?\d/,
  /\bdesconto\b/i,
  /\bpromoção\b/i,
  /\bpreço social\b/i,
  /\bvalor acessível\b/i,
  /\bcupom\b/i,
  /\bgrátis\b/i,
  /\bsessão experimental gratuita\b/i,
];

export type ConsoleWatcher = {
  /** Erros de console e exceções não capturadas, acumulados desde o setup. */
  errors: string[];
  /** URLs pedidas que voltaram 4xx/5xx. */
  failedRequests: string[];
  /** Toda URL requisitada, para asserção de regressão específica. */
  requested: string[];
};

/**
 * Liga os coletores ANTES do goto. Erro de hidratação aparece como console
 * error, e violação de CSP também — por isso o console é o sinal principal.
 */
export function watch(page: Page): ConsoleWatcher {
  const state: ConsoleWatcher = { errors: [], failedRequests: [], requested: [] };

  page.on('console', (message) => {
    if (message.type() === 'error') {
      state.errors.push(message.text());
    }
  });

  page.on('pageerror', (error) => {
    state.errors.push(`pageerror: ${error.message}`);
  });

  page.on('request', (request: Request) => {
    state.requested.push(request.url());
  });

  page.on('response', (response: Response) => {
    // Só recursos do próprio site. A página carrega as fontes do Google, e um
    // soluço nessa CDN reprovaria o teste por algo que não é do site — foi
    // assim que esta asserção falhou uma vez, sozinha, sob carga.
    const sameOrigin = response.url().startsWith('http://127.0.0.1:');
    if (sameOrigin && response.status() >= 400) {
      state.failedRequests.push(`${response.status()} ${response.url()}`);
    }
  });

  return state;
}

/** Texto visível da página, normalizado para busca de termos. */
export async function visibleText(page: Page): Promise<string> {
  return (await page.locator('body').innerText()).replace(/\s+/g, ' ');
}
