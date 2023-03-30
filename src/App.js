import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import LoginForm from 'components/pages/LoginForm'
import RegisterForm from 'components/pages/RegisterForm'
import UserHome from 'components/pages/UserHome'
import AdminHome from 'components/pages/AdminHome'
import AdminFoodDrink from 'components/pages/AdminFoodDrink'
import UserManage from 'components/pages/UserManage'
import UserCart from 'components/pages/UserCart'
import UserCheckout from 'components/pages/UserCheckout'
import SwitchRoute from 'components/routes/SwitchRoute'
import PrivateRoute from 'components/routes/PrivateRoute'
import GuestRoute from 'components/routes/GuestRoute'
import AdminOrderManagement from 'components/pages/AdminOrderManagement'
import AdminManagementGraphic from 'components/pages/AdminManagementGraphic'
import AdminUserList from 'components/pages/AdminUserList'
import UserPayment from 'components/pages/UserPayment'
import UserOrderDetail from 'components/pages/UserOrderDetail'
import AdminUserDetail from 'components/pages/AdminUserDetail'
import OrderVerifyManagement from 'components/pages/OrderVerifyManagement'
import { useLoginOnLoad } from 'api/hooks/authHook'
import AdminFoodDrinkDetailMobile from 'components/pages/AdminFoodDrinkDetailMobile'
import UserStatusPesanan from 'components/pages/UserStatusPesanan'
import UserFoodDrinkMenuDetail from 'components/pages/UserFoodDrinkMenuDetail'
import AdminBanner from 'components/pages/AdminBanner'
import AdminFormBanner from 'components/organisms/AdminFormBanner'

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
      <Route
        exact
        path="/orders/:orderId"
        element={
          <SwitchRoute
            adminElem={<AdminOrderManagement />}
            userElem={<UserOrderDetail />}
          />
        }
      />

      <Route path="/profile" element={<PrivateRoute element={<UserManage />} />} exact />
      <Route path="/profile/*" element={<PrivateRoute element={<UserManage />} />} exact />
      <Route path="/statusorders/*" element={<PrivateRoute element={<UserStatusPesanan />} />} exact />
      <Route path="/cart" element={<PrivateRoute element={<UserCart />} />} exact />
      <Route path="/cart/checkout" element={<PrivateRoute element={<UserCheckout />} />} exact />
      <Route path="/cart/payment" element={<PrivateRoute element={<UserPayment />} />} exact />
      <Route path="/login" element={<GuestRoute element={<LoginForm />} />} exact />
      <Route path="/register" element={<GuestRoute element={<RegisterForm />} />} exact />
      <Route path="/orders" element={<PrivateRoute element={<AdminOrderManagement />} role="admin" />} exact />
      {/* <Route path="/menus/:fooddrinkid" element={<PrivateRoute element={<UserFoodDrinkMenuDetail />} />} exact /> */}
      <Route path="/menus/:fooddrinkid" element={
        <SwitchRoute
          adminElem={<AdminFoodDrinkDetailMobile />}
          userElem={<UserFoodDrinkMenuDetail />}
        />
      } exact />

      <Route path="/graphs" element={<PrivateRoute element={<AdminManagementGraphic />} role="admin" />} exact />
      <Route path="/users" element={<PrivateRoute element={<AdminUserList />} role="admin" />} exact />

      <Route path="/orders/detail/:orderId" element={<OrderVerifyManagement />} exact />
      <Route path="/graphs" element={<PrivateRoute element={<AdminManagementGraphic />} role="admin" />} exact />
      <Route path="/users" element={<PrivateRoute element={<PrivateRoute element={<AdminUserList />} role="admin" />} role="admin" />} exact />
      <Route path="/users/detail/:id" element={<PrivateRoute element={<AdminUserDetail />} role="admin" />} exact />
      <Route path="/menus" element={<PrivateRoute element={<AdminFoodDrink />} role="admin" />} exact />
      <Route path="/banners" element={<PrivateRoute element={<AdminBanner />} role="admin" />} exact />

      <Route path="*" element={<Navigate to="/" replace={false} />} exact />
    </Routes>
  )
}

export default App