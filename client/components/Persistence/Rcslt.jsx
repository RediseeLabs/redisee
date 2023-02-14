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
  const rcslt = useSelector((state) => state.persistence.rcslt);
  return (
    <BarChart width={730} height={250} data={rcslt}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='rcslt' fill='#8884d8' />
    </BarChart>
  );
}
