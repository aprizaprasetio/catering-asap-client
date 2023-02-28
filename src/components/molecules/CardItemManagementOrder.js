import React from 'react'
import { Grid, Box, Card, CardContent, CardMedia, Typography, Icon } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import { useNavigate } from 'react-router-dom'
import { Fastfood, FastfoodOutlined } from '@mui/icons-material'

const CardItemManagementOrder = ({ id, userName, quantity, totalPriceOrdered }) => {
    const navigate = useNavigate()

    return (
        <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Card sx={{
                display: 'flex',
                boxShadow: 6,
                borderRadius: 5,
                cursor: 'pointer',
                paddingX: 1,
                position: 'relative'
            }}
                onClick={() => navigate(`/admin/orders/verify/${id}`)}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginX: 2
                }}>
                    <FastfoodOutlined sx={{ fontSize: 70 }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: 15 }}>
                            No.Pesanan: {id}
                        </Typography>
                        <Typography component="div" sx={{ fontSize: 28, fontWeight: 'bold' }}>
                            {userName}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: 18 }}>{formatIDR(totalPriceOrdered)}</Typography>
                        <Box sx={{ position: 'absolute', right: 25, bottom: 13 }}>
                            <Typography component="div" sx={{ fontSize: 20, fontWeight: 'bold' }}>{quantity}x</Typography>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

export default CardItemManagementOrder