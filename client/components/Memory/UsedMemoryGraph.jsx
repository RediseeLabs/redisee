import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const UsedMemoryGraph = () => {
  const usedMemory = useSelector((state) => state.memory.used_memory);
  return (
    <div>
      <h2>Used Memory</h2>
      <AreaChart
        width={730}
        height={250}
        data={usedMemory}
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
          dataKey='used_memory'
          stroke='#8884d8'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </div>
  );
};

export default UsedMemoryGraph;
