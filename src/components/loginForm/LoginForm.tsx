import React, { ChangeEvent, useState } from 'react'

import { LoginLogo } from '@/assets'
import { useAppDispatch } from '@/common'
import { FormField } from '@/components'
import { UserType, authThunks } from '@/features/auth/authSlice'
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import Flex from 'antd/lib/flex'
import Input from 'antd/lib/input'
import Typography from 'antd/lib/typography'

import s from './LoginForm.module.scss'

import { useLoginForm } from './useLoginForm'

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useLoginForm()

  const dispatch = useAppDispatch()

  const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const onSubmit = (values: UserType) => {
    console.log(values)
    dispatch(authThunks.login(values))
  }

  return (
    <Flex align={'center'} className={s.root} justify={'center'}>
      <Card className={s.formCard}>
        <Flex align={'center'} className={s.loginItemsWrapper} justify={'center'} vertical>
          <LoginLogo />
          <Typography.Title level={3}>Вход</Typography.Title>
          <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <Flex align={'center'} gap={'middle'} justify={'space-between'} vertical>
              <FormField control={control} errors={errors} label={'Логин'} name={'username'}>
                {field => (
                  <Input
                    onChange={usernameChangeHandler}
                    value={username}
                    {...field}
                    allowClear
                    id={'username'}
                    placeholder={'Введите логин'}
                  />
                )}
              </FormField>

              <FormField control={control} errors={errors} label={'Пароль'} name={'password'}>
                {field => (
                  <Input.Password
                    className={s.formElement}
                    onChange={passwordChangeHandler}
                    value={password}
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
        </Flex>
      </Card>
    </Flex>
  )
}
