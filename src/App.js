import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import LoginForm from 'components/pages/LoginForm'
import RegisterForm from 'components/pages/RegisterForm'
import UserHome from 'components/pages/UserHome'
import AdminHome from 'components/pages/AdminHome'
import SwitchRoute from 'components/routes/SwitchRoute'
import GuestRoute from 'components/routes/GuestRoute'
import { getToken } from 'commands/api/tokenCommand'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App = () => {
  useQuery({
    queryKey: ['user'],
    queryFn: () => {
      if (!getToken()) return null
      return null
    },
    initialData: null,
  })

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <SwitchRoute
            adminElem={<AdminHome />}
            userElem={<UserHome />}
          />
        }
      />
      <Route path="/login" element={<GuestRoute element={<LoginForm />} />} exact />
      <Route path="/register" element={<GuestRoute element={<RegisterForm />} />} exact />
      <Route path="*" element={<Navigate to="/" replace={false} />} exact />
    </Routes>
  )
}

export default App