import React, { memo, useState } from 'react'

import { useAppSelector } from '@/common'
import { CustomModal } from '@/components'
import { FavouritesForm, selectSearch } from '@/features'
import { HeartOutlined } from '@ant-design/icons'
import Input, { SearchProps } from 'antd/lib/input'
import clsx from 'clsx'

import s from './SearchPanel.module.scss'

type Props = {
  className?: string
  loadingStatus?: boolean
  onChangeSearch: (text: string) => void
}

export const SearchPanel: React.FC<Props> = memo(({ className, loadingStatus, onChangeSearch }) => {
  const { Search } = Input

  const [open, setOpen] = useState(false)
  const search = useAppSelector(selectSearch)

  const onIconClickHandler = () => {
    setOpen(true)
  }

  const onSearchHandler: SearchProps['onSearch'] = (value, _e) => {
    onChangeSearch(value)
  }

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
        suffix={search && <HeartOutlined className={s.heartIcon} onClick={onIconClickHandler} />}
      />
      <CustomModal open={open} setOpen={setOpen} title={'Сохранить запрос'}>
        <FavouritesForm setOpen={setOpen} />
      </CustomModal>
    </>
  )
})
