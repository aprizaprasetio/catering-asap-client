import { Box, Grid } from '@mui/material'
import React from 'react'

const OrderManagementWrapper = ({ children }) => {
    const display = {
        xs: 'block',
        md: 'none'
    }

    return (
        <Box >
            <Grid container spacing={1}>
                {children}
            </Grid>
        </Box>
    )
}

export default OrderManagementWrapper