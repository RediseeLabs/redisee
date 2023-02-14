import { createSlice } from "@reduxjs/toolkit";
import { fillGraph } from "../helperFunctions";
import axios from "axios";

const initialState = {
  latency: Array(15).fill({}),
  iops: Array(15).fill({}),
  //   hitRate: Array(2).fill({}),
  hitRate: [
    { name: "keyspace_hits", value: 0, fill: "#00C49F" },
    { name: "keyspace_misses", value: 0, fill: "#FF8042" },
  ],
  ratio: "0%",
};

export const fetchPerformanceData = () => (dispatch) =>
  [
    axios
      .get("http://localhost:3000/performance")
      .then((res) => res.data)
      .then((data) => {
        dispatch(performanceSlice.actions.addToGraph(data));
      }),
  ];

const performanceSlice = createSlice({
  name: "performance",
  initialState: initialState,
  reducers: {
    enqueue: (state, action) => {
      //updating graphs
      //   state.latency = [...state.latency, action.payload.latency];
      state.latency = [
        ...state.latency,
        { ...reChartsTemplate, name: "latency", uv: action.payload.latency },
      ];
      state.iops = [...state.iops, action.payload.iops];
      state.hitRate = [...state.hitRate, action.payload.hitRate];
    },
  },
});

export default performanceSlice.reducer;
