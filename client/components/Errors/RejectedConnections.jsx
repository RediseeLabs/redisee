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

export default function RejectedConnections() {
  const rejectedConnections = useSelector(
    (state) => state.error.rejected_connections
  );
  return (
    <GraphBox>
      <h3>Rejected Connections</h3>
      <LineChart
        width={500}
        height={300}
        data={rejectedConnections}
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

        <Line type='monotone' dataKey='rejected_connections' stroke='#82ca9d' />
      </LineChart>
    </GraphBox>
  );
}
