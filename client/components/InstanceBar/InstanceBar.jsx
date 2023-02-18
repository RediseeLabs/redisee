import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClients, showForm } from '../../redux/globalSlice';
import Form from '../SubmitForm/Form';
import { Button } from '../StyledComponents/SideBar';

const InstanceBar = () => {
  useEffect(() => {});
  const dispatch = useDispatch();

  const instances = useSelector((state) => state.global.clients);
  const show = useSelector((state) => state.global.showForm);
  console.log(instances);
  console.log(show);

  let allInstance = [];

  for (let i = 0; i < instances.length; i++) {
    allInstance.push(
      // <div id={i} key={i}>
      //   {instances[i]}
      // </div>
      <Button to={`/${instances[i]}`}>{instances[i]}</Button>
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
