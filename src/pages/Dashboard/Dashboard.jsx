import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";

import { ChartCard, PriceCard, TableCard } from "./Cards/Cards";
import { BsBarChartLine } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import "./Dashboard.css";
import CardTitle from "./Cards/CardTitle/CardTitle";
import Statistic from "./Cards/Statistic/Statistic";
import { MyLineChart, MyPieChart } from "./Cards/Charts";

const Dashboard = () => {
  return (
    <MainContent>
      <div className="dashboard">
        <Container>
          <div className="dashboard-flex">
            <div className="dashboard-row">
              <div className="price-card-pair">
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
              </div>

              <div className="price-card-pair">
                <PriceCard
                  iconBackgroundColor={"#6EA1E7"}
                  icon={
                    <AiOutlineClockCircle
                      size={22}
                      color="var(--color-white)"
                    />
                  }
                  price={53009}
                />
                <PriceCard
                  iconBackgroundColor={"#EFC375"}
                  icon={<AiOutlineUser size={22} color="var(--color-white)" />}
                  price={53009}
                />
              </div>
            </div>
            <div className="dashboard-row">
              <ChartCard>
                <div className="chart-card__texts">
                  <CardTitle text="Uploads e downloads" />

                  <div className="statistics">
                    <Statistic color="#470CA6" text="Upload" />
                    <Statistic color="#5ACB0D" text="Pagos" />
                    <Statistic color="#B82257" text="Gratuitos" />
                  </div>
                </div>

                <MyPieChart />
              </ChartCard>
              <ChartCard>
                <div className="chart-card__texts">
                  <CardTitle text="Consumo da API" />

                  <div className="statistics">
                    <Statistic color="#00BAD3" text="Armazenamento" />
                    <Statistic color="#2D2BD4" text="Requisições" />
                  </div>
                </div>

                <MyLineChart />
              </ChartCard>
            </div>
          </div>
          <div className="dashboard-row">
            <TableCard />
          </div>
        </Container>
      </div>
    </MainContent>
  );
};

export default Dashboard;
