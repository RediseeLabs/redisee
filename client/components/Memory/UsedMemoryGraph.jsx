import React, { useEffect } from "react";
import { GraphBox } from "../StyledComponents/GraphGrid";
import { useSelector, useDispatch } from "react-redux";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UsedMemoryGraph = () => {
  const usedMemory = useSelector((state) => state.memory.used_memory);
  return (
    <GraphBox>
      <h3>Used Memory</h3>
      <ResponsiveContainer width="90%" height={300}>
        <AreaChart
          width={450}
          height={250}
          data={usedMemory}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis padding={{ top: 20 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="used_memory"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphBox>
  );
};

export default UsedMemoryGraph;
