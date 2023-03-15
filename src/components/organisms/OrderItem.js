import React from 'react'
import CardItemVerifyOrder from 'components/molecules/CardItemVerifyOrder'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { formatIDR } from 'commands/application/priceCommand'

const OrderItem = ({ totalPriceOrdered, display }) => {
    return (
        <>
            <Box sx={{
                marginX: 3,
                height: 'auto',
                backgroundColor: grey[100],
                borderRadius: 5,
                boxShadow: 5,
            }}
                display={display}>
                <CardItemVerifyOrder />
                <Box sx={{
                    marginX: 5,
                    marginY: 2
                }}>
                    <Typography sx={{ fontSize: 18, }}>Total</Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>{formatIDR(totalPriceOrdered)}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default OrderItem