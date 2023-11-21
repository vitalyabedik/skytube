import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  // .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  login: z.string().min(1, 'Login is required!'),
  // .min(6, 'Use 6 characters or more for your password!')
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
