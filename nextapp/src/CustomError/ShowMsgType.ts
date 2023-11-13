export type ShowMsgType = {
  message: string,
  severity: 'error' | 'warning' | 'info' | 'success',
}

export const showMsgDefault: ShowMsgType = {
  message: '',
  severity: 'warning',
}