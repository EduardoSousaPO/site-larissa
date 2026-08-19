import { useEffect } from 'react';
import SEOHead from '../SEOHead';
import CTASection from '../sections/CTASection';
import { buildLandingSchema } from '../../lib/landingSchema';
import { getUtmParams } from '../../lib/utm';
import { trackLPView } from '../../services/analytics';
import type { LandingContent } from '../../types/landing';
import ArtigosRelacionados from './ArtigosRelacionados';
import ComoAjudaSection from './ComoAjudaSection';
import ComoFuncionaSection from './ComoFuncionaSection';
import LandingFAQ from './LandingFAQ';
import LandingHero from './LandingHero';
import SinaisSection from './SinaisSection';
import StickyWhatsAppBar from './StickyWhatsAppBar';

type LandingPageViewProps = {
  content: LandingContent;
};

/**
 * Casca única das 4 landing pages de Google Ads.
 *
 * Cada página do diretório `pages/landing/` só fornece o objeto de conteúdo —
 * não há JSX duplicado entre elas. Trocar a ordem das seções aqui muda as
 * quatro páginas ao mesmo tempo, que é exatamente o que o blueprint pede.
 */
export default function LandingPageView({ content }: LandingPageViewProps) {
  const path = `/${content.slug}`;

  useEffect(() => {
    trackLPView(content.slug, getUtmParams());
  }, [content.slug]);

  const schema = buildLandingSchema({
    title: content.seo.title,
    description: content.seo.description,
    path,
    about: content.seo.about,
    serviceName: content.seo.serviceName,
    // O nome do breadcrumb usa o rótulo curto (`about`), que aparece de fato no
    // conteúdo da página. O `serviceName` é uma frase longa que não existe em
    // lugar nenhum do texto visível, e dado estruturado deve refletir o que
    // está na tela.
    breadcrumbName: content.seo.about,
    faq: content.faq.items,
  });

  return (
    <>
      <SEOHead
        title={content.seo.title}
        description={content.seo.description}
        path={path}
        keywords={content.seo.keywords}
        schema={schema}
        hideTitleSuffix
      />

      {/*
        `pb-24` reserva, desde o primeiro paint, o espaço que a barra fixa de
        WhatsApp vai ocupar no mobile. Reservar aqui (e não injetar padding
        depois da hidratação) é o que mantém o CLS em zero.
      */}
      <div className="pb-24 md:pb-0">
        <LandingHero
          hero={content.hero}
          page={content.slug}
          message={content.whatsappMessage}
        />

        <SinaisSection
          sintomas={content.sintomas}
          paraQuem={content.paraQuem}
          page={content.slug}
          message={content.whatsappMessage}
        />

        <ComoAjudaSection comoAjuda={content.comoAjuda} />

        <ComoFuncionaSection
          comoFunciona={content.comoFunciona}
          credenciais={content.credenciais}
        />

        <LandingFAQ faq={content.faq} />

        <ArtigosRelacionados artigos={content.artigos} />

        <CTASection
          page={content.slug}
          message={content.whatsappMessage}
          title={content.fechamento.title}
          text={content.fechamento.text}
          ctaLabel={content.fechamento.ctaLabel}
          section="final"
        />
      </div>

      <StickyWhatsAppBar
        label={content.hero.ctaLabel}
        message={content.whatsappMessage}
        page={content.slug}
      />
    </>
  );
}
