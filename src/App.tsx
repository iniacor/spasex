/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@components/pages/Home/Home';
import Favorites from '@components/pages/Favorites/Favorites';
import Layout from '@components/organisms/Layout/Layout';
import { useAppDispatch } from './hooks';
import { fetchProductsList } from '@store/slices/products';
import { useLocalStorageCounter } from '@hooks/useLocalStorageCounter';

const App = () => {
  const dispatch = useAppDispatch();
  const { incrementCounter } = useLocalStorageCounter();

  useEffect(() => {
    incrementCounter();
    dispatch(fetchProductsList());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
