import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fonction pour passer à l'image suivante
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Configurer l'intervalle pour le défilement automatique
    const slideInterval = setInterval(nextSlide, interval);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  // Fonction pour passer manuellement à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Fonction pour passer manuellement à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour aller directement à une image spécifique
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full bg-slate-900 flex justify-center items-center">
      {/* Container pour les images avec espace sur les côtés */}
      <div className="relative w-full max-w-6xl mx-auto h-full">
        {/* Images du slider avec transition en fondu */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex justify-center items-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}

        {/* Boutons de navigation (gauche/droite) */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600/40 hover:bg-blue-600/60 text-white p-2 rounded-full z-10 transition-colors backdrop-blur-sm slider-navigation-button"
          onClick={prevSlide}
          aria-label="Image précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600/40 hover:bg-blue-600/60 text-white p-2 rounded-full z-10 transition-colors backdrop-blur-sm slider-navigation-button"
          onClick={nextSlide}
          aria-label="Image suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicateurs de position (points) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
