import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Paper, Tabs, Tab, useMediaQuery } from '@mui/material'

const ManageUserSideBar = ({ tabList }) => {
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
            {tabList.map(item => (
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
            ))}
        </Tabs>
    )
}

export default ManageUserSideBar