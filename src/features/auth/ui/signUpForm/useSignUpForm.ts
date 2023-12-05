import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  login: z.string().min(1, 'Login is required!'),
  password: z.string(),
})

export type LoginFormValues = z.infer<typeof loginSchema>

export const useSignUpForm = () =>
  useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      login: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })
