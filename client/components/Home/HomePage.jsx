import React from 'react';
import { Page } from '../StyledComponents/HomePage';
import url from '../StyledComponents/homepage1.jpg';

const HomePage = (prop) => {
  console.log(url);
  return (
    <Page style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ margin: '200px 10px 10px 10px' }}>
        <h1 style={{ fontFamily: 'Geneva', color: '#012030' }}>
          How to see <br />
          core metrics <br />
          for your Redis Instance
        </h1>
      </div>
      <img
        src={url}
        alt='Loading'
        style={{ maxHeight: '80%', maxWidth: '60%' }}
      />
    </Page>
  );
};

export default HomePage;
