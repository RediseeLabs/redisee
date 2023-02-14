import { createSlice } from '@reduxjs/toolkit';
import { fillGraph } from '../helperFunctions';
import axios from 'axios';

const initialState = {
  connected_clients: Array(15).fill({}),
  connected_slaves: Array(15).fill({}),
  keyspace: Array(15).fill({}),
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
        action.payload.connected_clients,
        'connected_clients'
      );
      fillGraph(
        state.connected_slaves,
        'slaves',
        action.payload.connected_slaves,
        'connected_slaves'
      );
      fillGraph(state.keyspace, 'clients', action.payload.keyspace, 'keyspace');
    },
  },
});

export default basicActivitySlice.reducer;
