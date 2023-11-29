import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { CustomPagination, LinearProgressBar, Page } from '@/components'
import {
  SearchDefault,
  SearchResult,
  searchActions,
  selectSearch,
  useAddTokenMutation,
  useGetVideosQuery,
} from '@/features'
import clsx from 'clsx'

import s from './SearchPage.module.scss'

export const SearchPage: React.FC = () => {
  const search = useAppSelector(selectSearch)
  const token = localStorage.getItem('token')

  const dispatch = useAppDispatch()

  const { data, isFetching, isLoading } = useGetVideosQuery({ query: search }, { skip: !search })
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

  useEffect(() => {
    if (data && data.queryId) {
      dispatch(searchActions.setSearchId({ searchId: data.queryId }))
    }
  }, [data])

  const searchWrapperClasses = clsx(search ? s.searchResultWrapper : s.searchDefaultWrapper)

  const loadingStatus = isLoading || isFetching

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Page className={searchWrapperClasses}>
        {!isLoading && !data && <SearchDefault onChangeSearch={onChangeSearch} />}
        {data && <SearchResult onChangeSearch={onChangeSearch} />}
        {!loadingStatus && data && <CustomPagination totalCount={+data.pageInfo.totalResults} />}
      </Page>
    </>
  )
}
