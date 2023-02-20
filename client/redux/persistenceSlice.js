import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fillGraph } from '../helperFunctions';

const initialState = {
  loading: true,
  rlst: Array(15).fill({}),
  rcslt: Array(15).fill({}),
};

let cache;

export const fectchPersistence = (api) => (dispatch, getState) => {
  if (api !== cache) {
    dispatch(persistenceSlice.actions.clearState());
  }
  if (JSON.stringify(getState().persistence.rlst[0]) === '{}') {
    dispatch(persistenceSlice.actions.startLoading());
  }
  axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      dispatch(persistenceSlice.actions.addToGraph(data));
      dispatch(persistenceSlice.actions.stopLoading());
    });
  cache = api;
};

const persistenceSlice = createSlice({
  name: 'persistence',
  initialState: initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    stopLoading: (state, action) => {
      state.loading = false;
    },
    addToGraph: (state, action) => {
      fillGraph(state.rlst, 'rlst', action.payload.rlst, 'rlst');
      fillGraph(state.rcslt, 'rcslt', action.payload.rcslt, 'rcslt');
    },
    clearState: (state, action) => {
      state.loading = true;
      state.rlst = Array(15).fill({});
      state.rcslt = Array(15).fill({});
    },
  },
});

export const { startLoading, stopLoading } = persistenceSlice.actions;

export default persistenceSlice.reducer;
