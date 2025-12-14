import './MenuCard.css';

const MenuCard = ({ category, items, image }) => {
  return (
    <div className="card">
      <span className="food-section">{category}</span>
      {items.map((item, index) => (
        <div key={index} className="card-row">
          <span className="item-nombre">{item.name}</span>
          <span className="item-precio">{item.price}</span>
        </div>
      ))}
      {image && (
        <div className="card-row">
          <img src={image} alt={`Imagen ${category}`} className="img-food" />
        </div>
      )}
    </div>
  );
};

export default MenuCard;