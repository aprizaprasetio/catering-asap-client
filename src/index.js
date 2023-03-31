import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CssBaseline } from '@mui/material'
import App from 'App'
import { client } from 'api/initiates/queryInitiate'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)