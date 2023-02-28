import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GraphBox } from '../StyledComponents/GraphGrid';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

/*    - graph component: displays only the graph
      - it gets the data array from the redux store every 
        time it changes, and renders on the graphs 
*/

export default function App() {
  const hitRate = useSelector((state) => state.performance.hitRate);
  const ratio = useSelector((state) => state.performance.ratio);
  const displayratio = Number(ratio).toFixed(1);

  console.log(ratio);
  console.log(displayratio);
  console.log(hitRate);
  return (
    <GraphBox>
      <h3>Hit/Rate Ratio</h3>
      <ResponsiveContainer height={300}>
        <PieChart style={{ position: 'initial' }} width={400} height={200}>
          <Pie
            dataKey='value'
            startAngle={180}
            endAngle={0}
            data={hitRate}
            cy={275}
            outerRadius={80}
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div>{`Hit/Miss`}</div>
      <div>{`ratio is ${displayratio}%`}</div>
    </GraphBox>
  );
}
