import React from "react";
import "./CardDesconto.css"

const CardDesconto = ({porcentagem, descricao}) => {
  return (
    <div className="card-desconto">
      <h1 className="valor-desconto">{porcentagem}<span className="sinal-porcentagem">%</span></h1>
      <p className="descricao-desconto">{descricao}</p>
    </div>
  );
};

export default CardDesconto;
