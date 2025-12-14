import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-display">
        <div id="horario-footer">
          <section className="horario">
            <h2 className="horario-titulo">Horarios</h2>
            <ul className="horario-lista">
              <li>Lunes a viernes: 10AM - 2PM y 8PM - 12AM</li>
              <li>Sábados: 12AM - 2PM y 8PM - 12PM</li>
              <li>Domingos: 8PM - 12PM</li>
            </ul>
          </section>
        </div>
        
        <div id="mapa-footer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sar!4v1758660714185!5m2!1ses-419!2sar!6m8!1m7!1smpVE3OEC-LWYW2TvMs-6Bw!2m2!1d-34.5627609871307!2d-58.45455116541402!3f263.19381838521156!4f0.7228516886007412!5f0.4000509072458513"
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del restaurante"
          />
        </div>
      </div>
      
      <p className="footer-text">© 2025 Ristorante Cieri. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;