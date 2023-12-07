import { Navigate, Outlet } from 'react-router-dom'

import { Route, getValueFromLocalStorage } from '@/common'

export const PrivateRoutes = () => {
  const token = getValueFromLocalStorage('token')

  return token ? <Outlet /> : <Navigate to={Route.Login} />
}
