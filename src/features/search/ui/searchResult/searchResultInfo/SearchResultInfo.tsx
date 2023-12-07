import React, { memo } from 'react'

import Flex from 'antd/lib/flex'
import Title from 'antd/lib/typography/Title'

import s from './SearchResultInfo.module.scss'

type Props = {
  search: string
  totalResults: number
}

export const SearchResultInfo: React.FC<Props> = memo(({ search, totalResults }) => {
  return (
    <Flex align={'center'} gap={15} wrap={'wrap'}>
      <Title level={3}>
        <span className={s.titleText}>Видео по запросу </span>
        {`«${search}»`}
        <span className={s.countText}>{totalResults}</span>
      </Title>
    </Flex>
  )
})
