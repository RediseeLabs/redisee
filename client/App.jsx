import React, { useState, useEffect } from 'react';
import { Routes, Route, redirect, useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import ActivitiesPage from './components/BasicActivities/ActivitiesPage';
import ErrorsPage from './components/Errors/ErrorsPage';
import MemoryPage from './components/Memory/MemoryPage';
import PerformancePage from './components/Performance/PerformancePage';
import PersistencePage from './components/Persistence/PersistencePage';
import MessageModal from './components/MessageModal';
import HomePage from './components/HomePage';
import { clearMessage } from './redux/globalSlice';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/StyledComponents/GlobalStyle';
import { lightTheme, darkTheme } from './components/StyledComponents/Themes';
import { useSelector, useDispatch } from 'react-redux';

/*  - this is top level component, it displays sidebar and pages
    - it uses React Router to render different component for each route
    - components will be pages containing graphs
    - sidebar will always remain on screen
    - if message needs to be displayed, app will render message model component
    - used theme provider from style component library to provide styling variable 
      to all components 
*/

const App = () => {
  const theme = useSelector((state) => state.global.theme);
  const message = useSelector((state) => state.global.message);
  console.log(message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*   - clears message box after 3s, if status is successful */
  // if its an error redirect to homepage
  useEffect(() => {
    if (message && message.type === 'succeed') {
      setTimeout(() => dispatch(clearMessage()), 2500);
    }
    if (message && message.type === 'error') {
      navigate('/');
    }
  }, [message]);

  return (
    <div>
      {message && <MessageModal />}
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <SideBar />
        <Routes>
          <Route
            path="/BasicActivities/:redisName"
            element={<ActivitiesPage />}
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/Error/:redisName" element={<ErrorsPage />} />
          <Route path="/Memory/:redisName" element={<MemoryPage />} />
          <Route path="/Performance/:redisName" element={<PerformancePage />} />
          <Route path="/Persistence/:redisName" element={<PersistencePage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
