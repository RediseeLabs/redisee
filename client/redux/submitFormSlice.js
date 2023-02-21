import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalInstances: [],
};
export const submitForm = (e) => {
  e.preventDefault();

  //values need to be dynamic, from input box
  axios
    .post('http://localhost:3000/newInstance', {
      username: 'garrett',
      password: 123,
      port: 1,
      host: '127.0.0.1:6379',
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
