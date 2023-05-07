import { RootState } from './store';
import { productsAdapter } from './slices/products';
import { createSelector } from '@reduxjs/toolkit';

export const selectorAllProducts = (state: RootState) =>
  productsAdapter.getSelectors().selectAll(state.products);

export const selectFavoriteProductIds = (state: RootState) => state.favorites;

export const selectedFavoriteProducts = createSelector(
  selectorAllProducts,
  selectFavoriteProductIds,
  (products, favoriteIds) => {
    return products.filter((product) => favoriteIds.includes(product.id));
  }
);
