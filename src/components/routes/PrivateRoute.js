import React from 'react'
import { Navigate } from 'react-router-dom'
import PrivateRouteProps from 'proptypes/routes/PrivateRouteProps'
import LoadingFull from 'components/atoms/LoadingFull'
import { useStale } from 'commands/builders/hookBuilder'
import { getToken } from 'commands/api/tokenCommand'

const PrivateRoute = ({ element, role = 'user' }) => {
    const [user] = useStale('user')

    // Restricted from unauthenticated user
    if (!getToken()) return <Navigate to="/login" replace={false} />
    if (!user) return <LoadingFull />
    if (role !== 'admin' && (getToken() && user)) return element
    // Authenticate for the admin role
    if (user?.role !== 'admin') return <Navigate to="/login" replace={false} />
    return element
}

PrivateRoute.propTypes = PrivateRouteProps

export default PrivateRoute