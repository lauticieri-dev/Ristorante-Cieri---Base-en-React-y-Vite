import { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/Ristorante-Cieri---Base-en-React-y-Vite/images/reservas/Cocinero%20italiano.png',
      alt: 'Cocinero italiano preparando pasta fresca'
    },
    {
      image: '/Ristorante-Cieri---Base-en-React-y-Vite/images/reservas/Mesera.png',
      alt: 'Nuestro excelente servicio al cliente'
    },
    {
      image: '/Ristorante-Cieri---Base-en-React-y-Vite/images/reservas/Bartender%20italiano.png',
      alt: 'Bartender preparando cócteles italianos'
    },
    {
      image: '/Ristorante-Cieri---Base-en-React-y-Vite/images/reservas/Pizza%20napolitana.png',
      alt: 'Auténtica pizza napolitana'
    },
    {
      image: '/Ristorante-Cieri---Base-en-React-y-Vite/images/reservas/Carpaccio.png',
      alt: 'Carpaccio de res fresco'
    },
    {
      image: '/Ristorante-Cieri---Base-en-React-y-Vite/images/reservas/Lasa%C3%B1a.png',
      alt: 'Lasaña tradicional italiana'
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
                onError={(e) => {
                  console.log('Error loading image:', slide.image);
                  e.target.style.background = '#ccc';
                  e.target.alt = 'Imagen no disponible';
                }}
              />
            </div>
          ))}
        </div>
        
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;