import React, { memo } from 'react'

import { CustomPagination, LinearProgressBar, Preloader } from '@/components'
import { useSearchPagination, useSearchVisibleMode } from '@/features'
import { SearchResultInfo } from '@/features/search/ui/searchResult/searchResultInfo'
import Flex from 'antd/lib/flex'
import Title from 'antd/lib/typography/Title'

import s from './SearchResult.module.scss'

import { SearchPanel } from '../searchPanel'
import { VideosList } from '../videosList'
import { SearchResultModeIcons } from './searchResultModeIcons'

type Props = {
  onChangeSearch: (text: string) => void
}

export const SearchResult: React.FC<Props> = memo(({ onChangeSearch }) => {
  const {
    currentPage,
    data,
    isLoading,
    loadingStatus,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    pageSize,
    search,
  } = useSearchPagination()

  const { isActive, onChangeModeCallback, visibleMode } = useSearchVisibleMode()

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
            <>
              <Flex align={'center'} gap={40} justify={'space-between'}>
                <SearchResultInfo search={search} totalResults={+data?.pageInfo?.totalResults} />
                <SearchResultModeIcons
                  isActive={isActive}
                  onChangeModeCallback={onChangeModeCallback}
                />
              </Flex>
              <VideosList videos={data.items} visibleMode={visibleMode} />
              <CustomPagination
                changeCurrentPage={onChangeCurrentPageCallback}
                changePageSize={onChangePageSizeCallback}
                currentPage={currentPage}
                pageSize={pageSize}
                totalCount={+data.pageInfo.totalResults}
              />
            </>
          )}
          {loadingStatus && <Preloader />}
        </>
      )}
    </>
  )
})
