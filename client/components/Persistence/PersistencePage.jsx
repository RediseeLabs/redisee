import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fectchPersistence } from '../../redux/persistenceSlice';
import Rlst from './Rlst';
import Rcslt from './Rcslt';

const PersistencePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fectchPersistence());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>PersistencePage</h1>
      <Rlst />
      <Rcslt />
    </div>
  );
};

export default PersistencePage;
