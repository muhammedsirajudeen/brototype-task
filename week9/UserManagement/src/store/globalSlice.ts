import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userProps {
  email?: string;
  password?: string;
  profileImage?: string;
  _id?: string;
  address?: string;
  phone?: string;
  authorization?: string;
}

export interface GlobalState {
  authenticated: boolean;
  user: userProps;
}

//here do jwt authentication
const initialState: GlobalState = {
  authenticated: false,
  user: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
    clearAuthenticated: (state) => {
      state.authenticated = false;
    },
    setUser: (state, action: PayloadAction<userProps>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticated, clearAuthenticated, setUser } =
  globalSlice.actions;

export default globalSlice.reducer;
