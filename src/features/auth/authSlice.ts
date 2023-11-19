import { createAppAsyncThunk } from '@/common/utils/createAppAsyncThunk'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = action.payload.isAuth
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isAuth = action.payload.isAuth
      })
  },
  initialState: {
    isAuth: false,
    user: {} as UserType,
  },
  name: 'auth',
  reducers: {
    setAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
      state.isAuth = action.payload.isAuth
    },
    setUser: (state, action: PayloadAction<{ user: UserType }>) => {
      state.user = action.payload.user
    },
  },
})

const login = createAppAsyncThunk<AuthArgType, LoginParamsType>(
  'auth/login',
  async (arg, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get<UserType[]>('./users.json')
      const mockUser = res.data.find(
        user => user.username === arg.username && user.password === arg.password
      )

      if (mockUser) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', mockUser.username)
        dispatch(authActions.setUser({ user: mockUser }))
        dispatch(authActions.setAuth({ isAuth: true }))
      } else {
        console.log('error пароль или имя')
      }

      return { isAuth: true }
    } catch (e) {
      console.log('error логинизации')

      return rejectWithValue(null)
    }
  }
)

const logout = createAppAsyncThunk<AuthArgType, LoginParamsType>(
  'auth/logout',
  async (arg, { dispatch, rejectWithValue }) => {
    try {
      localStorage.removeItem('auth')
      localStorage.removeItem('username')
      dispatch(authActions.setUser({ user: {} as UserType }))

      return { isAuth: false }
    } catch (e) {
      console.log('error логинизации')

      return rejectWithValue(null)
    }
  }
)

export const authSlice = slice.reducer
export const authActions = slice.actions
export const authThunks = { login, logout }

export type AuthArgType = {
  isAuth: boolean
}

export type UserType = {
  password?: string
  username: string
}

export type LoginParamsType = UserType
