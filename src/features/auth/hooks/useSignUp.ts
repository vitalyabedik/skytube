import { useNavigate } from 'react-router-dom'

import { Route, handleServerAppError, handleServerNetworkError } from '@/common'
import { SignUpBodyType, useSignUpMutation } from '@/features'
import { App } from 'antd'

export const useSignUp = () => {
  const navigate = useNavigate()
  const { message } = App.useApp()
  const [signUp, { isLoading }] = useSignUpMutation()

  const signUpCallback = (signUpData: SignUpBodyType) => {
    signUp(signUpData)
      .unwrap()
      .then(res => {
        if ('error' in res) {
          throw res.error
        }

        navigate(`${Route.Login}`)
        message.success('Your register is successfully! Try to login.')
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
    isLoading,
    signUpCallback,
  }
}
