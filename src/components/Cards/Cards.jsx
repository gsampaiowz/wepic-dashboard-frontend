import CardTitle from "./CardTitle/CardTitle";
import "./Cards.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Statistic from "./Statistic/Statistic";

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

const data = [
  { name: "Group A", value: 900 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const PieChartCard = () => {
  return (
    <div className="card pie-chart-card">
      <div className="pie-chart-card__texts">
        <CardTitle text="Uploads e downloads" />

        <div className="statistics">
          <Statistic color="#470CA6" text="Upload" />
          <Statistic color="#5ACB0D" text="Pagos" />
          <Statistic color="#B82257" text="Gratuitos" />
        </div>
      </div>
      <ResponsiveContainer width={100} height={100}>
        <PieChart>
          <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            outerRadius={50}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: 10,
              fontSize: 12,
              padding: "2px 6px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
