import React from "react";
import "./Statistic.css";

const Statistic = ({ color, text }) => {
  return (
    <div className="statistic">
    <span style={{ backgroundColor: color }} className="statistic-color"></span>

    <span className="statistic-text">{text}</span>
    </div>
  );
};

export default Statistic;
