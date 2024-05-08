/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const orderInitialState: any = [];

const orderSlice = createSlice({
  name: "order",
  initialState: orderInitialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<any>) => {
      const { product, vendor } = action.payload;
      const productToOrder = {
        productId: product._id,
        title: product.title,
        image: product.image_1,
        price: product.discountedPrice,
        quantity: product.quantity,
        totalAmount: product.discountedPrice * product.quantity,
      };
      state.length = 0;
      state.push({ product: productToOrder, vendor });
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
