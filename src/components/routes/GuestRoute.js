import React from 'react'
import { Navigate } from 'react-router-dom'
import GuestRouteProps from 'proptypes/routes/GuestRouteProps'
import { useSubscribe } from 'commands/builders/hookBuilder'

const GuestRoute = ({ element }) => {
    const user = useSubscribe('user')
    if (user) return <Navigate to="/" replace />
    return element
}

GuestRoute.propTypes = GuestRouteProps

export default GuestRoute