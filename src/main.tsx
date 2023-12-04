import { createRoot } from 'react-dom/client'

import '@/styles/index.scss'

import { App } from './features/app'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
