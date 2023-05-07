/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/icons/Logo.svg';
import * as Styled from './Header.styled';
import FavoriteBtnLink from '@components/atoms/FavoriteBtnLink/FavoriteBtnLink';
import SignInButton from '@components/atoms/SignInButton/SignInButton';
import Container from '../Container/Container';

const Header = () => {
  const navigate = useNavigate();
  function goToFavorites() {
    navigate('/favorites');
  }
  return (
    <Styled.AppBar>
      <Container>
        <Styled.NavBar>
          <Styled.LogoWrapper onClick={() => navigate('/')}>
            <Logo />
          </Styled.LogoWrapper>
          <Styled.Menu>
            <Styled.MenuLink to='/'>
              <Styled.MenuItem>home</Styled.MenuItem>
            </Styled.MenuLink>
            <Styled.MenuLink to='#'>
              <Styled.MenuItem>tours</Styled.MenuItem>
            </Styled.MenuLink>
            <Styled.MenuLink to='#'>
              <Styled.MenuItem>about</Styled.MenuItem>
            </Styled.MenuLink>
            <Styled.MenuLink to='#'>
              <Styled.MenuItem>help</Styled.MenuItem>
            </Styled.MenuLink>
          </Styled.Menu>
          <Styled.UserActions>
            <FavoriteBtnLink goToFavorites={goToFavorites} />
            <SignInButton />
          </Styled.UserActions>
        </Styled.NavBar>
      </Container>
    </Styled.AppBar>
  );
};

export default Header;
