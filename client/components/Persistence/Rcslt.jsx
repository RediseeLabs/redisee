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

/*    - graph component: displays only the graph
      - it gets the data array from the redux store every 
        time it changes, and renders on the graphs 
*/

export default function Rcslt() {
  const rcslt = useSelector((state) => state.persistence.rcslt);
  return (
    <GraphBox>
      <h3>Rcslt</h3>
      <ResponsiveContainer width="90%" height={300}>
        <BarChart width={730} height={250} data={rcslt}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rcslt" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </GraphBox>
  );
}
