import styled from "styled-components";
import { secondaryGrey } from "./variables";

export const GraphGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 25px 30px 20px 0;
  grid-gap: 30px;
`;

export const MockGraph = styled.div`
  background-color: LightGrey;
  height: 230px;
  width: 100%;
`;
export const MockTitle = styled.div`
  background-color: LightGrey;
  height: 40px;
  width: 160px;
  margin-bottom: 10px;
`;
