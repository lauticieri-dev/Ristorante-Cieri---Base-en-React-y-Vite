import { useState, useEffect } from 'react';
import './Carousel.css';
import cocinerImg from '../../assets/images/reservas/Cocinero italiano.png';
import meseraImg from '../../assets/images/reservas/Mesera.png';
import bartenderImg from '../../assets/images/reservas/Bartender italiano.png';
import pizzaImg from '../../assets/images/reservas/Pizza napolitana.png';
import carpaccioImg from '../../assets/images/reservas/Carpaccio.png';
import lasanaImg from '../../assets/images/reservas/Lasaña.png';
import spaghettiImg from '../../assets/images/reservas/Spaghetti.jpg';
import logoImg from '../../assets/images/inicio/logo.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: cocinerImg,
      alt: 'Cocinero italiano preparando pasta fresca'
    },
    {
      image: meseraImg,
      alt: 'Nuestro excelente servicio al cliente'
    },
    {
      image: bartenderImg,
      alt: 'Bartender preparando cócteles italianos'
    },
    {
      image: pizzaImg,
      alt: 'Auténtica pizza napolitana'
    },
    {
      image: carpaccioImg,
      alt: 'Carpaccio de res fresco'
    },
    {
      image: lasanaImg,
      alt: 'Lasaña tradicional italiana'
    },
    {
      image: spaghettiImg,
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
                  e.target.src = logoImg;
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