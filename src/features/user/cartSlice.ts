/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "../../interface/ProductInterface";

const cardInitialState: Array<ProductInterface> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: cardInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInterface>) => {
      const payload: ProductInterface = action.payload;
      console.log(state);
      state.push(payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id: string = action.payload;
      return state.filter((product: ProductInterface) => product._id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
