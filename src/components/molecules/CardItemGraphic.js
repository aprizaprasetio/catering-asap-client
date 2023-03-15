import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { useDataGraph } from 'api/hooks/ordersManagementHook'
import { formatIDR } from 'commands/application/priceCommand'

const CardItemGraphic = ({ title }) => {
    const { data } = useDataGraph()

    return (
        <Box sx={{
            backgroundColors: 'pink',
            display: 'flex',
            gap: 3,
            flex: 1
        }}>
            <Card sx={{
                display: 'flex',
                boxShadow: 5,
                borderRadius: 3,
                paddingY: 3,
                paddingX: 1,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
            }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>Total Pendapatan</Typography>
                {/* <Typography sx={{ fontSize: 12 }}>/Bulan</Typography> */}
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>{formatIDR(data?.totalIncome)}</Typography>
            </Card>
            <Card sx={{
                display: 'flex',
                boxShadow: 5,
                borderRadius: 3,
                paddingY: 3,
                paddingX: 1,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>Total Pesanan</Typography>
                {/* <Typography sx={{ fontSize: 12 }}>/Bulan</Typography> */}
                <Typography sx={{ fontSize: 32, fontWeight: 'bold' }}>{data?.totalOrdered}</Typography>
            </Card>
        </Box>
    )
}

export default CardItemGraphic