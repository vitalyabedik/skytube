import React, { memo } from 'react'

import { VisibleType } from '@/features'
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined'
import BarsOutlined from '@ant-design/icons/BarsOutlined'
import Flex from 'antd/lib/flex'
import { clsx } from 'clsx'

import s from './SearchResultModeIcons.module.scss'

type Props = {
  isActive: boolean
  onChangeModeCallback: (mode: VisibleType) => void
}

export const SearchResultModeIcons: React.FC<Props> = memo(({ isActive, onChangeModeCallback }) => {
  const gridIconClasses = clsx(s.icon, !isActive && s.active)
  const listIconClasses = clsx(s.icon, isActive && s.active)

  const onChangeModeListHandler = () => {
    onChangeModeCallback('list')
  }

  const onChangeModeGridHandler = () => {
    onChangeModeCallback('grid')
  }

  return (
    <Flex align={'center'} gap={15}>
      <BarsOutlined className={listIconClasses} onClick={onChangeModeListHandler} />
      <AppstoreOutlined className={gridIconClasses} onClick={onChangeModeGridHandler} />
    </Flex>
  )
})
