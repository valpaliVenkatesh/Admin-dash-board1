import React, { PureComponent } from "react";
import "./index.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineArrowUp } from "react-icons/ai";

const data = [
  {
    name: "Jan",
    uv: 40,
    pv: 24,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Mar",
    uv: 50,
    pv: 30,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 37,
    pv: 26,
    amt: 2000,
  },
  {
    name: "May",
    uv: 58,
    pv: 48,
    amt: 2181,
  },
  {
    name: "June",
    uv: 36,
    pv: 25,
    amt: 2500,
  },
  {
    name: "July",
    uv: 54,
    pv: 43,
    amt: 2100,
  },
];

export default class AreaChartCard extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <div className="area-chart-outer-container  shadow m-2">
        <div className="area-chart-container" id="area-chart-id-styles">
          <h5>Site Traffic</h5>
          <div className="visitiors-container">
            <div className="new-visitor-container">
              <div className="new-visitor"></div>
              <p>New Visitor</p>
            </div>
            <div className="new-visitor-container">
              <div className="new-visitor old-visitor"></div>
              <p>Old Visitor</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart
              width={700}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              id="chart-container"
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#b9e9f0" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#b9e9f0" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#26d6ed" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#26d6ed" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke=""
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke=""
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="graph-data-container">
          <div className="graph-data-area">
            <h3>45.87M</h3>
            <div className="data-line">
              <p>Overall Visitor</p>
              <AiOutlineArrowUp />
              <p>2.43%</p>
            </div>
          </div>
          <div className="graph-data-area">
            <h3>45.87M</h3>
            <div className="data-line">
              <p>Overall Visitor</p>
              <AiOutlineArrowUp />
              <p>2.43%</p>
            </div>
          </div>
          <div className="graph-data-area1">
            <h3>45.87M</h3>
            <div className="data-line">
              <p>Overall Visitor</p>
              <AiOutlineArrowUp />
              <p>2.43%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
