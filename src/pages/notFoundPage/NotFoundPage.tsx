import React from 'react'
import { Link } from 'react-router-dom'

import { Route } from '@/common'
import { Page } from '@/components'
import { Button } from 'antd'
import Flex from 'antd/lib/flex'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'

import s from './NotFoundPage.module.scss'

export const NotFoundPage: React.FC = () => {
  return (
    <Page className={s.notFoundWrapper}>
      <div className={s.descriptionWrapper}>
        <Title level={1}>Добро пожаловать на страницу 404! </Title>
        <Flex gap={20} vertical>
          <Text>
            Вы находитесь здесь, потому что ввели адрес страницы, которая уже не существует или была
            перемещена по другому адресу. Переходите на главную страницу – там Вы также сможете
            найти много полезной информации.
          </Text>
          <Button className={s.buttonWrapper} type={'link'}>
            <Link to={Route.Main}>Вернуться на главную</Link>
          </Button>
        </Flex>
      </div>
    </Page>
  )
}
