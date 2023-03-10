import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Typography, Box, Paper, Link } from '@mui/material'
import { useCartCheckout } from 'api/hooks/cartHook'

const CheckoutBank = () => {
    const { data } = useCartCheckout()

    if (!data.usedBank) return (
        <Box>
            <Typography variant="h3" fontSize={16} fontWeight="bold" marginBottom={1}>
                Rekening Bank
            </Typography>
            <Typography fontSize={14}>
                Belum ada rekening bank yang terdaftar!
            </Typography>
            <Link component={RouterLink} to="/profile/bank" underline="none" variant="text" sx={{
                borderRadius: 4,
            }}>
                Daftarkan rekening bank
            </Link>
        </Box>
    )

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