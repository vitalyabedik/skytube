import React from 'react'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Route } from '@/common'
import { CustomHeader } from '@/components'
import { useAuth } from '@/features'
import { App } from 'antd'
import Layout from 'antd/lib/layout'

import s from './AppLayout.module.scss'

import { PrivateRoutes } from './PrivateRoutes'
import { privateRoutes, publicRoutes } from './routerSettings'

const AppLayout: React.FC = () => {
  const { Content, Header } = Layout

  const { isAuth } = useAuth()

  return (
    <App>
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
    </App>
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
