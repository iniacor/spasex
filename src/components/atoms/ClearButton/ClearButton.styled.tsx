import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

type ClearButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ClearAllButton = styled.button<ClearButtonProps>`
  position: absolute;
  right: 110px;
  top: 50px;
  bottom: 0px;
  display: inline-block;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
`;
export const ButtonText = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: capitalize;
  &:hover {
    color: red;
    transition: 0.4s all ease-out;
  }
`;
