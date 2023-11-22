export type SignUpResponseType = {
  createdAt: string
  email: string
  googleToken: null
  id: number
  login: string
  password: string
  updatedAt: string
}

export type SignUpBodyType = Pick<SignUpResponseType, 'email' | 'login' | 'password'>

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
