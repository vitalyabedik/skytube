import { Navigate, Outlet } from 'react-router-dom'

import { Route, useAppSelector } from '@/common'
import { selectIsAuth } from '@/features/auth/authSelectors'

export const PrivateRoutes = () => {
  const isAuth = useAppSelector(selectIsAuth)

  return isAuth ? <Outlet /> : <Navigate to={Route.Login} />
}
