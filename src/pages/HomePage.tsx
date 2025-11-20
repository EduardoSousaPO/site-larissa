// Componentes de seção
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dra. Larissa Nunes - Psicóloga | Logoterapia em Goiânia e Online</title>
        <meta 
          name="description" 
          content="Psicóloga especialista em Logoterapia em Goiânia. Atendimento online e presencial para ansiedade, depressão e busca de sentido na vida. Agende sua consulta."
        />
        <meta 
          name="keywords" 
          content="psicóloga Goiânia, logoterapia Goiânia, terapia online, psicólogo online, buscar sentido na vida, crise existencial, ansiedade Goiânia, depressão Goiânia, Viktor Frankl, psicoterapia online, atendimento psicológico online, psicóloga Nova Suíça"
        />
        <meta property="og:title" content="Dra. Larissa Nunes - Psicóloga | Logoterapia em Goiânia e Online" />
        <meta property="og:description" content="Psicóloga especialista em Logoterapia. Atendimento online e presencial em Goiânia para ansiedade, depressão e busca de sentido na vida." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://site-larissa-three.vercel.app/" />
        <meta property="og:image" content="https://site-larissa-three.vercel.app/images/larissa3.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dra. Larissa Nunes - Psicóloga | Logoterapia" />
        <meta name="twitter:description" content="Psicóloga especialista em Logoterapia. Atendimento online e presencial em Goiânia." />
        <link rel="canonical" href="https://site-larissa-three.vercel.app/" />
      </Helmet>
      <div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
