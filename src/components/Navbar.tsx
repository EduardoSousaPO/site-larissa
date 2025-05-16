import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fechar menu ao navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-xl md:text-2xl text-primary-700">Dra. Larissa Nunes</span>
          <span className="ml-2 text-xs md:text-sm text-gray-600">Psicóloga CRP 09/16269</span>
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-gray-700 hover:text-primary-600 ${location.pathname === '/' ? 'font-semibold text-primary-600' : ''}`}
          >
            Início
          </Link>
          <Link 
            to="/blog" 
            className={`text-gray-700 hover:text-primary-600 ${location.pathname.includes('/blog') ? 'font-semibold text-primary-600' : ''}`}
          >
            Blog
          </Link>
          <Link 
            to="/agendamento" 
            className={`text-gray-700 hover:text-primary-600 ${location.pathname === '/agendamento' ? 'font-semibold text-primary-600' : ''}`}
          >
            Agendamento
          </Link>
          <Link 
            to="/agendamento" 
            className="btn btn-primary"
          >
            Agende sua Sessão
          </Link>
        </nav>

        {/* Botão menu mobile */}
        <button 
          className="md:hidden flex items-center text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
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

      {/* Menu mobile */}
      <motion.div 
        className={`md:hidden fixed inset-0 bg-white z-40 pt-20 px-4 ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <nav className="flex flex-col space-y-4 text-center">
          <Link 
            to="/" 
            className={`py-3 text-lg ${location.pathname === '/' ? 'font-semibold text-primary-600' : 'text-gray-700'}`}
          >
            Início
          </Link>
          <Link 
            to="/blog" 
            className={`py-3 text-lg ${location.pathname.includes('/blog') ? 'font-semibold text-primary-600' : 'text-gray-700'}`}
          >
            Blog
          </Link>
          <Link 
            to="/agendamento" 
            className={`py-3 text-lg ${location.pathname === '/agendamento' ? 'font-semibold text-primary-600' : 'text-gray-700'}`}
          >
            Agendamento
          </Link>
          <Link 
            to="/agendamento" 
            className="py-3 mx-auto mt-4 w-full max-w-xs btn btn-primary"
          >
            Agende sua Sessão
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar; 