import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export type UserData = {
  email: string;
  password: string;
};

type UserInitialState = {
  isLoggedIn: boolean;
  data: UserData;
  isLoading: boolean;
};

const initialState: UserInitialState = {
  isLoggedIn: false,
  data: {
    email: "",
    password: "",
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof UserData; value: string }>,
    ) => {
      const { field, value } = action.payload;
      state.data[field] = value;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateField, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
