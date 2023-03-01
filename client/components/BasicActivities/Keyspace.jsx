import React from 'react';
import { useSelector } from 'react-redux';
import { GraphBox } from '../StyledComponents/GraphGrid';

import {
  BarChart,
  Bar,
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

export default function Latency() {
  const keyspace = useSelector((state) => state.basicActivity.keyspace);
  return (
    <GraphBox>
      <h3>Keyspaces</h3>
      <BarChart
        width={730}
        height={250}
        data={keyspace}
        style={{ position: 'initial' }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis padding={{ top: 20 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey='keyspace' fill='#8884d8' />
      </BarChart>
    </GraphBox>
  );
}
