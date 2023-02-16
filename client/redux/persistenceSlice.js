import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fillGraph } from '../helperFunctions';

const initialState = {
  loading: true,
  rlst: Array(15).fill({}),
  rcslt: Array(15).fill({}),
};

export const fectchPersistence = () => (dispatch, getState) => {
  if (JSON.stringify(getState().persistence.rlst[0]) === "{}") {
    dispatch(persistenceSlice.actions.startLoading());
  }
  axios
    .get('http://localhost:3000/persistence')
    .then((res) => res.data)
    .then((data) => {
      dispatch(persistenceSlice.actions.addToGraph(data));
      dispatch(persistenceSlice.actions.stopLoading());
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
  },
});

export const { startLoading, stopLoading } = persistenceSlice.actions;

export default persistenceSlice.reducer;
