import styled from 'styled-components';

export const ActiveDot = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
  }
`;
