import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerformanceData } from '../../redux/performanceSlice';
import Latency from './Latency';
import Iops from './Iops';
import HitRate from './HitRate';
import { GraphGrid } from '../StyledComponents/GraphGrid';
import LoadingGraphPage from '../LoadingGraphPage';

const PerformancePage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.performance.loading);
  const selectClient = useSelector((state) => state.global.selectClient);

  const api = `http://localhost:3000/${selectClient}/performance`;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchPerformanceData(api));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingGraphPage />
      ) : (
        <GraphGrid>
          <Latency />
          <Iops />
          <HitRate />
        </GraphGrid>
      )}
    </>
  );
};

export default PerformancePage;
