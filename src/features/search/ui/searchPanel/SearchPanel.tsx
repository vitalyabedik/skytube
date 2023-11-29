import React, { useState } from 'react'

import { useAppSelector } from '@/common'
import { CustomModal } from '@/components'
import { FavouritesForm, selectSearch } from '@/features'
import { HeartOutlined } from '@ant-design/icons'
import Search, { SearchProps } from 'antd/lib/input/Search'
import clsx from 'clsx'

import s from './SearchPanel.module.scss'

type Props = {
  className?: string
  loadingStatus?: boolean
  onChangeSearch: (text: string) => void
}

export const SearchPanel: React.FC<Props> = ({ className, loadingStatus, onChangeSearch }) => {
  const [open, setOpen] = useState(false)

  const search = useAppSelector(selectSearch)

  const onIconClickHandler = () => {
    setOpen(true)
  }

  const onSearchHandler: SearchProps['onSearch'] = (value, _e) => {
    onChangeSearch(value)
  }

  const suffix = <HeartOutlined className={s.heartIcon} onClick={onIconClickHandler} />

  const searchClasses = clsx(s.input, className)

  return (
    <>
      <Search
        className={searchClasses}
        enterButton={'Найти'}
        loading={loadingStatus}
        onSearch={onSearchHandler}
        placeholder={search ? search : 'Что хотите посмотреть?'}
        size={'large'}
        suffix={search && suffix}
      />
      <CustomModal open={open} setOpen={setOpen} title={'Сохранить запрос'}>
        <FavouritesForm setOpen={setOpen} />
      </CustomModal>
    </>
  )
}
