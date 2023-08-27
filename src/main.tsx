/** Libraries */
import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles'

/** Components */
import App from './App'

/** Utils */
import { theme } from './utils'

/** Styles */
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
