import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testState: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
