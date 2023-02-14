import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBasicActivity } from '../../redux/basicActivitySlice';
import ConnectedClient from './ConnectedClient';
import ConnectedSlaves from './ConnectedSlaves';
import Keyspace from './Keyspace';

const ActivitiesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchBasicActivity());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>ActivitiesPage</h1>
      <ConnectedClient />
      <ConnectedSlaves />
      <Keyspace />
    </div>
  );
};

export default ActivitiesPage;
