import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Helmet>
        <html lang="pt-BR" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      <Navbar />
      <motion.main
        className="flex-1 pt-24"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default MainLayout;
