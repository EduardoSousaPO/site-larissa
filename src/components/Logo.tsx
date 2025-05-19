import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative overflow-hidden">
        {/* Gradiente de fundo e borda */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-400 p-0.5 rounded-lg shadow-md">
          {/* Conteúdo do logo */}
          <div className="bg-white px-4 py-2 rounded-md flex items-center gap-2">
            {/* Elemento decorativo */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 hidden sm:block"
            >
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg 
                  className="w-5 h-5 text-primary-700" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </motion.div>
            
            {/* Texto */}
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="font-bold text-primary-700 text-lg md:text-xl leading-tight">
                Dra. Larissa Nunes
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">
                Psicóloga
              </div>
            </motion.div>
            
            {/* Detalhe decorativo */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-1 -right-1 w-16 h-16 bg-primary-50 rounded-full opacity-40 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo; 