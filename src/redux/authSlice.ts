// src/redux/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.user = { username: action.payload };
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    register(state, action: PayloadAction<{ username: string; password: string }>) {
      state.isAuthenticated = true;
      state.user = { username: action.payload.username };
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
