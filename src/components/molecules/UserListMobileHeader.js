import React from 'react'
import { Box, Typography, AppBar, Toolbar } from '@mui/material'

const UserListMobileHeader = ({ title, style, style1, menu }) => {
    return (
        <>
            <Box sx={style}>
                <Box sx={style1}>
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
                <Box sx={{ position: 'absolute', bottom: 0 }}>
                </Box>
            </Box>
        </>
    )
}

export default UserListMobileHeader