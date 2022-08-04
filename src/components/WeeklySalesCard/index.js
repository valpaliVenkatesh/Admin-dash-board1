import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import "./index.css";

const data = [
  { name: "Direct", value: 1000 },
  { name: "Afiliate", value: 300 },
  { name: "E-mail", value: 300 },
  { name: "Other", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class WeeklySalesCard extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";
  renderPercentage = (value) => {
    const total = 1000;
    return (600 * 10) / value;
  };

  render() {
    return (
      <div className="shadow p-2" id="pie-chart-container">
        <h4>Weekly Sales</h4>
        <ResponsiveContainer width="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ul className="pie-chart-card">
          {data.map((each, index) => (
            <>
              <li className="pie-chart-data" key={each.id}>
                <div className={`cards weeklycard${index}`}></div>
                <p>{each.name}</p>
                <p>${each.value}</p>
                <p>{this.renderPercentage(each.value)}%</p>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    );
  }
}
