import { GetQueryParamsType } from '@/features'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: {
    countResult: '10',
    nextPageToken: null,
    prevPageToken: null,
    sortBy: 'relevance',
  } as GetQueryParamsType,
  search: '',
}

export type SearchInitialStateType = typeof initialState

export const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    setQuery: (state, action: PayloadAction<{ query: GetQueryParamsType }>) => {
      state.query = action.payload.query
    },
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search
    },
  },
})

export const searchActions = searchSlice.actions
