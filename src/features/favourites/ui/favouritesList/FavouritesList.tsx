import React from 'react'

import { List } from 'antd'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
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

  const onChangeHandler = (id: number) => {
    console.log(id)
  }

  const onDeleteHandler = (id: number) => {
    console.log(id)
  }

  return (
    <List
      dataSource={favouritesItems}
      renderItem={item => (
        <List.Item className={s.item}>
          <Flex align={'center'} className={s.buttonWrapper} justify={'space-between'}>
            <Text className={s.text} onClick={() => onClickHandler(item.title)} strong>
              {item.title}
            </Text>
            <Flex>
              <Button onClick={() => onChangeHandler(item.id)} type={'link'}>
                Изменить
              </Button>
              <Button danger onClick={() => onDeleteHandler(item.id)} type={'link'}>
                Удалить
              </Button>
            </Flex>
          </Flex>
        </List.Item>
      )}
      size={'large'}
    />
  )
}
