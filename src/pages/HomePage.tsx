// Componentes de seção
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
