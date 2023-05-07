import React from 'react';
import * as Styled from './ProductCard.styled';
import BuyButton from '@components/atoms/BuyButton/BuyButton';
import FavoriteButton from '@components/atoms/FavoriteButton/FavoriteButton';
import { Product } from 'src/types/entities';
import { useActions } from '@hooks/useActions';
import { useAppSelector } from '@hooks/useAppSelector';

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, description } = product;
  const favoriteIds = useAppSelector((state) => state.favorites);
  const isFavorite = favoriteIds.includes(id);
  const { addToFavorites, removeFromFavorites } = useActions();

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  const imagesSet = [
    { id: 1, name: 'astronavt', src: 'src/assets/images/astronavt.jpg' },
    { id: 2, name: 'girl', src: 'src/assets/images/girl.jpg' },
    { id: 3, name: 'sputnic', src: 'src/assets/images/sputnic.jpg' },
  ];

  return (
    <Styled.ProductCardItem>
      <Styled.ProductImageWrapper>
        <Styled.ProductImage src={'src/assets/images/astronavt.jpg'} />
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
