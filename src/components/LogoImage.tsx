import React from 'react';
import { motion } from 'framer-motion';

interface LogoImageProps {
  className?: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* Fundo decorativo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-purple-100 rounded-xl blur-md opacity-70"></div>
      
      {/* Container principal */}
      <div className="relative bg-white border-2 border-primary-200 rounded-xl p-3 shadow-lg">
        <div className="flex flex-col items-center">
          {/* Foto miniatura da Dra. Larissa */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary-300 mb-2">
            <img 
              src="/images/freepik__lariultrarealistic-highresolution-portrait-of-a-c__98891.jpeg" 
              alt="Dra. Larissa Nunes" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Texto do logo */}
          <div className="text-center">
            <h1 className="font-bold text-primary-700 text-base md:text-lg leading-tight">
              Dra. Larissa Nunes
            </h1>
            <p className="text-xs text-gray-600 font-medium">
              Psicóloga CRP 09/16269
            </p>
          </div>
          
          {/* Decoração de linhas */}
          <div className="w-full flex justify-center mt-1">
            <div className="h-0.5 w-1/2 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoImage; 