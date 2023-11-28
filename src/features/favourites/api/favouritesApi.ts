import { baseApi } from '@/common/api'
import {
  CreateFavouriteBodyType,
  CreateFavouriteResponseType,
  GetFavouritesResponseType,
  RemoveFavouriteResponseType,
} from '@/features'

export const favouritesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createFavourite: builder.mutation<CreateFavouriteResponseType, CreateFavouriteBodyType>({
      invalidatesTags: ['Favourites'],
      query: ({ body, id }) => ({
        body,
        method: 'POST',
        url: `query/SaveQuery/${id}`,
      }),
    }),
    getFavourites: builder.query<GetFavouritesResponseType | null, void>({
      providesTags: ['Favourites'],
      query: () => `query/getFavourites`,
    }),
    removeFavourite: builder.mutation<RemoveFavouriteResponseType, string>({
      invalidatesTags: ['Favourites'],
      query: id => ({
        method: 'DELETE',
        url: `query/deleteSavedQuery/${id}`,
      }),
    }),
  }),
})

export const { useCreateFavouriteMutation, useGetFavouritesQuery, useRemoveFavouriteMutation } =
  favouritesApi
