import React from "react";
import { GraphBox } from "../StyledComponents/GraphGrid";
import { useSelector } from "react-redux";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function connectedClients() {
  const connectedClient = useSelector(
    (state) => state.basicActivity.connected_clients
  );
  return (
    <GraphBox>
      <h3>Connected Client</h3>
      <LineChart
        width={500}
        height={300}
        data={connectedClient}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis padding={{ top: 20 }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="connected_clients"
          stroke="#8884d8"
          strokeDasharray="5 5"
        />
      </LineChart>
    </GraphBox>
  );
}
