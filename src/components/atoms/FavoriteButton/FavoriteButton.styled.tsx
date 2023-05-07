import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  favorites?: boolean | undefined;
}

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  background-color: ${({ favorites, theme }) =>
    favorites ? theme.colors.secondary.main : theme.colors.primary.lightgrey};
  fill: ${({ favorites, theme }) =>
    favorites ? theme.colors.text.contrastText : theme.colors.text.primary};
  cursor: pointer;
  outline: 1px solid
    ${({ favorites, theme }) =>
      favorites ? theme.colors.secondary.main : theme.colors.primary.lightgrey};
  &:hover {
    outline-offset: 3px;
    transition: 0.2s all ease-out;
  }
`;
export const DeleteButton = styled(FavoriteButton)`
  background-color: ${({ favorites, theme }) =>
    favorites ? theme.colors.primary.lightgrey : theme.colors.secondary.main};
  outline: 1px solid
    ${({ favorites, theme }) =>
      favorites
        ? theme.colors.primary.lightgrey
        : theme.colors.secondary.main}};
`;
