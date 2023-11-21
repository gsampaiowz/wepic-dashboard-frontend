import "./PriceCard.css";

const PriceCard = ({ icon, value, backgroundIcon }) => {
  return (
    <div className="card price-card">
      <span
        style={{ backgroundColor: backgroundIcon }}
        className="price-card__icon"
      >
        {icon}
      </span>
      <div className="price-card__texts">
        <small className="price-card__total">Total</small>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default PriceCard;
