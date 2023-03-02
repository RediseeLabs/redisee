import React from 'react';
import { Page, HomeButton } from './StyledComponents/HomePage';
import url from './StyledComponents/homeImage.svg';
import { useDispatch } from 'react-redux';
import { showForm, closeForm } from '../redux/globalSlice';
const HomePage = (prop) => {
  const dispatch = useDispatch();
  return (
    <Page
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          dispatch(closeForm());
        }
      }}
    >
      <div className='container'>
        <h1 className='title'>Welcome to RediSee</h1>
        <h3 className='subtitle'>
          Get live data from your redis databe with this lightweight monitoring
          tool
        </h3>
        <HomeButton onClick={() => dispatch(showForm())}>
          Connect now
        </HomeButton>
      </div>
      <img src={url} alt='Loading' style={{ height: '95%' }} />
    </Page>
  );
};

export default HomePage;
