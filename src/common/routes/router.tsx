import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Route } from '@/common'
import { CustomHeader } from '@/components'

import { PrivateRoutes } from './PrivateRoutes'
import { privateRoutes, publicRoutes } from './routerSettings'

const AppLayout = () => {
  return (
    <>
      <CustomHeader />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <AppLayout />,
    errorElement: <Navigate to={Route.NotFound} />,
  },
])

export const Router = () => <RouterProvider router={router} />
