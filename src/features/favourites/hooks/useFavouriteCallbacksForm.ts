import {
  CreateFavouriteBodyType,
  FavouriteType,
  GetVideosResponseType,
  UpdateFavouriteBodyType,
  useCreateFavouriteMutation,
  useUpdateFavouriteMutation,
} from '@/features'
import { FavouritesFormValues } from '@/features/favourites/ui/favouritesForm/useFavouritesForm'
import { App } from 'antd'

export const useFavouriteCallbacksForm = () => {
  const { message } = App.useApp()
  const [addFavourite] = useCreateFavouriteMutation()
  const [updateFavourite] = useUpdateFavouriteMutation()

  const addFavouriteCallback = (
    values: FavouritesFormValues,
    search: string,
    data?: GetVideosResponseType
  ) => {
    addFavourite({
      body: {
        maxCount: values.maxCount,
        request: search,
        sortBy: values.sortBy,
        title: values.title,
      },
      id: data?.queryId ?? '',
    } as CreateFavouriteBodyType)
      .unwrap()
      .then(() => {
        message.success(`${search} is successfully added to favourites`)
      })
      .catch(() => {
        message.error('some error occured')
      })
  }

  const updateFavouriteCallback = (values: FavouritesFormValues, favouriteItem?: FavouriteType) => {
    updateFavourite({
      body: {
        maxCount: values.maxCount,
        sortBy: values.sortBy,
        title: values.title,
      },
      id: favouriteItem?.id,
    } as UpdateFavouriteBodyType)
      .unwrap()
      .then(() => {
        message.success(`${'search'} is successfully updated`)
      })
      .catch(() => {
        message.error('some error occured')
      })
  }

  return {
    addFavouriteCallback,
    updateFavouriteCallback,
  }
}
