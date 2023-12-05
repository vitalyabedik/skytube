import { message } from 'antd'

export const handleServerAppError = (error: ServerAppErrorType) => {
  debugger
  if (error.data) {
    debugger
    message.error(error.data.message)
  }

  if (Array.isArray(error)) {
    debugger
    message.error(error[0].msg || 'Some error occurred')
  }
}

// types
export type ServerAppErrorType = {
  data: MessageErrorType
  error: ErrorResponseType
  status: number
}

type MessageErrorType = {
  message: string
}

type ErrorItem = {
  msg: string
  type: string
  value: string
}

type ErrorPayload = ErrorItem[]

type ErrorResponseType = {
  error: ErrorPayload
  location: string
  msg: string
  path: string
}
