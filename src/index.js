import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import myStore from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider>
      <ReduxProvider store={myStore}>
        <App />
      </ReduxProvider>
    </RouterProvider>
  </React.StrictMode>
)