import React from "react";

const CardDesconto = () => {
  return (
    <div className="card-desconto">
      <h1 className="valor-desconto">{porcentagem}<span className="sinal-porcentagem">%</span></h1>
      <p>{descricao}</p>
    </div>
  );
};

export default CardDesconto;
