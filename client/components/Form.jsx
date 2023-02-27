import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getClients, closeForm } from '../redux/globalSlice';
import { FormModal, Input, SubmitBtn } from './StyledComponents/Form';
import { Button } from './StyledComponents/GlobalStyle';
import axios from 'axios';

function Form() {
  const [redisName, typeRedisName] = useState('');
  const [port, typePort] = useState('');
  const [host, typeHost] = useState('');
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
    axios
      .post('http://localhost:3000/connection', {
        redisName,
        port,
        host,
      })
      .then((res) => 'test')
      .catch((err) => console.log(err));
    typeRedisName('');
    typePort('');
    typeHost('');
  };

  return (
    <FormModal onClick={() => dispatch(closeForm())}>
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Connect with your Redis</h2>
        <label>Redis Name:</label>
        <br />
        <Input
          type="text"
          value={redisName}
          required
          onChange={(e) => {
            redisNameChange(e);
          }}
        />
        <br />

        <label>Port:</label>
        <br />
        <Input
          type="number"
          value={port}
          required
          onChange={(e) => {
            portChange(e);
          }}
        />
        <br />
        <label>Host:</label>
        <br />
        <Input
          type="text"
          value={host}
          required
          onChange={(e) => {
            hostChange(e);
          }}
        />
        <br />
        <SubmitBtn
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </SubmitBtn>
      </form>
    </FormModal>
  );
}

export default Form;
