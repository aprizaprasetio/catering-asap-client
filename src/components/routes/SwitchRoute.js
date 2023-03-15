import React from 'react'
import { Navigate } from 'react-router-dom'
import PrivateRoute from 'components/routes/PrivateRoute'
import LoadingFull from 'components/atoms/LoadingFull'
import { useStale } from 'commands/builders/hookBuilder'
import { getToken } from 'commands/api/tokenCommand'

const SwitchRoute = ({ adminElem, userElem }) => {
    const [user] = useStale('user')

    // Restricted from unauthenticated user
    if (!getToken()) return <Navigate to="/login" replace={false} />
    if (!user) return <LoadingFull />
    // // Return Switch
    return (user.role === 'admin') ?
        <PrivateRoute element={adminElem} role="admin" /> :
        <PrivateRoute element={userElem} />
}

export default SwitchRoute