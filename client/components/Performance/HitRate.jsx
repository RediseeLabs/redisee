import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export default function App() {
  const hitRate = useSelector((state) => state.performance.hitRate);
  const ratio = useSelector((state) => state.performance.ratio);
  console.log(hitRate);
  return (
    <>
      <PieChart width={400} height={400}>
        <Pie
          dataKey='value'
          startAngle={180}
          endAngle={0}
          data={hitRate}
          cx={200}
          cy={200}
          //   isAnimationActive={false}
          outerRadius={80}
          // fill='#8884d8'
          label
        />
      </PieChart>
      <div>{ratio}</div>
    </>
  );
}
