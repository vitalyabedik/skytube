import React, { useState } from 'react'

import { useAppDispatch } from '@/common'
import { FormField } from '@/components'
import { FavouriteType, favouritesActions } from '@/features'
import { Col, Row, Select, Slider } from 'antd'
import { InputNumber } from 'antd/lib'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import Input from 'antd/lib/input'

import s from './AddFavouritesForm.module.scss'

import { FavouritesFormValues, useAddFavouritesForm } from './useAddFavouritesForm'

type Props = {
  search: string
  setOpen: (open: boolean) => void
}

export const AddFavouritesForm: React.FC<Props> = ({ search, setOpen }) => {
  const [inputValue, setInputValue] = useState(1)
  const [selectValue, setSelectValue] = useState('relevance')

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useAddFavouritesForm({ request: search || '', sortBy: selectValue || 'relevance' })

  const dispatch = useAppDispatch()

  const changeSliderInputValue = (newValue: number) => {
    setInputValue(newValue)
  }

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const changeSelectValue = (value: string) => {
    setSelectValue(value)
    console.log(value)
  }

  const onSubmit = (values: any) => {
    const newFavouriteItem: any = {
      maxCount: inputValue,
      request: search,
      sortBy: selectValue,
      title: values.title,
    }

    debugger
    dispatch(favouritesActions.addFavourite({ favouriteItem: newFavouriteItem }))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex align={'center'} className={s.form} gap={'middle'} justify={'space-between'} vertical>
        <FormField control={control} errors={errors} label={'Запрос'} name={'request'}>
          {field => <Input {...field} allowClear id={'request'} placeholder={'requestrequest'} />}
        </FormField>

        <FormField control={control} errors={errors} label={'Название'} name={'title'}>
          {field => <Input {...field} allowClear id={'title'} placeholder={'title'} />}
        </FormField>

        <FormField control={control} errors={errors} label={'Сортировать по'} name={'sortBy'}>
          {field => (
            <Select
              {...field}
              id={'sortBy'}
              onChange={changeSelectValue}
              options={[
                { label: 'Без сортировки', value: 'relevance' },
                { label: 'По дате', value: 'date' },
                { label: 'По рейтингу', value: 'rating' },
                { label: 'По названию', value: 'title' },
                { label: 'По количеству видео', value: 'videoCount' },
                { label: 'По числу просмотров', value: 'viewCount ' },
              ]}
              value={selectValue}
            />
          )}
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
                    onChange={changeSliderInputValue}
                    value={inputValue}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    max={20}
                    min={1}
                    onChange={value => setInputValue(value)}
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
            htmlType={'submit'}
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
