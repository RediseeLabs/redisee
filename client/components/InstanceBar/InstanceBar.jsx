import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClients, showForm, selectClient } from '../../redux/globalSlice';
import Form from '../SubmitForm/Form';
import { Button } from '../StyledComponents/SideBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const InstanceBar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:3000/connection', {})
      .then((res) => dispatch(getClients(res.data)))
      .catch((err) => console.log(err));
  }, []);

  console.log(params);

  const instances = useSelector((state) => state.global.clients);
  const show = useSelector((state) => state.global.showForm);
  const selectInstance = useSelector((state) => state.global.selectedClient);
  console.log('Global SelectClint ' + selectInstance);

  let allInstance = [];

  // function handleClick(e) {
  //   dispatch(selectClient(e.target.getAttribute('key')));
  //   console.log(e.target.value);
  // }

  for (let i = 0; i < instances.length; i++) {
    allInstance.push(
      // <div id={i} key={i}>
      //   {instances[i]}
      // </div>
      <Button
        to={`/${instances[i]}`}
        key={instances[i]}
        onClick={() => {
          dispatch(selectClient(instances[i]));
        }}
      >
        {instances[i]}
      </Button>
    );
  }

  return (
    <>
      <h3>Your Redis Instances</h3>
      {allInstance}
      <button onClick={() => dispatch(showForm())}>+</button>
      {show ? <Form /> : null}
      <button>Clear All</button>
    </>
  );
};

export default InstanceBar;
