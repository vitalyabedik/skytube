import { message } from 'antd'

export const handleServerNetworkError = (error: ServerErrorType) => {
  debugger
  if (error.error) {
    message.error(error.error)
  } else {
    debugger
    message.error('some error occurred')
  }
}

// types
export type ServerErrorType = {
  error: string
}
