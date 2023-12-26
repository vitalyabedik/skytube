import React, { memo, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { CustomModal } from '@/components'
import { FavouritesForm, searchActions, selectSearch, selectSearchQuery } from '@/features'
import { HeartOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { SearchProps } from 'antd/lib/input'

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
  const queryParams = useAppSelector(selectSearchQuery)

  const dispatch = useAppDispatch()

  const onIconClickHandler = () => {
    setOpen(true)
  }

  const onSearchHandler: SearchProps['onSearch'] = (value, _e) => {
    if (value !== search) {
      dispatch(
        searchActions.resetQuery({
          countResult: 8,
          sortBy: queryParams?.sortBy ?? 'relevance',
        })
      )
    }
    dispatch(searchActions.setCurrentPage({ currentPage: 1 }))
    onChangeSearch(value)
  }

  return (
    <>
      <Search
        className={className}
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
