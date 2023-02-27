import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fectchPersistence } from '../../redux/persistenceSlice';
import Rlst from './Rlst';
import Rcslt from './Rcslt';
import { GraphGrid } from '../StyledComponents/GraphGrid';
import LoadingGraphPage from '../LoadingGraphPage';

/*    - when mounted, this component will trigger server 
        call every second and store new data in persistence redux store
      - when loading displays skeleton page
*/

const PersistencePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.persistence.loading);
  const selectClient = useSelector((state) => state.global.selectClient);

  const api = `http://localhost:3000/${selectClient}/persistence`;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fectchPersistence(api));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingGraphPage />
      ) : (
        <GraphGrid>
          <Rlst />
          <Rcslt />
        </GraphGrid>
      )}
    </>
  );
};

export default PersistencePage;
