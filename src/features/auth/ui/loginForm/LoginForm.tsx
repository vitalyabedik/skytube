import React from 'react'
import { Link } from 'react-router-dom'

import { LoginLogo } from '@/assets'
import { Route, useAppDispatch } from '@/common'
import { FormField } from '@/components'
import { useAddTokenMutation, useLoginMutation } from '@/features'
import { authActions } from '@/features/auth/model/authSlice'
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import Flex from 'antd/lib/flex'
import Input from 'antd/lib/input'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'

import s from './LoginForm.module.scss'

import { useLoginForm } from './useLoginForm'

export const LoginForm: React.FC = () => {
  const [login, { data }] = useLoginMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useLoginForm()

  const dispatch = useAppDispatch()

  const onSubmit = (values: any) => {
    login(values)
  }

  if (data && 'accessToken' in data) {
    localStorage.setItem('token', data.accessToken)
    dispatch(authActions.setAuth({ isAuth: true }))
  }

  return (
    <Flex align={'center'} className={s.root} justify={'center'}>
      <Card className={s.formCard}>
        <Flex align={'center'} justify={'center'} vertical>
          <LoginLogo className={s.loginLogo} />
          <Title className={s.loginTitle} level={3}>
            Вход
          </Title>
          <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <Flex align={'center'} gap={'middle'} justify={'space-between'} vertical>
              <FormField control={control} errors={errors} label={'Логин'} name={'login'}>
                {field => (
                  <Input {...field} allowClear id={'login'} placeholder={'Введите логин'} />
                )}
              </FormField>

              <FormField control={control} errors={errors} label={'Пароль'} name={'password'}>
                {field => (
                  <Input.Password
                    className={s.formElement}
                    {...field}
                    allowClear
                    autoComplete={'password'}
                    id={'password'}
                    placeholder={'Введите пароль'}
                  />
                )}
              </FormField>

              <Button className={s.loginButton} htmlType={'submit'} type={'primary'}>
                Войти
              </Button>
            </Flex>
          </form>
          <Text className={s.infoText} type={'secondary'}>
            Нет аккаунта?
          </Text>
          <Button type={'link'}>
            <Link to={Route.SignUp}>Зарегистрироваться</Link>
          </Button>
        </Flex>
      </Card>
    </Flex>
  )
}
