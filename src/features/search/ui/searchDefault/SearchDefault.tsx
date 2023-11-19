import React from 'react'

import Title from 'antd/lib/typography/Title'

import s from './SearchDefault.module.scss'

import { SearchPanel } from '../searchPanel'

export const SearchDefault: React.FC = () => {
  return (
    <>
      <Title level={1}>Поиск видео</Title>
      <SearchPanel className={s.searchInput} />
    </>
  )
}
