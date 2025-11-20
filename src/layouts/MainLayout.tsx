import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
  // Dados estruturados para Schema LocalBusiness + Physician (JSON-LD)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dra. Larissa Nunes - Psicóloga | Logoterapia em Goiânia",
    "image": "https://site-larissa-three.vercel.app/images/larissa3.jpeg",
    "description": "Psicóloga clínica especializada em Logoterapia. Atendimento online e presencial em Goiânia para ansiedade, depressão e busca de sentido na vida.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. C-255, nº 271, St. Nova Suíça",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74280-010",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-16.6864",
      "longitude": "-49.2643"
    },
    "telephone": "+5562996290052",
    "email": "la.nunesdasilva@hotmail.com",
    "url": "https://site-larissa-three.vercel.app",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Goiânia"
      },
      {
        "@type": "State",
        "name": "Goiás"
      },
      {
        "@type": "Country",
        "name": "Brasil"
      }
    ],
    "serviceType": ["Psicoterapia Online", "Psicoterapia Presencial", "Logoterapia"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Psicologia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Psicoterapia Individual",
            "description": "Atendimento psicoterapêutico personalizado baseado em Logoterapia para adultos e adolescentes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aconselhamento Vocacional",
            "description": "Orientação para desenvolvimento de carreira e escolhas profissionais baseadas em propósito de vida."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Orientação Familiar",
            "description": "Suporte terapêutico para questões familiares, relacionamentos e comunicação."
          }
        }
      ]
    }
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dra. Larissa Nunes da Silva",
    "image": "https://site-larissa-three.vercel.app/images/larissa3.jpeg",
    "description": "Psicóloga clínica especializada em Logoterapia, com experiência em atendimentos de adultos e adolescentes. Formada pela PUC Goiás com formação WRL em Logoterapia.",
    "medicalSpecialty": ["Psicologia Clínica", "Logoterapia"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. C-255, nº 271",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74280-010",
      "addressCountry": "BR"
    },
    "telephone": "+5562996290052",
    "email": "la.nunesdasilva@hotmail.com",
    "url": "https://site-larissa-three.vercel.app",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Psicoterapia Individual",
        "description": "Atendimento psicoterapêutico personalizado para adultos e adolescentes baseado em Logoterapia."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Aconselhamento Vocacional",
        "description": "Orientação para desenvolvimento de carreira e escolhas profissionais baseadas em valores e propósito."
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
          {JSON.stringify(localBusinessSchema)}
        </script>
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
      <WhatsAppFloat />
    </div>
  );
};

export default MainLayout; 