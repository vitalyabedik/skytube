import React from 'react'

import { Page } from '@/components'
import { SearchDefault, SearchResult, useSearchPage } from '@/features'
import clsx from 'clsx'

import s from './SearchPage.module.scss'

export const SearchPage: React.FC = () => {
  const { onChangeCallback, search } = useSearchPage()

  const searchWrapperClasses = clsx(search ? s.searchResultWrapper : s.searchDefaultWrapper)

  return (
    <Page className={searchWrapperClasses}>
      {!search && <SearchDefault onChangeSearch={onChangeCallback} />}
      {search && <SearchResult onChangeSearch={onChangeCallback} />}
    </Page>
  )
}
