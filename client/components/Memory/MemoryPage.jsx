import React, { useEffect } from "react";
import EvictedKeys from "./EvictedKeys";
import UsedMemoryGraph from "./UsedMemoryGraph";
import FragRatioGraph from "./FragRatioGraph";
import { GraphGrid } from "../StyledComponents/GraphGrid";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/memorySlice";
import LoadingGraphPage from "../LoadingGraphPage";

const MemoryPage = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.memory.loading);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchData());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingGraphPage />
      ) : (
        <GraphGrid>
          <UsedMemoryGraph />
          <FragRatioGraph />
          <EvictedKeys />
        </GraphGrid>
      )}
    </>
  );
};

export default MemoryPage;
