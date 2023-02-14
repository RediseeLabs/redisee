import React from 'react';
import { GraphGrid } from './StyledComponents/GraphGrid';
import { MockGraph ,MockTitle} from './StyledComponents/GraphGrid';

const LoadingGraphPage = () => {
return (
  <>
  {
  <GraphGrid>
    <div>
    <MockTitle/>
    <MockGraph />
    </div>
    <div>
    <MockTitle/>
    <MockGraph />
    </div>
    <div>
    <MockTitle/>
    <MockGraph />
    </div>
    <div>
    <MockTitle/>
    <MockGraph />
    </div>
  </GraphGrid>
  
}
</>
 
);
};

export default LoadingGraphPage;