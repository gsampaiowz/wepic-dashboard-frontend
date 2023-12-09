import "./Eventos.css";
import MainContent from "./../../components/MainContent/MainContent";
import { useContext } from "react";
import { myContext } from "../../App";
import { eventos } from "../Galeria/GaleriaDatas";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";

const Eventos = () => {
  const navigate = useNavigate();

  const { setEvento } = useContext(myContext);

  return (
    <MainContent>
      <Container>
        <div className="eventos-flex">
          {eventos.slice(2).map((evento, eventIndex) => (
            <div
              onClick={() => {
                setEvento(evento.nome);
                navigate("/galeria");
              }}
              key={eventIndex}
              style={{ backgroundImage: `url(${evento.images[0].link})` }}
              className="evento-card"
            >
              <span className="background-blue-blur"></span>
              <h2 className="eventos-nome-evento">{evento.nome}</h2>
            </div>
          ))}
        </div>
      </Container>
    </MainContent>
  );
};

export default Eventos;
