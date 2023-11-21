import React from 'react'
import { Navigate } from 'react-router-dom'

import { Route, useAppSelector } from '@/common'
import { Page } from '@/components'
import { LoginForm, selectIsAuth } from '@/features'

export const LoginPage: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth)
  const token = localStorage.getItem('token')

  if (isAuth || token) {
    return <Navigate replace to={Route.Main} />
  }

  return (
    <Page>
      <LoginForm />
    </Page>
  )
}
