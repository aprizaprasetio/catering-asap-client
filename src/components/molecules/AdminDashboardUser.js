import React from 'react'
import { grey } from '@mui/material/colors'
import { Box, IconButton, Typography } from '@mui/material'
import { People } from '@mui/icons-material'
import useUserStore from 'factory/store/useUserStore'

const AdminDashboardUser = () => {
    const totalUser = useUserStore(state => state.totalUser)

    return (
        <Box sx={{
            alignItems: 'center',
            width: '100%',
            height: 120,
            backgroundColor: grey[100],
            borderRadius: 3,
            boxShadow: 4,
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
                        fontSize: 36,
                        fontWeight: 'medium'
                    }}
                    variant="h2"
                >Total User</Typography>
                <Typography sx={{fontSize: 60}}><People sx={{fontSize: 40}} />{totalUser}</Typography>
            </Box>
        </Box>
    )
}

export default AdminDashboardUser