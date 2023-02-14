import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  connected_clients: Array(15).fill({}),
  connected_slaves: Array(15).fill({}),
  keyspace: Array(15).fill({}),
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

export const fetchBasicActivity = () => (dispatch) => {
  axios
    .get(`http://localhost:3000/basicActivity`)
    .then((res) => res.data)
    .then((data) => {
      dispatch(basicActivitySlice.actions.addToGraph(data));
    });
};

const basicActivitySlice = createSlice({
  name: 'basicActivity',
  initialState: initialState,
  reducers: {
    addToGraph: (state, action) => {
      fillGraph(
        state.connected_clients,
        'clients',
        action.payload.connected_clients
      );
      fillGraph(
        state.connected_slaves,
        'slaves',
        action.payload.connected_slaves
      );
      fillGraph(state.keyspace, 'clients', action.payload.keyspace);
    },
  },
});

export default basicActivitySlice.reducer;
