import React from 'react'

import { LinearProgressBar, Page } from '@/components'
import { FavouritesList, useGetFavouritesQuery } from '@/features'
import Title from 'antd/lib/typography/Title'

export const FavouritesPage: React.FC = () => {
  const { data, isLoading } = useGetFavouritesQuery()

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Page>
        <Title level={2}>Избранное</Title>
        {data && <FavouritesList />}
      </Page>
    </>
  )
}
