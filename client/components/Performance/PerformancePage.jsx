import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPerformanceData } from '../../redux/performanceSlice';
import Latency from './Latency';
import Iops from './Iops';
import HitRate from './HitRate';
import { GraphGrid } from '../StyledComponents/GraphGrid';

const PerformancePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchPerformanceData());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GraphGrid>
        <div>
          <h3>latency</h3>
          <Latency />
        </div>
        <div>
          <h3>Instantaneous ops</h3>
          <Iops />
        </div>
        <div>
          <h3>Hit/Misses rates</h3>
          <HitRate />
        </div>
      </GraphGrid>
    </>
  );
};

export default PerformancePage;
