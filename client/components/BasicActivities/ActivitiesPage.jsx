import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBasicActivity } from '../../redux/basicActivitySlice';
import { GraphGrid } from '../StyledComponents/GraphGrid';
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
    <GraphGrid>
      <div>
        <h3>Connected Clients</h3>
        <ConnectedClient />
      </div>
      <div>
        <h3>Connected Slaves</h3>
        <ConnectedSlaves />
      </div>
      <div>
        <h3>Keyspace</h3>
        <Keyspace />
      </div>
    </GraphGrid>
  );
};

export default ActivitiesPage;
