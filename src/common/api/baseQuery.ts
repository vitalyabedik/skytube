import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const token = localStorage.getItem('token')

export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_API_URL}`,
  prepareHeaders: headers => {
    headers.set('Content-Type', 'application/json')
    headers.set('Authorization', `Bearer ${token}`)
  },
})
