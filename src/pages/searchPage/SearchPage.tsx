import React, { useEffect } from 'react'

import { getValueFromLocalStorage, useAppDispatch, useAppSelector } from '@/common'
import { Page } from '@/components'
import {
  SearchDefault,
  SearchResult,
  searchActions,
  selectSearch,
  useAddTokenMutation,
} from '@/features'
import clsx from 'clsx'

import s from './SearchPage.module.scss'

export const SearchPage: React.FC = () => {
  const search = useAppSelector(selectSearch)
  const token = getValueFromLocalStorage('token')

  const dispatch = useAppDispatch()

  const [addToken] = useAddTokenMutation()

  const onChangeSearch = (search: string) => {
    dispatch(searchActions.setSearch({ search }))
  }

  useEffect(() => {
    if (token) {
      addToken({
        googleToken: `${import.meta.env.VITE_GOOGLE_API_KEY}`,
      })
    }
  }, [addToken, token])

  const searchWrapperClasses = clsx(search ? s.searchResultWrapper : s.searchDefaultWrapper)

  return (
    <Page className={searchWrapperClasses}>
      {!search && <SearchDefault onChangeSearch={onChangeSearch} />}
      {search && <SearchResult onChangeSearch={onChangeSearch} />}
    </Page>
  )
}
