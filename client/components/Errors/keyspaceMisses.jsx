import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const KeyspaceMisses = (props) => {
  console.log('keyspace loading')

  const keyspaceMisses = useSelector(
    (state) => 
   state.error.keyspaceMisses

  );

  //console.log('KeyspaceMisses', keyspaceMisses)



  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={keyspaceMisses}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="uv" 
          stroke="#8884d8" 
          fill="#8884d8" />
        </AreaChart>
    </ResponsiveContainer>
  );
}

export default KeyspaceMisses;
