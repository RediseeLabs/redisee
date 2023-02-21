import { configureStore } from '@reduxjs/toolkit';
import performance from './performanceSlice';
import memory from './memorySlice';
import basicActivity from './basicActivitySlice';
import persistence from './persistenceSlice';
import error from './errorSlice';
import global from './globalSlice';
// import submitForm from './submitFormSlice';

export const store = configureStore({
  reducer: {
    global,
    performance,
    memory,
    basicActivity,
    persistence,
    error,
    // submitForm,
  },
});
