import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connected_clients: [],
  connected_slaves: [],
  keyspace: [],
};

const basicActivitySlice = createSlice({
  name: 'basicActivity',
  initialState: initialState,
  reducers: {},
});

export const {} = basicActivitySlice.actions;
export default basicActivitySlice.reducer;
