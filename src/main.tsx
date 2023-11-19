import { Provider } from 'react-redux'

import { App } from '@/app'
import { store } from '@/app/model/store'
import { createRoot } from 'react-dom/client'

import '@/styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
