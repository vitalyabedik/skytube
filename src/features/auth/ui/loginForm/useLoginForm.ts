import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  login: z.string().min(1, 'Name is required!'),
  password: z.string().min(1, 'Password is required!'),
})

export type LoginFormValues = z.infer<typeof loginSchema>

export const useLoginForm = () =>
  useForm<LoginFormValues>({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })
