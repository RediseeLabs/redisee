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
    .get(`http://localhost:3000/connection`)
    .then((res) => res.data)
    .then((data) => {
      dispatch(globalSlice.actions.getClients(data));
    });
};

export const deleteOne = (value) => (dispatch, getState) => {
  console.log(value);
  axios.delete(`http://localhost:3000/connection/${value}`).then((res) => {
    //get updated clients back and update clients in globalSlice
    // dispatch(globalSlice.actions.getClients());
    console.log('Delete hit here');
    dispatch(globalSlice.actions.deleteOne(value));
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
      showForm = false;
    },
    deleteOne: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client !== action.payload
      );
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
