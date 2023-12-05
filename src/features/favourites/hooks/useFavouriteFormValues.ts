import { useState } from 'react'

import { useAppSelector } from '@/common'
import { FavouriteType, selectSearch, useGetVideosQuery } from '@/features'

export type FormVariantType = 'add' | 'edit'

type UseFavouriteFormValuesTypes = {
  favouriteItem?: FavouriteType
  formVariant: FormVariantType
}

export const useFavouriteFormValues = ({
  favouriteItem,
  formVariant,
}: UseFavouriteFormValuesTypes) => {
  const search = useAppSelector(selectSearch)

  const initialRequestValue = formVariant === 'add' ? search : favouriteItem?.query?.text ?? ''
  const initialSortByValue =
    formVariant === 'add' ? 'relevance' : favouriteItem?.query?.sortBy ?? 'relevance'
  const initialTitleValue = formVariant === 'add' ? '' : favouriteItem?.query?.title ?? ''
  const initialMaxCountValue = formVariant === 'add' ? 10 : favouriteItem?.query?.maxCount ?? 10

  const [_, setInputValue] = useState(initialMaxCountValue)

  const { data } = useGetVideosQuery({ query: search }, { skip: !search })

  return {
    data,
    initialMaxCountValue,
    initialRequestValue,
    initialSortByValue,
    initialTitleValue,
    search,
    setInputValue,
  }
}
