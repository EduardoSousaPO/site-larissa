import { Helmet } from '../lib/helmet';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, SITE_TITLE_SUFFIX } from '../config/site';

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: object | object[];
  noindex?: boolean;
  /**
   * Suprime o sufixo global do site no <title>.
   *
   * O sufixo " | Dra. Larissa Nunes | Psicóloga" custa 33 caracteres, o que
   * torna impossível manter o title dentro dos ~60 caracteres que o Google
   * exibe sem truncar. As landing pages de anúncio precisam controlar o title
   * inteiro, então passam `hideTitleSuffix`. As páginas antigas seguem
   * inalteradas (default `false`).
   */
  hideTitleSuffix?: boolean;
};

export default function SEOHead({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  schema,
  noindex = false,
  hideTitleSuffix = false,
}: SEOHeadProps) {
  const canonical = path.startsWith('http') ? path : `${SITE_URL}${path}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const documentTitle = hideTitleSuffix ? title : `${title} | ${SITE_TITLE_SUFFIX}`;

  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonical} />
      {schemas.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
