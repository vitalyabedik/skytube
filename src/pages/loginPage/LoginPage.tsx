import React from 'react'
import { Navigate } from 'react-router-dom'

import { Route } from '@/common'
import { LinearProgressBar, Page } from '@/components'
import { LoginForm, useLogin } from '@/features'

export const LoginPage: React.FC = () => {
  const { data, isAuth, isLoading, loginCallback } = useLogin()

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
        <LoginForm onSubmit={loginCallback} />
      </Page>
    </>
  )
}
