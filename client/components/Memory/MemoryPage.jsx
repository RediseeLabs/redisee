import React, { useEffect } from 'react';
import EvictedKeys from './EvictedKeys';
import UsedMemoryGraph from './UsedMemoryGraph';
import FragRatioGraph from './FragRatioGraph';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/memorySlice';
import { GraphGrid } from '../StyledComponents/GraphGrid';
import LoadingGraphPage from '../LoadingGraphPage';

const MemoryPage = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.memory.loading);
  const selectClient = useSelector((state) => state.global.selectClient);

  const api = `http://localhost:3000/${selectClient}/memory`;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchData(api));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) return <LoadingGraphPage />;
  else
    return (
      <GraphGrid>
        <EvictedKeys />
        <UsedMemoryGraph />
        <FragRatioGraph />
      </GraphGrid>
    );
};

export default MemoryPage;
