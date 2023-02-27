import React, { useState, useEffect } from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
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

const App = () => {
  const theme = useSelector((state) => state.global.theme);
  const message = useSelector((state) => state.global.message);
  const dispatch = useDispatch();

  //cleat message box after 3s
  useEffect(() => {
    if (message && message.type === 'succeed') {
      setTimeout(() => dispatch(clearMessage()), 2500);
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
