import React from 'react'
import ManagementOrderDasboard from 'components/molecules/ManagementOrderDasboard'
import { Box, Typography, AppBar, Toolbar, Tabs, Tab, Paper } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const tabList = []

tabList.push({
    href: '/orders',
    content: 'Verifikasi',
})
tabList.push({
    href: '/orders/waiting',
    content: 'Proses',
})
tabList.push({
    href: '/orders/delivering',
    content: 'Dalam Perjalanan',
})
tabList.push({
    href: '/orders/success',
    content: 'Selesai',
})
tabList.push({
    href: '/orders/rejected',
    content: 'Ditolak',
})


const DynamicMobileHeader = ({ title, isMenuVisible }) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const tabColor = () => {
        if (pathname === tabList[4].href)
            return '#e53e3e'

        if (pathname === tabList[3].href)
            return '#2e7d32'

        return undefined
    }

    return (
        <>
            <Box sx={{
                paddingTop: 6,
                background: 'linear-gradient(to left bottom, #009FFD, #2A2A72)',
            }}>
                <Box sx={{
                    padding: 3
                }}>
                    <Typography
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                        variant="h1"
                    >
                        {title}
                    </Typography>
                    <Typography sx={{
                        fontSize: 22,
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                        variant="subtitle1">Admin</Typography>
                </Box>
            </Box>
            {
                isMenuVisible && (
                    <Tabs
                        value={pathname}
                        variant="scrollable"
                        component={Paper}
                        elevation={3}
                        sx={{
                            display: 'flex',
                            '& .MuiTabs-indicator': {
                                backgroundColor: tabColor(),
                            },
                            '& .MuiTab-root.Mui-selected': {
                                color: tabColor(),
                            },
                        }}
                    >
                        {tabList.map(tab => (
                            <Tab
                                key={tab.href}
                                onClick={() => navigate(tab.href)}
                                value={tab.href}
                                label={tab.content}
                                sx={{
                                    flex: 1,
                                }}
                            />
                        ))}
                    </Tabs>
                )
            }
        </>
    )
}

export default DynamicMobileHeader