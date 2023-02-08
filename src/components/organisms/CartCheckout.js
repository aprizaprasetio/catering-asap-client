import React from 'react'
import useCartStore from 'factory/store/useCartStore'
import { formatIDR } from 'commands/application/priceCommand'
import { Box, Button, Card, CardContent, CardActions, Divider, Typography, Stack }
    from '@mui/material'

const CartCheckout = () => {
    const cartTotal = useCartStore(state => state.checkedTotal)

    return (
        <Card sx={{
            padding: 0,
            boxShadow: 0,
        }}>
            <CardContent sx={{
                width: '100%',
                display: 'grid',
                gap: 3,
            }}>
                <Box>
                    <Typography variant="h3" sx={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        Informasi Rekening
                    </Typography>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1" sx={{
                            fontWeight: 'bold',
                        }}>
                            BCA
                        </Typography>
                        <Box>
                            <Typography variant="body1">
                                Apriza Prasetio
                            </Typography>
                            <Typography variant="caption" sx={{
                                fontWeight: 'bold',
                            }}>
                                1234567890123
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Divider />
                <Box>
                    <Typography variant="h3" sx={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        Alamat Tujuan
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ut ad distinctio autem consequuntur illum architecto nulla obcaecati repellendus ipsum!
                    </Typography>
                </Box>
                <Divider />
                <Box>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h3" sx={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>
                            Total Harga
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>
                            {formatIDR(cartTotal())}
                        </Typography>
                    </Stack>
                </Box>
            </CardContent>
            <CardActions>
                <Button variant="contained" fullWidth disableElevation sx={{
                    borderRadius: 6,
                }}>Beli</Button>
            </CardActions>
        </Card>
    )
}

export default CartCheckout