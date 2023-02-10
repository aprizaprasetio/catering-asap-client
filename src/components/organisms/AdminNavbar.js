import React from 'react'
import { Timeline, Assignment, Groups, RestaurantMenu } from '@mui/icons-material'
import SideNavbar from 'components/organisms/SideNavbar'
import BottomNavbar from 'components/organisms/BottomNavbar'

const navbarList = []
navbarList.push({
    icon: <Timeline />,
    content: 'Grafik',
    href: '/admin/graphs',
})
navbarList.push({
    icon: <Assignment />,
    content: 'Pesanan',
    href: '/admin/orders',
})
navbarList.push({
    icon: <Groups />,
    content: 'User',
    href: '/admin/users',
})
navbarList.push({
    icon: <RestaurantMenu />,
    content: 'Menu',
    href: '/admin/menus',
})

const AdminNavbar = () => {
    return (
        <>
            <SideNavbar navbarData={navbarList} />
            <BottomNavbar navbarData={navbarList} />
        </>
    )
}

export default AdminNavbar