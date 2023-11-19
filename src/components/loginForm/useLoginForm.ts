import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  password: z.string(),
  // .min(6, 'Use 6 characters or more for your password!')
  // .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  username: z.string().min(1, 'Name is required!'),
})

export type LoginFormValues = z.infer<typeof loginSchema>

export const useLoginForm = () =>
  useForm<LoginFormValues>({
    defaultValues: {
      password: '',
      username: '',
    },
    resolver: zodResolver(loginSchema),
  })
