import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

type SignInButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SignInButton = styled.button<SignInButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 163px;
  height: 53px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  outline: 1px solid ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  &:hover {
    outline-offset: 3px;
    transition: 0.5s all ease-out;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
export const ButtonText = styled.p`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: Uppercase;
`;
