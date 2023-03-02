import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const GraphGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 35px;
  height: 100%;
  margin: 0px 30px 20px 300px;
  grid-gap: 30px;
  box-sizing: border-box;
  @media (max-width: 1400px) {
    grid-template-columns: 100%;
  }
`;

export const GraphBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MockGraph = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  height: 300px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
export const MockTitle = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  height: 40px;
  width: 160px;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease-in-out;
`;
