import React from 'react'
import { useLocation } from 'react-router-dom'

const ManageTab = ({ url, component }) => {
    const { pathname } = useLocation()
    if (pathname !== url) return null
    return <>{component}</>
}

export default ManageTab