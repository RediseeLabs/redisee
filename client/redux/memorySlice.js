import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../graphHelperFunctions';
import { setMessage } from './globalSlice';
import axios from 'axios';
import { clock } from '../clockHelperFunction';

/*    - slice of store that store memory related data and actions */

const initialState = {
  startedTime: null,
  loading: true,
  used_memory: Array(15).fill({}),
  mem_fragmentation_ratio: Array(15).fill({}),
  evicted_keys: Array(15).fill({}),
};

/*    - because reducer doesn't allow async action, we use redux thunk
      - redux thunk that make a call to server at memory route and call fetch reducer
      - data expected : { usedMemory : number, memFragmentationRatio: number, evictedKeys: number }
      - then dispatch add to graph action with returned data
*/

export const fetchData = (api) => (dispatch, getState) => {
  /*  - check if its the first call, if it is change the loading state to be true */
  if (JSON.stringify(getState().memory.used_memory[0]) === '{}') {
    dispatch(memorySlice.actions.startLoading());
    dispatch(memorySlice.actions.setStartTime());
  }
  axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      dispatch(memorySlice.actions.addToGraph(data));
      dispatch(memorySlice.actions.stopLoading());
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'error', content: err.response.data }));
    });
};

export const memorySlice = createSlice({
  name: 'memory',
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
      /*    - use helper function to change stored data that will be read by the graph */
      fillGraph(
        state.used_memory,
        clock(Date.now() / 1000 - state.startedTime),
        action.payload.usedMemory,
        'used_memory'
      );
      fillGraph(
        state.mem_fragmentation_ratio,
        clock(Date.now() / 1000 - state.startedTime),
        action.payload.memFragmentationRatio,
        'mem_fragmentation_ratio'
      );
      fillGraph(
        state.evicted_keys,
        clock(Date.now() / 1000 - state.startedTime),
        action.payload.evictedKeys,
        'evicted_keys'
      );
    },
    clearState: (state, action) => {
      state.loading = true;
      state.used_memory = Array(15).fill({});
      state.mem_fragmentation_ratio = Array(15).fill({});
      state.evicted_keys = Array(15).fill({});
    },
  },
});

export const { startLoading, stopLoading, clearState } = memorySlice.actions;

export default memorySlice.reducer;
