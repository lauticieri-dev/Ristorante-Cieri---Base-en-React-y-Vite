import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../Carousel, Hero, wpp y Info/WhatsAppButton';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <WhatsAppButton />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;