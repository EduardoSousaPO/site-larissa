/**
 * Construtores de JSON-LD para as landing pages.
 *
 * Reutiliza LOCAL_BUSINESS_SCHEMA e PROFESSIONAL_SCHEMA de `config/site` em vez de
 * repetir NAP, para que endereço, telefone e CRP tenham uma fonte única.
 *
 * Nota SSG: nada aqui pode depender de `Date.now()` ou `new Date()` sem
 * argumento — o valor mudaria entre o build e a hidratação e geraria mismatch.
 * Por isso `lastReviewed` é uma constante revisada a mão.
 */

import {
  CRP,
  LOCAL_BUSINESS_SCHEMA,
  PROFESSIONAL_SCHEMA,
  SITE_NAME,
  SITE_URL,
} from '../config/site';
import type { LandingFaqItem } from '../types/landing';

/** Data da última revisão editorial das landing pages. Atualize ao revisar a copy. */
export const LANDING_LAST_REVIEWED = '2026-08-18';

export function buildFaqSchema(items: readonly LandingFaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function buildServiceSchema({ name, description, path }: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: 'Psicoterapia',
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'Person',
      name: PROFESSIONAL_SCHEMA.name,
      jobTitle: PROFESSIONAL_SCHEMA.jobTitle,
      identifier: CRP,
      url: SITE_URL,
      knowsAbout: PROFESSIONAL_SCHEMA.knowsAbout,
      telephone: PROFESSIONAL_SCHEMA.telephone,
    },
    areaServed: LOCAL_BUSINESS_SCHEMA.areaServed,
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        name: 'Atendimento online por videochamada',
        availableLanguage: 'pt-BR',
        serviceUrl: `${SITE_URL}${path}`,
      },
      {
        '@type': 'ServiceChannel',
        name: 'Atendimento presencial em Goiânia',
        availableLanguage: 'pt-BR',
        servicePostalAddress: LOCAL_BUSINESS_SCHEMA.address,
      },
    ],
  };
}

type MedicalWebPageInput = {
  title: string;
  description: string;
  path: string;
  about: string;
};

export function buildMedicalWebPageSchema({
  title,
  description,
  path,
  about,
}: MedicalWebPageInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: 'pt-BR',
    lastReviewed: LANDING_LAST_REVIEWED,
    // `Thing` e não `MedicalCondition`: dos quatro assuntos, só "Ansiedade"
    // seria uma condição médica. "Autoestima", "Crise existencial" e "Impacto
    // emocional do adoecimento" não são — e, na página de doenças crônicas,
    // declará-las como condição médica trabalharia contra a regra que a própria
    // página cumpre no texto, de nunca se colocar como quem trata a doença.
    about: {
      '@type': 'Thing',
      name: about,
    },
    audience: {
      '@type': 'Patient',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Brasil',
      },
    },
    specialty: 'Psicologia Clínica',
    reviewedBy: {
      '@type': 'Person',
      name: PROFESSIONAL_SCHEMA.name,
      jobTitle: PROFESSIONAL_SCHEMA.jobTitle,
      // O registro no conselho entra em `identifier` porque schema.org não tem
      // propriedade dedicada a conselho de classe brasileiro. É informação de
      // identificação exigida pelo art. 20 "a" do Código de Ética.
      identifier: CRP,
      url: SITE_URL,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

type LandingSchemaInput = {
  title: string;
  description: string;
  path: string;
  about: string;
  serviceName: string;
  breadcrumbName: string;
  faq: readonly LandingFaqItem[];
};

/** Monta o conjunto completo de schemas de uma landing page, na ordem de leitura. */
export function buildLandingSchema({
  title,
  description,
  path,
  about,
  serviceName,
  breadcrumbName,
  faq,
}: LandingSchemaInput) {
  return [
    buildMedicalWebPageSchema({ title, description, path, about }),
    buildServiceSchema({ name: serviceName, description, path }),
    buildFaqSchema(faq),
    buildBreadcrumbSchema(breadcrumbName, path),
  ];
}
