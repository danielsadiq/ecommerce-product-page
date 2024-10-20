import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
	lightBox:false,
  cartOpen: false,
  curr: 1,
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
    },
    nextImage(state, action){
      state.curr = state.curr += action.payload;
      if (state.curr > 4) state.curr = 1;
      if (state.curr < 1) state.curr = 4;
    }
  },
});

export const {toggleNav, toggleLightBox, toggleCart, nextImage} = uiSlice.actions;

export default uiSlice.reducer;
