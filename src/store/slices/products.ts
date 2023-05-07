import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { ProductServise } from '../../services/product.service';
import type { Product } from '../../types/entities';
import { LoadingStatus } from '../../types/enums/loadingStatus';

export const fetchProductsList = createAsyncThunk(
  'products/fetchProductsList',
  async (_, { rejectWithValue }) => {
    try {
      const { rockets } = await ProductServise.getAllProduct();
      return rockets;
    } catch (error) {
      console.error('An error occurred while fetching products:', error);
      return rejectWithValue({ error: error.message });
    }
  }
);

export const productsAdapter = createEntityAdapter<Product>();

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState({
    status: LoadingStatus.IDLE,
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state) => {
        state.status = LoadingStatus.PENDING;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.status = LoadingStatus.SUCCEEDED;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.status = LoadingStatus.FAILED;
        state.error = action.error.message ?? null;
      });
  },
});

export default productsSlice.reducer;
