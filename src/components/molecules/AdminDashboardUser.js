import React from 'react'
import { Box, IconButton, Typography, Button, Skeleton, Stack } from '@mui/material'
import { People } from '@mui/icons-material'
import useUserStore from 'factory/store/useUserStore'

const AdminDashboardUser = () => {
    const totalUser = useUserStore(state => state.totalUser)

    return (
        <Stack direction="row" alignItems="center" justifyItems="center" justifyContent="center" gap={1} sx={{
            color: 'primary.main',
            padding: 1,
        }}>
            {totalUser ? (
                <>
                    <People />
                    <Typography variant="body1" fontWeight="medium" textTransform="uppercase">Total User {totalUser}</Typography>
                </>
            ) : <Skeleton variant="rounded" width={60} height={18} />}
        </Stack>
    )
}

export default AdminDashboardUser