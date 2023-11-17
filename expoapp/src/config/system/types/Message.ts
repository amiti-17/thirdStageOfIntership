export type MessageType = {
  title: 'Error' | 'Warning' | 'Success' | 'Alert' | '',
  message: string,
}

export const defaultMessage: MessageType = {
  title: '',
  message: '',
}