import React from 'react'
import { grey } from '@mui/material/colors'
import { Box, Stack, Typography, Skeleton } from '@mui/material'
import { People } from '@mui/icons-material'
import useUserStore from 'factory/store/useUserStore'

const UsersDashboardMobile = () => {
    const totalUser = useUserStore(state => state.totalUser)

    const display = {
        xs: 'block',
        md: 'none'

    }

    return (
        <Box sx={{
            alignItems: 'center',
            width: '100%',
            paddingY: 1,
            backgroundColor: grey[100],
            borderRadius: 3,
            boxShadow: 1,
            display: display
        }}>
            <Stack direction="row" alignItems="center" justifyItems="center" justifyContent="center" gap={1} sx={{
                color: 'primary.main',
            }}>
                {totalUser ? (
                    <>
                        <People />
                        <Typography variant="body1" fontWeight="medium" textTransform="uppercase">Total User {totalUser}</Typography>
                    </>
                ) : <Skeleton variant="rounded" width={60} height={18} />}
            </Stack>
        </Box >
    )
}

export default UsersDashboardMobile