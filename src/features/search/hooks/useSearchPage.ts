import { useEffect } from 'react'

import { getValueFromLocalStorage, useAppDispatch, useAppSelector } from '@/common'
import { searchActions, selectSearch, useAddTokenMutation } from '@/features'

export const useSearchPage = () => {
  const search = useAppSelector(selectSearch)
  const token = getValueFromLocalStorage('token')

  const dispatch = useAppDispatch()

  const [addToken] = useAddTokenMutation()

  const onChangeCallback = (search: string) => {
    dispatch(searchActions.setSearch({ search }))
  }

  useEffect(() => {
    if (token) {
      addToken({
        googleToken: `${import.meta.env.VITE_GOOGLE_API_KEY}`,
      })
    }
  }, [addToken, token])

  return {
    onChangeCallback,
    search,
  }
}
