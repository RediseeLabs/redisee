import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
}


const globalSlice = createSlice ({
  name: 'global',
  initialState: initialState,
  reducers: {
    startLoading: (state, action ) => {
      state.loading = true;
    },
    stopLoading: (state, action ) => {
      state.loading = false;
    },
  },
})

export default globalSlice.reducer;