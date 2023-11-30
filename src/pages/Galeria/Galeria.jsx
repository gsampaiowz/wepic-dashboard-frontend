import Container from "../../components/Container/Container";
import MyDropdown from "../../components/Dropdown/Dropdown";
import MainContent from "../../components/MainContent/MainContent";
import { eventos } from "./GaleriaDatas";
import "./Galeria.css";
import { MenuItem } from "@mui/base";
import { useState } from "react";

const Galeria = () => {
  const [evento, setEvento] = useState("evento1");
  return (
    <MainContent>
      <Container>
        <div className="galeria-flex">
          <MyDropdown
            array={eventos}
            iconColor={"var(--color-white)"}
            titulo={"Selecionar evento"}
          >
            {eventos.map((option, index) => (
              <MenuItem
                onClick={() => setEvento(option.nome)}
                className="CustomMenuIntroduction--item"
                key={index}
              >
                {option.nome}
              </MenuItem>
            ))}
          </MyDropdown>
          <div className="galeria-imagens" >
            {eventos
              .filter((event) => event.nome === evento).at(0).images
              .map((image, index) => (
                <img key={index} src={image} alt="imagem" />
              ))}
          </div>
        </div>
      </Container>
    </MainContent>
  );
};

export default Galeria;
