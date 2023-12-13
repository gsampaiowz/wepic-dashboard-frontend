import React from "react";
import "./DetalhesMembro.css";
import equipe from "../Equipe/EquipeData";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";

const DetalhesMembro = () => {
  const navigate = useNavigate();

  const membro =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

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
                    <div className="membro-dado membro-dado--tiradas">
                      <p>Fotos tiradas:</p>
                      <p className="membro-dado-numero membro-dado-numero-tiradas">
                        {_membro.fotosTiradas}
                      </p>
                    </div>

                    <div className="membro-dado membro-dado--vendidas">
                      <p>Fotos vendidas:</p>
                      <p className="membro-dado-numero membro-dado-numero-vendidas">
                        {_membro.fotosVendidas}
                      </p>
                    </div>
                  </div>
                  <div className="membro-row">
                    <div className="membro-dado membro-dado--rostos-apurados">
                      <p>Rostos apurados:</p>
                      <p className="membro-dado-numero membro-dado-numero-rostos">
                        {_membro.rostosApurados}
                      </p>
                    </div>

                    <div className="membro-dado membro-dado--eventos-participados">
                      <p>Eventos participados:</p>
                      <p className="membro-dado-numero membro-dado-numero-eventos">
                        {_membro.eventosParticipados}
                      </p>
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
