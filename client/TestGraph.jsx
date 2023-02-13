import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enqueue } from "./redux/performanceSlice";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TestGraph() {
  const state = useSelector((state) => state.performance);
  console.log(state);
  const dispatch = useDispatch();

  function getPerformance() {
    fetch("http://localhost:3000/performance")
      .then((res) => res.json())
      .then((data) => {
        const { latency, iops, hitRate } = data;
        dispatch(
          enqueue({
            latency,
            iops,
            hitRate,
          })
        );
      });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getPerformance();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  //   setInterval(getPerformance, 5000);
  return (
    <div>
      <h1>Testing </h1>
      <ResponsiveContainer width="50%" height="50%">
        <AreaChart
          width={500}
          height={300}
          data={state.latency}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
