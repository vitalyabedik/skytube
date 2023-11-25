import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const addFavouritesSchema = z.object({
  maxCount: z.number(),
  request: z.string(),
  sortBy: z.string(),
  title: z.string().min(1),
})

export type FavouritesFormValues = z.infer<typeof addFavouritesSchema>
export type DefaultFavouritesFormValues = Pick<FavouritesFormValues, 'request' | 'sortBy'>

export const useAddFavouritesForm = (defaultValues: DefaultFavouritesFormValues) =>
  useForm<FavouritesFormValues>({
    defaultValues: {
      maxCount: 0,
      request: defaultValues.request,
      sortBy: defaultValues.sortBy,
      title: defaultValues.request,
    },
    resolver: zodResolver(addFavouritesSchema),
  })
