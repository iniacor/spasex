import 'symbol-observable';
import { configureStore } from '@reduxjs/toolkit';
import products from './slices/products';
import favorites from './slices/favorites';

const store = configureStore({
  reducer: {
    products,
    favorites,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
