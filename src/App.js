import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from 'components/pages/LoginForm'
import RegisterForm from 'components/pages/RegisterForm'
import UserHome from 'components/pages/UserHome'
import { getToken } from 'api/initiate'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App = () => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<UserHome />} />
        {
          !getToken() &&
          <>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </>
        }
      </Route>
    </Routes>
  )
}

export default App