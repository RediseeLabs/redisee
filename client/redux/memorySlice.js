import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../helperFunctions';
import axios from 'axios';

const initialState = {
  used_memory: Array(15).fill({}),
  mem_fragmentation_ratio: Array(15).fill({}),
  evicted_keys: Array(15).fill({}),
};

// redux thunk that make a call to server at memory route and call fetch reducer
//data expected
//{usedMemory : number, memFragmentationRatio: number, evictedKeys: number}
export const fetchData = () => (dispatch) => {
  axios
    .get(`http://localhost:3000/memory`)
    .then((res) => res.data)
    .then((data) => {
      dispatch(memorySlice.actions.addToGraph(data));
    });
};

const memorySlice = createSlice({
  name: 'memory',
  initialState: initialState,
  reducers: {
    // fetch reducer that add new data to each array of memory state
    addToGraph: (state, action) => {
      fillGraph(state.used_memory, 't', action.payload.usedMemory);
      fillGraph(
        state.mem_fragmentation_ratio,
        't',
        action.payload.memFragmentationRatio
      );
      fillGraph(state.evicted_keys, 't', action.payload.evictedKeys);
    },
  },
});

export const {} = memorySlice.actions;
export default memorySlice.reducer;
