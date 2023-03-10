import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../graphHelperFunctions';
import axios from 'axios';
import { clock } from '../clockHelperFunction';

const initialState = {
  startedTime: null,
  loading: true,
  rejected_connections: Array(15).fill({}),
  keyspace_missed: Array(15).fill({}),
};

let cache;

export const errorFetch = (api) => (dispatch, getState) => {
  if (api !== cache) {
    dispatch(errorSlice.actions.clearState());
  }
  if (JSON.stringify(getState().error.rejected_connections[0]) === '{}') {
    dispatch(errorSlice.actions.setStartTime());
    dispatch(errorSlice.actions.startLoading());
  }
  axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      dispatch(errorSlice.actions.addToGraph(data));
      dispatch(errorSlice.actions.stopLoading());
    });
  cache = api;
};

export const errorSlice = createSlice({
  name: 'error',
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
        state.rejected_connections,
        clock(Date.now() / 1000 - state.startedTime),
        action.payload.rejectedConnection,
        'rejected_connections'
      );
      fillGraph(
        state.keyspace_missed,
        clock(Date.now() / 1000 - state.startedTime),
        action.payload.keyspaceMisses,
        'keyspace_misses'
      );
    },
    clearState: (state, action) => {
      state.loading = true;
      state.rejected_connections = Array(15).fill({});
      state.keyspace_missed = Array(15).fill({});
    },
  },
});
export const { startLoading, stopLoading, clearState } = errorSlice.actions;

export default errorSlice.reducer;
