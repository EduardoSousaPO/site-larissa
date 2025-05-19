import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PhotoAnimation from '../PhotoAnimation';

const AboutGallery = () => {
  const [activeEffect, setActiveEffect] = useState<'fade' | 'slide' | 'zoom' | 'flip'>('fade');
  
  // Rotacionar entre os diferentes efeitos
  useEffect(() => {
    const effects: ('fade' | 'slide' | 'zoom' | 'flip')[] = ['fade', 'slide', 'zoom', 'flip'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % effects.length;
      setActiveEffect(effects[currentIndex]);
    }, 10000); // Trocar o efeito a cada 10 segundos
    
    return () => clearInterval(interval);
  }, []);

  const images = [
    '/images/freepik__lari-ultrarealistic-highresolution-portrait-of-a-c__98891.jpeg',
    '/images/freepik__lariultrarealistic-highresolution-studio-portrait-__98889.png',
    '/images/freepik__lariultrarealistic-highresolution-professional-por__98886.jpeg'
  ];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl">
      <div className="aspect-[4/5] relative">
        <PhotoAnimation 
          images={images} 
          effectType={activeEffect} 
          interval={5000}
          className="w-full h-full"
        />
        
        {/* Indicador de efeito atual */}
        <AnimatePresence>
          <motion.div
            key={activeEffect}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-700"
          >
            {activeEffect === 'fade' && 'Fade'}
            {activeEffect === 'slide' && 'Slide'}
            {activeEffect === 'zoom' && 'Zoom'}
            {activeEffect === 'flip' && 'Flip'}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Informações sobre as fotos */}
      <div className="p-4 bg-primary-50">
        <h3 className="text-lg font-semibold text-primary-700 mb-1">
          Dra. Larissa Nunes
        </h3>
        <p className="text-gray-700 text-sm">
          Psicóloga especializada em Logoterapia (CRP 09/16269)
        </p>
      </div>
    </div>
  );
};

export default AboutGallery; 