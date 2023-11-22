import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import HeaderLogo from '@/assets/images/logo/HeaderLogo'
import { Route, useAppDispatch } from '@/common'
import { Page } from '@/components'
import { authActions } from '@/features'
import { Menu } from 'antd'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'

import s from './CustomHeader.module.scss'

export const CustomHeader: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const menuItems = [
    { id: 1, path: Route.Search, title: 'Поиск' },
    { id: 2, path: Route.Favorites, title: 'Избранное' },
  ]

  const logoutHandler = () => {
    localStorage.removeItem('token')
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
            defaultSelectedKeys={['1']}
            items={menuItems.map(menuItem => {
              const key = menuItem.id

              return {
                key,
                label: <Link to={menuItem.path}>{menuItem.title}</Link>,
              }
            })}
            mode={'horizontal'}
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
