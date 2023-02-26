import React from 'react';
import { Page } from '../StyledComponents/HomePage';
import url from '../StyledComponents/homepage1.jpg';
import { Button } from '../StyledComponents/GlobalStyle';
import { ThemeContext } from 'styled-components';
const HomePage = (prop) => {
  console.log(url);
  return (
    <Page
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <h1 style={{ fontFamily: 'Geneva', color: '#012030' }}>
          How to see <br />
          core metrics <br />
          for your Redis Instance
        </h1>
        <h3>
          Explore your live data with <br />
          lightweight, efficient redis visulizer
        </h3>
        <br />
        <Button
          style={{
            border: 'solid blue thin',
            backgroundColor: '#012030',
            color: 'white',
            borderRadius: '5px',
            width: '120px',
          }}
        >
          Add Instance
        </Button>
      </div>
      <img src={url} alt='Loading' style={{ height: '95%' }} />
    </Page>
  );
};

export default HomePage;
