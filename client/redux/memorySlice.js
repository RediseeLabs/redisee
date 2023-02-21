import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../helperFunctions';
import axios from 'axios';

const initialState = {
  loading: true,
  used_memory: Array(15).fill({}),
  mem_fragmentation_ratio: Array(15).fill({}),
  evicted_keys: Array(15).fill({}),
};

let cache;
// redux thunk that make a call to server at memory route and call fetch reducer
//data expected : {usedMemory : number, memFragmentationRatio: number, evictedKeys: number}
export const fetchData = (api) => (dispatch, getState) => {
  if (api !== cache) {
    dispatch(memorySlice.actions.clearState());
  }
  // check if the current state is the initial state to trigger loading action
  //propably better way to do it
  // if (JSON.stringify(getState().memory.used_memory[0]) === '{}') {
  // }
  if (JSON.stringify(getState().memory.used_memory[0]) === '{}') {
    dispatch(memorySlice.actions.startLoading());
  }
  axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      console.log('loaded');
      dispatch(memorySlice.actions.addToGraph(data));
      dispatch(memorySlice.actions.stopLoading());
    });
  cache = api;
};

const memorySlice = createSlice({
  name: 'memory',
  initialState: initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    stopLoading: (state, action) => {
      state.loading = false;
    },
    addToGraph: (state, action) => {
      fillGraph(
        state.used_memory,
        't',
        action.payload.usedMemory,
        'used_memory'
      );
      fillGraph(
        state.mem_fragmentation_ratio,
        't',
        action.payload.memFragmentationRatio,
        'mem_fragmentation_ratio'
      );
      fillGraph(
        state.evicted_keys,
        't',
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

export const { startLoading, stopLoading } = memorySlice.actions;

export default memorySlice.reducer;
