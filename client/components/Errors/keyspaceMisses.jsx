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

/*    - graph component: displays only the graph
      - it gets the data array from the redux store every 
        time it changes, and renders on the graphs 
*/

export default function KeyspaceMisses() {
  const keyspaceMisses = useSelector((state) => state.error.keyspace_missed);
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
