import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import {
  searchActions,
  selectCurrentPage,
  selectSearch,
  selectSearchQuery,
  useGetVideosQuery,
} from '@/features'

export const useSearchPagination = () => {
  const dispatch = useAppDispatch()

  const search = useAppSelector(selectSearch)
  const currentPage = useAppSelector(selectCurrentPage)
  const queryParams = useAppSelector(selectSearchQuery)

  const [prevPage, setPrevPage] = useState(0)
  const [pageSize, setPageSize] = useState(queryParams?.countResult ?? 8)

  const nextPageToken = currentPage > prevPage ? queryParams.nextPageToken : ''
  const prevPageToken = currentPage <= prevPage ? queryParams.prevPageToken : ''
  const currentPageSize =
    queryParams?.countResult !== pageSize ? queryParams?.countResult : pageSize

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
    if (queryParams?.countResult !== currentPageSize) {
      dispatch(
        searchActions.setCurrentPage({
          currentPage: 1,
        })
      )
      dispatch(
        searchActions.resetQuery({
          countResult: currentPageSize,
          sortBy: queryParams?.sortBy ?? 'relevance',
        })
      )
    }
  }

  const onChangeCurrentPageCallback = (newCurrentPage: number) => {
    setPrevPage(currentPage)
    dispatch(
      searchActions.setCurrentPage({
        currentPage: newCurrentPage,
      })
    )
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

  useEffect(() => {
    dispatch(
      searchActions.setCurrentPage({
        currentPage: 1,
      })
    )
  }, [])

  const loadingStatus = isLoading || isFetching

  return {
    currentPage,
    currentPageSize,
    data,
    isLoading,
    loadingStatus,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    prevPage,
    search,
  }
}
