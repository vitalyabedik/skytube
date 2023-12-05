import {
  handleServerAppError,
  handleServerNetworkError,
  useAppDispatch,
  useAppSelector,
} from '@/common'
import { LoginBodyType, authActions, selectIsAuth, useLoginMutation } from '@/features'

export const useLogin = () => {
  const [login, { data, isLoading }] = useLoginMutation()

  const isAuth = useAppSelector(selectIsAuth)
  const dispatch = useAppDispatch()

  const loginCallback = (loginData: LoginBodyType) => {
    login(loginData)
      .unwrap()
      .then(() => {
        dispatch(authActions.setAuth({ isAuth: true }))
      })
      .catch(error => {
        if (error.status && error.status !== 400 && error.status !== 401) {
          handleServerNetworkError(error)
        } else {
          handleServerAppError(error)
        }
      })
  }

  return {
    data,
    isAuth,
    isLoading,
    loginCallback,
  }
}
