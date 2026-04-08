export const SITE_URL = 'https://site-larissa-three.vercel.app';
export const SITE_NAME = 'Dra. Larissa Nunes';
export const SITE_TITLE_SUFFIX = 'Dra. Larissa Nunes | Psicologa';
export const DEFAULT_AUTHOR = 'Dra. Larissa Nunes';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/larissa3.jpeg`;
export const CONTACT_EMAIL = 'la.nunesdasilva@hotmail.com';
export const CONTACT_PHONE_DISPLAY = '(62) 99629-0052';
export const CONTACT_PHONE_E164 = '+5562996290052';
export const CONTACT_PHONE_DIGITS = '5562996290052';
export const CONTACT_ADDRESS = 'Av. C-255, no 271, St. Nova Suica, Goiania - GO';
export const CRP = 'CRP 09/16269';
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Psic%C3%B3loga+Larissa+Nunes/';
export const GOOGLE_REVIEW_SUMMARY = {
  ratingValue: 5,
  reviewCount: 4,
} as const;
export const GOOGLE_REVIEW_HIGHLIGHTS = [
  {
    initial: 'E',
    name: 'Eduardo Sousa',
    rating: 5,
    text: 'Larissa me ajudou em varias questoes, e eu a recomendo sem pensar duas vezes.',
  },
  {
    initial: 'P',
    name: 'Paciente verificado',
    rating: 5,
    text: 'Larissa e uma excelente profissional.',
  },
] as const;

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? '';
export const LLM_PROVIDER = (import.meta.env.VITE_LLM_PROVIDER?.trim() ?? 'openai') as
  | 'claude'
  | 'openai'
  | 'groq';
export const LLM_API_KEY = import.meta.env.VITE_LLM_API_KEY?.trim() ?? '';
export const LLM_MODEL = import.meta.env.VITE_LLM_MODEL?.trim() ?? '';
export const INFSH_API_KEY = import.meta.env.VITE_INFSH_API_KEY?.trim() ?? '';

export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') || CONTACT_PHONE_DIGITS;
export const WHATSAPP_DEFAULT_MESSAGE =
  import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE?.trim() ||
  'Ola! Gostaria de saber mais sobre psicoterapia com a Dra. Larissa Nunes e a abordagem da Logoterapia.';

export const FAQ_ITEMS = [
  {
    question: 'Nunca fiz terapia. Como funciona?',
    answer:
      'Voce nao precisa saber nada sobre terapia antes de comecar. A maioria dos meus pacientes nunca tinha feito. A primeira sessao e uma conversa — voce fala sobre o que esta sentindo, eu te escuto e te mostro como posso te ajudar. Sem julgamento, sem pressao.',
  },
  {
    question: 'Terapia e cara. Consigo manter?',
    answer:
      'Uma sessao custa R$180 — menos de R$45 por semana. Com o pacote mensal de 4 sessoes, o valor cai para R$144 por sessao. Pense assim: quanto esta custando continuar sem direcao? Em energia, em relacionamentos, em oportunidades que passam?',
  },
  {
    question: 'O que e Logoterapia? E diferente de terapia normal?',
    answer:
      'A Logoterapia e uma abordagem criada por Viktor Frankl, um dos psiquiatras mais importantes da historia. Enquanto outras abordagens focam em entender o passado, a Logoterapia foca em encontrar sentido para o presente e futuro. Em vez de perguntar "por que voce sofre?", perguntamos "para que voce quer seguir em frente?". E mais direcionada, mais pratica e mais rapida em dar clareza.',
  },
  {
    question: 'Atende online? Funciona igual?',
    answer:
      'Sim, atendo online para todo o Brasil. A sessao online tem a mesma duracao, a mesma profundidade e os mesmos resultados. Voce so precisa de um lugar tranquilo e uma conexao estavel.',
  },
] as const;

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dra. Larissa Nunes - Psicologa | Logoterapia em Goiania',
  image: DEFAULT_OG_IMAGE,
  description:
    'Psicologa clinica especializada em Logoterapia. Atendimento online para todo o Brasil e presencial em Goiania para ansiedade, depressao e busca de sentido.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. C-255, no 271, St. Nova Suica',
    addressLocality: 'Goiania',
    addressRegion: 'GO',
    postalCode: '74280-010',
    addressCountry: 'BR',
  },
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  url: SITE_URL,
  priceRange: '$$',
  areaServed: ['Brasil', 'Goiania', 'Goias'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicos de psicologia',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Psicoterapia Individual',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sessao de Resolucao',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Orientacao Vocacional',
        },
      },
    ],
  },
};

export const PHYSICIAN_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dra. Larissa Nunes',
  image: DEFAULT_OG_IMAGE,
  description:
    'Psicologa clinica especializada em Logoterapia, com atendimento online e presencial em Goiania.',
  medicalSpecialty: ['Psicologia Clinica', 'Logoterapia'],
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  url: SITE_URL,
};
