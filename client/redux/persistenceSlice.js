import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rlst: [],
  rcslt: [],
};

const persistenceSlice = createSlice({
  name: 'persistence',
  initialState: initialState,
  reducers: {},
});

export const {} = persistenceSlice.actions;
export default persistenceSlice.reducer;
