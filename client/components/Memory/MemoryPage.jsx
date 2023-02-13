import React, { useEffect } from "react";
import EvictedKeys from "./EvictedKeys";
import UsedMemoryGraph from "./UsedMemoryGraph";
import FragRatioGraph from "./FragRatioGraph";
import { GraphGrid } from "../StyledComponents/GraphGrid";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/memorySlice";

const MemoryPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchData());
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GraphGrid>
        <UsedMemoryGraph />
        <FragRatioGraph />
        <EvictedKeys />
      </GraphGrid>
    </>
  );
};

export default MemoryPage;
