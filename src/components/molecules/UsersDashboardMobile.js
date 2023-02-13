import React from 'react'
import { grey } from '@mui/material/colors'
import { Box, IconButton, Typography } from '@mui/material'
import { People } from '@mui/icons-material'

const UsersDashboardMobile = () => {

    const display = {
        xs: 'block',
        md: 'none'
        
    }

    return (
        <Box sx={{
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: grey[100],
            borderRadius: 3,
            boxShadow: 4,
            display: display
        }}>
            <Box
                sx={{
                    display: 'flex',
                    paddingX: 10,
                    justifyContent: 'space-evenly',
                    marginBottom: 5,
                    alignItems: 'center',
                    height: '100%',
                    fontWeight: 'bold',
                    color: grey[600]
                }}>
                <Typography
                    sx={{
                        fontSize: 18,
                        fontWeight: 'medium'
                    }}
                    variant="h2"
                >Total User</Typography>
                <IconButton sx={{ fontSize: 40}}><People fontSize='large'/>53</IconButton>
            </Box>
        </Box>
    )
}

export default UsersDashboardMobile