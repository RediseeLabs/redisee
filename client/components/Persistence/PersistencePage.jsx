import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fectchPersistence } from "../../redux/persistenceSlice";
import Rlst from "./Rlst";
import Rcslt from "./Rcslt";
import { GraphGrid } from "../StyledComponents/GraphGrid";

const PersistencePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fectchPersistence());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GraphGrid>
        <Rlst />
        <Rcslt />
      </GraphGrid>
    </>
  );
};

export default PersistencePage;
