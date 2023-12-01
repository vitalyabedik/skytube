import React, { useState } from 'react'

import { useAppSelector } from '@/common'
import { CustomPagination, LinearProgressBar, Preloader } from '@/components'
import { selectSearch, selectSearchQuery, useGetVideosQuery } from '@/features'
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined'
import BarsOutlined from '@ant-design/icons/BarsOutlined'
import Flex from 'antd/lib/flex'
import Title from 'antd/lib/typography/Title'
import { clsx } from 'clsx'

import s from './SearchResult.module.scss'

import { SearchPanel } from '../searchPanel'
import { VideosList } from '../videosList'

export type VisibleType = 'grid' | 'list'

type Props = {
  onChangeSearch: (text: string) => void
}

export const SearchResult: React.FC<Props> = ({ onChangeSearch }) => {
  const [isActive, setIsActive] = useState(false)
  const [visibleMode, setVisibleMode] = useState<VisibleType>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const search = useAppSelector(selectSearch)
  const queryParams = useAppSelector(selectSearchQuery)

  const { data, isFetching, isLoading } = useGetVideosQuery({
    countResult: queryParams.countResult,
    query: search,
    sortBy: queryParams.sortBy,
  })

  const gridIconClasses = clsx(s.icon, !isActive && s.active)
  const listIconClasses = clsx(s.icon, isActive && s.active)

  const onChangePageSizeHandler = (currentPageSize: number) => {
    setPageSize(currentPageSize)
  }

  const onChangeCurrentPageHandler = (currentPage: number) => {
    setPageSize(currentPage)
  }

  const onChangeModeHandler = (mode: VisibleType) => {
    if (visibleMode !== mode) {
      setVisibleMode(mode)
      setIsActive(mode === 'list')
    }
  }

  const loadingStatus = isLoading || isFetching

  if (isLoading) {
    return <LinearProgressBar />
  }

  return (
    <>
      <Title level={2}>Поиск видео</Title>
      <SearchPanel
        className={s.searchPanel}
        loadingStatus={loadingStatus}
        onChangeSearch={onChangeSearch}
      />
      {data && (
        <>
          {!loadingStatus && (
            <Flex align={'center'} gap={40} justify={'space-between'}>
              <Flex align={'center'} gap={15} wrap={'wrap'}>
                <Title level={3}>
                  <span className={s.titleText}>Видео по запросу </span>
                  {`«${search}»`}
                  <span className={s.countText}>{data?.pageInfo?.totalResults}</span>
                </Title>
              </Flex>
              <Flex align={'center'} gap={15}>
                <BarsOutlined
                  className={listIconClasses}
                  onClick={() => onChangeModeHandler('list')}
                />
                <AppstoreOutlined
                  className={gridIconClasses}
                  onClick={() => onChangeModeHandler('grid')}
                />
              </Flex>
            </Flex>
          )}
          {!loadingStatus && <VideosList videos={data.items} visibleMode={visibleMode} />}
          {!loadingStatus && (
            <CustomPagination
              changeCurrentPage={onChangeCurrentPageHandler}
              changePageSize={onChangePageSizeHandler}
              currentPage={currentPage}
              pageSize={pageSize}
              totalCount={+data.pageInfo.totalResults}
            />
          )}
          {loadingStatus && <Preloader />}
        </>
      )}
    </>
  )
}
