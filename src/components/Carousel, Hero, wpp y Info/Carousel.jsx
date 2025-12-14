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
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
              <img src={slide.image} alt={slide.alt} />
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