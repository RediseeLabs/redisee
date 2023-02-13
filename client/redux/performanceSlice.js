import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latency: [],
  iops: [],
  hitRate: [],
};

const reChartsTemplate = {
  name: 'example',
  uv: 1000,
};

const performanceSlice = createSlice({
  name: 'performance',
  initialState: initialState,
  reducers: {
    enqueue: (state, action) => {
      //   state.latency = [...state.latency, action.payload.latency];
      state.latency = [
        ...state.latency,
        { ...reChartsTemplate, name: 'latency', uv: action.payload.latency },
      ];
      state.iops = [...state.iops, action.payload.iops];
      state.hitRate = [...state.hitRate, action.payload.hitRate];
    },
  },
});

export const { enqueue } = performanceSlice.actions;
export default performanceSlice.reducer;
