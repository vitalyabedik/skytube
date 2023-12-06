import { handleServerAppError, handleServerNetworkError } from '@/common'
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
      .then(res => {
        message.success(`${res.data.title} successfully added to favourites`)
      })
      .catch(error => {
        if (error.status && error.status !== 400 && error.status !== 401) {
          handleServerNetworkError(error)
        } else {
          handleServerAppError(error)
        }
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
    } as UpdateFavouriteBodyType).then(() => {
      message.success(`Query successfully updated`)
    })
  }

  return {
    addFavouriteCallback,
    updateFavouriteCallback,
  }
}
