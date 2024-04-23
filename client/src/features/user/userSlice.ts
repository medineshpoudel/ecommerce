/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  role: string;
}

const initialState: UserState = {
  username: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction) => {
      const payload: any = action.payload;
      state.username = payload.username;
      state.role = payload.role[0];
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
