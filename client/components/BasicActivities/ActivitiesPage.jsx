import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBasicActivity } from '../../redux/basicActivitySlice';
import ConnectedClient from './ConnectedClient';
import ConnectedSlaves from './ConnectedSlaves';
import Keyspace from './Keyspace';
import { GraphGrid } from '../StyledComponents/GraphGrid';
import LoadingGraphPage from '../LoadingGraphPage';

const ActivitiesPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.basicActivity.loading);
  const selectClient = useSelector((state) => state.global.selectClient);
  const api = `http://localhost:3000/${selectClient}/basicActivity`;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchBasicActivity(api));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingGraphPage />
      ) : (
        <GraphGrid>
          <ConnectedClient />
          <ConnectedSlaves />
          <Keyspace />
        </GraphGrid>
      )}
    </>
  );
};

export default ActivitiesPage;
