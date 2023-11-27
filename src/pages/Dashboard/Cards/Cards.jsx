import CardTitle from "./CardTitle/CardTitle";
import "./Cards.css";
import MyDropdown from "./Dropdown/Dropdown";
import MyTable from "./Table/Table";

export const PriceCard = ({ icon, price, iconBackgroundColor }) => {
  return (
    <div className="card price-card">
      <span
        style={{ backgroundColor: iconBackgroundColor }}
        className="price-card__icon"
      >
        {icon}
      </span>
      <div className="price-card__texts">
        <small className="price-card__total">Total</small>
        <span className="price-card__preco">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
};

export const ChartCard = ({ children }) => {
  return <div className="card chart-card">{children}</div>;
};

export const TableCard = () => {
  return (
    <div className="card table-card">
      <div className="card__header">
        <CardTitle text="Processo de eventos" />
        <div className="table-card__dropdowns">
          <MyDropdown />
          <MyDropdown />
          <MyDropdown />
        </div>
      </div>
      <MyTable/>
    </div>
  );
};

export const CircularChartCard = () => {
  return (
    <div className="card circular-chart-card">
      <div className="card__header">
        <CardTitle text="Objetivos" />
      </div>    
    </div>
  );
}