import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rlst: Array(15).fill({}),
  rcslt: Array(15).fill({}),
};

const persistenceSlice = createSlice({
  name: 'persistence',
  initialState: initialState,
  reducers: {},
});

export const {} = persistenceSlice.actions;
export default persistenceSlice.reducer;
