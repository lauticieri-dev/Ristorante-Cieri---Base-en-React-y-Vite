import { Link, useLocation } from 'react-router-dom';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import './Header.css';
import logoImg from '../../assets/images/inicio/logo.jpg';
import instagramLogoImg from '../../assets/images/inicio/Logo IG.png';

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/carta', label: 'Carta' },
    { path: '/reservas', label: 'Reservas' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <div className="navbar">
      <header className="header">
        <Link to="/">
          <img src={logoImg} alt="Logo Ristorante Cieri" className="logo" />
        </Link>
        
        <ul className={`nav ${isMenuOpen ? 'nav-open' : ''}`} id="nav">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`markers ${location.pathname === item.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogoImg} alt="Logo Instagram" className="instagram" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;