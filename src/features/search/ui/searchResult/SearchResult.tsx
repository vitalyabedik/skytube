import React, { useState } from 'react'

import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined'
import BarsOutlined from '@ant-design/icons/BarsOutlined'
import Flex from 'antd/lib/flex'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import { clsx } from 'clsx'

import s from './SearchResult.module.scss'

import { SearchPanel } from '../searchPanel'
import { VideosList } from '../videosList'

export type VisibleType = 'grid' | 'list'

export const SearchResult: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [visibleMode, setVisibleMode] = useState<VisibleType>('grid')

  const searchResult = 'чем кормить кота'
  const searchResultCount = 7230

  const gridIconClasses = clsx(s.icon, !isActive && s.active)
  const listIconClasses = clsx(s.icon, isActive && s.active)

  const onChangeModeHandler = (mode: VisibleType) => {
    if (visibleMode !== mode) {
      setVisibleMode(mode)
      setIsActive(mode === 'list')
    }
  }

  return (
    <>
      <Title level={2}>Поиск видео</Title>
      <SearchPanel className={s.searchPanel} />
      <Flex align={'center'} justify={'space-between'}>
        <Flex align={'center'} gap={15}>
          <Title level={3}>
            <span className={s.titleText}>Видео по запросу </span>
            {`«${searchResult}»`}
          </Title>
          <Text className={s.countText}>{searchResultCount}</Text>
        </Flex>
        <Flex align={'center'} gap={15}>
          <BarsOutlined className={listIconClasses} onClick={() => onChangeModeHandler('list')} />
          <AppstoreOutlined
            className={gridIconClasses}
            onClick={() => onChangeModeHandler('grid')}
          />
        </Flex>
      </Flex>
      <VideosList visibleMode={visibleMode} />
    </>
  )
}
