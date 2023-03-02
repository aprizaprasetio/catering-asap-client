import React from 'react'
import { Typography, Box, Paper } from '@mui/material'
import { useCartCheckout } from 'api/hooks/cartHook'

const CheckoutBank = () => {
    const { data } = useCartCheckout()

    return (
        <Box>
            <Typography variant="h3" fontSize={16} fontWeight="bold" marginBottom={1}>
                Rekening Bank
            </Typography>
            <Paper sx={{
                width: 'fit-content',
                paddingY: 1,
                paddingX: 6,
                borderRadius: 4,
                boxShadow: 1,
            }}>
                <Typography fontFamily="monospace" fontWeight="bold">
                    {data.usedBank.bankName}
                </Typography>
                <Typography fontFamily="monospace">
                    {data.usedBank.bankNumber}
                </Typography>
                <Typography fontWeight="bold">
                    {data.usedBank.name}
                </Typography>
            </Paper>
        </Box>
    )
}

export default CheckoutBank