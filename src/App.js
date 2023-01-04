import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/pages/LoginForm'
import RegisterForm from './components/pages/RegisterForm'
import UserHome from './components/pages/UserHome'
import store from './redux/store'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const [account, setAccount] = React.useState(null)

  // Sinkronisasi redux
  React.useEffect(() => {
    setAccount(store.getState().user.account)
    const unsubscribe = store.subscribe(() => {
      setAccount(store.getState().user.account)
    })
    return unsubscribe
  }, [])

  if (!account) {
    return (
      <Routes>
        <Route path="/">
          <Route index element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/">
        <Route index element={<UserHome />} />
      </Route>
    </Routes>
  )
}

export default App