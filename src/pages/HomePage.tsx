import HeroSection from '../components/sections/HeroSection';
import MetodoSERSection from '../components/sections/MetodoSERSection';
import AboutSection from '../components/sections/AboutSection';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesSection from '../components/sections/ServicesSection';
import FAQSection from '../components/sections/FAQSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/SEOHead';
import { FAQ_ITEMS, LOCAL_BUSINESS_SCHEMA, PROFESSIONAL_SCHEMA } from '../config/site';

const HomePage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Psicóloga em Goiânia e online | Método S.E.R. — Dra. Larissa Nunes"
        description="Psicoterapia com o Método S.E.R. (Segurança Emocional Reconstruída) para mulheres que se sentem não vistas, guardam mágoa e estão emocionalmente cansadas. Online para todo o Brasil e presencial em Goiânia."
        path="/"
        keywords="psicóloga Goiânia, terapia para mulher, cansaço emocional, não me sinto vista, Método S.E.R., segurança emocional, logoterapia Goiânia, terapia online, mágoa acumulada, reagir pela dor"
        schema={[LOCAL_BUSINESS_SCHEMA, PROFESSIONAL_SCHEMA, faqSchema]}
      />
      <div className="overflow-hidden">
        <HeroSection />
        <MetodoSERSection />
        <AboutSection />
        <ApproachSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection page="home" />
      </div>
    </>
  );
};

export default HomePage;
