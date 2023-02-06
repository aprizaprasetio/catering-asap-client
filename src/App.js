import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from 'components/pages/LoginForm'
import RegisterForm from 'components/pages/RegisterForm'
import UserHome from 'components/pages/UserHome'
import AdminHome from 'components/pages/AdminHome'
import PrivateProfile from 'components/pages/PrivateProfile'
import SwitchRoute from 'components/routes/SwitchRoute'
import PrivateRoute from 'components/routes/PrivateRoute'
import GuestRoute from 'components/routes/GuestRoute'
import { useLoginOnLoad } from 'api/hooks/authHook'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App = () => {
  useLoginOnLoad()

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
      <Route path="/profile" element={<PrivateRoute element={<PrivateProfile />} />} exact />
      <Route path="/login" element={<GuestRoute element={<LoginForm />} />} exact />
      <Route path="/register" element={<GuestRoute element={<RegisterForm />} />} exact />
      <Route path="/admin" element={<AdminHome />} exact />
      <Route path="*" element={<Navigate to="/" replace={false} />} exact />
    </Routes>
  )
}

export default App