import Container from "../../components/Container/Container";
import MyDropdown from "../../components/Dropdown/Dropdown";
import MainContent from "../../components/MainContent/MainContent";
import { eventos } from "./GaleriaDatas";
import { MenuItem } from "@mui/base";
import { Fragment, useContext, useEffect } from "react";
import { myContext } from "../../App";
import "./Galeria.css";

const Galeria = () => {
  const { evento, setEvento } = useContext(myContext);

  useEffect(() => {
    document.getElementById("galeria-imagens").animate(
      [
        { opacity: "0" },
        { opacity: "1"},
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );
  }, [evento]);

  return (
    <MainContent>
      <Container>
        <div className="galeria-flex">
          <MyDropdown
            array={eventos}
            iconColor={"var(--color-white)"}
            titulo={evento}
            menuClass="dropdown-menu-galeria"
          >
            {eventos.map((option, menuIndex) => (
              <MenuItem
                onClick={() => setEvento(option.nome)}
                className="CustomMenuIntroduction--item"
                key={menuIndex}
              >
                {option.nome}
              </MenuItem>
            ))}
          </MyDropdown>
          <div id="galeria-imagens" className="galeria-imagens">
            {evento === "Selecionar evento" || evento === "Todos"
              ? eventos.slice(1).map((event, nameIndex) => (
                  <Fragment key={nameIndex}>
                    <p>{event.nome}</p>
                    {event.images.map((image, imgIndex) => (
                      <img key={imgIndex} src={image} alt="imagem" />
                    ))}
                  </Fragment>
                ))
              : eventos
                  .filter((event) => event.nome === evento)
                  .at(0)
                  .images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="imagem" />
                  ))}
          </div>
        </div>
      </Container>
    </MainContent>
  );
};

export default Galeria;
