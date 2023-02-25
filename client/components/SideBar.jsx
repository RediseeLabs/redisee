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
  ThemeButton,
  SunIcon,
} from './StyledComponents/SideBar';
import logo from './StyledComponents/logo.svg';
import InstanceBar from './InstanceBar/InstanceBar';
import { useSelector } from 'react-redux';
import Toggler from './Toggler';

const SideBar = (props) => {
  const selectClient = useSelector((state) => state.global.selectClient);

  return (
    <Menu>
      <Logo style={{ display: 'flex' }}>
        <img src={logo} />
        <h1>RediSee</h1>
      </Logo>
      {/* <ThemeButton onClick={props.themeToggle} theme={props.theme}>
        <SunIcon />
        Light/Dark
      </ThemeButton> */}
      <InstanceBar />
      <SecondaryText>Analytics :</SecondaryText>
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
      <SecondaryText>Cluster Mode :</SecondaryText>
      <Button>
        <ClusterIcon />
        Cluster
      </Button>
      <Toggler />
    </Menu>
  );
};

export default SideBar;
