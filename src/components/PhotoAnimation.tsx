import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PhotoAnimationProps {
  images: string[];
  className?: string;
  interval?: number;
  effectType?: 'fade' | 'slide' | 'zoom' | 'flip';
}

const PhotoAnimation: React.FC<PhotoAnimationProps> = ({
  images,
  className = '',
  interval = 3000,
  effectType = 'fade'
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Diferentes variantes de animação baseadas no effectType
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } },
      exit: { opacity: 0, transition: { duration: 1 } }
    },
    slide: {
      hidden: { x: 300, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
      exit: { x: -300, opacity: 0, transition: { duration: 0.8 } }
    },
    zoom: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
      exit: { scale: 1.2, opacity: 0, transition: { duration: 0.8 } }
    },
    flip: {
      hidden: { rotateY: 90, opacity: 0 },
      visible: { rotateY: 0, opacity: 1, transition: { duration: 0.8 } },
      exit: { rotateY: -90, opacity: 0, transition: { duration: 0.8 } }
    }
  };

  const selectedVariant = variants[effectType];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        key={currentImage}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={selectedVariant}
        className="w-full h-full"
      >
        <img
          src={images[currentImage]}
          alt={`Dra. Larissa Nunes - Foto ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default PhotoAnimation; 