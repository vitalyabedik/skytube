import { Navigate, Outlet } from 'react-router-dom'

import { Route } from '@/common'

export const PrivateRoutes = () => {
  const token = localStorage.getItem('token')

  return token ? <Outlet /> : <Navigate to={Route.Login} />
}
