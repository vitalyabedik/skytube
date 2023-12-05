import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import HeaderLogo from '@/assets/images/logo/HeaderLogo'
import { Route, useAppDispatch } from '@/common'
import { Page } from '@/components'
import { authActions, searchActions } from '@/features'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import Menu from 'antd/lib/menu'

import s from './CustomHeader.module.scss'

export const CustomHeader: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1']) // Используйте useState для отслеживания выбранного пункта меню

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

  const logoutHandler = () => {
    localStorage.removeItem('token')
    dispatch(searchActions.setSearch({ search: '' }))
    dispatch(searchActions.setQuery({ query: {} }))
    dispatch(authActions.setAuth({ isAuth: false }))
    navigate(Route.Login)
  }

  return (
    <Page>
      <Flex align={'center'} justify={'space-between'}>
        <Flex align={'center'}>
          <Link className={s.link} to={Route.Main}>
            <HeaderLogo />
          </Link>
          <Menu
            items={menuItems.map(menuItem => {
              const key = menuItem.id

              return {
                key,
                label: <Link to={menuItem.path}>{menuItem.title}</Link>,
              }
            })}
            mode={'horizontal'}
            selectedKeys={selectedKeys}
            theme={'light'}
          />
        </Flex>
        <Button onClick={logoutHandler} type={'link'}>
          Выйти
        </Button>
      </Flex>
    </Page>
  )
}
