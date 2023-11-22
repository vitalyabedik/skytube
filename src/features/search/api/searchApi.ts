import { baseApi } from '@/common'
import { VideosResponseType } from '@/features'

export const searchApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getVideos: builder.query<VideosResponseType, string>({
      providesTags: ['Videos'],
      query: query => ({
        method: 'GET',
        url: `query/getVideos/${query}`,
      }),
    }),
  }),
})

export const { useGetVideosQuery } = searchApi
