import * as React from 'react';
import * as Styled from './FavoriteBtnLink.styled';
import HeartIcon from '../../../assets/icons/HeartIcon.svg';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectFavoriteProductIds } from '@store/selectors';

type FavoriteButtonProps = {
  goToFavorites?: () => void;
};

export default function FavoriteButton({ goToFavorites }: FavoriteButtonProps) {
  const isFavorites = useAppSelector(selectFavoriteProductIds).length;
  return (
    <Styled.FavoriteButton
      onClick={goToFavorites}
      isFavoritesExist={isFavorites}
    >
      <HeartIcon />
    </Styled.FavoriteButton>
  );
}
