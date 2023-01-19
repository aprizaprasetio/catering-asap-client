import React from 'react'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Timeline, Assignment, Groups, RestaurantMenu } from '@mui/icons-material'

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

const BottomNavbar = () => {
    return (
        <Paper sx={paperStyle}>
            <BottomNavigation>
                <BottomNavigationAction icon={<Timeline />} />
                <BottomNavigationAction icon={<Assignment />} />
                <BottomNavigationAction icon={<Groups />} />
                <BottomNavigationAction icon={<RestaurantMenu />} />
            </BottomNavigation>
        </Paper>
    )
}

export default BottomNavbar