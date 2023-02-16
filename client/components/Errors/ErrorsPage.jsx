import React, { useEffect } from 'react';
import KeyspaceMisses from './KeyspaceMisses';
import RejectedConnections from './RejectedConnections';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/memorySlice';
import { GraphGrid } from '../StyledComponents/GraphGrid';
import LoadingGraphPage from "../LoadingGraphPage";


const ErrorsPage = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector (state => state.error.loading);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchData());
      
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {loading ? <LoadingGraphPage /> :      
        <GraphGrid>
        <KeyspaceMisses />
        <RejectedConnections />
      </GraphGrid>}
    </>
  );
};


export default ErrorsPage;