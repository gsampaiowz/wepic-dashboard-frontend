import React from "react";
import "./DetalhesMembro.css";
import equipe from "../Equipe/EquipeData";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import { useNavigate, useParams } from "react-router-dom";

const DetalhesMembro = () => {
  const navigate = useNavigate();

  const { membro } = useParams();

  return (
    <MainContent>
      <Container>
        <div className="membro-info-flex">
          <p className="voltar-equipe" onClick={() => navigate("/equipes")}>
            {" "}
            &lt;- Voltar
          </p>
          {equipe
            .filter((m) => m.nome === membro)
            .map((_membro, index) => (
              <div key={index} className="membro-info">
                <h1>{_membro.nome}</h1>
                <p className="membro-descricao">{_membro.descricao}</p>
                <div className="membro-dados">
                  <div className="membro-row">
                    <div className="membro-dado">
                      <p>Fotos cadastradas:</p>
                      <b
                        style={{ color: "rgb(209, 154, 232)" }}
                        className="membro-dado-numero"
                      >
                        {_membro.fotosTiradas}
                      </b>
                    </div>

                    <div className="membro-dado">
                      <p>Fotos vendidas:</p>
                      <b
                        style={{ color: "rgb(234, 145, 113)" }}
                        className="membro-dado-numero"
                      >
                        {_membro.fotosVendidas}
                      </b>
                    </div>
                  </div>
                  <div className="membro-row">
                    <div className="membro-dado">
                      <p>Rostos apurados:</p>
                      <b
                        style={{ color: "rgb(110, 161, 231)" }}
                        className="membro-dado-numero"
                      >
                        {_membro.rostosApurados}
                      </b>
                    </div>

                    <div className="membro-dado">
                      <p>Eventos participados:</p>
                      <b style={{color: "rgb(239, 195, 117)"}} className="membro-dado-numero">
                        {_membro.eventosParticipados}
                      </b>
                    </div>
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
