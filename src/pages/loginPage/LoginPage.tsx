import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { Route, useAppDispatch, useAppSelector } from '@/common'
import { LoginForm, Page } from '@/components'
import { selectIsAuth } from '@/features/auth/authSelectors'
import { UserType, authActions } from '@/features/auth/authSlice'

export const LoginPage: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(authActions.setAuth({ isAuth: true }))
      dispatch(
        authActions.setUser({
          user: { username: localStorage.getItem('username' || '') } as UserType,
        })
      )
    }
  }, [])

  if (isAuth) {
    return <Navigate replace to={Route.Main} />
  }

  return (
    <Page>
      <LoginForm />
    </Page>
  )
}
