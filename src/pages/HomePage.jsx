import HeroSection from '../components/ui/HeroSection';
import InfoSection from '../components/ui/InfoSection';

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