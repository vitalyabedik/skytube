import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const addFavouritesSchema = z.object({
  maxCount: z.string(),
  request: z.string(),
  sortType: z.string(),
  title: z.string().min(1),
})

export type LoginFormValues = z.infer<typeof addFavouritesSchema>

export const useAddFavouritesForm = () =>
  useForm<LoginFormValues>({
    defaultValues: {
      maxCount: '',
      request: '',
      sortType: '',
      title: '',
    },
    resolver: zodResolver(addFavouritesSchema),
  })
