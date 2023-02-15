import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  UilTachometerFast,
  UilDatabase,
  UilAnalytics,
  UilExclamationOctagon,
  UilShareAlt,
  UilBracketsCurly,
} from "@iconscout/react-unicons";

import {
  primaryBlue,
  secondaryBlue,
  primaryGrey,
  secondaryGrey,
} from "./variables";

export const Menu = styled.div`
  padding: 20px 15px;
  position: fixed;
  margin-right: 50px;
  left: 0;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.12);
`;

export const SecondaryText = styled.h2`
  margin-left: 15px;
  color: ${secondaryGrey};
  font-size: 1em;
  font-weight: 400;
`;

export const Logo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  h1 {
    font-size: 2em;
    font-weight: 800;
    color: ${primaryBlue};
  }
  img {
    width: 60px;
    object-fit: fill;
    margin-right: 15px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  padding: 12px;
  font-size: 1.1em;
  color: ${primaryGrey};
  font-weight: 500;
  text-decoration: none;
  &:hover {
    background-color: ${secondaryBlue};
    color: ${primaryBlue};
  }
  &:active {
    background-color: ${primaryBlue};
    color: white;
  }
`;

export const Title = styled.h1``;

export const PerfIcon = styled(UilTachometerFast)`
  margin-right: 15px;
`;

export const MemoryIcon = styled(UilDatabase)`
  margin-right: 15px;
`;

export const BasicIcon = styled(UilAnalytics)`
  margin-right: 15px;
`;
export const PersistenceIcon = styled(UilBracketsCurly)`
  margin-right: 15px;
`;
export const ErrorIcon = styled(UilExclamationOctagon)`
  margin-right: 15px;
`;
export const ClusterIcon = styled(UilShareAlt)`
  margin-right: 15px;
`;
