import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import BottomNavbarProps from 'proptypes/organisms/BottomNavbarProps'

const paperStyle = {
    position: 'fixed',
    display: {
        xs: 'block',
        sm: 'none',
    },
    right: 0,
    left: 0,
    bottom: 0,
    boxShadow: 6,
}

const BottomNavbar = ({ navbarData }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <Paper sx={paperStyle}>
            <BottomNavigation value={pathname}>
                {navbarData.map(item => (
                    <BottomNavigationAction
                        key={item.href}
                        value={item.href}
                        icon={item.icon}
                        onClick={() => navigate(item.href)}
                    />
                )
                )}
            </BottomNavigation>
        </Paper>
    )
}

BottomNavbar.propTypes = BottomNavbarProps

export default BottomNavbar