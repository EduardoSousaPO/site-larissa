import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoImage from './LogoImage';
import { createWhatsAppProps } from '../lib/whatsapp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pageName = location.pathname === '/' ? 'home' : location.pathname.replace(/\//g, '') || 'home';
  const whatsappProps = createWhatsAppProps({
    page: pageName,
    section: 'navbar',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'Inicio', active: location.pathname === '/' },
    { to: '/blog', label: 'Blog', active: location.pathname.startsWith('/blog') },
    { to: '/depoimentos', label: 'Depoimentos', active: location.pathname === '/depoimentos' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-stone-200 bg-white/95 py-3 shadow-sm backdrop-blur'
          : 'bg-white/80 py-5 backdrop-blur'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <LogoImage />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition ${
                link.active ? 'text-primary-700' : 'text-gray-700 hover:text-primary-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            {...whatsappProps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <motion.div
        className={`border-t border-stone-200 bg-white px-6 pb-8 pt-6 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -8 }}
        transition={{ duration: 0.2 }}
      >
        <nav className="flex flex-col gap-4 text-center">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-2 text-base font-medium ${
                link.active ? 'text-primary-700' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            {...whatsappProps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
