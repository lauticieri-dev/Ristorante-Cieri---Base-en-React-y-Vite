import MenuSection from '../components/menu/MenuSection';
import { menuData } from '../data/menuData';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <div className="container">
        <h1 id="carta-titulo">Carta</h1>
        <h2 id="carta-subtitulo">Elige tus degustaciones favoritas</h2>
      </div>
      
      <MenuSection title="Platos principales" items={menuData.platos} />
      <MenuSection title="Bebidas" items={menuData.bebidas} />
    </div>
  );
};

export default MenuPage;