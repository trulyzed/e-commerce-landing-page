import { createSlice } from '@reduxjs/toolkit';
import { Reducers } from '~/configs/reducer';

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: [Reducers.CART],
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const matchedIdx = state.cart.findIndex(i => i.id === product.id);
      if (matchedIdx > -1) state.cart[matchedIdx].quantity++;
      else state.cart.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
      })
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const matchedIdx = state.cart.findIndex(i => i.id === product.id);
      if (matchedIdx > -1) {
        if (state.cart[matchedIdx].quantity > 1) state.cart[matchedIdx].quantity--;
        else state.cart.splice(matchedIdx, 1);
      }
    }
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;