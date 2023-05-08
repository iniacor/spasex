import React from 'react';
import ProductCard from '@components/molecules/ProductCard/ProductCard';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectorAllProducts } from '@store/selectors';
import { useLocalStorageCounter } from '@hooks/useLocalStorageCounter';
import imagesSet from '../../../common/data/data';
import * as Styled from './ToursSlider.styled';

const ToursSlider = () => {
  const products = useAppSelector(selectorAllProducts);
  const { counter } = useLocalStorageCounter();

  const getCurrentImage = (imageIndex: number) => {
    const currentIndex = imageIndex % imagesSet.length;
    return imagesSet[currentIndex].src;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Styled.SliderWrapper>
      <Styled.ToursTitle>popular tours</Styled.ToursTitle>
      <Styled.SlickSlider {...settings}>
        {!!products.length &&
          products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              currentImage={getCurrentImage(counter - index)}
            />
          ))}
      </Styled.SlickSlider>
    </Styled.SliderWrapper>
  );
};

export default ToursSlider;
