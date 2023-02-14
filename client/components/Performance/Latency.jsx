import React from 'react';
import { useSelector } from 'react-redux';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function Latency() {
  const latency = useSelector((state) => state.performance.latency);
  return (
    <BarChart width={730} height={250} data={latency}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='Live Redis Latency' fill='#8884d8' />
    </BarChart>
  );
}
