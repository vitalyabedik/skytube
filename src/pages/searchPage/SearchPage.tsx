import React from 'react'

import { Page } from '@/components'
import { SearchDefault, SearchResult } from '@/features'

import s from './SearchPage.module.scss'

export const SearchPage: React.FC = () => {
  return (
    // <Page className={s.searchDefaultWrapper}>
    <Page className={s.searchResultWrapper}>
      {/*<SearchDefault />*/}
      <SearchResult />
    </Page>
  )
}
