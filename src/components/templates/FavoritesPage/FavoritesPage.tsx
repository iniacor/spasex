import React from 'react';
import Container from '@components/organisms/Container/Container';
import ProductCard from '@components/molecules/ProductCard/ProductCard';
import ClearButton from '@components/atoms/ClearButton/ClearButton';
import { useAppSelector } from '@hooks/useAppSelector';
import { useActions } from '@hooks/useActions';
import { useLocalStorageCounter } from '@hooks/useLocalStorageCounter';
import { selectedFavoriteProducts } from '@store/selectors';
import imagesSet from '../../../common/data/data';
import * as Styled from './FavoritesPage.styled';
import EmptyCard from '@components/molecules/EmptyCard /EmptyCard';

export const FavoritePage = () => {
  const favoriteProducts = useAppSelector(selectedFavoriteProducts);
  const { removeAllFavorites } = useActions();
  const { counter } = useLocalStorageCounter();

  const productSceletonContainer = Array(
    Math.ceil(favoriteProducts.length / 3) * 3
  ).fill(undefined);

  const getCurrentImage = (imageIndex: number) => {
    const currentIndex = imageIndex % imagesSet.length;
    return imagesSet[currentIndex].src;
  };

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
              {productSceletonContainer.map((el, ind) => {
                if (ind < favoriteProducts.length) {
                  return (
                    <ProductCard
                      key={favoriteProducts[ind].id}
                      product={favoriteProducts[ind]}
                      currentImage={getCurrentImage(counter - ind)}
                    />
                  );
                }
                return <EmptyCard key={ind} />;
              })}
            </Styled.ProductsList>
          </Styled.FavouritesContent>
        </Container>
      </Styled.MainSection>
    </>
  );
};
