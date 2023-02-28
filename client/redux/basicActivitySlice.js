import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../helperFunctions';
import axios from 'axios';
import { setMessage } from './globalSlice';

const initialState = {
  loading: true,
  startedTime: null,
  connected_clients: Array(15).fill({}),
  connected_slaves: Array(15).fill({}),
  keyspace: Array(15).fill({}),
};

let cache;

export const fetchBasicActivity = (api) => (dispatch, getState) => {
  if (JSON.stringify(getState().basicActivity.connected_clients[0]) === '{}') {
    dispatch(basicActivitySlice.actions.startLoading());
    dispatch(basicActivitySlice.actions.setStartTime());
  }
  axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      dispatch(basicActivitySlice.actions.addToGraph(data));
      dispatch(basicActivitySlice.actions.stopLoading());
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'error', content: err.response.data }));
    });
};

const basicActivitySlice = createSlice({
  name: 'basicActivity',
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
        state.connected_clients,
        Math.round(Date.now() / 1000 - state.startedTime) + 's',
        action.payload.connected_clients,
        'connected_clients'
      );
      fillGraph(
        state.connected_slaves,
        Math.round(Date.now() / 1000 - state.startedTime) + 's',
        action.payload.connected_slaves,
        'connected_slaves'
      );
      fillGraph(
        state.keyspace,
        Math.round(Date.now() / 1000 - state.startedTime) + 's',
        action.payload.keyspace,
        'keyspace'
      );
    },
    clearState: (state, action) => {
      state.loading = true;
      state.connected_clients = Array(15).fill({});
      state.connected_slaves = Array(15).fill({});
      state.keyspace = Array(15).fill({});
    },
  },
});
export const { startLoading, stopLoading } = basicActivitySlice.actions;

export default basicActivitySlice.reducer;
