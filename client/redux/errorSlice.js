import { createSlice } from "@reduxjs/toolkit";
import { fillGraph } from "../helperFunctions";
import axios from "axios";

const initialState = {
  rejected_connections: Array(15).fill({}),
  keyspace_missed: Array(15).fill({}),
};

export const errorFetch = () => (dispatch) => {
  axios
    .get("http://localhost:3000/errors")
    .then((res) => res.data)
    .then((data) => {
      dispatch(errorSlice.actions.addToGraph(data));
    });
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {},
});

export default errorSlice.reducer;
