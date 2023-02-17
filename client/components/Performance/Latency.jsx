import React from "react";
import { GraphBox } from "../StyledComponents/GraphGrid";
import { useSelector } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Latency() {
  const latency = useSelector((state) => state.performance.latency);
  console.log(latency);
  return (
    <GraphBox>
      <h3> Latency</h3>
      <ResponsiveContainer width="90%" height={300}>
        <BarChart width={730} height={250} data={latency}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Live_Redis_latency" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </GraphBox>
  );
}
