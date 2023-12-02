import React from 'react'
import { Navigate } from 'react-router-dom'

import { Route, useAppDispatch, useAppSelector } from '@/common'
import { LinearProgressBar, Page } from '@/components'
import { LoginBodyType, LoginForm, authActions, selectIsAuth, useLoginMutation } from '@/features'

export const LoginPage: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth)

  const dispatch = useAppDispatch()

  const [login, { data, isLoading }] = useLoginMutation()

  const loginHandler = (loginData: LoginBodyType) => {
    login(loginData)
      .unwrap()
      .then(() => {
        dispatch(authActions.setAuth({ isAuth: true }))
      })
  }

  if (data && 'accessToken' in data) {
    localStorage.setItem('token', data.accessToken)
  }

  if (isAuth) {
    return <Navigate replace to={Route.Main} />
  }

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Page>
        <LoginForm onSubmit={loginHandler} />
      </Page>
    </>
  )
}
