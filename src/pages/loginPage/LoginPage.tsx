import React from 'react'
import { Navigate } from 'react-router-dom'

import { Route, useAppDispatch, useAppSelector } from '@/common'
import { LinearProgressBar, Page } from '@/components'
import { LoginBodyType, LoginForm, authActions, selectIsAuth, useLoginMutation } from '@/features'

export const LoginPage: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth)
  const token = localStorage.getItem('token')

  const dispatch = useAppDispatch()

  const [login, { data, isLoading }] = useLoginMutation()

  const loginHandler = (loginData: LoginBodyType) => {
    login(loginData)
  }

  if (isAuth || token) {
    return <Navigate replace to={Route.Main} />
  }

  if (data && 'accessToken' in data) {
    localStorage.setItem('token', data.accessToken)
    dispatch(authActions.setAuth({ isAuth: true }))
  }

  if (isLoading) {
    return <LinearProgressBar />
  }

  return (
    <Page>
      <LoginForm onSubmit={loginHandler} />
    </Page>
  )
}
