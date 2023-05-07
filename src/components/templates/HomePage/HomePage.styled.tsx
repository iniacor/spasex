import styled from 'styled-components';

export const MainSection = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;
export const MainScreen = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url(public/banner1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  &::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1e1e1e7a;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.text.contrastText};
  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 310px;
  line-height: 372px;
  text-transform: uppercase;
  z-index: 1;
  & span {
    font-size: 48px;
    line-height: 0;
  }
`;
export const ExploreLink = styled.a`
  position: relative;
  top: 135px;
  right: 40px;
  color: ${({ theme }) => theme.colors.text.contrastText};
  cursor: pointer;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 40px;
    height: 40px;
    background-image: url(src/assets/icons/ArrowDown.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 1;
  }
`;
export const ExploreLinkText = styled.span`
  position: relative;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-transform: Capitalize;
  -webkit-text-stroke: 1px black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ToursScreen = styled.section`
  padding-top: 100px;
  color: #333;
  height: 100vh;
`;
export const ToursTitle = styled.h2`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
`;
