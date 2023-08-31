import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
   name: "form",
   initialState: {
      name: ""
   },
   reducers: {
      changeCity(state, action) {
         state.name = action.payload;
      },
   }
});

export const formReducer = formSlice.reducer;
export const { changeCity } = formSlice.actions;

