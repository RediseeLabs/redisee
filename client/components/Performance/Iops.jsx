import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function Iops() {
  const iops = useSelector((state) => state.performance.iops);
  return (
    <div>
      <h2>Instantaneous_ops_per_sec</h2>
      <AreaChart
        width={730}
        height={250}
        data={iops}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='time' />
        <YAxis padding={{ top: 20 }} />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='iops'
          stroke='#8884d8'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </div>
  );
}
