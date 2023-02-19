import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { getClients } from '../../redux/globalSlice';
import axios from 'axios';

function Form() {
  const [redisName, typeRedisName] = useState('');
  const [port, typePort] = useState('');
  const [host, typeHost] = useState('');
  console.log(redisName + port + host);
  const dispatch = useDispatch();

  const redisNameChange = (e) => {
    typeRedisName(e.target.value);
  };
  const portChange = (e) => {
    typePort(e.target.value);
  };
  const hostChange = (e) => {
    typeHost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hanled');
    axios
      .post('http://localhost:3000/connection', {
        redisName,
        port,
        host,
      })
      //Need change this function
      // .then((res) => dispatch(getClients(res.data)))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // axios
    //   .get('http://localhost:3000/connection', {})
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    typeRedisName('');
    typePort('');
    typeHost('');
  };
  return (
    <div className='form'>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Redis Name:</label>
        <br />
        <input
          type='text'
          value={redisName}
          required
          onChange={(e) => {
            redisNameChange(e);
          }}
        />
        <br />

        <label>port:</label>
        <br />
        <input
          type='number'
          value={port}
          required
          onChange={(e) => {
            portChange(e);
          }}
        />
        <br />

        <label>host:</label>
        <br />
        <input
          type='text'
          value={host}
          required
          onChange={(e) => {
            hostChange(e);
          }}
        />
        <br />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Form;
