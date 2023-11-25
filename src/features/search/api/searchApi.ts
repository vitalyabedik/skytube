import { baseApi } from '@/common'
import { VideosResponseType } from '@/features'

export const searchApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getVideos: builder.query<VideosResponseType, string>({
      providesTags: ['Search'],
      query: query => ({
        method: 'GET',
        url: `query/search/${query}`,
      }),
    }),
  }),
})

export const { useGetVideosQuery } = searchApi
