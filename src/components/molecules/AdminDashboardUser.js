import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { People } from '@mui/icons-material'
import useUserStore from 'factory/store/useUserStore'

const AdminDashboardUser = () => {
    const totalUser = useUserStore(state => state.totalUser)

    return (
        <Box sx={{
            alignItems: 'center',
            width: '100%',
            height: 50,
            borderRadius: 3,
            boxShadow: 4,
            backgroundColor: '#2F58CD',
            marginY: 1
        }}>
            <Box
                sx={{
                    display: 'flex',
                    paddingX: 6,
                    // justifyContent: 'space-evenly',
                    gap: 3,
                    marginBottom: 5,
                    alignItems: 'center',
                    height: '100%',
                    fontWeight: 'bold',
                }}>
                <Typography
                    sx={{
                        fontSize: 20,
                        fontWeight: 'medium',
                        color: 'white'
                    }}
                    variant="h2"
                >Total User</Typography>
                <Typography sx={{fontSize: 38, color: 'white'}}><People sx={{fontSize: 30}} />{totalUser}</Typography>
            </Box>
        </Box>
    )
}

export default AdminDashboardUser