import "./Eventos.css";
import MainContent from "./../../components/MainContent/MainContent";
import { Container } from "@mui/material";
import { useContext } from "react";
import { myContext } from "../../App";

const Eventos = () => {
  const { evento, setEvento } = useContext(myContext);

  return (
    <MainContent>
      <Container>
        <div className="eventos-flex">
              
        </div>
      </Container>
    </MainContent>
  );
};

export default Eventos;
