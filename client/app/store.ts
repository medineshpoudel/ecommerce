import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../src/features/user/userSlice";
import cartSlice from "../src/features/user/cartSlice";
import orderSlice from "../src/features/user/orderSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
