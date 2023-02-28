import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../helperFunctions.js';
import { setMessage } from './globalSlice.js';
import axios from 'axios';

const initialState = {
  startedTime: null,
  loading: true,
  latency: Array(15).fill({}),
  iops: Array(15).fill({}),
  //   hitRate: Array(2).fill({}),
  hitRate: [
    { name: 'keyspace_hits', value: 0, fill: '#00C49F' },
    { name: 'keyspace_misses', value: 0, fill: '#FF8042' },
    { name: 'keyspace_hits', value: 0, fill: '#00C49F' },
    { name: 'keyspace_misses', value: 0, fill: '#FF8042' },
  ],
  ratio: '0%',
  ratio: '0%',
};
/*    - because reducer doesn't allow async action, we use redux thunk
      - redux thunk that make a call to server at memory route and call fetch reducer
      - then dispatch add to graph action with returned data
*/
export const fetchPerformanceData = (api) => (dispatch, getState) => {
  if (JSON.stringify(getState().performance.latency[0]) === '{}') {
    dispatch(performanceSlice.actions.startLoading());
    dispatch(performanceSlice.actions.setStartTime());
  }
  axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      dispatch(performanceSlice.actions.addToGraph(data));
      dispatch(performanceSlice.actions.stopLoading());
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'error', content: err.response.data }));
    });
};

const performanceSlice = createSlice({
  name: 'performance',
  initialState: initialState,
  reducers: {
    setStartTime: (state, action) => {
      state.startedTime = Date.now() / 1000;
    },
    startLoading: (state, action) => {
      state.loading = true;
    },
    stopLoading: (state, action) => {
      state.loading = false;
    },
    addToGraph: (state, action) => {
      fillGraph(
        state.latency,
        Math.round(Date.now() / 1000 - state.startedTime) + 's',
        action.payload.latency,
        'Live_Redis_latency'
      );
      fillGraph(
        state.iops,
        Math.round(Date.now() / 1000 - state.startedTime) + 's',
        action.payload.iops,
        'iops'
      );
      state.hitRate[0].value = Number(action.payload.hitRate.keyspace_hits);
      state.hitRate[1].value = Number(action.payload.hitRate.keyspace_misses);
      state.ratio = `${Number(action.payload.hitRate.ratio).toFixed(3)}%`;
    },
    clearState: (state, action) => {
      state.loading = true;
      state.latency = Array(15).fill({});
      state.iops = Array(15).fill({});
      state.hitRate = [
        { name: 'keyspace_hits', value: 0, fill: '#00C49F' },
        { name: 'keyspace_misses', value: 0, fill: '#FF8042' },
        { name: 'keyspace_hits', value: 0, fill: '#00C49F' },
        { name: 'keyspace_misses', value: 0, fill: '#FF8042' },
      ];
      state.ratio = '0%';
      state.ratio = '0%';
    },
  },
});

export const { startLoading, stopLoading } = performanceSlice.actions;

export default performanceSlice.reducer;
