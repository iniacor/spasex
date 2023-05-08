import styled from 'styled-components';

export const MainSection = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const FavouritesPageTop = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BackgroundImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  background-image: url(src/assets/images/favouritesbg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: brightness(0.5);
`;

export const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0;
`;

export const FavouritesContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 100px;
  overflow-x: scroll;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 13px;
`;

export const Title = styled.h1`
  display: inline-flex;
  position: absolute;
  top: -250px;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.text.contrastText};
  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  text-transform: uppercase;
  z-index: 1;
`;
