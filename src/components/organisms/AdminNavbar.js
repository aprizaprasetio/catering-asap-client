import React from 'react'
import { Home, Timeline, Assignment, Groups, RestaurantMenu, ViewCarousel } from '@mui/icons-material'
import SideNavbar from 'components/organisms/SideNavbar'
import BottomNavbar from 'components/organisms/BottomNavbar'

const navbarList = []
navbarList.push({
    icon: <Home />,
    content: 'Beranda',
    href: '/',
})
navbarList.push({
    icon: <Timeline />,
    content: 'Grafik',
    href: '/graphs',
})
navbarList.push({
    icon: <Assignment />,
    content: 'Pesanan',
    href: '/orders',
})
navbarList.push({
    icon: <Groups />,
    content: 'User',
    href: '/users',
})
navbarList.push({
    icon: <RestaurantMenu />,
    content: 'Menu',
    href: '/menus',
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