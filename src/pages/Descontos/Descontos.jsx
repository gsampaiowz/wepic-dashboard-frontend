import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";

const Descontos = () => {
  return (
    <MainContent>
      <Container>
        <div className="descontos-flex">
          <h1 style={{ color: "var(--color-orange)", fontWeight: "bold" }}>
            Nossos Descontos
          </h1>
          
        </div>
      </Container>
    </MainContent>
  );
};

export default Descontos;
