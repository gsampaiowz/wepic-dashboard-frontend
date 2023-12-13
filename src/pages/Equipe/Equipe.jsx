import "./Equipe.css";
import Container from "./../../components/Container/Container";
import MainContent from "./../../components/MainContent/MainContent";
import MembroCard from "./MembroCard/MembroCard";
import equipe from "./EquipeData";
import { useNavigate } from "react-router-dom";

const Equipe = () => {

  const navigate = useNavigate();

  return (
    <MainContent>
      <Container>
        <div className="membros">
          {equipe.map((_membro, index) => (
            <MembroCard
              onClick={() => {
                navigate(`/detalhes-membro/${_membro.nome}`);
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
