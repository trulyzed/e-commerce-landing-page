import { configureStore } from '@reduxjs/toolkit';
import { Reducers } from '~/configs/reducer';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    [Reducers.PRODUCT]: productReducer,
    [Reducers.CART]: cartReducer,
  },
})