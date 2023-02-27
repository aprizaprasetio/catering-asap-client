import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from 'components/pages/LoginForm'
import RegisterForm from 'components/pages/RegisterForm'
import UserHome from 'components/pages/UserHome'
import AdminHome from 'components/pages/AdminHome'
import AdminFoodDrink from 'components/pages/AdminFoodDrink'
import UserManage from 'components/pages/UserManage'
import UserCart from 'components/pages/UserCart'
import SwitchRoute from 'components/routes/SwitchRoute'
import PrivateRoute from 'components/routes/PrivateRoute'
import GuestRoute from 'components/routes/GuestRoute'
import { useLoginOnLoad } from 'api/hooks/authHook'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import AdminOrderManagement from 'components/pages/AdminOrderManagement'
import AdminManagementGraphic from 'components/pages/AdminManagementGraphic'
import AdminUserList from 'components/pages/AdminUserList'

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
      <Route path="/profile" element={<PrivateRoute element={<UserManage />} />} exact />
      <Route path="/profile/*" element={<PrivateRoute element={<UserManage />} />} exact />
      <Route path="/cart" element={<PrivateRoute element={<UserCart />} />} exact />
      <Route path="/login" element={<GuestRoute element={<LoginForm />} />} exact />
      <Route path="/register" element={<GuestRoute element={<RegisterForm />} />} exact />
      <Route path="/orders" element={<PrivateRoute element={<AdminOrderManagement />} role="admin" />} exact />
      <Route path="/orders/*" element={<PrivateRoute element={<AdminOrderManagement />} role="admin" />} exact />
      <Route path="/graphs" element={<PrivateRoute element={<AdminManagementGraphic />} role="admin" />} exact />
      <Route path="/users" element={<PrivateRoute element={<AdminUserList />} role="admin" />} exact />
      <Route path="/register" element={<GuestRoute element={<RegisterForm />} />} exact />
      <Route path="/register" element={<GuestRoute element={<RegisterForm />} />} exact />
      <Route path="*" element={<Navigate to="/" replace={false} />} exact />
    </Routes>
  )
}

export default App