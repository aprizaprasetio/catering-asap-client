import React from 'react'
import { Typography, Box } from '@mui/material'

const CheckoutAddress = () => {
    return (
        <Box>
            <Typography variant="h3" fontSize={16} fontWeight="bold" marginBottom={1}>
                Alamat Pengiriman
            </Typography>
            <Typography variant="body1" fontSize={14}>
                {localStorage.getItem('USER_ADDRESS')}
            </Typography>
        </Box>
    )
}

export default CheckoutAddress