export const SITE_URL = 'https://site-larissa-three.vercel.app';
export const SITE_NAME = 'Dra. Larissa Nunes';
export const SITE_TITLE_SUFFIX = 'Dra. Larissa Nunes | Psicóloga';
export const DEFAULT_AUTHOR = 'Dra. Larissa Nunes';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/larissa3.jpeg`;
export const CONTACT_EMAIL = 'la.nunesdasilva@hotmail.com';
export const CONTACT_PHONE_DISPLAY = '(62) 99629-0052';
export const CONTACT_PHONE_E164 = '+5562996290052';
export const CONTACT_PHONE_DIGITS = '5562996290052';
export const CONTACT_ADDRESS = 'Av. C-255, nº 271, Setor Nova Suíça, Goiânia - GO';
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
    text: 'Larissa me ajudou em várias questões, e eu a recomendo sem pensar duas vezes.',
  },
  {
    initial: 'P',
    name: 'Paciente verificado',
    rating: 5,
    text: 'Larissa é uma excelente profissional.',
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
  'Olá! Quero começar minha mudança com a Dra. Larissa Nunes e entender melhor o Método S.E.R.';

export const FAQ_ITEMS = [
  {
    question: 'O que é o Método S.E.R.?',
    answer:
      'S.E.R. significa Segurança Emocional Reconstruída. É um processo clínico em três passos — Sentir com consciência, Entender a origem, Responder com intenção — que desenvolvi a partir da Logoterapia e da prática com mulheres que chegam ao consultório exaustas de se esforçar e não serem vistas. Em vez de ficar só explicando o passado, trabalhamos o emocional onde ele acontece: na hora da explosão, no silêncio da mágoa, na culpa que vem depois.',
  },
  {
    question: 'Nunca fiz terapia. Como funciona a primeira conversa?',
    answer:
      'Você não precisa saber nada sobre terapia, nem ter "o problema organizado na cabeça". A primeira conversa é leve, sem pressão e sem compromisso de continuar. Você me conta, com suas palavras, o que está sentindo — eu te escuto e te mostro como posso te ajudar. Sem julgamento, sem formulário.',
  },
  {
    question: 'Terapia é cara. Consigo manter?',
    answer:
      'Uma sessão custa R$180 — menos de R$45 por semana. No pacote mensal de 4 sessões, o valor cai para R$144 por sessão. Pense assim: quanto está custando continuar se sentindo invisível, cansada emocionalmente e reagindo pela dor? Em relações, em sono, em autoestima, em energia para o dia.',
  },
  {
    question: 'Seu atendimento é só para mulheres?',
    answer:
      'A maior parte do meu consultório é composta por mulheres — o Método S.E.R. nasceu escutando essas histórias. Mas atendo qualquer pessoa adulta que se identifica com a proposta: parar de reagir pela dor, entender o que sente e construir relações mais leves.',
  },
  {
    question: 'Atende online? Funciona igual?',
    answer:
      'Sim, atendo online para todo o Brasil. A sessão online tem a mesma duração, a mesma profundidade e os mesmos resultados. Você só precisa de um lugar tranquilo e uma conexão estável. Muita paciente prefere online justamente por poder falar de casa, sem a pressa de "se arrumar" para ser vista.',
  },
] as const;

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dra. Larissa Nunes - Psicóloga | Método S.E.R. em Goiânia',
  image: DEFAULT_OG_IMAGE,
  description:
    'Psicóloga clínica, criadora do Método S.E.R. (Segurança Emocional Reconstruída). Psicoterapia para mulheres que se sentem não vistas, guardam mágoa e estão emocionalmente cansadas. Online para todo o Brasil e presencial em Goiânia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. C-255, nº 271, Setor Nova Suíça',
    addressLocality: 'Goiânia',
    addressRegion: 'GO',
    postalCode: '74280-010',
    addressCountry: 'BR',
  },
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  url: SITE_URL,
  priceRange: '$$',
  areaServed: ['Brasil', 'Goiânia', 'Goiás'],
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
    name: 'Serviços de psicologia',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Psicoterapia com Método S.E.R.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sessão de Resolução',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Orientação Vocacional',
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
    'Psicóloga clínica criadora do Método S.E.R. (Segurança Emocional Reconstruída), com base em Logoterapia. Atende online e presencial em Goiânia.',
  medicalSpecialty: ['Psicologia Clínica', 'Logoterapia', 'Método S.E.R.'],
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  url: SITE_URL,
};
