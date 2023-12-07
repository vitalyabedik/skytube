import React, { memo } from 'react'

import { FavouriteType } from '@/features'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'

type Props = {
  deleteFavouriteQueryCallback: (id: string) => void
  editFavouriteQueryCallback: (id: string) => void
  item: FavouriteType
}

export const FavouritesButtons: React.FC<Props> = memo(
  ({ deleteFavouriteQueryCallback, editFavouriteQueryCallback, item }) => {
    const editFavouriteHandler = () => {
      editFavouriteQueryCallback(item.id)
    }

    const deleteFavouriteHandler = () => {
      deleteFavouriteQueryCallback(item.id)
    }

    return (
      <Flex>
        <Button onClick={editFavouriteHandler} type={'link'}>
          Изменить
        </Button>
        <Button danger onClick={deleteFavouriteHandler} type={'link'}>
          Удалить
        </Button>
      </Flex>
    )
  }
)
