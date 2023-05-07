import React from 'react';
import Container from '@components/organisms/Container/Container';
import ProductCard from '@components/molecules/ProductCard/ProductCard';
import ClearButton from '@components/atoms/ClearButton/ClearButton';
import { useAppSelector } from '@hooks/useAppSelector';
import { useActions } from '@hooks/useActions';
import * as Styled from './FavoritesPage.styled';
import { selectedFavoriteProducts } from '@store/selectors';

export const FavoritePage = () => {
  const favoriteProducts = useAppSelector(selectedFavoriteProducts);

  const { removeAllFavorites } = useActions();

  const removeAllHandler = () => {
    removeAllFavorites();
  };
  return (
    <>
      <Styled.MainSection>
        <Styled.FavouritesPageTop>
          <Styled.BackgroundImageContainer>
            <Styled.BackgroundImage />
          </Styled.BackgroundImageContainer>
          <Styled.Content>
            <Styled.Title>favorites</Styled.Title>
          </Styled.Content>
        </Styled.FavouritesPageTop>
        <Container>
          <Styled.FavouritesContent>
            <ClearButton removeAllHandler={removeAllHandler} />
            <Styled.ProductsList>
              {!!favoriteProducts.length &&
                favoriteProducts.map((favouriteProduct) => (
                  <ProductCard
                    key={favouriteProduct.id}
                    product={favouriteProduct}
                  />
                ))}
            </Styled.ProductsList>
          </Styled.FavouritesContent>
        </Container>
      </Styled.MainSection>
    </>
  );
};
