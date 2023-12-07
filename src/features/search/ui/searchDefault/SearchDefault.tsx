import React, { memo } from 'react'

import Title from 'antd/lib/typography/Title'

import s from './SearchDefault.module.scss'

import { SearchPanel } from '../searchPanel'

type Props = {
  onChangeSearch: (text: string) => void
}

export const SearchDefault: React.FC<Props> = memo(({ onChangeSearch }) => {
  return (
    <>
      <Title level={1}>Поиск видео</Title>
      <SearchPanel className={s.searchInput} onChangeSearch={onChangeSearch} />
    </>
  )
})
