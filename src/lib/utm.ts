/**
 * Captura de parâmetros de campanha da URL.
 *
 * Extraído de PrimeiraConsultaPage/SessaoResolucaoPage, onde estava duplicado
 * byte a byte. A versão original lia `window.location` sem guard e só sobrevivia
 * por ser chamada dentro de `useEffect`; aqui o guard é explícito, porque o
 * build é SSG (vite-react-ssg) e cada página é renderizada em Node.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

/** Identificadores de clique do Google Ads. `gclid` cobre o caso comum; */
/** `gbraid`/`wbraid` aparecem em tráfego de app/web sem cookie de terceiros. */
const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid'] as const;

export type UtmParams = Record<string, string>;

function emptyParams(): UtmParams {
  const params: UtmParams = {};

  for (const key of UTM_KEYS) {
    params[key] = '';
  }

  return params;
}

export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') {
    return emptyParams();
  }

  const search = new URLSearchParams(window.location.search);
  const params = emptyParams();

  for (const key of UTM_KEYS) {
    params[key] = search.get(key) ?? '';
  }

  return params;
}

/**
 * Lê o identificador de clique do Google Ads e o persiste na sessão.
 *
 * A Dra. Larissa fecha o atendimento pelo WhatsApp, ou seja, fora do site. Sem
 * guardar o `gclid` não há como importar a conversão offline depois. Guardamos
 * na sessão para que ele sobreviva à navegação entre páginas antes do clique.
 */
export function getClickId(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  const search = new URLSearchParams(window.location.search);

  for (const key of CLICK_ID_KEYS) {
    const value = search.get(key);

    if (value) {
      try {
        window.sessionStorage.setItem('larissa_click_id', value);
      } catch {
        // sessionStorage pode estar indisponível (modo privado, storage cheio).
        // O tracking é best-effort: seguimos com o valor lido da URL.
      }

      return value;
    }
  }

  try {
    return window.sessionStorage.getItem('larissa_click_id') ?? '';
  } catch {
    return '';
  }
}
