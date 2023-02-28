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

/*    - it displays all clients running 
      - inside this component we can delete one or clear all instances of clients running
*/

const InstanceBar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  //  - when component mounts fetch all running clients server side
  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  const instances = useSelector((state) => state.global.clients);
  const show = useSelector((state) => state.global.showForm);
  const selectedClient = useSelector((state) => state.global.selectClient);

  let allInstance = [];

  for (let i = 0; i < instances.length; i++) {
    allInstance.push(
      <div
        key={'instance' + instances[i]}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Button
          onClick={() => {
            dispatch(selectClient(instances[i]));
          }}
          $active={selectedClient === instances[i] && true}
        >
          {instances[i]}
        </Button>
        <DeleteButton
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
