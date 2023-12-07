import React, { memo } from 'react'

import { FavouriteType, QueryType } from '@/features'
import Flex from 'antd/lib/flex'
import List from 'antd/lib/list'

import s from './FavouritesListItem.module.scss'

import { FavouritesButtons } from './favouritesButtons'
import { FavouritesTitle } from './favouritesTitle'

type Props = {
  deleteFavouriteQueryCallback: (id: string) => void
  editFavouriteQueryCallback: (id: string) => void
  fetchFavouriteQueryCallback: (query: QueryType) => void
  item: FavouriteType
}

export const FavouritesListItem: React.FC<Props> = memo(
  ({
    deleteFavouriteQueryCallback,
    editFavouriteQueryCallback,
    fetchFavouriteQueryCallback,
    item,
  }) => {
    return (
      <List.Item className={s.item}>
        <Flex align={'center'} className={s.buttonWrapper} justify={'space-between'}>
          <FavouritesTitle
            fetchFavouriteQueryCallback={fetchFavouriteQueryCallback}
            query={item?.query}
            title={item?.query?.title}
          />
          <FavouritesButtons
            deleteFavouriteQueryCallback={deleteFavouriteQueryCallback}
            editFavouriteQueryCallback={editFavouriteQueryCallback}
            item={item}
          />
        </Flex>
      </List.Item>
    )
  }
)
