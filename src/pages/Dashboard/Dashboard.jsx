import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import PriceCard from "../../components/PriceCard/PriceCard";
import { BsBarChartLine } from "react-icons/bs";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <MainContent>
      <div className="dashboard">
        <Container>
          <div className="grid">
            <PriceCard backgroundIcon={"#D19AE8"} icon={<BsBarChartLine size={22} color="var(--color-white)"/>} value={"R$53.009"}/>
            <div className="div5"> </div>
            <div className="div6"> </div>
            <div className="div7"> </div>
            <div className="div8"> </div>
            <div className="div9"> </div>
            <div className="div10"> </div>
          </div>
        </Container>
      </div>
    </MainContent>
  );
};

export default Dashboard;
