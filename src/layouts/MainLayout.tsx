import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
  // Dados estruturados para Schema Physician (JSON-LD)
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dra. Larissa Nunes da Silva",
    "image": "/images/larissa-nunes.jpg",
    "description": "Psicóloga clínica (CRP 09/16269) especializada em Logoterapia, com experiência em atendimentos de adultos e adolescentes.",
    "medicalSpecialty": "Psicologia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. C-255, nº 271",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74280-010",
      "addressCountry": "BR"
    },
    "telephone": "(62) 9XXXX-XXXX",
    "email": "contato@larissanunespsicologa.com.br",
    "url": "https://www.larissanunespsicologa.com.br",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Psicoterapia Individual",
        "description": "Atendimento psicoterapêutico personalizado para adultos e adolescentes."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Aconselhamento Vocacional",
        "description": "Orientação para desenvolvimento de carreira e escolhas profissionais."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Orientação Familiar",
        "description": "Suporte terapêutico para questões familiares e relacionamentos."
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(physicianSchema)}
        </script>
      </Helmet>
      <Navbar />
      <div className="pt-20"></div>
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout; 