import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info">
      <h2 className="info-titulo">Sobre nosotros</h2>
      <p className="about-us">
        En <span id="ristorante">Ristorante Cieri</span> ofrecemos una experiencia auténtica de la
        cocina italiana, con platos elaborados con ingredientes de la más alta calidad y un servicio excepcional.<br />
        Nuestro compromiso es brindar a cada cliente una atención cálida, eficiente y en tiempo, para que cada
        visita sea un verdadero placer.
      </p>
    </section>
  );
};

export default InfoSection;