import React from 'react'
import { Link } from 'react-router-dom'

import HeaderLogo from '@/assets/images/logo/HeaderLogo'
import { Route, useHeader } from '@/common'
import { Page } from '@/components'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import Menu from 'antd/lib/menu'

import s from './CustomHeader.module.scss'

export const CustomHeader: React.FC = () => {
  const { logoutCallback, menuItems, selectedKeys } = useHeader()

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
        <Button onClick={logoutCallback} type={'link'}>
          Выйти
        </Button>
      </Flex>
    </Page>
  )
}
