import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GraphBox } from '../StyledComponents/GraphGrid';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function KeyspaceMisses() {
  console.log('keyspace loading');

  const keyspaceMisses = useSelector((state) => state.error.keyspace_missed);

  console.log(`KEYSPACEMISSES: ${keyspaceMisses[0]}`);
  return (
    <GraphBox>
      <h3>Keyspace Misses</h3>
      <LineChart
        width={500}
        height={300}
        data={keyspaceMisses}
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

        <Line type='monotone' dataKey='keyspace_misses' stroke='#82ca9d' />
      </LineChart>
    </GraphBox>
  );
}
