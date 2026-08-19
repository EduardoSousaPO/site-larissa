import { Outlet } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Helmet } from '../lib/helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const MainLayout = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-white">
        <Helmet>
          <html lang="pt-BR" />
          <meta name="theme-color" content="#7c3aed" />
          <meta name="format-detection" content="telephone=no" />
        </Helmet>

        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <Navbar />

        {/*
          Era um `motion.main` com `initial={{ opacity: 0 }}`. Como o site é
          pré-renderizado, isso gravava `style="opacity:0"` no HTML estático: a
          página inteira nascia invisível e só aparecia depois que o bundle
          baixava e hidratava. Numa landing page de anúncio, o H1 é o elemento
          de LCP — atrasá-lo até a hidratação é exatamente o que a "experiência
          da página de destino" do Google penaliza, além de deixar o conteúdo
          inacessível se o JavaScript falhar.
        */}
        <main id="conteudo" className="flex-1 pt-24">
          <Outlet />
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </MotionConfig>
  );
};

export default MainLayout;
