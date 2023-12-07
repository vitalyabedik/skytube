import React from 'react'

import { CustomModal } from '@/components'
import { FavouriteType, FavouritesForm } from '@/features'
import List from 'antd/lib/list'

import { useFavouriteItem } from '../../hooks/useFavouriteItem'
import { FavouritesListItem } from './favouritesListItem'

export const FavouritesList: React.FC = () => {
  const {
    deleteFavouriteQueryCallback,
    editFavouriteQueryCallback,
    favouritesItems,
    fetchFavouriteQueryCallback,
    open,
    selectedItem,
    setOpen,
  } = useFavouriteItem()

  return (
    <>
      <List
        dataSource={favouritesItems as FavouriteType[]}
        renderItem={(item: FavouriteType) => (
          <FavouritesListItem
            deleteFavouriteQueryCallback={deleteFavouriteQueryCallback}
            editFavouriteQueryCallback={editFavouriteQueryCallback}
            fetchFavouriteQueryCallback={fetchFavouriteQueryCallback}
            item={item}
          />
        )}
        size={'large'}
      />
      <CustomModal open={open} setOpen={setOpen} title={'Изменить запрос'}>
        <FavouritesForm
          favouriteItem={selectedItem as FavouriteType}
          formVariant={'edit'}
          setOpen={setOpen}
        />
      </CustomModal>
    </>
  )
}
