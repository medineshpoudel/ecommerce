/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  role: string;
  isLoggedIn: boolean;
  accessToken: string;
}

const initialState: UserState = {
  username: "",
  role: "",
  isLoggedIn: false,
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const payload: any = action.payload;
      state.username = payload.username;
      state.role = payload.role;
      state.accessToken = payload.accessToken;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
