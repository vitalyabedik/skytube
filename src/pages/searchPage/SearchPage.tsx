import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { Page } from '@/components'
import {
  SearchDefault,
  SearchResult,
  authActions,
  searchActions,
  selectIsAuth,
  selectSearch,
  useAddTokenMutation,
} from '@/features'
import clsx from 'clsx'

import s from './SearchPage.module.scss'

export const SearchPage: React.FC = () => {
  const search = useAppSelector(selectSearch)
  const token = localStorage.getItem('token')
  const isAuth = useAppSelector(selectIsAuth)

  const dispatch = useAppDispatch()

  const [addToken] = useAddTokenMutation()

  const onChangeSearch = (search: string) => {
    dispatch(searchActions.setSearch({ search }))
  }

  useEffect(() => {
    if (token && !isAuth) {
      addToken({
        googleToken: `${import.meta.env.VITE_GOOGLE_API_KEY}`,
      })

      dispatch(authActions.setAuth({ isAuth: true }))
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
