import { Tooltip } from "@mui/material";
import React from "react";
import "./MembroCard.css";

const MembroCard = ({ nome, descricao, image }) => {
  return (
    <article className="membro-card">
      <img style={{borderRadius: 20, boxShadow: "0px 0px 4px rgba(0,0,0,0.5)"}} src={image} alt="" width={200} height={200} />
      <Tooltip title={descricao} placement="bottom">
        <p className="membro-nome">{nome}</p>
      </Tooltip>
    </article>
  );
};

export default MembroCard;
