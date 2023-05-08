import React from 'react';
import BuyButton from '@components/atoms/BuyButton/BuyButton';
import FavoriteButton from '@components/atoms/FavoriteButton/FavoriteButton';
import { Product } from 'src/types/entities';
import { useActions } from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';
import * as Styled from './ProductCard.styled';

type ProductCardProps = {
  product: Product;
  currentImage: string;
};

const ProductCard = ({ product, currentImage }: ProductCardProps) => {
  const { id, name, description } = product;
  const favoriteIds: string[] = useAppSelector((state) => state.favorites);
  const isFavorite = favoriteIds.includes(id);
  const { addToFavorites, removeFromFavorites } = useActions();

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <Styled.ProductCardItem>
      <Styled.ProductImageWrapper>
        <Styled.ProductImage src={currentImage} />
      </Styled.ProductImageWrapper>
      <Styled.ProductContent>
        <Styled.ProductTitle>{name}</Styled.ProductTitle>
        <Styled.ProductDescription>{description}</Styled.ProductDescription>
      </Styled.ProductContent>
      <Styled.ProductBuyWrapper>
        <BuyButton />
        <FavoriteButton
          toggleFavoriteHandler={toggleFavoriteHandler}
          isFavorite={isFavorite}
        />
      </Styled.ProductBuyWrapper>
    </Styled.ProductCardItem>
  );
};

export default ProductCard;
