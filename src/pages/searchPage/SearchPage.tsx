import React, { useEffect, useState } from 'react'

import { LinearProgressBar, Page } from '@/components'
import { SearchDefault, SearchResult, useAddTokenMutation, useGetVideosQuery } from '@/features'
import clsx from 'clsx'

import s from './SearchPage.module.scss'

export const SearchPage: React.FC = () => {
  const [search, setSearch] = useState('')

  const onChangeSearch = (text: string) => {
    setSearch(text)
  }

  const { data, isLoading } = useGetVideosQuery(search, { skip: !search })
  const [addToken] = useAddTokenMutation()

  useEffect(() => {
    addToken({
      googleToken: `${import.meta.env.VITE_GOOGLE_API_KEY}`,
    })
  }, [])

  console.log(search)

  const searchWrapperClasses = clsx(search ? s.searchResultWrapper : s.searchDefaultWrapper)

  return (
    <Page className={searchWrapperClasses}>
      {isLoading && <LinearProgressBar />}
      {data && <SearchResult data={data} search={search} />}
      {!isLoading && !data && <SearchDefault onChangeSearch={onChangeSearch} />}
    </Page>
  )
}
