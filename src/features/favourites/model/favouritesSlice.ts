import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: FavouriteType[] = []

export const favouritesSlice = createSlice({
  initialState,
  name: 'favourites',
  reducers: {
    addFavourite: (state, action: PayloadAction<{ favouriteItem: FavouriteType }>) => {
      state.unshift({ ...action.payload.favouriteItem })
    },
  },
})

export const favouritesActions = favouritesSlice.actions

//types

export type FavouriteType = {
  id: number
  maxCount: string
  sortBy: string
  title: string
}
