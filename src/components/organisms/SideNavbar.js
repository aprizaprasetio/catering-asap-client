import React from 'react'
import { Drawer, List, BottomNavigation, Paper, BottomNavigationAction } from '@mui/material'
import { Timeline, Assignment, Groups, RestaurantMenu } from '@mui/icons-material'
import PressListItem2 from 'components/molecules/PressListItem2'

const listStyle = {
    paddingX: 1,
    width: 100,
    marginY: 'auto',
    display: {
        xs: 'none',
        sm: 'grid',
    },
    gap: 2,
    position: 'sticky',
}

const SideNavbar = () => {
    return (
        <Drawer variant="permanent" anchor="left">
            <List sx={listStyle}>
                <PressListItem2 icon={<Timeline />} content="Grafik" />
                <PressListItem2 icon={<Assignment />} content="Pesanan" />
                <PressListItem2 icon={<Groups />} content="User" />
                <PressListItem2 icon={<RestaurantMenu />} content="Menu" />
            </List>
        </Drawer>
    )
}

export default SideNavbar