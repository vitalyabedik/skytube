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

export type ServerErrorType = {
  error: string
}
