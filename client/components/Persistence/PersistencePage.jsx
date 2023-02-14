import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fectchPersistence } from '../../redux/persistenceSlice';
import Rlst from './Rlst';
import Rcslt from './Rcslt';
import { GraphGrid } from '../StyledComponents/GraphGrid';

const PersistencePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fectchPersistence());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GraphGrid>
      <div>
        <h3>Rlst</h3>
        <Rlst />
      </div>
      <div>
        <h3>Rcslt</h3>
        <Rcslt />
      </div>
    </GraphGrid>
  );
};

export default PersistencePage;
