import React from 'react'
import { Box, Paper, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'

const UserItemMobileContainer = ({ children }) => {
    return (
        <Grid item xs={6}>
            <Box component={Paper} sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 3,
                width: 'auto',
                backgroundColor: grey[400],
                borderRadius: 3,
                boxShadow: 3,
            }}>{children}</Box>
        </Grid>
    )
}

export default UserItemMobileContainer