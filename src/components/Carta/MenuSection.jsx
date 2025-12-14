import MenuCard from './MenuCard';
import './MenuSection.css';

const MenuSection = ({ title, items }) => {
  return (
    <div className="menu-section">
      <div className="cards-title">
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="cards-container">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            category={item.category}
            items={item.items}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;