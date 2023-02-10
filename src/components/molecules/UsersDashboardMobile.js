import React from 'react'
import { grey } from '@mui/material/colors'
import { Box, Typography } from '@mui/material'

const UsersDashboardMobile = () => {
    return (
        <Box sx={{
            alignItems: 'center',
            width: '100%',
            height: 80,
            backgroundColor: grey[400],
            borderRadius: 4,
        }}>
            <Box
                sx={{
                    color: 'white',
                    display: 'flex',
                    paddingX: 10,
                    justifyContent: 'space-between',
                    marginBottom: 5,
                    alignItems: 'center',
                    height: '100%'
                }}>
                <Typography
                    sx={{
                        fontSize: 32,
                        fontWeight: 'medium'
                    }}
                    variant="h2"
                >Total User</Typography>
                <Typography
                sx={{
                    fontSize: 60,
                }}
                >53</Typography>
            </Box>
        </Box>
    )
}

export default UsersDashboardMobile