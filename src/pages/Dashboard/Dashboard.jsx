import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";

import { PieChartCard, PriceCard } from "../../components/Cards/Cards";
import { BsBarChartLine } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <MainContent>
      <div className="dashboard">
        <Container>
          <div className="dashboard-flex">
            <div className="dashboard-row">
              <PriceCard
                iconBackgroundColor={"#D19AE8"}
                icon={<BsBarChartLine size={22} color="var(--color-white)" />}
                price={53009}
              />
              <PriceCard
                iconBackgroundColor={"#EA9171"}
                icon={
                  <IoBagCheckOutline size={22} color="var(--color-white)" />
                }
                price={53009}
              />
              <PriceCard
                iconBackgroundColor={"#6EA1E7"}
                icon={
                  <AiOutlineClockCircle size={22} color="var(--color-white)" />
                }
                price={53009}
              />
              <PriceCard
                iconBackgroundColor={"#EFC375"}
                icon={<AiOutlineUser size={22} color="var(--color-white)" />}
                price={53009}
              />
            </div>
            <div className="dashboard-row">
              <PieChartCard/>
            </div>
          </div>
        </Container>
      </div>
    </MainContent>
  );
};

export default Dashboard;
