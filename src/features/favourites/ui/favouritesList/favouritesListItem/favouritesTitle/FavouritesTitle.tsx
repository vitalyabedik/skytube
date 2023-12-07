import React, { memo } from 'react'

import { QueryType } from '@/features'
import Text from 'antd/lib/typography/Text'

import s from './FavouritesTitle.module.scss'

type Props = {
  fetchFavouriteQueryCallback: (query: QueryType) => void
  query: QueryType
  title: string
}

export const FavouritesTitle: React.FC<Props> = memo(
  ({ fetchFavouriteQueryCallback, query, title }) => {
    const getFavouritesHandler = () => {
      fetchFavouriteQueryCallback(query)
    }

    return (
      <Text className={s.text} onClick={getFavouritesHandler} strong>
        {title}
      </Text>
    )
  }
)
