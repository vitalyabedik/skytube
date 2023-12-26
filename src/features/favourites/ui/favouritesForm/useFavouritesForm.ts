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

export const useFavouritesForm = ({ maxCount, request, sortBy, title }: FavouritesFormValues) =>
  useForm<FavouritesFormValues>({
    defaultValues: {
      maxCount: +maxCount,
      request,
      sortBy,
      title,
    },
    resolver: zodResolver(addFavouritesSchema),
  })
