import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showForm,
  selectClient,
  deleteOne,
  deleteMany,
  fetchClients,
} from '../../redux/globalSlice';
import Form from '../Form';
import {
  DeleteButton,
  DeleteIcon,
  SecondaryText,
  AddButton,
  ClearAllButton,
} from '../StyledComponents/SideBar';
import { Button } from '../StyledComponents/GlobalStyle';
import { useParams } from 'react-router-dom';

const InstanceBar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  const instances = useSelector((state) => state.global.clients);
  const show = useSelector((state) => state.global.showForm);
  const selectedClient = useSelector((state) => state.global.selectClient);

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
          active={selectedClient === instances[i] ? true : false}
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
      <ClearAllButton
        onClick={() => {
          dispatch(deleteMany());
        }}
      >
        Clear All
      </ClearAllButton>
    </>
  );
};

export default InstanceBar;
