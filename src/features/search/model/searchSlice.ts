import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export type SearchInitialStateType = typeof initialState

export const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search
    },
  },
})

export const searchActions = searchSlice.actions
