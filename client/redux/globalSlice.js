import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    stopLoading: (state, action) => {
      state.loading = false;
    },
  },
});

//export const { startLoading, stopLoading } = globalSlice.actions;
export default globalSlice.reducer;
