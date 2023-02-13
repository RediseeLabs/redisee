import React from "react";
import {
  Menu,
  Button,
  PerfIcon,
  MemoryIcon,
  BasicIcon,
  ErrorIcon,
  Logo,
  SecondaryText,
  ClusterIcon,
} from "./StyledComponents/SideBar";
import logo from "./StyledComponents/logo.png";

const SideBar = () => {
  return (
    <Menu>
      <Logo style={{ display: "flex" }}>
        <img src={logo} />
        <h1>RediSee</h1>
      </Logo>
      <SecondaryText>Analytics :</SecondaryText>
      <Button to="/memory">
        <PerfIcon />
        Memory
      </Button>
      <Button to="/performance">
        <MemoryIcon />
        Performance
      </Button>
      <Button to="/BasicActivities">
        <BasicIcon />
        Basic activities
      </Button>
      <Button to="/Errors">
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
