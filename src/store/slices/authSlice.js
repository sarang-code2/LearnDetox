import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      const {isAuthenticated, user} = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.user = user;
    },
  },
});

export const {userLoggedIn} = authSlice.actions;

export default authSlice.reducer;
