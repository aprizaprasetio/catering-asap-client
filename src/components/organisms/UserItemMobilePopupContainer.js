import React from 'react'
import UserItemMobile from './UserItemMobile'
import { Box, Paper } from '@mui/material'

const UserItemMobilePopupContainer = ({ children, display }) => {
    return (
        <Box sx={{ display: display }}>
            <Box
                component={Paper}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 3,
                    gap: 2,
                    width: 335,
                    borderRadius: 3,
                    boxShadow: 3,
                    cursor: 'default',
                }}>{children}</Box>
        </Box>
    )
}

export default UserItemMobilePopupContainer