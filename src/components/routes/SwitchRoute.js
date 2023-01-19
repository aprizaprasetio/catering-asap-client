import React from 'react'
import { Navigate } from 'react-router-dom'
import PrivateRoute from 'components/routes/PrivateRoute'
import { useSubscribe } from 'commands/builders/hookBuilder'

const SwitchRoute = ({ adminElem, userElem }) => {
    const user = useSubscribe('user')
    // Restricted from unauthenticated user
    if (!user) return <Navigate to="/login" replace={false} />
    // Return Switch
    return (user.role === 'admin') ?
        <PrivateRoute element={adminElem} role="admin" /> :
        <PrivateRoute element={userElem} />
}

export default SwitchRoute