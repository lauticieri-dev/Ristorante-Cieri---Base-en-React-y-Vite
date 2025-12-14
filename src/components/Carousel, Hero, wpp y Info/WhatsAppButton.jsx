import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://whatsapp.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img 
        src="/images/inicio/logo whatsapp.png" 
        alt="logo whatsapp" 
        className="whatsapp" 
      />
    </a>
  );
};

export default WhatsAppButton;