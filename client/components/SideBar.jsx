import React from 'react';
import {
  Menu,
  PerfIcon,
  MemoryIcon,
  PersistenceIcon,
  BasicIcon,
  ErrorIcon,
  Logo,
  SecondaryText,
  ClusterIcon,
} from './StyledComponents/SideBar';

import { Button } from './StyledComponents/GlobalStyle';
import logo from './StyledComponents/logo.svg';
import logoDark from './StyledComponents/logoDarkMode.svg';
import InstanceBar from './InstanceBar/InstanceBar';
import { useSelector } from 'react-redux';
import Toggler from './Toggler';

/*    - this is the sidebar, it serves as navigation
      - it holds the component instance bar that will display all running clients
      - plus button adds a new client 
      - buttons to switch pages: memory, performance, etc... 
*/

const SideBar = (props) => {
  const selectClient = useSelector((state) => state.global.selectClient);
  const theme = useSelector((state) => state.global.theme);

  return (
    <Menu>
      <Logo to='/'>
        <img src={theme === 'light' ? logo : logoDark} />
        <h1>RediSee</h1>
      </Logo>
      <div className='wrapper'>
        <InstanceBar />
        <SecondaryText>Analytics :</SecondaryText>
        {/* - provide selected client from Redux state to the route so we can data from the selected client */}
        <Button to={`/Memory/${selectClient}`}>
          <PerfIcon />
          Memory
        </Button>
        <Button to={`/Performance/${selectClient}`}>
          <MemoryIcon />
          Performance
        </Button>
        <Button to={`/Persistence/${selectClient}`}>
          <PersistenceIcon />
          Persistence
        </Button>
        <Button to={`/BasicActivities/${selectClient}`}>
          <BasicIcon />
          Basic activities
        </Button>
        <Button to={`/Error/${selectClient}`}>
          <ErrorIcon />
          Errors
        </Button>
        <SecondaryText>Setting:</SecondaryText>
        {/* <Button>
          <ClusterIcon />
          Cluster
        </Button> */}

        {/* <div style={{ margin: '0px 0px 10px 15px' }}>Light/Dark</div> */}
        <SecondaryText style={{ fontSize: '0.7em' }}>Light/Dark:</SecondaryText>

        <Toggler />
      </div>
    </Menu>
  );
};

export default SideBar;
