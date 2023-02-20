import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import ActivitiesPage from './components/BasicActivities/ActivitiesPage';
import ErrorsPage from './components/Errors/ErrorsPage';
import MemoryPage from './components/Memory/MemoryPage';
import PerformancePage from './components/Performance/PerformancePage';
import PersistencePage from './components/Persistence/PersistencePage';
import Form from './components/SubmitForm/Form';
import InstanceBar from './components/InstanceBar/InstanceBar';

const App = (props) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      {/* <Form /> */}
      <Routes>
        <Route
          path='/BasicActivities/:redisName'
          element={<ActivitiesPage />}
        />
        <Route path='/Error/:redisName' element={<ErrorsPage />} />
        <Route path='/Memory/:redisName' element={<MemoryPage />} />
        <Route path='/Performance/:redisName' element={<PerformancePage />} />
        <Route path='/Persistence/:redisName' element={<PersistencePage />} />
        <Route path='/:instanceName' />
      </Routes>
    </div>
  );
};

export default App;
