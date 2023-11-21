import React from 'react'
import { Navigate } from 'react-router-dom'

import { Route } from '@/common'
import { Page } from '@/components'
import { SignUpForm } from '@/features'

export const SignUpPage: React.FC = () => {
  const token = localStorage.getItem('token')

  if (token) {
    return <Navigate replace to={Route.Main} />
  }

  return (
    <Page>
      <SignUpForm />
    </Page>
  )
}
