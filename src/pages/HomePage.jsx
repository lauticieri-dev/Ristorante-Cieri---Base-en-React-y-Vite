import HeroSection from '../components/Carousel, Hero, wpp y Info/HeroSection';
import InfoSection from '../components/Carousel, Hero, wpp y Info/InfoSection';

const HomePage = () => {
  return (
    <>
      <HeroSection 
        title="Ristorante Cieri"
        subtitle="l'apice della cucina italiana"
      />
      <InfoSection />
      <div className="servicio">
        <img src="/images/inicio/Servicio óptimo.png" alt="Servicio óptimo" />
      </div>
    </>
  );
};

export default HomePage;