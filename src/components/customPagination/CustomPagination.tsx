import React from 'react'

import { Flex } from 'antd'
import Pagination, { PaginationProps } from 'antd/lib/pagination'
import { clsx } from 'clsx'

import s from './CustomPagination.module.scss'

type Props = {
  changeCurrentPage: (currentPage: number) => void
  changePageSize: (pageSize: number) => void
  className?: string
  currentPage: number
  pageSize: number
  totalCount: number
}

export const CustomPagination: React.FC<Props> = ({
  changeCurrentPage,
  changePageSize,
  className,
  currentPage,
  pageSize,
  totalCount,
}) => {
  const onChangeHandler: PaginationProps['onChange'] = (current, pageSize) => {
    changeCurrentPage(current)
    changePageSize(pageSize)
  }

  const paginationClasses = clsx(s.root, className)

  return (
    <Pagination
      className={paginationClasses}
      current={currentPage}
      itemRender={(page, type, originalElement) => {
        if (type === 'prev') {
          return <a className={'prev-page'}>Previous</a>
        }
        if (type === 'next') {
          return (
            <Flex gap={8}>
              <span>{currentPage}</span>
              <a className={'next-page'}>Next</a>
            </Flex>
          )
        }

        if (type === 'page') {
          return (
            <li>
              <div className={'ant-pagination-item'}>{page}</div>
            </li>
          )
        }

        return originalElement
      }}
      onChange={onChangeHandler}
      pageSize={pageSize}
      pageSizeOptions={[4, 8, 12, 16]}
      showSizeChanger
      simple
      total={totalCount}
    />
  )
}
