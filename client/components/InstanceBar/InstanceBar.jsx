import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { clearState as clearMemory } from '../../redux/memorySlice';
import { clearState as clearPerformance } from '../../redux/performanceSlice';
import { clearState as clearPersistence } from '../../redux/persistenceSlice';
import { clearState as clearBasicActivity } from '../../redux/basicActivitySlice';
import { clearState as clearError } from '../../redux/errorSlice';
import { setMessage } from '../../redux/globalSlice';
import { closeForm } from '../../redux/globalSlice';

/*    - it displays all clients running 
      - inside this component we can delete one or clear all instances of clients running
*/

const InstanceBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          onClick={(e) => {
            e.preventDefault();
            if (selectedClient !== instances[i]) {
              dispatch(selectClient(instances[i]));
              dispatch(clearMemory());
              dispatch(clearPerformance());
              dispatch(clearPersistence());
              dispatch(clearBasicActivity());
              dispatch(clearError());
              if (selectedClient !== '') {
                dispatch(
                  setMessage({
                    type: 'succeed',
                    content: 'New Client Selected, Redirect to Memory',
                  })
                );
              }
              navigate(`/Memory/${instances[i]}`);
            }
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
    <div
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          dispatch(closeForm());
        }
      }}
    >
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
    </div>
  );
};

export default InstanceBar;
