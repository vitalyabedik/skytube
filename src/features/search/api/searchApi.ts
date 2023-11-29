import { baseApi } from '@/common'
import { GetVideosParamsType, GetVideosResponseType } from '@/features'

export const searchApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getVideos: builder.query<GetVideosResponseType, GetVideosParamsType>({
      providesTags: ['Search'],
      query: params => ({
        method: 'GET',
        params: params ?? {},
        url: `query/search`,
      }),
    }),
  }),
})

export const { useGetVideosQuery } = searchApi
