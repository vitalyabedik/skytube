import { GetQueryParamsType, sortByType } from '@/features'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: {
    countResult: 8,
    nextPageToken: '',
    prevPageToken: '',
    sortBy: 'relevance',
  } as GetQueryParamsType,
  search: '',
}

export const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    resetQuery: (state, action: PayloadAction<{ countResult: number; sortBy: sortByType }>) => {
      state.query = {
        countResult: action.payload.countResult,
        nextPageToken: '',
        prevPageToken: '',
        sortBy: action.payload.sortBy,
      }
    },
    setQuery: (state, action: PayloadAction<{ query: GetQueryParamsType }>) => {
      state.query = action.payload.query
    },
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search
    },
  },
})

export const searchActions = searchSlice.actions
