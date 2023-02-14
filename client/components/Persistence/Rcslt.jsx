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

export default function Rcslt() {
  const rlst = useSelector((state) => state.persistence.rlst);
  return (
    <BarChart width={730} height={250} data={rlst}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='Rdb change since last save time' fill='#8884d8' />
    </BarChart>
  );
}
