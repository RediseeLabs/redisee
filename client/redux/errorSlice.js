import { createSlice } from "@reduxjs/toolkit";
import { fillGraph } from "../helperFunctions";
import axios from "axios";

const initialState = {
  loading: true,
  rejected_connections: Array(15).fill({}),
  keyspace_missed: Array(15).fill({}),
};

export const errorFetch = () => (dispatch, getState) => {
  if (JSON.stringify(getState().error.rejected_connections[0]) === "{}") {
    dispatch(errorSlice.actions.startLoading());
  }
  axios
    .get("http://localhost:3000/error")
    .then((res) => res.data)
    .then((data) => {
      dispatch(errorSlice.actions.addToGraph(data));
      dispatch(errorSlice.actions.stopLoading());
    });
};

const errorSlice = createSlice({
  name: "error",
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
        state.latency,
        "latency",
        action.payload.latency,
        "Live_Redis_latency"
      );
      fillGraph(state.iops, "iops", action.payload.iops, "iops");
      state.hitRate[0].value = Number(action.payload.hitRate.keyspace_hits);
      state.hitRate[1].value = Number(action.payload.hitRate.keyspace_misses);
      state.ratio = `${Number(action.payload.hitRate.ratio).toFixed(3)}%`;
    },
  },
});
export const { startLoading, stopLoading } = errorSlice.actions;

export default errorSlice.reducer;
