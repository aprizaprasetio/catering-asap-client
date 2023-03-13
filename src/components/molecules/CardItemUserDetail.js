import { FastfoodOutlined } from '@mui/icons-material'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { formatIDR } from 'commands/application/priceCommand'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardItemUserDetail = ({ id, userName, quantity, totalPriceOrdered }) => {
    const navigate = useNavigate()
    const iconResponsive = {
        md: 70,
        lg: 100
    }
    const fontSizeResponsive = {
        md: 26,
        lg: 32
    }
    const noPesananResponsive = {
        md: 16,
        lg: 20
    }
    return (
        <Grid item xs={12}>
            <Card sx={{
                display: 'flex',
                boxShadow: 6,
                borderRadius: 3,
                cursor: 'pointer',
                paddingX: 1,
                position: 'relative',
                // gap: 4,
                // justifyContent: 'space-around'
            }}
                onClick={() => navigate(`/orders/detail/${id}`)}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginX: 2
                }}>
                    <FastfoodOutlined sx={{ fontSize: iconResponsive }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" sx={{ fontSize: fontSizeResponsive, fontWeight: 'bold' }}>
                            {userName}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: 18 }}>{formatIDR(totalPriceOrdered)}</Typography>
                        <Box sx={{ position: 'absolute', right: 25, bottom: 13 }}>
                            <Typography component="div" sx={{ fontSize: 20, fontWeight: 'bold' }}>{quantity}pcs</Typography>
                        </Box>
                    </CardContent>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: noPesananResponsive, marginLeft: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>No.Pesanan: {id}</Typography>
            </Card>
        </Grid>
    )
}

export default CardItemUserDetail