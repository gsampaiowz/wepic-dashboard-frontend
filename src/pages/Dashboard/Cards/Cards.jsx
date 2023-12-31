import CardTitle from "./CardTitle/CardTitle";
import MyDropdown from "../../../components/Dropdown/Dropdown";
import MyTable from "./Table/Table";
import { Cell, Pie, PieChart } from "recharts";
import { dataCircularChart, dropdownDatas } from "./DashboardDatas";
import "./Cards.css";
import ActivitiesList from "./ActivitiesList/ActivitiesList";
import { MenuItem } from "@mui/base/MenuItem";
import { useState } from "react";
import { Tooltip } from "@mui/material";

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
  const [selecionados, setSelecionados] = useState([
    dropdownDatas[0].escolhas[0],
    dropdownDatas[1].escolhas[0],
    dropdownDatas[2].escolhas[0],
  ]);

  return (
    <div className="card table-card">
      <div className="card__header">
        <CardTitle text="Processo de eventos" />
        <div className="table-card__dropdowns">
          {dropdownDatas.map((dropdown, dropdownIndex) => (
            <MyDropdown
              key={dropdownIndex}
              iconColor={"#575757"}
              titulo={selecionados[dropdownIndex]}
            >
              {dropdown.escolhas.map((option, optionIndex) => (
                <Tooltip placement="left" title={option} key={optionIndex}>
                  <MenuItem
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    onClick={() =>
                      setSelecionados((prevState) =>
                        prevState.map((value, setId) => {
                          if (setId === dropdownIndex) return option;
                          return value;
                        })
                      )
                    }
                    className="CustomMenuIntroduction--item"
                  >
                    {option}
                  </MenuItem>
                </Tooltip>
              ))}
            </MyDropdown>
          ))}
        </div>
      </div>
      <MyTable />
    </div>
  );
};

export const CircularChartCard = () => {
  let totalData = 0;
  dataCircularChart.forEach((item) => {
    totalData += item.value;
  });

  return (
    <div className="card circular-chart-card">
      <CardTitle text="Objetivos" />
      <div className="circular-chart-card-flex">
        <PieChart style={{ alignSelf: "center" }} width={300} height={250}>
          <Pie
            data={dataCircularChart}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          >
            {dataCircularChart.map((item) => (
              <Cell key={`cell-${item.name}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
        <div className="circular-chart-card-dados">
          <div className="circular-chart-card-dado">
            <span className="circular-chart-card-dado__value">{totalData}</span>
            <span className="circular-chart-card-dado__title">Eventos</span>
          </div>
          {dataCircularChart.map((item) => (
            <div key={item.name} className="circular-chart-card-dado">
              <span
                style={{ color: item.color }}
                className="circular-chart-card-dado__value"
              >
                {item.value}
              </span>
              <span className="circular-chart-card-dado__title">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ActivitiesListCard = () => {
  return (
    <div className="card activities-list-card">
      <CardTitle text="Atividades diárias" />
      <ActivitiesList />
    </div>
  );
};
