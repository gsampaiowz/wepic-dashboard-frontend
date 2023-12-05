import Container from "../../components/Container/Container";
import MyDropdown from "../../components/Dropdown/Dropdown";
import MainContent from "../../components/MainContent/MainContent";
import { eventos } from "./GaleriaDatas";
import { MenuItem } from "@mui/base";
import { Fragment, useContext, useEffect } from "react";
import { myContext } from "../../App";
import "./Galeria.css";
import { Tooltip } from "@mui/material";

const Galeria = () => {
  const { evento, setEvento } = useContext(myContext);

  useEffect(() => {
    document
      .getElementById("galeria-imagens")
      .animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 1000,
        iterations: 1,
      });
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
            {evento === "Selecionar evento" || evento === "Todos" ? (
              eventos.slice(2).map((event, nameIndex) => (
                <div className="evento-images" key={nameIndex}>
                  <Tooltip title={event.descricao}>
                    <h2 className="galeria-titulo-evento">{event.nome}</h2>
                  </Tooltip>
                  <div className="evento-images-flex">
                    {event.images.map((image, imgIndex) => (
                      <img
                        style={{ borderRadius: 10 }}
                        width={200}
                        height={200}
                        key={imgIndex}
                        src={image.link}
                        alt="imagem"
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : evento === "gratuitas" ? (
              <div className="evento-images-flex">
                {eventos.slice(2).map((event) =>
                  event.images
                    .filter((image) => image.free === true)
                    .map((imagem, imgIndex) => (
                      <img
                        style={{ borderRadius: 10 }}
                        width={200}
                        height={200}
                        key={imgIndex}
                        src={imagem.link}
                        alt="imagem"
                      />
                    ))
                )}
              </div>
            ) : (
              <div className="evento-images-flex">
                {eventos
                  .filter((event) => event.nome === evento)
                  .at(0)
                  .images.map((image, imgIndex) => (
                    <img
                      style={{ borderRadius: 10 }}
                      width={200}
                      height={200}
                      key={imgIndex}
                      src={image.link}
                      alt="imagem"
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </MainContent>
  );
};

export default Galeria;
