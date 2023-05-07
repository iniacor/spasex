import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppBar = styled.header`
  position: fixed;
  max-width: 1440px;
  width: 100%;
  height: 80px;
  background: #1e1e1e7a;
  box-shadow: none;
  z-index: 1;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-block: 12px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const MenuItem = styled.li`
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text.contrastText};
  transition: 0.4s all ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.4s all ease;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    transform-origin: bottom-right;
    transition: transform 0.5s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom-left;
  }
`;

export const UserActions = styled.div`
  display: flex;
  gap: 10px;
`;
