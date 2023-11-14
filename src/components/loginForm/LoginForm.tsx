import React from 'react'

import { FormField } from '@/components'
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import Flex from 'antd/lib/flex'
import Input from 'antd/lib/input'

import s from './LoginForm.module.scss'

import { useLoginForm } from './useLoginForm'

export const LoginForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useLoginForm()

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Flex className={s.root} align={'center'} justify={'center'}>
      <Card className={s.formCard}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex align={'center'} gap={'middle'} justify={'space-between'} vertical>
            <FormField control={control} errors={errors} label={'Логин'} name={'username'}>
              {field => (
                <Input
                  className={s.formElement}
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
      </Card>
    </Flex>
  )
}
