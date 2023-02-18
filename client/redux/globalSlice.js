import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  clients: [],
  selectClient: '',
  loading: true,
  showForm: false,
};
export const fetchClients = () => (dispatch, getState) => {
  axios
    .get(`http://localhost:3000/connect`)
    .then((res) => res.data)
    .then((data) => {
      dispatch(globalSlice.actions.getClients(data));
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
      state.clients.push(action.payload);
    },
    selectClient: (state, action) => {
      state.selectClient = action.payload;
    },
    showForm: (state, action) => {
      state.showForm = true;
    },
    closeForm: (state, action) => {
      showForm = false;
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
} = globalSlice.actions;

export default globalSlice.reducer;
