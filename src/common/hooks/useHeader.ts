import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Route, useAppDispatch, useAppSelector } from '@/common'
import { authActions, searchActions, selectSearchQuery } from '@/features'

export const useHeader = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const queryParams = useAppSelector(selectSearchQuery)

  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1'])

  useEffect(() => {
    const pathname = location.pathname
    const matchingMenuItem = menuItems.find(menuItem => pathname.startsWith(menuItem.path))

    if (matchingMenuItem) {
      setSelectedKeys([matchingMenuItem.id.toString()])
    } else {
      setSelectedKeys([])
    }
  }, [location.pathname])

  const menuItems = [
    { id: 1, path: Route.Search, title: 'Поиск' },
    { id: 2, path: Route.Favorites, title: 'Избранное' },
  ]

  const logoutCallback = () => {
    localStorage.removeItem('token')
    dispatch(searchActions.setSearch({ search: '' }))
    dispatch(
      searchActions.resetQuery({
        countResult: queryParams?.countResult ?? 8,
        sortBy: queryParams?.sortBy ?? 'relevance',
      })
    )
    dispatch(authActions.setAuth({ isAuth: false }))
    navigate(Route.Login)
  }

  return { logoutCallback, menuItems, selectedKeys }
}
