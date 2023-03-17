import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Paper, Tabs, Tab, useMediaQuery } from '@mui/material'
import { useStale } from 'commands/builders/hookBuilder'

/*
const listStyle = {
    paddingY: 3,
    paddingX: 1,
    display: 'grid',
    gap: 1,
}
const tabList = []
tabList.push({
    icon: ManageAccounts,
    href: '/profile',
    content: 'Biodata'
})
tabList.push({
    icon: Key,
    href: '/profile/password',
    content: 'Kata Sandi'
})
*/

const ManageUserSideBar = ({ tabList }) => {
    const [user] = useStale('user')
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isMobile = useMediaQuery('(max-width:768px)')

    return (
        <Tabs
            value={pathname}
            orientation={isMobile ? 'horizontal' : 'vertical'}
            variant="scrollable"
            component={Paper}
            sx={{
                height: isMobile ? 'auto' : 'calc(100vh - 64px)',
            }}
        >
            {
                (user.role === 'admin') ?
                    tabList.map(item => (
                        item.isAdminVisible && (
                            <Tab
                                onClick={() => navigate(item.href)}
                                value={item.href}
                                label={item.content}
                                icon={<item.icon />}
                                sx={{
                                    paddingX: 4,
                                }}
                                key={item.href}
                            />
                        )
                    )) :
                    tabList.map(item => (
                        <Tab
                            onClick={() => navigate(item.href)}
                            value={item.href}
                            label={item.content}
                            icon={<item.icon />}
                            sx={{
                                paddingX: 4,
                            }}
                            key={item.href}
                        />
                    ))
            }
        </Tabs>
    )
}

export default ManageUserSideBar