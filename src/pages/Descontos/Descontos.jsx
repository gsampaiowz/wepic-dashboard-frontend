import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import CardDesconto from "./CardDesconto/CardDesconto";
import "./Descontos.css"

const Descontos = () => {
  return (
    <MainContent>
      <Container>
        <div className="descontos-flex">
          <h1 style={{ color: "var(--color-orange)", fontWeight: "bold" }}>
            Nossos Descontos
          </h1>
          <div className="cards-descontos">
            <CardDesconto
              porcentagem={70}
              descricao={
                "Desconto imperdível para fotos de casamento, aproveite!"
              }
            />
            <CardDesconto
              porcentagem={70}
              descricao={
                "Desconto imperdível para fotos de festas de aniversário, aproveite!"
              }
            />
            <CardDesconto
              porcentagem={70}
              descricao={
                "Desconto imperdível para fotos de shows, aproveite!"
              }
            />
          </div>
        </div>
      </Container>
    </MainContent>
  );
};

export default Descontos;
