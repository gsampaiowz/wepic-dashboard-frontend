import "./Cards.css";
import {PieChart, Pie, LineChart, Line,  Cell, Tooltip } from "recharts";
import CardTitle from "./CardTitle/CardTitle";
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


export const PieChartCard = () => {
  const totalData = 100;
  
  const dataPie = [
    { name: "Group A", value: 45 % totalData },
    { name: "Group B", value: 30 % totalData },
    { name: "Group C", value: 25 % totalData },
  ];
  
  const pieColors = ["#470CA6", "#5ACB0D", "#B82257"];

  return (
    <div className="card chart-card">
      <div className="chart-card__texts">
        <CardTitle text="Uploads e downloads" />

        <div className="statistics">
          <Statistic color="#470CA6" text="Upload" />
          <Statistic color="#5ACB0D" text="Pagos" />
          <Statistic color="#B82257" text="Gratuitos" />
        </div>
      </div>
      <PieChart width={100} height={100}>
        <Pie
          data={dataPie}
          cx={"50%"}
          cy={"50%"}
          outerRadius={50}
          dataKey="value"
        >
          {dataPie.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            borderRadius: 10,
            fontSize: 14,
            padding: "5px 10px",
          }}
        />
      </PieChart>
    </div>
  );
};

export const LineChartCard = () => {
  const dataLine = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <div className="card chart-card">
      <div className="chart-card__texts">
        <CardTitle text="Uploads e downloads" />

        <div className="statistics">
          <Statistic color="#470CA6" text="Upload" />
          <Statistic color="#5ACB0D" text="Pagos" />
          <Statistic color="#B82257" text="Gratuitos" />
        </div>
      </div>
      <LineChart width={300} height={100} data={dataLine}>
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#2D2BD4"
          strokeWidth={3}
          dot={null}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#00BAD3"
          strokeWidth={3}
          dot={null}
        />
      </LineChart>
    </div>
  );
};

export const TableCard = () => {
  return(
    <table>
    </table>
  )
}