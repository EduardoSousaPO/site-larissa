import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CRP } from '../config/site';
import { createWhatsAppProps } from '../lib/whatsapp';

const NAV_LINKS = [
  {
    to: '/',
    label: 'Inicio',
    isActive: (pathname: string, hash: string) => pathname === '/' && (!hash || hash === '#'),
  },
  {
    to: '/#sobre',
    label: 'Sobre',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#sobre',
  },
  {
    to: '/#abordagem',
    label: 'Abordagem',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#abordagem',
  },
  {
    to: '/#servicos',
    label: 'Servicos',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#servicos',
  },
  {
    to: '/blog',
    label: 'Blog',
    isActive: (pathname: string, _hash: string) => pathname.startsWith('/blog'),
  },
] as const;

const WhatsAppIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-sm' : 'py-4'
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <Link to="/" className="min-w-0 flex-1">
          <span className="block font-serif text-xl font-bold tracking-tight text-primary-700">
            Dra. Larissa Nunes
          </span>
          <span className="mt-1 block text-xs text-gray-400">
            Psicologa • Logoterapia • {CRP}
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = link.isActive(location.pathname, location.hash);

            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`group flex flex-col items-center text-sm font-medium transition ${
                  active ? 'text-primary-700' : 'text-gray-600 hover:text-primary-700'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`mx-auto mt-1 h-1 w-1 rounded-full bg-primary-600 transition ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden flex-1 justify-end md:flex">
          <a
            {...whatsappProps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-gray-700 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      <motion.div
        className={`border-t border-stone-200 bg-white px-6 pb-6 pt-5 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -8 }}
        transition={{ duration: 0.2 }}
      >
        <nav className="flex flex-col gap-2 text-center">
          {NAV_LINKS.map((link) => {
            const active = link.isActive(location.pathname, location.hash);

            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-col items-center rounded-2xl px-4 py-3 text-base font-medium transition ${
                  active
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-stone-50 hover:text-primary-700'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`mx-auto mt-1 h-1 w-1 rounded-full bg-primary-600 transition ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            );
          })}

          <a
            {...whatsappProps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
