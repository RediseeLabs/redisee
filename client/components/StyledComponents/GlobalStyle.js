import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
    transition: all 0.4s linear;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0; 
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  padding: 12px;
  font-size: 1.1em;
  color: ${(props) =>
    props.$active ? props.theme.highlight : props.theme.textPrimary};
  font-weight: 500;
  text-decoration: none;
  margin: 10px 0;
  transition: 0.2s ease-out;
  background-color: ${(props) =>
    props.$active ? props.theme.secondary : 'none'};
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.highlight};
  }
  &:active {
    background-color: ${({ theme }) => theme.highlight};
    color: white;
  }
`;
