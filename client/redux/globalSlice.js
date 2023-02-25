import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  clients: [],
  selectClient: '',
  loading: true,
  showForm: false,
  theme: 'light',
};
export const fetchClients = () => (dispatch, getState) => {
  axios
    .get(`http://localhost:3000/connection`)
    .then((res) => res.data)
    .then((data) => {
      dispatch(globalSlice.actions.getClients(data));
    });
};

export const deleteOne = (value) => (dispatch, getState) => {
  console.log(value);
  axios
    .delete(`http://localhost:3000/connection/deleteOne/${value}`)
    .then((res) => {
      dispatch(globalSlice.actions.deleteOne(value));
    });
};

export const deleteMany = (value) => (dispatch, getState) => {
  axios.delete(`http://localhost:3000/connection/deleteMany`).then((res) => {
    console.log(res.data);
    dispatch(globalSlice.actions.deleteMany());
  });
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    // startLoading: (state, action) => {
    //   state.loading = true;
    // },
    // stopLoading: (state, action) => {
    //   state.loading = false;
    // },
    getClients: (state, action) => {
      state.clients = action.payload;
    },
    selectClient: (state, action) => {
      state.selectClient = action.payload;
    },
    showForm: (state, action) => {
      state.showForm = true;
    },
    closeForm: (state, action) => {
      state.showForm = false;
    },
    deleteOne: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client !== action.payload
      );
    },
    themeToggle: (state, action) => {
      state.theme === 'light'
        ? (state.theme = 'dark')
        : (state.theme = 'light');
    },
    deleteMany: (state, action) => {
      state.clients = [];
    },
  },
});

export const {
  startLoading,
  stopLoading,
  getClients,
  selectClient,
  showForm,
  closeForm,
  themeToggle,
} = globalSlice.actions;

export default globalSlice.reducer;
