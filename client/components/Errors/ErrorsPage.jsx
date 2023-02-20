import React, { useEffect } from 'react';
import KeyspaceMisses from './KeyspaceMisses';
import RejectedConnections from './RejectedConnections';
import { useSelector, useDispatch } from 'react-redux';
import { errorFetch } from '../../redux/errorSlice';
import { GraphGrid } from '../StyledComponents/GraphGrid';
import LoadingGraphPage from '../LoadingGraphPage';

const ErrorsPage = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.error.loading);
  const selectClient = useSelector((state) => state.global.selectClient);

  const api = `http://localhost:3000/${selectClient}/error`;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(errorFetch(api));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingGraphPage />
      ) : (
        <GraphGrid>
          <KeyspaceMisses />
          <RejectedConnections />
        </GraphGrid>
      )}
    </>
  );
};

export default ErrorsPage;
