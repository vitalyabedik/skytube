import { Navigate, RouteObject } from 'react-router-dom'

import { Route } from '@/common'
import { FavouritesPage, LoginPage, NotFoundPage, SearchPage } from '@/pages'

export const privateRoutes: RouteObject[] = [
  { element: <Navigate to={Route.Search} />, path: Route.Main },
  { element: <SearchPage />, path: Route.Search },
  { element: <FavouritesPage />, path: Route.Favorites },
]

export const publicRoutes: RouteObject[] = [
  { element: <LoginPage />, path: Route.Login },
  { element: <NotFoundPage />, path: Route.NotFound },
]
