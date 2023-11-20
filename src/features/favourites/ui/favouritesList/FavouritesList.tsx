import React from 'react'

import { List } from 'antd'
import Text from 'antd/lib/typography/Text'

import s from './FavouritesList.module.scss'

export type FavouriteType = {
  id: number
  title: string
}

export const FavouritesList: React.FC = () => {
  const favouritesItems: FavouriteType[] = [
    { id: 1, title: 'Cat' },
    { id: 2, title: 'Dog' },
    { id: 3, title: 'Milk' },
    { id: 4, title: 'Bread' },
    { id: 5, title: 'Water' },
  ]

  const onClickHandler = (title: string) => {
    console.log(title)
  }

  return (
    <List
      dataSource={favouritesItems}
      renderItem={item => (
        <List.Item onClick={() => onClickHandler(item.title)}>
          <Text className={s.text} strong>
            {item.title}
          </Text>
        </List.Item>
      )}
      size={'large'}
    />
  )
}
