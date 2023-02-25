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

import {
  primaryBlue,
  secondaryBlue,
  primaryGrey,
  secondaryGrey,
  primaryRed,
  secondaryRed,
} from './variables';

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
  color: ${secondaryGrey};
  font-size: 1em;
  font-weight: 400;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
  h1 {
    font-size: 2em;
    font-weight: 800;
    color: ${primaryBlue};
  }
  img {
    width: 60px;
    object-fit: fill;
    margin-right: 25px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  width: 70%;
  border-radius: 10px;
  padding: 12px;
  font-size: 1.1em;
  color: ${primaryGrey};
  font-weight: 500;
  text-decoration: none;
  margin: 10px 0;
  transition: 0.2s ease-out;
  &:hover {
    background-color: ${secondaryBlue};
    color: ${primaryBlue};
  }
  &:active {
    background-color: ${primaryBlue};
    color: white;
  }
`;

export const DeleteButton = styled(Button)`
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(255, 77, 77, 0.1);
  }
`;

export const AddButton = styled(Button)`
  background-color: ${secondaryBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  :hover {
    background-color: ${primaryBlue};
    color: white;
  }
`;

export const MiniButton = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  width: 22%;
  border-radius: 10px;
  border-style: solid;
  border-color: gray;
  border-width: thick;
  padding: 15px;
  font-size: 1.1em;
  color: ${primaryGrey};
  font-weight: 500;
  text-decoration: none;
  // background-color: ${primaryRed}
  &:hover {
    background-color: ${primaryRed};
    color: white;
  }
  &:active {
    background-color: ${secondaryRed};
    color: white;
  }
`;

export const FormModal = styled.div`
  width: 30%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
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
