import React from 'react'
import { Provider } from 'react-redux'

import { Router } from '@/common'
import { useTheme } from '@/features'
import { ConfigProvider } from 'antd'

import { store } from '../model'

export const App: React.FC = () => {
  const { themeConfig } = useTheme()

  return (
    <Provider store={store}>
      <ConfigProvider theme={themeConfig}>
        <Router />
      </ConfigProvider>
    </Provider>
  )
}
