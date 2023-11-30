import { pieChartDatas } from "./DashboardDatas";
import { PieChart, Pie, LineChart, Line, Cell, Tooltip } from "recharts";

export const MyPieChart = () => {
  return (
    <PieChart width={100} height={100}>
      <Pie
        data={pieChartDatas.dataPie}
        cx={"50%"}
        cy={"50%"}
        outerRadius={50}
        dataKey="value"
      >
        {pieChartDatas.dataPie.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={
              pieChartDatas.pieColors[index]
            }
          />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          borderRadius: 10,
          fontSize: 14,
          padding: "5px 10px",
        }}
      />
    </PieChart>
  );
};

export const MyLineChart = ({width, height, data, colors = []}) => {
  return (
    <LineChart width={width} height={height} data={data}>
      <Line
        type="monotone"
        dataKey="pv"
        stroke={colors[0]}
        // stroke="#2D2BD4"
        strokeWidth={3}
        dot={null}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke={colors[1]}
        // stroke="#00BAD3"
        strokeWidth={3}
        dot={null}
      />
    </LineChart>
  );
};
