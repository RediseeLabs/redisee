import styled from 'styled-components';
import { Button } from './GlobalStyle';

export const Page = styled.div`
  margin-left: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 50px;
    width: 80%;
  }
  .title {
    color: ${({ theme }) => theme.highlight};
    font-size: 3em;
    margin-bottom: 0;
  }
  .subtitle {
    color: ${({ theme }) => theme.textPrimary};
  }
  img {
    margin-top: 40px;
    width: 90%;
  }
`;

export const HomeButton = styled(Button)`
  width: 150px;
  background-color: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
`;
