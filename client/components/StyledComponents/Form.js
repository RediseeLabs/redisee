import styled from 'styled-components';
import { Button } from './GlobalStyle';

export const FormModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0, 0.1);
  z-index: 2;
  form {
    max-width: 40%;
    max-height: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  height: 30px;
  width: 60%;

  border: ${({ theme }) => `1px solid ${theme.secondary}`};
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.highlight}`};
  }
`;

export const SubmitBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  background-color: ${({ theme }) => theme.secondary};
  :hover {
    background-color: ${({ theme }) => theme.highlight};
    color: white;
  }
`;
