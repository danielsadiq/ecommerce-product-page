import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
	lightBox:false,
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
  },
});

export const {toggleNav, toggleLightBox} = uiSlice.actions;

export default uiSlice.reducer;
