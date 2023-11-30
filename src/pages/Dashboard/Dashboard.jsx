import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";

import {
  ActivitiesListCard,
  ChartCard,
  CircularChartCard,
  PriceCard,
  TableCard,
} from "./Cards/Cards";
import { BsBarChartLine } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import "./Dashboard.css";
import CardTitle from "./Cards/CardTitle/CardTitle";
import Statistic from "./Cards/Statistic/Statistic";
import { MyLineChart, MyPieChart } from "./Cards/Charts";
import { lineChartDatas } from "./Cards/DashboardDatas";

const Dashboard = () => {
  return (
    <MainContent>
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

                <MyLineChart width={300} height={100} data={lineChartDatas} colors={["#2D2BD4", "#00BAD3"]} />
              </ChartCard>
            </div>
            <div className="dashboard-row">
              <TableCard />
              <CircularChartCard />
            </div>
            <div className="dashboard-row">
              <ChartCard>
                <MyLineChart width={300} height={100} data={lineChartDatas} colors={["#2d2bd4", "#b82257"]} />
                <div className="chart-card__texts">
                  <CardTitle text="Picos de vendas" />

                  <div
                    style={{ flexDirection: "column" }}
                    className="statistics"
                  >
                    <Statistic color="#2d2bd4" text="Equipe" />
                    <Statistic color="#b82257" text="Usuários" />
                  </div>
                </div>
              </ChartCard>
              <ActivitiesListCard />
            </div>
          </div>
        </Container>
    </MainContent>
  );
};

export default Dashboard;
