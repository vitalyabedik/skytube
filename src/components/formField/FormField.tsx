import React, { JSX } from 'react'
import { Controller } from 'react-hook-form'

import { Flex, Typography } from 'antd'

import s from './FormField.module.scss'

type Props = {
  children: (field: any) => JSX.Element
  control: any
  errors: any
  label: string
  name: string
}

const { Text } = Typography

export const FormField: React.FC<Props> = ({ children, control, errors, label, name }) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <Flex className={s.root} gap={'small'} vertical>
        <label htmlFor={name}>{label}:</label>
        {children(field)}
        {errors[name] && (
          <Text className={s.errorText} type={'danger'}>
            {errors[name].message}
          </Text>
        )}
      </Flex>
    )}
  />
)
