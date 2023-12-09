import { useEffect } from 'react'

import { getValueFromLocalStorage, useAppDispatch, useAppSelector } from '@/common'
import { authActions, selectIsAuth } from '@/features'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector(selectIsAuth)
  const token = getValueFromLocalStorage('token')

  useEffect(() => {
    if (token && !isAuth) {
      dispatch(authActions.setAuth({ isAuth: true }))
    }
  }, [token])

  return { isAuth }
}
