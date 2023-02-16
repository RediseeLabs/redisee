import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBasicActivity } from '../../redux/basicActivitySlice';
import ConnectedClient from './ConnectedClient';
import ConnectedSlaves from './ConnectedSlaves';
import Keyspace from './Keyspace';
import { GraphGrid } from '../StyledComponents/GraphGrid';
import LoadingGraphPage from "../LoadingGraphPage";

const ActivitiesPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector (state => state.basicActivity.loading);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchBasicActivity());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
   <>
      {loading ? <LoadingGraphPage /> :
      <GraphGrid> 
       <ConnectedClient />
       <ConnectedSlaves />
       <Keyspace />
      </GraphGrid>}
    </>
  );
};

export default ActivitiesPage;
