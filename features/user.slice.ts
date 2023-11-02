import { createSlice } from "@reduxjs/toolkit";

type UserInitialState = {
  isLoggedIn: boolean;
};

const initialState: UserInitialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
