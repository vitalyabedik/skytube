import { ErrorQueryResponseType } from '@/common/utils/errors/errors.types'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { message } from 'antd'

export const handleQueryError = (response: FetchBaseQueryError | SerializedError | undefined) => {
  if (response && 'data' in response) {
    message.error((response as ErrorQueryResponseType).data.message)
  }

  if (response && 'status' in response) {
    if ('error' in response) {
      message.error(response.error)
    }
  } else {
    message.error('Some error occurred')
  }
}
