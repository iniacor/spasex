import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFavoritesExist?: boolean | undefined;
}

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  background-color: ${({ isFavoritesExist, theme }) =>
    isFavoritesExist
      ? theme.colors.secondary.main
      : theme.colors.primary.lightgrey};
  fill: ${({ isFavoritesExist, theme }) =>
    isFavoritesExist
      ? theme.colors.text.contrastText
      : theme.colors.text.primary};
  cursor: pointer;
  outline: 1px solid
    ${({ isFavoritesExist, theme }) =>
      isFavoritesExist
        ? theme.colors.secondary.main
        : theme.colors.primary.lightgrey};
  &:hover {
    outline-offset: 3px;
    transition: 0.2s all ease-out;
  }
`;
