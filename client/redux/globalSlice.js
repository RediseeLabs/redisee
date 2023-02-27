import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  clients: [],
  selectClient: '',
  loading: true,
  showForm: false,
  theme: 'light',
  message: null,
};

export const addOneRedis = (form) => (dispatch, getState) => {
  axios
    .post(`http://localhost:3000/connection`, form)
    .then((res) => {
      const { setMessage, closeForm } = globalSlice.actions;
      dispatch(setMessage({ type: 'succeed', content: res.data }));
      dispatch(closeForm());
      dispatch(fetchClients());
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'error', content: err.response.data }));
    });
};

export const fetchClients = () => (dispatch, getState) => {
  axios
    .get(`http://localhost:3000/connection`)
    .then((res) => res.data)
    .then((data) => {
      dispatch(globalSlice.actions.getClients(data));
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'error', content: err.response.data }));
    });
};

export const deleteOne = (value) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:3000/connection/deleteOne/${value}`)
    .then((res) => {
      dispatch(globalSlice.actions.deleteOne(value));
      dispatch(setMessage({ type: 'succeed', content: res.data }));
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'error', content: err.response.data }));
    });
};

export const deleteMany = (value) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:3000/connection/deleteMany`)
    .then((res) => {
      dispatch(globalSlice.actions.deleteMany());
      dispatch(setMessage({ type: 'succeed', content: res.data }));
    })
    .catch((err) => {
      dispatch(setMessage({ type: 'errors', content: err.response.data }));
    });
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    stopLoading: (state, action) => {
      state.loading = false;
    },
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
    setMessage: (state, action) => {
      state.message = {};
      state.message.type = action.payload.type;
      state.message.content = action.payload.content;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
  },
});

export const {
  setMessage,
  clearMessage,
  startLoading,
  stopLoading,
  getClients,
  selectClient,
  showForm,
  closeForm,
  themeToggle,
} = globalSlice.actions;

export default globalSlice.reducer;
