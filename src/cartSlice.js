import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // payload = quantity
      state.quantity = action.payload;
    },
    deleteFromCart(state) {
      state.quantity = 0;
    },
  },
});

export const {addToCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;