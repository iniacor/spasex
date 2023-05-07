import * as React from 'react';
import * as Styled from './FavoriteButton.styled';
import HeartIcon from '../../../assets/icons/HeartIcon.svg';
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg';
import { useLocation } from 'react-router-dom';

type FavoriteButtonProps = {
  toggleFavoriteHandler?: () => void;
  isFavorite: boolean;
};
export default function FavoriteButton({
  toggleFavoriteHandler,
  isFavorite,
}: FavoriteButtonProps) {
  const location = useLocation();
  const isPathFavorites = location.pathname === '/favorites';

  return isPathFavorites ? (
    <Styled.DeleteButton onClick={toggleFavoriteHandler} favorites={isFavorite}>
      <DeleteIcon />
    </Styled.DeleteButton>
  ) : (
    <Styled.FavoriteButton
      onClick={toggleFavoriteHandler}
      favorites={isFavorite}
    >
      <HeartIcon />
    </Styled.FavoriteButton>
  );
}
