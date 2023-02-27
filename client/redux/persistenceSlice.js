import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fillGraph } from '../helperFunctions';
import { setMessage } from './globalSlice';

const initialState = {
  loading: true,
  rlst: Array(15).fill({}),
  rcslt: Array(15).fill({}),
};

export const fectchPersistence = (api) => (dispatch, getState) => {
  if (JSON.stringify(getState().persistence.rlst[0]) === '{}') {
    dispatch(persistenceSlice.actions.startLoading());
  }
  axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      dispatch(persistenceSlice.actions.addToGraph(data));
      dispatch(persistenceSlice.actions.stopLoading());
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'error', content: err.response.data }));
    });
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
