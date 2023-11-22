import React, { useState } from 'react'

import { FormField } from '@/components'
import { Col, Row, Select, Slider } from 'antd'
import { InputNumber } from 'antd/lib'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import Input from 'antd/lib/input'

import s from './AddFavouritesForm.module.scss'

import { useAddFavouritesForm } from './useAddFavouritesForm'

type Props = {
  setOpen: (open: boolean) => void
}

export const AddFavouritesForm: React.FC<Props> = ({ setOpen }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useAddFavouritesForm()

  const [inputValue, setInputValue] = useState(1)

  const onChange = (newValue: number) => {
    setInputValue(newValue)
  }

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex align={'center'} className={s.form} gap={'middle'} justify={'space-between'} vertical>
        <FormField
          className={s.formItem}
          control={control}
          errors={errors}
          label={'Запрос'}
          name={'request'}
        >
          {field => <Input {...field} allowClear id={'request'} placeholder={'requestrequest'} />}
        </FormField>

        <FormField control={control} errors={errors} label={'Название'} name={'title'}>
          {field => <Input {...field} allowClear id={'request'} placeholder={'title'} />}
        </FormField>

        <FormField control={control} errors={errors} label={'Сортировать по'} name={'sortType'}>
          {field => <Select {...field} id={'sortType'} />}
        </FormField>

        <FormField
          control={control}
          errors={errors}
          label={'Максимальное количество'}
          name={'maxCount'}
        >
          {field => (
            <>
              <Row>
                <Col span={12}>
                  <Slider
                    {...field}
                    id={'maxCount'}
                    max={20}
                    min={1}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    max={20}
                    min={1}
                    onChange={onChange}
                    style={{ margin: '0 16px' }}
                    value={inputValue}
                  />
                </Col>
              </Row>
            </>
          )}
        </FormField>

        <Flex gap={'middle'} justify={'center'}>
          <Button
            className={s.button}
            key={'back'}
            onClick={handleCancel}
            size={'large'}
            type={'default'}
          >
            Не сохранять
          </Button>
          <Button
            className={s.button}
            key={'submit'}
            onClick={handleOk}
            size={'large'}
            type={'primary'}
          >
            Сохранить
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}
