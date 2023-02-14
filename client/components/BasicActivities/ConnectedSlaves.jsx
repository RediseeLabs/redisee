import React from 'react';
import { useSelector } from 'react-redux';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function connectedSlaves() {
  const connectedSlaves = useSelector(
    (state) => state.basicActivity.connected_slaves
  );
  return (
    <LineChart
      width={500}
      height={300}
      data={connectedSlaves}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='Connected Slaves'
        stroke='#8884d8'
        strokeDasharray='5 5'
      />
    </LineChart>
  );
}
