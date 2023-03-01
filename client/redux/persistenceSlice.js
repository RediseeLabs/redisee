import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fillGraph } from '../helperFunctions';
import { setMessage } from './globalSlice';
import { clock } from '../clockHelperFunction';

const initialState = {
  startedTime: null,
  loading: true,
  rlst: Array(15).fill({}),
  rcslt: Array(15).fill({}),
};

export const fectchPersistence = (api) => (dispatch, getState) => {
  if (JSON.stringify(getState().persistence.rlst[0]) === '{}') {
    dispatch(persistenceSlice.actions.startLoading());
    dispatch(persistenceSlice.actions.setStartTime());
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

export const persistenceSlice = createSlice({
  name: 'persistence',
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
        state.rlst,
        clock(Date.now() / 1000 - state.startedTime),
        action.payload.rlst,
        'rlst'
      );
      fillGraph(
        state.rcslt,
        clock(Date.now() / 1000 - state.startedTime),
        action.payload.rcslt,
        'rcslt'
      );
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
