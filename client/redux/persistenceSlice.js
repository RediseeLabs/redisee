import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fillGraph } from '../helperFunctions';

const initialState = {
  rlst: Array(15).fill({}),
  rcslt: Array(15).fill({}),
};

export const fectchPersistence = () => (dispatch) => {
  axios
    .get('http://localhost:3000/persistence')
    .then((res) => res.data)
    .then((data) => {
      dispatch(persistenceSlice.actions.addToGraph(data));
    });
};

const persistenceSlice = createSlice({
  name: 'persistence',
  initialState: initialState,
  reducers: {
    addToGraph: (state, action) => {
      fillGraph(state.rlst, 'rlst', action.payload.rlst, 'rlst');
      fillGraph(state.rcslt, 'rcslt', action.payload.rcslt, 'rcslt');
    },
  },
});

export default persistenceSlice.reducer;
