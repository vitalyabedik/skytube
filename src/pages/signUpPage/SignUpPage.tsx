import React from 'react'
import { Navigate } from 'react-router-dom'

import { Route } from '@/common'
import { LinearProgressBar, Page } from '@/components'
import { SignUpForm, useSignUp } from '@/features'

export const SignUpPage: React.FC = () => {
  const { isLoading, signUpCallback } = useSignUp()

  const token = localStorage.getItem('token')

  if (token) {
    return <Navigate replace to={Route.Main} />
  }

  return (
    <Page>
      {isLoading && <LinearProgressBar />}
      <SignUpForm onSubmit={signUpCallback} />
    </Page>
  )
}
