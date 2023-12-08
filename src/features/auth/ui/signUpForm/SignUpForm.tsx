import React from 'react'
import { Link } from 'react-router-dom'

import { LoginLogo } from '@/assets'
import { Route } from '@/common'
import { FormField } from '@/components'
import { SignUpBodyType } from '@/features'
import { Button } from 'antd'
import Card from 'antd/lib/card'
import Flex from 'antd/lib/flex'
import Input from 'antd/lib/input'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'

import s from './SignUpForm.module.scss'

import { useSignUpForm } from './useSignUpForm'

type Props = {
  onSubmit: (loginData: SignUpBodyType) => void
}

export const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useSignUpForm()

  return (
    <Flex align={'center'} className={s.root} justify={'center'}>
      <Card className={s.formCard}>
        <Flex align={'center'} justify={'center'} vertical>
          <LoginLogo />
          <Title className={s.signUpTitle} level={3}>
            Регистрация
          </Title>
          <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <Flex align={'center'} gap={'middle'} justify={'space-between'} vertical>
              <FormField control={control} errors={errors} label={'Логин'} name={'login'}>
                {field => (
                  <Input {...field} allowClear id={'login'} placeholder={'Введите логин'} />
                )}
              </FormField>

              <FormField control={control} errors={errors} label={'Email'} name={'email'}>
                {field => (
                  <Input {...field} allowClear id={'email'} placeholder={'Введите email'} />
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

              <Button className={s.signInButton} htmlType={'submit'} type={'primary'}>
                Зарегистрировать
              </Button>
            </Flex>
          </form>
          <Text className={s.infoText} type={'secondary'}>
            Уже есть аккаунт?
          </Text>

          <Button type={'link'}>
            <Link to={Route.Login}>Войти</Link>
          </Button>
        </Flex>
      </Card>
    </Flex>
  )
}
