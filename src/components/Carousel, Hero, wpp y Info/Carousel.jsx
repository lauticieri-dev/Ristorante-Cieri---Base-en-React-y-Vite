import { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/reservas/Cocinero italiano.png',
      alt: 'Cocinero italiano preparando pasta fresca'
    },
    {
      image: '/images/reservas/Mesera.png',
      alt: 'Nuestro excelente servicio al cliente'
    },
    {
      image: '/images/reservas/Bartender italiano.png',
      alt: 'Bartender preparando cócteles italianos'
    },
    {
      image: '/images/reservas/Pizza napolitana.png',
      alt: 'Auténtica pizza napolitana'
    },
    {
      image: '/images/reservas/Carpaccio.png',
      alt: 'Carpaccio de res fresco'
    },
    {
      image: '/images/reservas/Lasaña.png',
      alt: 'Lasaña tradicional italiana'
    },
    {
      image: '/images/reservas/Spaghetti.jpg',
      alt: 'Deliciosos espaguetis italianos'
    }
  ];
// Parámetros añadidos para el carrusel, auto slide 6 secs, botones next y prev y indicadores
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); 

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="carousel-section">
      <div className="carousel">
        <div 
          className="carousel-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item">
              <img 
                src={slide.image} 
                alt={slide.alt}
                loading="lazy"
                onError={(e) => {
                  console.log('Error loading image:', slide.image);
                  e.target.src = '/images/inicio/logo.jpg';
                  e.target.alt = 'Imagen no disponible';
                  e.target.style.objectFit = 'contain';
                  e.target.style.background = '#f0f0f0';
                }}
              />
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-button prev" 
          onClick={prevSlide}
          aria-label="Imagen anterior"
          type="button"
        >
          &#8249;
        </button>
        <button 
          className="carousel-button next" 
          onClick={nextSlide}
          aria-label="Imagen siguiente"
          type="button"
        >
          &#8250;
        </button>
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a imagen ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;