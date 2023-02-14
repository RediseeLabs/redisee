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
  const keyspace = useSelector((state) => state.basicActivity.keyspace);
  return (
    <BarChart width={730} height={250} data={keyspace}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='value' fill='#8884d8' />
    </BarChart>
  );
}
