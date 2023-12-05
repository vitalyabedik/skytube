export type SignUpResponseType = SignUpErrorResponseType | SignUpSuccessResponseType

export type SignUpSuccessResponseType = {
  createdAt: string
  email: string
  googleToken: null
  id: number
  login: string
  password: string
  updatedAt: string
}

export type SignUpErrorResponseType = {
  message: string
}

export type SignUpBodyType = Pick<SignUpSuccessResponseType, 'email' | 'login' | 'password'>

export type LoginBodyType = Omit<SignUpBodyType, 'email'>

export type LoginResponseType = {
  accessToken: string
}

export type AddTokenBodyType = {
  googleToken: string
}

export type AddTokenResponseType = {
  countUpdated: number
}
