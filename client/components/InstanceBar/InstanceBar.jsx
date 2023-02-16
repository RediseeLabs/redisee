import React, { useEffect } from 'react';
// import { useEffect } from 'react-redux';

const InstanceBar = () => {
  useEffect(() => {});
  let allInstance = [];

  const instances = useSelector((state) => {
    state.global.clients;
  });
  for (let i = 0; i < instances.length; i++) {
    allInstance.push(<div>{instances[i]}</div>);
  }
  return (
    <>
      <h3>Your Redis Instances</h3>
      {allInstance}
      <button>+</button>
      <button>-</button>
    </>
  );
};

export default InstanceBar;
