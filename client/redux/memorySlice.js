import { createSlice } from "@reduxjs/toolkit";
import { fillGraph } from "../helperFunctions";
import axios from "axios";

const initialState = {
  loading: true,
  used_memory: Array(15).fill({}),
  mem_fragmentation_ratio: Array(15).fill({}),
  evicted_keys: Array(15).fill({}),
};

// redux thunk that make a call to server at memory route and call fetch reducer
//data expected : {usedMemory : number, memFragmentationRatio: number, evictedKeys: number}
export const fetchData = () => (dispatch, getState) => {
  // check if the current state is the initial state to trigger loading action
  //propably better way to do it
  if (JSON.stringify(getState().memory.used_memory[0]) === "{}") {
    if (JSON.stringify(getState().memory.used_memory[0]) === "{}") {
      dispatch(memorySlice.actions.startLoading());
    }
    axios
      .get(`http://localhost:3000/memory`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(memorySlice.actions.addToGraph(data));
        dispatch(memorySlice.actions.stopLoading());
      });
  }
};

const memorySlice = createSlice({
  name: "memory",
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
        "t",
        action.payload.usedMemory,
        "used_memory"
      );
      fillGraph(
        state.mem_fragmentation_ratio,
        "t",
        action.payload.memFragmentationRatio,
        "mem_fragmentation_ratio"
      );
      fillGraph(
        state.evicted_keys,
        "t",
        action.payload.evictedKeys,
        "evicted_keys"
      );
    },
  },
});

export const { startLoading, stopLoading } = memorySlice.actions;

export default memorySlice.reducer;
