import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Route, useAppSelector } from '@/common'
import { CustomHeader } from '@/components'
import { selectIsAuth } from '@/features'
import Layout from 'antd/lib/layout'

import s from './AppLayout.module.scss'

import { PrivateRoutes } from './PrivateRoutes'
import { privateRoutes, publicRoutes } from './routerSettings'

const AppLayout = () => {
  const { Content, Header } = Layout

  const isAuth = useAppSelector(selectIsAuth)

  return (
    <Layout>
      {isAuth && (
        <Header>
          <CustomHeader />
        </Header>
      )}
      <Content className={s.content}>
        <Outlet />
      </Content>
    </Layout>
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
