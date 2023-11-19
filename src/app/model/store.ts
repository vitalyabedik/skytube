import { authSlice } from '@/features/auth/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
  reducer: {
    auth: authSlice,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
