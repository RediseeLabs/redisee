import React from 'react';
import {
  Menu,
  Button,
  PerfIcon,
  MemoryIcon,
  PersistenceIcon,
  BasicIcon,
  ErrorIcon,
  Logo,
  SecondaryText,
  ClusterIcon,
} from './StyledComponents/SideBar';
import logo from './StyledComponents/logo.png';
import InstanceBar from './InstanceBar/InstanceBar';

const SideBar = () => {
  return (
    <Menu>
      <Logo style={{ display: 'flex' }}>
        <img src={logo} />
        <h1>RediSee</h1>
      </Logo>
      <InstanceBar />
      <SecondaryText>Analytics :</SecondaryText>
      <Button to='/Memory'>
        <PerfIcon />
        Memory
      </Button>
      <Button to='/Performance'>
        <MemoryIcon />
        Performance
      </Button>
      <Button to='/Persistence'>
        <PersistenceIcon />
        Persistence
      </Button>
      <Button to='/BasicActivities'>
        <BasicIcon />
        Basic activities
      </Button>
      <Button to='/Errors'>
        <ErrorIcon />
        Errors
      </Button>
      <SecondaryText>Cluster Mode :</SecondaryText>
      <Button>
        <ClusterIcon />
        Cluster
      </Button>
    </Menu>
  );
};

export default SideBar;
