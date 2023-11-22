import React, { useEffect, useState } from 'react'

import { Page } from '@/components'
import { SearchDefault, SearchResult, useAddTokenMutation } from '@/features'
import clsx from 'clsx'

import s from './SearchPage.module.scss'

export const SearchPage: React.FC = () => {
  const [search, setSearch] = useState('')

  const onChangeSearch = (text: string) => {
    setSearch(text)
  }

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
      {search ? (
        <SearchResult search={search} />
      ) : (
        <SearchDefault onChangeSearch={onChangeSearch} />
      )}
    </Page>
  )
}
