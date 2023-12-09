import { message } from 'antd'

import { ServerErrorType } from '../errors.types'

export const handleServerNetworkError = (error: ServerErrorType) => {
  if (error.error) {
    message.error(error.error)
  } else {
    message.error('some error occurred')
  }
}
