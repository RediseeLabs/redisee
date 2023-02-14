import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../helperFunctions';
import axios from 'axios';

const initialState = {
  latency: Array(15).fill({}),
  iops: Array(15).fill({}),
  //   hitRate: Array(2).fill({}),
  hitRate: [
    { name: 'keyspace_hits', value: 0, fill: '#00C49F' },
    { name: 'keyspace_misses', value: 0, fill: '#FF8042' },
  ],
  ratio: '0%',
};

const reChartsTemplate = {
  name: 'example',
  uv: 1000,
};

export const fetchPerformanceData = () => (dispatch) =>
  [
    axios
      .get('http://localhost:3000/performance')
      .then((res) => res.data)
      .then((data) => {
        dispatch(performanceSlice.actions.addToGraph(data));
      }),
  ];

const performanceSlice = createSlice({
  name: 'performance',
  initialState: initialState,
  reducers: {
    addToGraph: (state, action) => {
      fillGraph(state.latency, 'latency', action.payload.latency);
      fillGraph(state.iops, 'iops', action.payload.iops);
      state.hitRate[0].value = Number(action.payload.hitRate.keyspace_hits);
      state.hitRate[1].value = Number(action.payload.hitRate.keyspace_misses);
      console.log(action.payload);
      state.ratio = `${action.payload.hitRate.ratio.toFixed(3)}%`;
    },
  },
});

export default performanceSlice.reducer;
