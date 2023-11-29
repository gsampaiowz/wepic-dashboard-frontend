import Container from "../../components/Container/Container";
import MyDropdown from "../../components/Dropdown/Dropdown";
import MainContent from "../../components/MainContent/MainContent";

const Galeria = () => {
    return (
        <MainContent>
            <Container>
                <div className="galeria-flex">
                    <MyDropdown className titulo={"Selecionar evento"}/>
                </div>
            </Container>
        </MainContent>
    );
};

export default Galeria;