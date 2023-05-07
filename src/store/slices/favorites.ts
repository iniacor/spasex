import { createSlice } from '@reduxjs/toolkit';
import type { Product } from '../../types/entities';

type FavoritesState = Pick<Product, 'id'>[];

const initialState: FavoritesState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload: productId }) {
      if (!state.includes(productId)) {
        state.push(productId);
      }
    },
    removeFromFavorites(state, { payload: productId }) {
      const index = state.indexOf(productId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    removeAllFavorites(state) {
      state.splice(0);
    },
  },
  extraReducers: {},
});

export const { actions } = favoritesSlice;
export default favoritesSlice.reducer;
