import { getValueFromLocalStorage } from '@/common'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_API_URL}`,
  prepareHeaders: headers => {
    const token = getValueFromLocalStorage('token')

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  },
})
