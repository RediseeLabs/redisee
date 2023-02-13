import { configureStore } from '@reduxjs/toolkit';
import performance from './performanceSlice';
import memory from './memorySlice';
import basicActivity from './basicActivitySlice';
import persistence from './persistenceSlice';
import error from './errorSlice';

export const store = configureStore({
  reducer: {
    performance,
    memory,
    basicActivity,
    persistence,
    error,
  },
});
