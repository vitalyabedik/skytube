import React from 'react'

import { Page } from '@/components'
import { FavouritesList } from '@/features'
import Title from 'antd/lib/typography/Title'

export const FavouritesPage: React.FC = () => {
  return (
    <Page>
      <Title level={2}>Избранное</Title>
      <FavouritesList />
    </Page>
  )
}
