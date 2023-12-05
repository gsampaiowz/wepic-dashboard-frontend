import "./Equipe.css";
import Container from "./../../components/Container/Container";
import MainContent from "./../../components/MainContent/MainContent";
import MembroCard from "./MembroCard/MembroCard";

const Equipe = () => {
  const equipe = [
    {
      nome: "Fulano",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis ultricies.",
      image: "https://picsum.photos/200/300",
    },
    {
      nome: "Fulano2",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis ultricies.",
      image: "https://picsum.photos/200/300",
    },
    {
      nome: "Fulano3",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis ultricies.",
      image: "https://picsum.photos/200/300",
    },
    {
      nome: "Fulano4",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis ultricies.",
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <MainContent>
      <Container>
            <div className="membros-flex">
              {equipe.map((membro) => (
                <MembroCard
                  key={membro.nome}
                  nome={membro.nome}
                  image={membro.image}
                  descricao={membro.descricao}
                />
              ))}
            </div>
      </Container>
    </MainContent>
  );
};

export default Equipe;
