import './WhatsAppButton.css';
import whatsappLogoImg from '../../assets/images/inicio/logo whatsapp.png';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://whatsapp.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img 
        src={whatsappLogoImg} 
        alt="logo whatsapp" 
        className="whatsapp" 
      />
    </a>
  );
};

export default WhatsAppButton;