import { Skeleton, Tooltip } from "@mui/material";
import React from "react";
import "./MembroCard.css";

const MembroCard = ({ nome, descricao }) => {
  return (
    <article className="membro-card">
      <Skeleton animation={false} variant="rounded" width={200} height={200} />
      <Tooltip title={descricao} placement="bottom">
        <p className="membro-nome">{nome}</p>
      </Tooltip>
    </article>
  );
};

export default MembroCard;
