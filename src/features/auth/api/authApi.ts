import { baseApi } from '@/common/api'

import {
  AddTokenBodyType,
  AddTokenResponseType,
  LoginBodyType,
  LoginResponseType,
  SignUpBodyType,
  SignUpResponseType,
} from './authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addToken: builder.mutation<AddTokenResponseType, AddTokenBodyType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'user/addGoogleToken',
      }),
    }),
    login: builder.mutation<LoginResponseType, LoginBodyType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'login/',
      }),
    }),
    signUp: builder.mutation<SignUpResponseType, SignUpBodyType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'register/',
      }),
    }),
  }),
})

export const { useAddTokenMutation, useLoginMutation, useSignUpMutation } = authApi
