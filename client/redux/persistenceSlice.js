import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rlst: Array(15).fill({}),
  rcslt: Array(15).fill({}),
};
const fillGraph = (graphArr, XaxisName, value) => {
  let flag = false;
  for (let i = 0; i < graphArr.length; i++) {
    if (JSON.stringify(graphArr[i]) === '{}') {
      graphArr[i] = { time: XaxisName, value: value };
      flag = true;
      break;
    }
  }
  if (!flag) {
    graphArr.shift();
    graphArr.push({ time: XaxisName, value: value });
  }
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
      fillGraph(state.rlst, 'rlst', action.payload.rlst);
      fillGraph(state.rcslt, 'rcslt', action.payload.rcslt);
    },
  },
});

export default persistenceSlice.reducer;
