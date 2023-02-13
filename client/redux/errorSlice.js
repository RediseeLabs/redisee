import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rejected_connections: [],
  keyspace_missed: [],
};

const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {},
});

export const {} = errorSlice.actions;
export default errorSlice.reducer;
