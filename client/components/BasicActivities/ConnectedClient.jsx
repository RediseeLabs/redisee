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

export default function connectedClients() {
  const connectedClient = useSelector(
    (state) => state.basicActivity.connected_clients
  );
  console.log(connectedClient);
  return (
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
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='value'
        stroke='#8884d8'
        strokeDasharray='5 5'
      />
    </LineChart>
  );
}
