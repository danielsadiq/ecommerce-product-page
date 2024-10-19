import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
	lightBox:false,
  cartOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNav(state) {
      state.navOpen = !state.navOpen;
    },
		toggleLightBox(state){
			state.lightBox = !state.lightBox;
		},
    toggleCart(state){
      state.cartOpen = !state.cartOpen;
    }
  },
});

export const {toggleNav, toggleLightBox, toggleCart} = uiSlice.actions;

export default uiSlice.reducer;
