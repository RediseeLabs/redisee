import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GraphBox } from '../StyledComponents/GraphGrid';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/*    - graph component: displays only the graph
      - it gets the data array from the redux store every 
        time it changes, and renders on the graphs 
*/

const EvictedKeys = (props) => {
  const evictedKeys = useSelector((state) => state.memory.evicted_keys);
  return (
    <GraphBox>
      <h3>Evicted Keys</h3>
      <ResponsiveContainer width="90%" height={300}>
        <AreaChart
          width={600}
          height={250}
          data={evictedKeys}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis padding={{ top: 20 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="evicted_keys"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphBox>
  );
};

export default EvictedKeys;
