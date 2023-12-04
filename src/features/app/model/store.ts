import { baseApi } from '@/common'
import { authSlice, searchSlice } from '@/features'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
