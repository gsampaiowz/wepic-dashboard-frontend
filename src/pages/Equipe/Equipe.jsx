import "./Equipe.css";
import Container from "./../../components/Container/Container";
import MainContent from "./../../components/MainContent/MainContent";
import MembroCard from "./MembroCard/MembroCard";
import { useContext } from "react";
import equipe from "./EquipeData";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Equipe = () => {
  const { setMembro, membro } = useContext(myContext);

  const navigate = useNavigate();

  return (
    <MainContent>
      <Container>
        <div className="membros">
          {equipe.map((_membro, index) => (
            <MembroCard
              onClick={() => {
                setMembro(_membro.nome);
                navigate("/detalhes-membro");
                localStorage.setItem("membro", membro);
              }}
              key={index}
              nome={_membro.nome}
              image={_membro.image}
              descricao={_membro.descricao}
            />
          ))}
        </div>
      </Container>
    </MainContent>
  );
};

export default Equipe;
