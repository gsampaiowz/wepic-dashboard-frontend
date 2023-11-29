import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import "./ActivitiesList.css";

const ActivitiesList = () => {
  const activities = [
    {
      name: "Atividade 1",
      isImportante: true,
      isAnotacao: false,
      isPending: false,
      isCompleted: false,
    },
    {
      name: "Atividade 2",
      isImportante: false,
      isAnotacao: true,
      isPending: false,
      isCompleted: false,
    },
    {
      name: "Atividade 3",
      isImportante: false,
      isAnotacao: false,
      isPending: true,
      isCompleted: false,
    },
    {
      name: "Atividade 4",
      isImportante: false,
      isAnotacao: false,
      isPending: false,
      isCompleted: true,
    },
  ];

  const [filter, setFilter] = useState("all");
  return (
    <div className="activities-list">
      <div className="activities-links">
        <NavLink className={`activity-link ${filter === "all" ? "actived" : ""}`} onClick={() => setFilter("all")}>Todas</NavLink>
        <NavLink className={`activity-link ${filter === "importantes" ? "actived" : ""}`} onClick={() => setFilter("importantes")}>Importantes</NavLink>
        <NavLink className={`activity-link ${filter === "anotacoes" ? "actived" : ""}`} onClick={() => setFilter("anotacoes")}>Anotações</NavLink>
        <NavLink className={`activity-link ${filter === "pendentes" ? "actived" : ""}`} onClick={() => setFilter("pendentes")}>
          Upload/pendentes
        </NavLink>
      </div>
      <div className="activities-list__items">
        {filter === "all"
          ? activities.map((activity) => (
              <div key={activity.name} className="activities-list_item">
                <span className="activities-list__item__name">
                  <FaCheckCircle color="#ff451d" size={16}/>{activity.name}
                </span>
                {activity.isCompleted ? (
                   <span className="item--completed">Concluído</span>
                ) : (
                  <span className="item--pending">Em andamento</span>
                )}
              </div>
            ))
          : filter === "importantes" ? activities.filter((activity) => activity.isImportante).map(activity => (
            <div key={activity.name} className="activities-list_item">
                <span className="activities-list__item__name">
                  <FaCheckCircle color="#ff451d" size={16}/>{activity.name}
                </span>
                {activity.isCompleted ? (
                   <span className="item--completed">Concluído</span>
                ) : (
                  <span className="item--pending">Em andamento</span>
                )}
              </div>
          )) : filter === "anotacoes" ? activities.filter((activity) => activity.isAnotacao).map(activity => (
            <div key={activity.name} className="activities-list_item">
                <span className="activities-list__item__name">
                  <FaCheckCircle color="#ff451d" size={16}/>{activity.name}
                </span>
                {activity.isCompleted ? (
                   <span className="item--completed">Concluído</span>
                ) : (
                  <span className="item--pending">Em andamento</span>
                )}
              </div>
          )): filter === "pendentes" ? activities.filter((activity) => activity.isPending).map(activity => (
            <div key={activity.name} className="activities-list_item">
                <span className="activities-list__item__name">
                  <FaCheckCircle color="#ff451d" size={16}/>{activity.name}
                </span>
                {activity.isCompleted ? (
                   <span className="item--completed">Concluído</span>
                ) : (
                  <span className="item--pending">Em andamento</span>
                )}
              </div>
          )) : null}
      </div>
    </div>
  );
};

export default ActivitiesList;
