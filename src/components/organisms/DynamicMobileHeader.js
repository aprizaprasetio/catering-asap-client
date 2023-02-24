import React from 'react'
import ManagementOrderDasboard from 'components/molecules/ManagementOrderDasboard'
import { Box, Typography, AppBar, Toolbar } from '@mui/material'

const DynamicMobileHeader = ({ title, isMenuVisible }) => {
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
                    <AppBar position="sticky">
                        <Toolbar>
                            <ManagementOrderDasboard />
                        </Toolbar>
                    </AppBar>
                )
            }
        </>
    )
}

export default DynamicMobileHeader