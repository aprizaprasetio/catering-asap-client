import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClientProvider as QueryProvider } from '@tanstack/react-query'
import myClient from './api/client'
import myStore from './redux/store'
import { CssBaseline } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider>
      <ReduxProvider store={myStore}>
        <QueryProvider client={myClient}>
          <CssBaseline />
          <App />
        </QueryProvider>
      </ReduxProvider>
    </RouterProvider>
  </React.StrictMode>
)