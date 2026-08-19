/**
 * Contrato de conteúdo das landing pages de Google Ads.
 *
 * Toda a copy de negócio vive em `src/content/landing/<slug>.ts` seguindo este
 * tipo — nunca embutida no JSX. Isso permite auditar compliance (CFP + política
 * do Google Ads) lendo apenas os arquivos de conteúdo, sem passar por React.
 */

export type LandingEtapa = {
  /** Letra do Método S.E.R.: S, E ou R. */
  letra: string;
  nome: string;
  texto: string;
};

export type LandingCard = {
  titulo: string;
  texto: string;
};

export type LandingFaqItem = {
  question: string;
  answer: string;
};

export type LandingArtigo = {
  /** Slug do post publicado no blog (sem o prefixo /blog/). */
  slug: string;
  titulo: string;
  resumo: string;
};

export type LandingContent = {
  /** Caminho da rota, sem barra inicial nem final. */
  slug: string;

  seo: {
    /** Máx. 60 caracteres. Renderizado sem o sufixo global do site. */
    title: string;
    /** Máx. 155 caracteres. */
    description: string;
    keywords: string;
    /** Usado no schema `Service.name` e no BreadcrumbList. */
    serviceName: string;
    /** Assunto da página, para `MedicalWebPage.about`. */
    about: string;
  };

  /** Mensagem pré-preenchida do WhatsApp, própria desta página. */
  whatsappMessage: string;

  hero: {
    eyebrow: string;
    h1: string;
    /**
     * Trecho final do H1 renderizado em Playfair itálico.
     *
     * Precisa ser sufixo literal de `h1` — o componente corta a string, não
     * reescreve. Se não bater, o H1 aparece inteiro em sans, sem quebrar.
     *
     * A ênfase serifada aparece só aqui, uma vez por página. Repetir o mesmo
     * recurso em todo título vira maneirismo e enfraquece a primeira dobra.
     */
    h1Accent?: string;
    subtitle: string;
    ctaLabel: string;
    microcopy: string;
  };

  sintomas: {
    title: string;
    intro: string;
    items: string[];
  };

  comoAjuda: {
    title: string;
    paragraphs: string[];
    etapasTitle: string;
    etapas: LandingEtapa[];
  };

  paraQuem: {
    title: string;
    items: string[];
    naoIndicadoTitle: string;
    naoIndicado: string[];
    ctaLabel: string;
  };

  comoFunciona: {
    title: string;
    intro: string;
    items: LandingCard[];
  };

  faq: {
    title: string;
    items: LandingFaqItem[];
  };

  credenciais: {
    title: string;
    paragraphs: string[];
  };

  artigos: {
    title: string;
    intro: string;
    items: LandingArtigo[];
  };

  fechamento: {
    title: string;
    text: string;
    ctaLabel: string;
  };
};
