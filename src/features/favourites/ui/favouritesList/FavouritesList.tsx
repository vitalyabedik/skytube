import React from 'react'

import { CustomModal } from '@/components'
import { FavouriteType, FavouritesForm } from '@/features'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import List from 'antd/lib/list'
import Text from 'antd/lib/typography/Text'

import s from './FavouritesList.module.scss'

import { useFavouriteItem } from '../../hooks/useFavouriteItem'

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
          <>
            <List.Item className={s.item}>
              <Flex align={'center'} className={s.buttonWrapper} justify={'space-between'}>
                <Text
                  className={s.text}
                  onClick={() => fetchFavouriteQueryCallback(item?.query)}
                  strong
                >
                  {item?.query?.title}
                </Text>
                <Flex>
                  <Button onClick={() => editFavouriteQueryCallback(item?.id)} type={'link'}>
                    Изменить
                  </Button>
                  <Button
                    danger
                    onClick={() => deleteFavouriteQueryCallback(item?.id)}
                    type={'link'}
                  >
                    Удалить
                  </Button>
                </Flex>
              </Flex>
            </List.Item>
          </>
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
