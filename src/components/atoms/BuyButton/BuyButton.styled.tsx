import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

type BuyButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BuyButton = styled.button<BuyButtonProps>`
  display: block;
  width: 278px;
  height: 53px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid #dee2e7;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  cursor: pointer;
  outline: 1px solid ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  &:hover {
    outline-offset: 3px;
    transition: 0.5s all ease-out;
  }
`;
