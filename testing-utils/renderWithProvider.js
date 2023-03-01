import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import performance from '../client/redux/performanceSlice';
import memory from '../client/redux/memorySlice';
import persistence from '../client/redux/persistenceSlice';
import basicActivity from '../client/redux/basicActivitySlice';
import error from '../client/redux/errorSlice';
import global from '../client/redux/globalSlice';
import { BrowserRouter } from 'react-router-dom';

export function renderWithProviders(
  ui,
  {
    route = '/',
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        performance,
        memory,
        persistence,
        basicActivity,
        error,
        global,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
