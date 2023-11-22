import React from 'react'
import { Navigate } from 'react-router-dom'

import { Route } from '@/common'
import { LinearProgressBar, Page } from '@/components'
import { SignUpBodyType, SignUpForm, useSignUpMutation } from '@/features'

export const SignUpPage: React.FC = () => {
  const token = localStorage.getItem('token')

  const [signUp, { isLoading }] = useSignUpMutation()

  const signUpHandler = (signUpData: SignUpBodyType) => {
    signUp(signUpData)
  }

  if (token) {
    return <Navigate replace to={Route.Main} />
  }

  return (
    <Page>
      {isLoading && <LinearProgressBar />}
      <SignUpForm onSubmit={signUpHandler} />
    </Page>
  )
}
