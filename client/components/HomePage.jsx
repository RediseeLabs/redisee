import React, { useState, useRef } from 'react';
import { Page, HomeButton } from './StyledComponents/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { showForm, closeForm } from '../redux/globalSlice';
import animation from '../assets/animation-redisee.mp4';
import animationDark from '../assets/animation-redisee-dark-mode.mp4';

const HomePage = (prop) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.global.theme);
  return (
    <Page
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          dispatch(closeForm());
        }
      }}
    >
      <div className="container">
        <h1 className="title">Welcome to RediSee</h1>
        <h3 className="subtitle">
          Get live data from your redis databe with this lightweight monitoring
          tool
        </h3>
        <HomeButton onClick={() => dispatch(showForm())}>
          Connect now
        </HomeButton>
      </div>

      <video
        style={{ margin: 'auto', height: '85vh', width: 'auto' }}
        src={theme === 'light' ? animation : animationDark}
        autoPlay
        loop
        muted
      ></video>
    </Page>
  );
};

export default HomePage;
