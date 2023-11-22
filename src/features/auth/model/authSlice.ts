import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  initialState: {
    isAuth: false,
  },
  name: 'auth',
  reducers: {
    setAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
      state.isAuth = action.payload.isAuth
    },
  },
})

export const authActions = authSlice.actions
