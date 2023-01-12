import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from 'api/initiate'
// import myStore from './redux/store'
import { CssBaseline } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <CssBaseline />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)