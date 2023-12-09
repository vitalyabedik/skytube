import { message } from 'antd'

import { ServerAppErrorType } from '../errors.types'

export const handleServerAppError = (error: ServerAppErrorType) => {
  if (error.data) {
    message.error(error.data.message)
  }

  if (Array.isArray(error)) {
    message.error(error[0].msg || 'Some error occurred')
  }
}
