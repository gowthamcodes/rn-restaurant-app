import { createSlice } from '@reduxjs/toolkit';
import { Data } from '../../constants';

const initialState = {
  orders: [...Data.menu],
  quantity: 0,
  price: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    modifyCart: (state, action) => {
      const { orders, quantity, price } = action.payload;
      state.orders = orders;
      state.quantity = quantity;
      state.price = price;
    },
  },
});

export const { modifyCart } = cartSlice.actions;

export default cartSlice.reducer;
