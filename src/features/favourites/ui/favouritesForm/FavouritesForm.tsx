import React, { useEffect } from 'react'

import { FormField } from '@/components'
import {
  FavouriteType,
  FormVariantType,
  sortByType,
  useFavouriteCallbacksForm,
  useFavouriteFormValues,
} from '@/features'
import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import Input from 'antd/lib/input'
import InputNumber from 'antd/lib/input-number'
import Select from 'antd/lib/select'
import Slider from 'antd/lib/slider'

import s from './FavouritesForm.module.scss'

import { FavouritesFormValues, useFavouritesForm } from './useFavouritesForm'

type Props = {
  favouriteItem?: FavouriteType
  formVariant?: FormVariantType
  setOpen: (open: boolean) => void
}

export const FavouritesForm: React.FC<Props> = ({
  favouriteItem,
  formVariant = 'add',
  setOpen,
}) => {
  const { addFavouriteCallback, updateFavouriteCallback } = useFavouriteCallbacksForm()
  const {
    data,
    initialMaxCountValue,
    initialRequestValue,
    initialSortByValue,
    initialTitleValue,
    search,
    setInputValue,
  } = useFavouriteFormValues({ favouriteItem, formVariant })
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
  } = useFavouritesForm({
    maxCount: +initialMaxCountValue,
    request: initialRequestValue,
    sortBy: initialSortByValue,
    title: initialTitleValue,
  })

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleChangeInputValue = (newValue: null | number) => {
    if (newValue !== null) {
      setInputValue(newValue)
      setValue('maxCount', newValue)
    }
  }

  const changeSelectValue = (value: sortByType) => {
    setValue('sortBy', value)
  }

  useEffect(() => {
    setValue('title', initialTitleValue)
    setValue('maxCount', +initialMaxCountValue)
    setValue('request', initialRequestValue)
    setValue('sortBy', initialSortByValue)
  }, [initialTitleValue, initialMaxCountValue, initialRequestValue, initialSortByValue, setValue])

  const onSubmit = (values: FavouritesFormValues) => {
    if (formVariant === 'add') {
      addFavouriteCallback(values, search, data)
    }

    if (formVariant === 'edit') {
      updateFavouriteCallback(values, favouriteItem)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex align={'center'} className={s.form} gap={24} justify={'space-between'} vertical>
        <FormField control={control} errors={errors} label={'Запрос'} name={'request'}>
          {field => <Input {...field} allowClear disabled id={'request'} />}
        </FormField>

        <FormField control={control} errors={errors} label={'Название'} name={'title'}>
          {field => <Input {...field} allowClear id={'title'} placeholder={'Укажите название'} />}
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
                { label: 'По числу просмотров', value: 'viewCount' },
              ]}
              value={getValues('sortBy')}
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
            <Flex justify={'space-between'}>
              <Slider
                {...field}
                className={s.slider}
                defaultValue={initialMaxCountValue}
                id={'maxCount'}
                max={20}
                min={1}
                onChange={handleChangeInputValue}
              />

              <InputNumber
                className={s.numberInput}
                max={20}
                min={1}
                onChange={handleChangeInputValue}
                value={field.value}
              />
            </Flex>
          )}
        </FormField>

        <Flex className={s.buttons} gap={'middle'} justify={'center'}>
          <Button
            className={s.button}
            key={'back'}
            onClick={handleCancel}
            size={'large'}
            type={'default'}
          >
            {formVariant === 'add' ? 'Не сохранять' : 'Не изменять'}
          </Button>
          <Button
            className={s.button}
            htmlType={'submit'}
            key={'submit'}
            onClick={handleOk}
            size={'large'}
            type={'primary'}
          >
            {formVariant === 'add' ? 'Сохранить' : 'Изменить'}
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}
