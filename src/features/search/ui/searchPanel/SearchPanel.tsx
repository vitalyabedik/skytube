import React, { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react'

import { CustomModal } from '@/components'
import { AddFavouritesForm } from '@/features'
import { HeartOutlined } from '@ant-design/icons'
import Search, { SearchProps } from 'antd/lib/input/Search'
import clsx from 'clsx'

import s from './SearchPanel.module.scss'

type Props = {
  className?: string
  onChangeSearch?: (text: string) => void
  search?: string
}

export const SearchPanel: React.FC<Props> = ({ className, onChangeSearch, search }) => {
  const [open, setOpen] = useState(false)

  const onIconClickHandler = () => {
    console.log('123')
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
        onSearch={onSearchHandler}
        placeholder={'Что хотите посмотреть?'}
        size={'large'}
        suffix={search && suffix}
      />
      <CustomModal open={open} setOpen={setOpen} title={'Сохранить запрос'}>
        <AddFavouritesForm setOpen={setOpen} />
      </CustomModal>
    </>
  )
}
