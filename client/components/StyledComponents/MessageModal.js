import styled from 'styled-components';

const backgroundRed = '#fad1e0';
const backgroundBlue = '#caf0f8';
const backgroundOrange = '#ffe6d2';

const textRed = '#7c183d';
const textBlue = '#02045e';
const textOrange = '#ff8c36';

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  min-height: 70px;
  width: 500px;
  background-color: ${(props) => {
    if (props.warning) return backgroundOrange;
    if (props.error) return backgroundRed;
    if (props.succeed) return backgroundBlue;
  }};
  color: ${(props) => {
    if (props.warning) return textOrange;
    if (props.error) return textRed;
    if (props.succeed) return textBlue;
  }};
  z-index: 3;
  border-radius: 5px;
  svg {
    height: 90%;
    margin-right: 15px;
    margin-left: 20px;
  }
`;
