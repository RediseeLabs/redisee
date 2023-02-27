import React from 'react';
import {
  GraphGrid,
  GraphBox,
  MockGraph,
  MockTitle,
} from './StyledComponents/GraphGrid';

const LoadingGraphPage = () => {
  return (
    <>
      {
        <GraphGrid>
          <GraphBox>
            <MockTitle />
            <MockGraph />
          </GraphBox>
          <GraphBox>
            <MockTitle />
            <MockGraph />
          </GraphBox>
          <GraphBox>
            <MockTitle />
            <MockGraph />
          </GraphBox>
          <GraphBox>
            <MockTitle />
            <MockGraph />
          </GraphBox>
        </GraphGrid>
      }
    </>
  );
};

export default LoadingGraphPage;
