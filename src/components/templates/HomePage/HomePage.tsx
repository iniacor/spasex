import React, { useRef } from 'react';
// import Carousel from 'react-multi-carousel';
import * as Styled from './HomePage.styled';

import { DotWrapper } from '@components/molecules/DotWrapper/DotWrapper';
import Container from '@components/organisms/Container/Container';
import ToursSlider from '@components/organisms/Slider/ToursSlider';

// import 'react-multi-carousel/lib/styles.css';

export const HomePage = () => {
  const toursScreenRef = useRef<HTMLDivElement>(null);

  const scrollToToursScreen = () => {
    const toursScreenTop =
      toursScreenRef.current?.getBoundingClientRect().top ?? 0;
    const scrollTop = window.pageYOffset + toursScreenTop;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  };

  return (
    <>
      <Styled.MainSection>
        <Styled.MainScreen>
          <Styled.Content>
            <Styled.Title>
              <span>the space is waiting for</span>you
              <DotWrapper />
            </Styled.Title>
          </Styled.Content>
          <Styled.ExploreLink onClick={scrollToToursScreen}>
            <Styled.ExploreLinkText>explore tours</Styled.ExploreLinkText>
          </Styled.ExploreLink>
        </Styled.MainScreen>
        <Styled.ToursScreen ref={toursScreenRef}>
          <Container>
            <ToursSlider />
          </Container>
        </Styled.ToursScreen>
      </Styled.MainSection>
    </>
  );
};
