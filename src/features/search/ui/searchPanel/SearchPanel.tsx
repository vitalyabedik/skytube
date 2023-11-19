import React from 'react'

import { HeartOutlined } from '@ant-design/icons'
import Search, { SearchProps } from 'antd/lib/input/Search'

import s from './SearchPanel.module.scss'

type Props = {
  className?: string
}

export const SearchPanel: React.FC<Props> = ({ className }) => {
  const suffix = (
    <HeartOutlined
      style={{
        color: '#1677ff',
        fontSize: 16,
      }}
    />
  )

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)

  return (
    <Search
      className={className}
      enterButton={'Найти'}
      onSearch={onSearch}
      placeholder={'Что хотите посмотреть?'}
      size={'large'}
      suffix={suffix}
    />
  )
}
