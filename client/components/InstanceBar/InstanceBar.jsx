import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getClients,
  showForm,
  selectClient,
  deleteOne,
  fetchClients,
} from '../../redux/globalSlice';
import Form from '../SubmitForm/Form';
import { Button, MiniButton } from '../StyledComponents/SideBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const InstanceBar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  const instances = useSelector((state) => state.global.clients);
  const show = useSelector((state) => state.global.showForm);
  const selectInstance = useSelector((state) => state.global.selectedClient);

  let allInstance = [];

  // function handleClearAll() {
  //   console.log('Clicked workded');
  //   axios
  //     .delete('http://localhost:3000/clearAll/clearAll', {})
  //     .then((res) => console.log(res.data));
  // }

  for (let i = 0; i < instances.length; i++) {
    allInstance.push(
      <div style={{ display: 'flex' }}>
        <Button
          to={`/${instances[i]}`}
          key={'instance' + instances[i]}
          onClick={() => {
            dispatch(selectClient(instances[i]));
          }}
        >
          {instances[i]}
        </Button>
        <MiniButton
          key={'button' + instances[i]}
          onClick={() => {
            dispatch(deleteOne(instances[i]));
          }}
        >
          delete
        </MiniButton>
      </div>
    );
  }

  return (
    <>
      <h3>Your Redis Instances</h3>
      {allInstance}
      <button onClick={() => dispatch(showForm())}>+</button>
      {show ? <Form /> : null}
      <button
        onClick={() => {
          handleClearAll();
        }}
      >
        Clear All
      </button>
    </>
  );
};

export default InstanceBar;
