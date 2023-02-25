import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getClients,
  showForm,
  selectClient,
  deleteOne,
  deleteMany,
  fetchClients,
} from '../../redux/globalSlice';
import Form from '../SubmitForm/Form';
import {
  Button,
  DeleteButton,
  DeleteIcon,
  SecondaryText,
  AddButton,
} from '../StyledComponents/SideBar';
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

  for (let i = 0; i < instances.length; i++) {
    allInstance.push(
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          to={`/${instances[i]}`}
          key={'instance' + instances[i]}
          onClick={() => {
            dispatch(selectClient(instances[i]));
          }}
        >
          {instances[i]}
        </Button>
        <DeleteButton
          key={'button' + instances[i]}
          onClick={() => {
            dispatch(deleteOne(instances[i]));
          }}
        >
          <DeleteIcon />
        </DeleteButton>
      </div>
    );
  }

  return (
    <>
      <SecondaryText>My Redis :</SecondaryText>
      {allInstance}
      <AddButton onClick={() => dispatch(showForm())}>+</AddButton>
      {show ? <Form /> : null}
      <button
        onClick={() => {
          dispatch(deleteMany());
        }}
      >
        Clear All
      </button>
    </>
  );
};

export default InstanceBar;
