import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesSection from '../components/sections/ServicesSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/SEOHead';
import { FAQ_ITEMS, LOCAL_BUSINESS_SCHEMA, PHYSICIAN_SCHEMA } from '../config/site';

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
        title="Psicologa em Goiania e online com foco em Logoterapia"
        description="Psicoterapia com Logoterapia para quem sente que esta vivendo sem rumo. Atendimento online para todo o Brasil e presencial em Goiania."
        path="/"
        keywords="psicologa goiania, logoterapia goiania, terapia online, crise existencial, sentido da vida, Viktor Frankl"
        schema={[LOCAL_BUSINESS_SCHEMA, PHYSICIAN_SCHEMA, faqSchema]}
      />
      <div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <ServicesSection />
        <FAQSection />
        <CTASection page="home" />
      </div>
    </>
  );
};

export default HomePage;
