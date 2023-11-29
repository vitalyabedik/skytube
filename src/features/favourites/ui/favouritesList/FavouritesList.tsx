import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Route, useAppDispatch } from '@/common'
import { CustomModal } from '@/components'
import {
  FavouriteType,
  FavouritesForm,
  searchActions,
  useGetFavouritesQuery,
  useRemoveFavouriteMutation,
} from '@/features'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import List from 'antd/lib/list'
import Text from 'antd/lib/typography/Text'

import s from './FavouritesList.module.scss'

export const FavouritesList: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<FavouriteType | null>(null)

  const { data } = useGetFavouritesQuery()
  const [removeFavourite] = useRemoveFavouriteMutation()

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const onClickHandler = (search: string) => {
    dispatch(searchActions.setSearch({ search }))
    navigate(Route.Search)
  }

  const onClickEdit = (id: string) => {
    const selectedItem = data?.find(item => item.id === id)

    setSelectedItem(selectedItem ?? null)
    setOpen(true)
  }

  const onClickDelete = (id: string) => {
    removeFavourite(id)
  }

  return (
    <>
      <List
        dataSource={data as FavouriteType[]}
        renderItem={(item: FavouriteType) => (
          <>
            <List.Item className={s.item}>
              <Flex align={'center'} className={s.buttonWrapper} justify={'space-between'}>
                <Text className={s.text} onClick={() => onClickHandler(item?.query?.text)} strong>
                  {item?.query?.title}
                </Text>
                <Flex>
                  <Button onClick={() => onClickEdit(item?.id)} type={'link'}>
                    Изменить
                  </Button>
                  <Button danger onClick={() => onClickDelete(item?.id)} type={'link'}>
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
