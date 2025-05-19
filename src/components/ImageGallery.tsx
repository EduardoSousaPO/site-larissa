import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  className?: string;
}

const images = [
  {
    src: '/images/larissa1.png',
    alt: 'Dra. Larissa Nunes - Retrato Profissional'
  },
  {
    src: '/images/larissa2.jpeg',
    alt: 'Dra. Larissa Nunes - Foto de Estúdio'
  }
];

const ImageGallery: React.FC<ImageGalleryProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Troca a cada 5 segundos
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlay]);

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  // Variantes para as animações
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const direction = 1;

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Controles de navegação */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center text-gray-800 focus:outline-none"
        onClick={handlePrev}
        aria-label="Imagem anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 w-10 h-10 rounded-full flex items-center justify-center text-gray-800 focus:outline-none"
        onClick={handleNext}
        aria-label="Próxima imagem"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 