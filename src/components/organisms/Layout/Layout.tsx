// import Footer from '@components/organisms/footer/Footer';
import Header from '@components/organisms/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import * as Styled from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Styled.MainSection>{<Outlet />}</Styled.MainSection> */}
      {<Outlet />}
    </>
  );
};
export default Layout;
