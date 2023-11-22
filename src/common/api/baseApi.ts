import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from './baseQuery'

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Videos'],
})
