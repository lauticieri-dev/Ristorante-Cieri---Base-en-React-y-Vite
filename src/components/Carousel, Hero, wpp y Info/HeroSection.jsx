import './HeroSection.css';

const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
    >
      <div className="overlay">
        <h1 className="titulo">{title}</h1>
        {subtitle && <h2 className="subtitulo">{subtitle}</h2>}
      </div>
    </section>
  );
};

export default HeroSection;