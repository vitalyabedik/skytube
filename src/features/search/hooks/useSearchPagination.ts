import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { searchActions, selectSearch, selectSearchQuery, useGetVideosQuery } from '@/features'

export const useSearchPagination = () => {
  const dispatch = useAppDispatch()

  const search = useAppSelector(selectSearch)
  const queryParams = useAppSelector(selectSearchQuery)

  const [currentPage, setCurrentPage] = useState(1)
  const [prevPage, setPrevPage] = useState(0)
  const [pageSize, setPageSize] = useState(queryParams?.countResult ?? 8)

  const nextPageToken = currentPage > prevPage ? queryParams.nextPageToken : ''
  const prevPageToken = currentPage <= prevPage ? queryParams.prevPageToken : ''

  const { data, isFetching, isLoading } = useGetVideosQuery({
    countResult: queryParams.countResult ?? 8,
    nextPageToken,
    prevPageToken,
    query: search,
    sortBy: queryParams.sortBy ?? 'relevance',
  })

  const onChangePageSizeCallback = (currentPageSize: number) => {
    setPageSize(currentPageSize)

    dispatch(
      searchActions.setQuery({
        query: {
          countResult: currentPageSize,
          nextPageToken: data?.pageInfo?.pagination?.nextPageToken ?? '',
          prevPageToken: data?.pageInfo?.pagination?.prevPageToken ?? '',
          sortBy: queryParams?.sortBy,
        },
      })
    )
  }

  const onChangeCurrentPageCallback = (newCurrentPage: number) => {
    setPrevPage(currentPage)
    setCurrentPage(newCurrentPage)

    dispatch(
      searchActions.setQuery({
        query: {
          countResult: queryParams?.countResult,
          nextPageToken: data?.pageInfo?.pagination?.nextPageToken ?? '',
          prevPageToken: data?.pageInfo?.pagination?.prevPageToken ?? '',
          sortBy: queryParams?.sortBy,
        },
      })
    )
  }

  const loadingStatus = isLoading || isFetching

  return {
    currentPage,
    data,
    isLoading,
    loadingStatus,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    pageSize,
    prevPage,
    search,
  }
}
