import React from 'react';

import ProductCard from '@components/molecules/ProductCard/ProductCard';
import * as Styled from './Products.styled';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectorAllProducts } from '@store/selectors';

const Products: React.FC = () => {
  const products = useAppSelector(selectorAllProducts);

  return (
    <Styled.ProductsList>
      {!!products.length &&
        products.map((item) => <ProductCard key={item.id} {...item} />)}
    </Styled.ProductsList>
  );
};

export default Products;
