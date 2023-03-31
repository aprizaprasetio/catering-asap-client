import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Card, CardContent, CardMedia, Typography, Icon, Stack, Chip, Divider } from '@mui/material'
import { FastfoodOutlined } from '@mui/icons-material'
import { formatIDR } from 'commands/application/priceCommand'
import { useTrigger } from 'commands/builders/commonBuilder'

const CardItemManagementOrder = ({ id, userName, quantity, totalPriceOrdered }) => {
    const [isHover, isHoverTrigger] = useTrigger()

    return (
        <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Card
                component={Link}
                to={`/orders/detail/${id}`}
                onMouseOver={isHoverTrigger}
                onMouseOut={isHoverTrigger}
                sx={{
                    display: 'flex',
                    textDecoration: 'none',
                    boxShadow: isHover ? 5 : 1,
                    transition: 'all .33s',
                    borderRadius: 6,
                }}
            >
                <CardContent sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 2,
                    position: 'relative',
                }}>
                    <FastfoodOutlined sx={{
                        fontSize: 60,
                        transition: 'all .33s',
                        opacity: isHover ? .66 : .1,
                    }} />
                    <Stack flex={1}>
                        <Box display="flex" justifyContent="space-between">
                            <Chip label={`ORDER ID: ${id}`} size="small" />
                            <Typography fontSize={16} fontWeight="medium">
                                {quantity}x
                            </Typography>
                        </Box>
                        <Stack spacing={1} divider={<Divider />}>
                            <Typography variant="body1" fontSize={16} fontWeight="medium">
                                {userName}
                            </Typography>
                            <Typography variant="body2" fontSize={20} fontWeight="bold">
                                {formatIDR(totalPriceOrdered)}
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}

{/* <Box sx={{
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
            <Typography component="div" sx={{ fontSize: 20, fontWeight: 'bold' }}>{quantity}pcs</Typography>
        </Box>
    </CardContent>
</Box> */}

export default CardItemManagementOrder