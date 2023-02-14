import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPerformanceData } from "../../redux/performanceSlice";
import Latency from "./Latency";
import Iops from "./Iops";
import HitRate from "./HitRate";
import { GraphGrid } from "../StyledComponents/GraphGrid";

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
      <h1>PerformancePage</h1>
      <GraphGrid>
        <Latency />
        <Iops />
        <HitRate />
      </GraphGrid>
    </>
  );
};

export default PerformancePage;
