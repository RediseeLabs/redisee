import styled, { keyframes } from "styled-components";
import { secondaryGrey } from "./variables";

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
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 25px 30px 20px 0;
  grid-gap: 30px;
`;

export const MockGraph = styled.div`
  background-color: #f2f2f2;
  height: 230px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
export const MockTitle = styled.div`
  background-color: #f2f2f2;
  height: 40px;
  width: 160px;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease-in-out;
`;
