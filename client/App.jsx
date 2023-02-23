import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import ActivitiesPage from './components/BasicActivities/ActivitiesPage';
import ErrorsPage from './components/Errors/ErrorsPage';
import MemoryPage from './components/Memory/MemoryPage';
import PerformancePage from './components/Performance/PerformancePage';
import PersistencePage from './components/Persistence/PersistencePage';
import Form from './components/SubmitForm/Form';
import InstanceBar from './components/InstanceBar/InstanceBar';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/Darkmode/GlobalStyle';
import { lightTheme, darkTheme } from './components/Darkmode/Themes';

const App = (props) => {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  console.log(theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <button onClick={themeToggle}>Light/Dark</button>
        <div style={{ display: 'flex' }}>
          <SideBar />
          <Routes>
            <Route
              path='/BasicActivities/:redisName'
              element={<ActivitiesPage />}
            />
            <Route path='/Error/:redisName' element={<ErrorsPage />} />
            <Route path='/Memory/:redisName' element={<MemoryPage />} />
            <Route
              path='/Performance/:redisName'
              element={<PerformancePage />}
            />
            <Route
              path='/Persistence/:redisName'
              element={<PersistencePage />}
            />
            <Route path='/:instanceName' />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
