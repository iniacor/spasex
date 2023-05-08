import Header from '@components/organisms/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      {<Outlet />}
    </>
  );
};
export default Layout;
