import React from 'react'
import { Navigate } from 'react-router-dom'
import PrivateRouteProps from 'proptypes/routes/PrivateRouteProps'
import { useSubscribe } from 'commands/builders/hookBuilder'

const PrivateRoute = ({ element, role = 'user' }) => {
    const user = useSubscribe('user')
    // Restricted from unauthenticated user
    if (!user) return <Navigate to="/login" replace={false} />
    if (role !== 'admin') return element
    // Authenticate for the admin role
    if (user.role !== 'admin') return <Navigate to="/login" replace={false} />
    return element
}

PrivateRoute.propTypes = PrivateRouteProps

export default PrivateRoute