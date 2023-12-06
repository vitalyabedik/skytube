import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Route, useAppDispatch } from '@/common'
import {
  FavouriteType,
  QueryType,
  searchActions,
  useGetFavouritesQuery,
  useRemoveFavouriteMutation,
} from '@/features'
import { message } from 'antd'

export const useFavouriteItem = () => {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<FavouriteType | null>(null)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { data: favouritesItems } = useGetFavouritesQuery()
  const [removeFavourite] = useRemoveFavouriteMutation()

  const fetchFavouriteQueryCallback = (query: QueryType) => {
    dispatch(
      searchActions.setQuery({
        query: {
          countResult: query.maxCount,
          sortBy: query.sortBy,
        },
      })
    )
    dispatch(
      searchActions.setSearch({
        search: query.text,
      })
    )
    navigate(Route.Search)
  }

  const editFavouriteQueryCallback = (id: string) => {
    const selectedItem = favouritesItems?.find(favouriteItem => favouriteItem.id === id)

    setSelectedItem(selectedItem ?? null)
    setOpen(true)
  }

  const deleteFavouriteQueryCallback = (id: string) => {
    removeFavourite(id).then(() => {
      message.success(`Query successfully deleted`)
    })
  }

  return {
    deleteFavouriteQueryCallback,
    editFavouriteQueryCallback,
    favouritesItems,
    fetchFavouriteQueryCallback,
    open,
    selectedItem,
    setOpen,
  }
}
