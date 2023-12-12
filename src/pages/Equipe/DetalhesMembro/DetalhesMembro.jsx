import React, { useContext } from "react";
import "./DetalhesMembro.css";
import equipe from "./../EquipeData";
import { myContext } from "../../../App";
import MainContent from "../../../components/MainContent/MainContent";
import Container from "./../../../components/Container/Container";
import { useNavigate } from "react-router-dom";

const DetalhesMembro = () => {
  const { membro, setMembro } = useContext(myContext);
  const navigate = useNavigate();
  setMembro(localStorage.getItem("membro"));

  return (
    <MainContent>
      <Container>
        <div className="membro-info-flex">
          <p className="voltar-equipe" onClick={() => navigate("/equipes")}> &lt;- Voltar</p>
          {equipe
            .filter((m) => m.nome === membro)
            .map((_membro, index) => (
              <div key={index} className="membro-info">
                <h1>{_membro.nome}</h1>
                <p style={{ width: 500 }}>{_membro.descricao}</p>
                <div className="membro-info-fotos">
                  <div className="membro-info-fotos-tiradas">
                    <p>Fotos tiradas</p>
                    <p>{_membro.fotosTiradas}</p>
                  </div>
                  <div className="membro-info-fotos-vendidas">
                    <p>Fotos vendidas</p>
                    <p>{_membro.fotosVendidas}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </MainContent>
  );
};

export default DetalhesMembro;
