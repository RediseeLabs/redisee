import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  UilTachometerFast,
  UilDatabase,
  UilAnalytics,
  UilExclamationOctagon,
  UilShareAlt,
  UilBracketsCurly,
  UilSun,
  UilMinusCircle,
} from '@iconscout/react-unicons';
import { Button } from './GlobalStyle';
import { primaryBlue } from './variables';

export const Menu = styled.div`
  overflow: scroll;
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
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1em;
  font-weight: 400;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
  text-decoration: none;
  h1 {
    font-size: 2em;
    font-weight: 800;
    color: ${({ theme }) => theme.highlight};
  }
  img {
    width: 50px;
    object-fit: fill;
    margin-right: 15px;
  }
`;

export const DeleteButton = styled(Button)`
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  &:hover {
    background-color: rgba(255, 77, 77, 0.1);
  }
`;

export const AddButton = styled(Button)`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  font-size: 1.5em;
  margin-bottom: 5px;
  :hover {
    background-color: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.primary};
  }
`;
export const ClearAllButton = styled(Button)`
  background-color: #cc0000;
  width: 90%;
  padding: 6px 12px;
  color: white;
  font-size: 0.7em;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  :hover {
    background-color: #ff0000;
    color: white;
  }
`;

export const DarkModeToggler = styled.div`
  position: relative;
  width: 59px;
  left: 10px;
  label {
    position: absolute;
    width: 100%;
    height: 30px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;
    input {
      position: absolute;
      display: none;
    }
    input:checked ~ .slider {
      background-color: #d8dbe0;
    }
    .slider::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 5px;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      box-shadow: inset 8px -1px 0px 0px #d8dbe0;
      background-color: #28292c;
      transition: 0.3s;
    }

    input:checked ~ .slider::before {
      transform: translateX(26px);
      background-color: ${primaryBlue};
      box-shadow: none;
    }

    .slider {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      transition: 0.3s;
    }
  }
`;

export const Title = styled.h1``;

export const SunIcon = styled(UilSun)`
  margin-right: 15px;
`;

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

export const DeleteIcon = styled(UilMinusCircle)`
  width: 45px;
  color: #cc0000;
  &:hover {
    color: #ff0000;
  }
`;
