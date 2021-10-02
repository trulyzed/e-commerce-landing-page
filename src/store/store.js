import { configureStore } from '@reduxjs/toolkit';
import { Reducers } from '~/configs/reducer';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    [Reducers.PRODUCT]: productReducer,
  },
})