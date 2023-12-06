import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { message } from 'antd'

export const handleQueryError = (response: FetchBaseQueryError | SerializedError | undefined) => {
  if (response && 'status' in response) {
    if ('error' in response) {
      debugger
      message.error(response.error)
    }
  } else {
    message.error('Some error occurred')
  }
}
