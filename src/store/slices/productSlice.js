import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionStatus, Reducers } from '~/configs/reducer';

import { HTTPClient } from '~/utils/apiClient';

//const httpClient = new HTTPClient(process.env.REACT_APP_API_BASE_URL);
const httpClient = new HTTPClient('http://localhost:5000/');

const initialState = {
  products: [],
  status: AsyncActionStatus.IDLE,
  error: null,
}

export const getProducts = createAsyncThunk(`${Reducers.PRODUCT}/getProducts`, async() => {
  //const response = await httpClient.get('/wp-json/get_product/all');
  const response = await httpClient.get('/products_temp');

  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response.data);
    }, 2000)
  })
  
  return res;
})

export const productSlice = createSlice({
  name: [Reducers.PRODUCT],
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = AsyncActionStatus.PENDING;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = AsyncActionStatus.IDLE;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = AsyncActionStatus.IDLE;
      state.error = action.error;
    },
  },
})

export default productSlice.reducer;